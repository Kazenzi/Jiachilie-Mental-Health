// Letschat.js
import React, { useState } from 'react';
import './Letschat.css';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

//Letschat
function Letschat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();

    const userMessage = { sender: "user", text: question };
    setMessages([...messages, userMessage]);
    setQuestion("");

    const loadingMessage = {
      sender: "ai",
      text: "Loading your answer... \n It might take up to 10 seconds",
    };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=key",
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      let aiText = response.data.candidates[0].content.parts[0].text;

      // Refine the response to make it a short, clear paragraph with a therapist-like tone
      const sentences = aiText.split(". ").slice(0, 3).join(". ") + "."; // Take up to the first 3 sentences
      aiText = `I understand how you're feeling. ${sentences}`;

      const aiMessage = {
        sender: "ai",
        text: aiText,
      };
      setMessages((prevMessages) =>
        prevMessages.slice(0, -1).concat(aiMessage)
      );
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        sender: "ai",
        text: "Sorry, something went wrong. Please try again!",
      };
      setMessages((prevMessages) =>
        prevMessages.slice(0, -1).concat(errorMessage)
      );
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gray-100  flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank">
          <h1 className="text-4xl font-bold text-center mb-6">Jiachilie chatbot</h1>
        </a>
        <div className="flex-grow mb-4 overflow-auto bg-gray-50 p-4 rounded-md shadow-inner">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg mb-2 ${
                message.sender === "user"
                  ? "bg-blue-100 self-end"
                  : "bg-gray-200 self-start"
              }`}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          ))}
        </div>
        <form onSubmit={generateAnswer} className="flex">
          <textarea
            required
            className="border border-gray-300 rounded w-full p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            rows="2"
          ></textarea>
          <button
            type="submit"
            className={`py-3 px-4 rounded-md text-white transition-all duration-300 ${
              generatingAnswer
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={generatingAnswer}
          >
            {generatingAnswer ? "Generating..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Letschat;
