import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../services/chatService";
import { useToast } from "./useToast";

export function useChatLogic() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const toast = useToast();

  const mutation = useMutation({
    mutationFn: (message) => {
      const history = messages
        .filter((msg) => !msg.isLoading)
        .map((msg) => ({
          role: msg.role === "model" ? "model" : "user",
          parts: [{ text: msg.message }],
        }));

      return sendMessage(message, history);
    },
    onSuccess: (data) => {
      setMessages((prev) => {
        const filteredMessages = prev.filter((msg) => !msg.isLoading);
        return [
          ...filteredMessages,
          {
            role: "model",
            message: data?.data?.response || "Sem resposta do bot.",
            parts: [{ text: data?.data?.response || "Sem resposta do bot." }],
            timestamp: new Date(),
          },
        ];
      });
    },
    onError: () => {
      setMessages((prev) => {
        const filteredMessages = prev.filter((msg) => !msg.isLoading);
        return [
          ...filteredMessages,
          {
            role: "model",
            message: "Erro ao enviar mensagem.",
            parts: [{ text: "Erro ao enviar mensagem." }],
            timestamp: new Date(),
          },
        ];
      });
    },
  });

  const isLoading = mutation.isPending || mutation.isLoading;

  function handleSend(messageToSend = message) {
    const currentMessage = messageToSend.trim();

    if (currentMessage && !isLoading) {
      setMessage("");

      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          message: currentMessage,
          parts: [{ text: currentMessage }],
          timestamp: new Date(),
        },
        {
          role: "model",
          message: "loading",
          isLoading: true,
          parts: [{ text: "loading" }],
        },
      ]);

      mutation.mutate(currentMessage);
    }
  }

  function handleCopy(textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Mensagem copiada com sucesso");
      })
      .catch(() => {
        toast.error("Não foi possível copiar a mensagem");
      });
  }

  return {
    message,
    messages,
    isLoading,
    handleSend,
    handleCopy,
  };
}
