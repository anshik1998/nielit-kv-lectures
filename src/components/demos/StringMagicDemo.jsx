'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";
import { pythonSimulator } from "@/utils/pythonSimulator";

export function StringMagicDemo() {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentChallenge, setCurrentChallenge] = useState(0);

    const challenges = [
        {
            title: "String Concatenation",
            instruction: "Join 'Hello' and 'World' with a space between them",
            example: "'Hello' + ' ' + 'World'",
            validator: (input) => {
                try {
                    return pythonSimulator.evaluate(input) === 'Hello World';
                } catch {
                    return false;
                }
            },
            success: "Perfect! You joined strings together!"
        },
        {
            title: "String Repetition",
            instruction: "Make the word 'Hip ' appear three times",
            example: "'Hip ' * 3",
            validator: (input) => {
                try {
                    return pythonSimulator.evaluate(input) === 'Hip Hip Hip ';
                } catch {
                    return false;
                }
            },
            success: "Hooray! You repeated a string!"
        },
        {
            title: "String Methods",
            instruction: "Convert 'hello world' to uppercase using .upper()",
            example: "'hello world'.upper()",
            validator: (input) => {
                try {
                    const result = pythonSimulator.evaluate(input);
                    return result === 'HELLO WORLD';
                } catch {
                    return false;
                }
            },
            success: "Great! You used a string method!"
        }
    ];

    const handleRun = () => {
        const challenge = challenges[currentChallenge];

        if (challenge.validator(input.trim())) {
            setFeedback({
                type: 'success',
                message: challenge.success,
                result: pythonSimulator.evaluate(input)
            });

            setTimeout(() => {
                if (currentChallenge < challenges.length - 1) {
                    setCurrentChallenge(prev => prev + 1);
                    setInput('');
                    setFeedback('');
                }
            }, 1500);
        } else {
            setFeedback({
                type: 'error',
                message: "Not quite right. Look at the example!",
                result: "Try again"
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                    Challenge {currentChallenge + 1}: {challenges[currentChallenge].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {challenges[currentChallenge].instruction}
                </p>
                <p className="text-xs text-muted-foreground">
                    Example: {challenges[currentChallenge].example}
                </p>
            </div>

            <div className="flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your Python code..."
                    className="font-mono"
                    onKeyPress={(e) => e.key === 'Enter' && handleRun()}
                />
                <Button onClick={handleRun}>Run</Button>
            </div>

            {feedback && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${feedback.type === 'success'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-destructive/10 text-destructive'
                    }`}>
                    {feedback.type === 'success'
                        ? <CheckCircle className="h-4 w-4" />
                        : <XCircle className="h-4 w-4" />}
                    <div>
                        <div>{feedback.message}</div>
                        <div className="text-sm mt-1">
                            Result: {feedback.result}
                        </div>
                    </div>
                </div>
            )}

            <div className="text-sm text-muted-foreground">
                Progress: {currentChallenge + 1} of {challenges.length}
            </div>
        </div>
    );
} 