import { useState } from 'react';
import getChatGptResponse from './ChatGpt';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAsk = async () => {
    try {
      const answer = await getChatGptResponse(question);
      setResponse(answer);
    } catch (error) {
      console.error('Erro ao obter resposta:', error);
    }
  };

  return (
    <div className='root'>
    <img className='logo' src='/logo.png' alt="EngageGPT Logo"/>
      <h1 className='title'>Designers de plantão, criem um design bonito, dark mode pls</h1>
      <div className='container'>
        <input 
          className='inputGPT'
          type="text"
          placeholder="Digite sua pergunta aqui..."
          value={question}
          onChange={handleQuestionChange}
        />
        <button onClick={handleAsk} style={{ marginBottom: '20px' }}>Perguntar</button>
      </div>
      {response && response.data && response.data[0] && (
          <div style={{
            backgroundColor: '#0A3D62',
            borderRadius: '10px',
            padding: '15px',
            margin: '10px auto',
            maxWidth: '80%',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2>Resposta:</h2>
            <p>{response.data[0][""]}</p>
          </div>
      )}
    </div>
  );
}

export default App;
