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
      // Add user message to state
      dispatch(addUserMessage(message));

      // Add loading message
      dispatch(addLoadingMessage());

      // Clear input field
      dispatch(clearCurrentMessage());

      // Get message history
      const { chat } = getState();
      const history = chat.messages
        .filter((msg) => !msg.isLoading)
        .map((msg) => ({
          role: msg.role === "model" ? "model" : "user",
          parts: [{ text: msg.message }],
        }));

      // Send message to API
      const response = await sendMessage(message, history);

      // Add bot response to state
      dispatch(
        addBotMessage(response?.data?.response || "Sem resposta do bot.")
      );

      return response.data;
    } catch (error) {
      // Add error message to state
      dispatch(addErrorMessage());
      throw error;
    }
  }
);
