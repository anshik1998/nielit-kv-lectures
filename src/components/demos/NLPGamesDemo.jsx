'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NLPGamesDemo() {
    const [gameMode, setGameMode] = useState('translate');
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const games = {
        translate: {
            title: "Language Translator",
            description: "Try translating simple phrases",
            examples: [
                { input: "hello", output: "hola (Spanish)" },
                { input: "thank you", output: "gracias (Spanish)" },
                { input: "good morning", output: "buenos días (Spanish)" }
            ]
        },
        complete: {
            title: "Sentence Completer",
            description: "Let AI complete your sentence",
            examples: [
                { input: "The weather is", output: "...beautiful today!" },
                { input: "I love to", output: "...play with my friends" },
                { input: "My favorite food is", output: "...pizza with extra cheese" }
            ]
        },
        chat: {
            title: "Simple Chatbot",
            description: "Have a conversation with AI",
            examples: [
                { input: "How are you?", output: "I'm doing great! How about you?" },
                { input: "What's your favorite color?", output: "I like all colors, especially blue!" },
                { input: "Tell me a joke", output: "Why don't robots have friends? Because they're too MECHANICAL! 🤖" }
            ]
        }
    };

    const handleSubmit = () => {
        if (!input.trim()) return;

        const currentGame = games[gameMode];
        const example = currentGame.examples[Math.floor(Math.random() * currentGame.examples.length)];

        setResult({
            input: input,
            output: example.output
        });

        setInput('');
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                {Object.entries(games).map(([key, game]) => (
                    <Button
                        key={key}
                        variant={gameMode === key ? "default" : "outline"}
                        onClick={() => {
                            setGameMode(key);
                            setResult(null);
                        }}
                    >
                        {game.title}
                    </Button>
                ))}
            </div>

            <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">{games[gameMode].title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    {games[gameMode].description}
                </p>

                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    <Button onClick={handleSubmit}>Try It</Button>
                </div>

                {result && (
                    <div className="mt-4 p-4 bg-background rounded-lg">
                        <div className="text-sm text-muted-foreground">You said:</div>
                        <div className="mb-2">{result.input}</div>
                        <div className="text-sm text-muted-foreground">AI response:</div>
                        <div className="font-medium">{result.output}</div>
                    </div>
                )}
            </div>
        </div>
    );
} 