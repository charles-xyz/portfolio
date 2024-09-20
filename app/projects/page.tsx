/* eslint-disable */
import React from 'react';
import { Book, MessageSquare } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Talk to Marcus Aurelius</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Book className="mr-2" />
          About This Chatbot
        </h2>
        <p className="text-gray-700 mb-4">
          Engage in enlightening conversations with Marcus Aurelius, powered by RAG (Retrieval-Augmented Generation) and augemented by additional processing to increase vector similarity. This AI has access to the complete works of Marcus Aurelius' Meditations, allowing it to provide insights and wisdom from one of history's greatest Stoic philosophers.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MessageSquare className="mr-2" />
          Start Your Conversation
        </h2>
        <iframe
          src="https://chatbot-s3d02bku1b.streamlit.app/?embed=true"
          className="w-full h-[450px] border-0 rounded"
          title="Marcus Aurelius Chatbot"
        ></iframe>
      </div>
    </div>
  );
}