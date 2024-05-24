// Letschat.js
import React, { useState } from 'react';
import './Letschat.css';

function Letschat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
      setInput('');
      simulateBotResponse(input);
    }
  };

  const simulateBotResponse = (message) => {
    // Simulate a simple bot response
    const botResponses = {
      hello: 'Hello! How can I assist you with your mental health today?',
      help: 'Sure, I can help you. Please tell me more about how you are feeling.',
      default: 'I am here to help. Can you please elaborate?'
    };
    
    const botMessage = { sender: 'bot', text: botResponses[message.toLowerCase()] || botResponses.default };
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="letschat-container">
      <h1>Jiachilie Chatbot</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Letschat;
