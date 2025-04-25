import axios from "axios";

const url = import.meta.env.VITE_API_URL;

async function sendMessage(message, history) {
  try {
    const { data } = await axios.post(
      `${url}/chat/send`,
      { message, history },
      { timeout: 30000 }
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { sendMessage };
