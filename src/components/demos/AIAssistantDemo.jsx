'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIAssistantDemo() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Predefined QA pairs
    const qaDatabase = {
        "What is artificial intelligence?":
            "Artificial Intelligence (AI) is the simulation of human intelligence by machines. It includes learning, reasoning, and self-correction capabilities.",

        "How does machine learning work?":
            "Machine learning is a subset of AI where systems learn from data. They identify patterns and make decisions with minimal human intervention, improving their accuracy over time.",

        "What are neural networks?":
            "Neural networks are computing systems inspired by biological neural networks. They consist of layers of interconnected nodes that process information, enabling deep learning.",

        "What is natural language processing?":
            "Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret, and generate human language. It powers chatbots, translation services, and more."
    };

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: input }]);

        // Get response based on input
        setTimeout(() => {
            const response = qaDatabase[input] || "I'm not sure about that specific question. Try one of the suggested questions above!";
            setMessages(prev => [...prev, { type: 'ai', text: response }]);
        }, 1000);

        setInput('');
    };

    const handleQuestionClick = (question) => {
        setInput(question);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 bg-muted rounded-lg mb-4">
                <h3 className="text-sm font-medium mb-2">Suggested Questions:</h3>
                <div className="flex flex-wrap gap-2">
                    {Object.keys(qaDatabase).map((question, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuestionClick(question)}
                            className="text-sm text-primary hover:underline cursor-pointer"
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-grow overflow-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 p-4">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something about AI..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend}>Send</Button>
            </div>
        </div>
    );
} 