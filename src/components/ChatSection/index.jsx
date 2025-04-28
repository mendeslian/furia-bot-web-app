import { useRef, useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { memo } from "react";

// Components
import Input from "../Input";
import Icon from "../icon";
import Loader from "../Loader";
import TextLoader from "../TextLoader";

// Hooks
import { useChatLogic } from "../../hooks/useChatLogic";

// Assets
import FuriaLogo from "../../assets/furia-esports-logo.svg";

const ChatHeader = memo(function ChatHeader() {
  return (
    <header className="w-full h-16 py-4 px-6 flex items-center gap-4 border-b border-neutral-800 bg-[#0b0b0b] shadow-2xl">
      <img
        src={FuriaLogo}
        alt="Logo ESPORTS Furia"
        draggable={false}
        className="w-10 h-10 select-none shadow-2xs"
      />
      <p className="text-xl font-bold text-white">Furia BOT</p>
      <span className="text-xs bg-green-500/40 text-green-400 px-2 rounded-full">
        Online
      </span>
    </header>
  );
});

const MessageCard = memo(function MessageCard({
  role,
  message,
  isLoading,
  onCopy,
}) {
  const messageClasses =
    role === "user"
      ? "w-fit max-w-[90%] ml-auto bg-neutral-800 py-3 px-4 rounded-tl-lg rounded-br-lg rounded-bl-lg shadow-2xl"
      : "w-fit max-w-[90%] bg-[#0b0b0b] py-3 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-2xl";

  const timestamp = message.timestamp || new Date();
  const formattedDate = timestamp.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={messageClasses}>
      {role === "model" && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold bg-gradient-to-br from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
            Furia BOT
          </span>
          {!isLoading && (
            <button
              title="Copiar"
              className="text-white hover:text-yellow-500 duration-200 cursor-pointer"
              onClick={() => onCopy(message.message)}
              aria-label="Copiar"
            >
              <Icon
                icon="Copy"
                size={16}
                color="currentColor"
                className="duration-200"
              />
            </button>
          )}
        </div>
      )}
      {isLoading ? (
        <div className="flex items-center justify-center py-2">
          <TextLoader color="#efb100" />
        </div>
      ) : (
        <div className="text-sm font-normal text-white">
          <ReactMarkdown>{message.message}</ReactMarkdown>
          <div className="text-xs text-white/50 mt-2 text-right">
            {formattedDate}
          </div>
        </div>
      )}
    </div>
  );
});

const EmptyChat = memo(function EmptyChat() {
  return (
    <div className="flex flex-col items-center justify-center py-2 m-auto">
      <p className="text-white/40 text-center text-sm">
        Para começar digite uma mensagem abaixo e aperte o botão para enviar
      </p>
    </div>
  );
});

const ChatInput = memo(function ChatInput({
  value,
  onChange,
  onSend,
  isDisabled,
  inputRef,
}) {
  return (
    <div className="w-full h-18 p-4 flex items-center justify-center gap-4">
      <Input
        name="message"
        value={value}
        onChange={onChange}
        placeholder="Digite sua mensagem aqui"
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
        disabled={isDisabled}
        ref={inputRef}
      />
      <button
        title={value === "" ? "Escreva uma mensagem" : "Enviar"}
        className="w-14 h-10 flex justify-center items-center bg-[#0b0b0b] duration-200 rounded cursor-pointer shadow-2xl hover:bg-neutral-800 disabled:cursor-default disabled:bg-neutral-600 disabled:opacity-50"
        onClick={onSend}
        disabled={isDisabled || !value.trim() || value === ""}
      >
        {isDisabled ? (
          <Loader />
        ) : (
          <Icon icon="Send" size={20} color="white" title="Enviar mensagem" />
        )}
      </button>
    </div>
  );
});

export default function Chat() {
  const { message, messages, isLoading, handleSend, handleCopy } =
    useChatLogic();

  const [localMessage, setLocalMessage] = useState("");
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const reversedMessages = useMemo(
    () => messages.slice().reverse(),
    [messages]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRenderComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLocalMessage(message);

    if (!isLoading && inputRef.current) {
      const scrollPos = window.scrollY;
      inputRef.current.focus();
      window.scrollTo(0, scrollPos);
    }
  }, [message, isLoading]);

  useEffect(() => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.parentElement;
      chatContainer.style.scrollBehavior = "smooth";
      chatContainer.scrollTop = 0;

      return () => {
        chatContainer.style.scrollBehavior = "auto";
      };
    }
  }, [messages]);

  const handleLocalInputChange = (e) => {
    setLocalMessage(e.target.value);
  };

  const handleSendAndFocus = () => {
    if (localMessage.trim()) {
      handleSend(localMessage);
    }
  };

  return (
    <section
      className="max-w-5xl w-full mx-auto min-h-screen flex flex-col items-start gap-6 px-5 py-20"
      id="chat"
    >
      <div className="w-full flex flex-col items-center gap-2 md:flex-row">
        <div className="hidden md:block">
          <Icon icon="Bot" size={32} color="#FFFFFF" />
        </div>
        <h2 className="text-white/90 text-2xl font-bold text-center md:text-left">
          Comece a conversar agora!
        </h2>
      </div>
      <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-1 border-neutral-800">
        <ChatHeader />
        <div className="bg-neutral-900 w-full h-120 px-4 pt-6 sm:px-8 flex flex-col-reverse gap-8 overflow-y-auto">
          <div ref={messagesEndRef} />
          {messages.length === 0 ? (
            <EmptyChat />
          ) : (
            reversedMessages.map((msg, idx) => (
              <MessageCard
                key={`${msg.role}-${msg.timestamp?.getTime() || idx}`}
                role={msg.role}
                message={msg}
                isLoading={msg.isLoading}
                onCopy={handleCopy}
              />
            ))
          )}
        </div>
        <ChatInput
          value={localMessage}
          onChange={handleLocalInputChange}
          onSend={handleSendAndFocus}
          isDisabled={isLoading}
          inputRef={inputRef}
        />
      </div>
    </section>
  );
}
