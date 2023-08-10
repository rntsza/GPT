
import axios from 'axios';
const API_URL = 'http://localhost:3000/api/question';

const getChatGptResponse = async (question) => {

  try {
    var sentQuestion = [
      {
        "role": "user",
        "content": question
      }
    ]

    const response = await axios.post(API_URL, {
      prompt: sentQuestion,
      max_tokens: 150,
      temperature: 0.7,
      stop: '\n',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log("chegou no front: ", response)   
    return response;
  } catch (error) {
    console.error('Erro ao obter resposta do ChatGPT:', error);
    return 'Desculpe, algo deu errado ao obter a resposta.';
  }
};

export default getChatGptResponse;
