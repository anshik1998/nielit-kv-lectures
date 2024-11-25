'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

export function VariableExplorerDemo() {
    const [variables, setVariables] = useState(new Map());
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentChallenge, setCurrentChallenge] = useState(0);

    const challenges = [
        {
            title: "Store Your Age",
            instruction: "Create a variable 'age' with your age (e.g., age = 13)",
            validator: (input) => {
                return /^age\s*=\s*\d+$/.test(input);
            },
            success: "Great! You stored a number in a variable!"
        },
        {
            title: "Store Your Name",
            instruction: "Create a variable 'name' with your name (e.g., name = 'Alex')",
            validator: (input) => {
                return /^name\s*=\s*['"][^'"]+['"]$/.test(input);
            },
            success: "Perfect! You stored text in a variable!"
        },
        {
            title: "Create a List",
            instruction: "Create a variable 'colors' with a list of colors (e.g., colors = ['red', 'blue'])",
            validator: (input) => {
                return /^colors\s*=\s*\[[^\]]*\]$/.test(input);
            },
            success: "Awesome! You created a list variable!"
        }
    ];

    const handleRun = () => {
        const challenge = challenges[currentChallenge];

        if (challenge.validator(input.trim())) {
            // Extract variable name and value
            const [name, value] = input.split('=').map(s => s.trim());

            // Store in variables Map
            setVariables(new Map(variables.set(name, eval(value))));

            setFeedback({
                type: 'success',
                message: challenge.success
            });

            // Move to next challenge after delay
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
                message: "Not quite right. Check the example and try again!"
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                    Challenge {currentChallenge + 1}: {challenges[currentChallenge].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {challenges[currentChallenge].instruction}
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
                    {feedback.message}
                </div>
            )}

            <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Your Variables:</h4>
                <div className="space-y-2">
                    {Array.from(variables.entries()).map(([name, value]) => (
                        <div key={name} className="flex gap-2 text-sm">
                            <span className="font-mono">{name}</span>
                            <span>=</span>
                            <span className="font-mono">{JSON.stringify(value)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 