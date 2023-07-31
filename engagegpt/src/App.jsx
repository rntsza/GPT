// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// src/App.js
import React, { useState } from 'react';
import getChatGptResponse from './ChatGpt';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAsk = async () => {
    const answer = await getChatGptResponse(question);
    setResponse(answer);
  };

  return (
    <div>
      <h1>EngageGPT</h1>
      <input
        type="text"
        placeholder="Digite sua pergunta aqui..."
        value={question}
        onChange={handleQuestionChange}
      />
      <button onClick={handleAsk}>Perguntar</button>
      {response && (
        <div>
          <h2>Resposta:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
