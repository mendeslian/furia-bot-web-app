import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Sends a message to the chat API with conversation history
 * @param {string} message - User message to send
 * @param {Array} history - Previous conversation history
 * @returns {Promise<Object>} Response data from API
 */
async function sendMessage(message, history) {
  try {
    // Add timeout to prevent hanging requests
    const { data } = await axios.post(`${API_URL}/chat/send`, {
      message,
      history,
    });
    return data;
  } catch (error) {
    console.error("Chat API Error:", error.message);
    throw error;
  }
}

export { sendMessage };
