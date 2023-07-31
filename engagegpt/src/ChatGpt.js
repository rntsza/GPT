// src/ChatGpt.js
import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const getChatGptResponse = async (question) => {
  try {
    const response = await axios.post(API_URL, {
      prompt: question,
      max_tokens: 150,
      temperature: 0.7,
      stop: '\n',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY', // Substitua pelo seu token de API do OpenAI
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Erro ao obter resposta do ChatGPT:', error);
    return 'Desculpe, algo deu errado ao obter a resposta.';
  }
};

export default getChatGptResponse;
