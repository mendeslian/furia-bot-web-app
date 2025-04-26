import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isLoading: false,
  currentMessage: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentMessage: (state, action) => {
      state.currentMessage = action.payload;
    },
    clearCurrentMessage: (state) => {
      state.currentMessage = "";
    },
    addUserMessage: (state, action) => {
      state.messages.push({
        role: "user",
        message: action.payload,
        parts: [{ text: action.payload }],
      });
    },
    addLoadingMessage: (state) => {
      state.messages.push({
        role: "model",
        message: "loading",
        isLoading: true,
        parts: [{ text: "loading" }],
      });
      state.isLoading = true;
    },
    addBotMessage: (state, action) => {
      state.messages = state.messages.filter((msg) => !msg.isLoading);

      state.messages.push({
        role: "model",
        message: action.payload,
        parts: [{ text: action.payload }],
      });
      state.isLoading = false;
    },
    addErrorMessage: (state) => {
      state.messages = state.messages.filter((msg) => !msg.isLoading);

      state.messages.push({
        role: "model",
        message: "Erro ao enviar mensagem.",
        parts: [{ text: "Erro ao enviar mensagem." }],
      });
      state.isLoading = false;
    },
  },
});

export const {
  setCurrentMessage,
  clearCurrentMessage,
  addUserMessage,
  addLoadingMessage,
  addBotMessage,
  addErrorMessage,
} = chatSlice.actions;

export const selectMessages = (state) => state.chat.messages;
export const selectIsLoading = (state) => state.chat.isLoading;
export const selectCurrentMessage = (state) => state.chat.currentMessage;

export default chatSlice.reducer;
