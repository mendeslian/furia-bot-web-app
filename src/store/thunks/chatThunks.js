import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessage } from "../../services/chatService";
import {
  addUserMessage,
  addLoadingMessage,
  addBotMessage,
  addErrorMessage,
  clearCurrentMessage,
} from "../slices/chatSlice";

export const sendMessageThunk = createAsyncThunk(
  "chat/sendMessage",
  async (message, { dispatch, getState }) => {
    try {
      dispatch(addUserMessage(message));

      dispatch(addLoadingMessage());

      dispatch(clearCurrentMessage());

      const { chat } = getState();
      const history = chat.messages
        .filter((msg) => !msg.isLoading)
        .map((msg) => ({
          role: msg.role === "model" ? "model" : "user",
          parts: [{ text: msg.message }],
        }));

      const response = await sendMessage(message, history);

      dispatch(
        addBotMessage(response?.data?.response || "Sem resposta do bot.")
      );

      return response.data;
    } catch (error) {
      dispatch(addErrorMessage());
      throw error;
    }
  }
);
