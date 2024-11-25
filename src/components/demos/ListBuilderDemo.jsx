'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";
import { pythonSimulator } from "@/utils/pythonSimulator";

export function ListBuilderDemo() {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentChallenge, setCurrentChallenge] = useState(0);
    const [myList, setMyList] = useState([]);

    const challenges = [
        {
            title: "Create a List",
            instruction: "Create a list of three numbers: [1, 2, 3]",
            example: "[1, 2, 3]",
            validator: (input) => {
                try {
                    const result = eval(input);
                    return Array.isArray(result) &&
                        result.length === 3 &&
                        result.every(n => typeof n === 'number');
                } catch {
                    return false;
                }
            },
            success: "Great! You created your first list!"
        },
        {
            title: "Mix Different Types",
            instruction: "Create a list with a number, string, and boolean: [42, 'hello', True]",
            example: "[42, 'hello', True]",
            validator: (input) => {
                try {
                    const pythonized = input.replace('True', 'true');
                    const result = eval(pythonized);
                    return Array.isArray(result) &&
                        result.length === 3 &&
                        typeof result[0] === 'number' &&
                        typeof result[1] === 'string' &&
                        typeof result[2] === 'boolean';
                } catch {
                    return false;
                }
            },
            success: "Perfect! Lists can store different types of data!"
        },
        {
            title: "List Operations",
            instruction: "Add numbers to make: [1, 1, 2, 3, 5, 8]",
            example: "[1, 1] + [2, 3, 5, 8]",
            validator: (input) => {
                try {
                    const lists = input.match(/\[([\d,\s]+)\]/g);
                    if (!lists || lists.length !== 2) return false;

                    const combined = lists.map(list =>
                        list.replace(/[\[\]\s]/g, '').split(',').map(Number)
                    ).flat();

                    return combined.join(',') === '1,1,2,3,5,8';
                } catch {
                    return false;
                }
            },
            success: "Excellent! You combined lists!"
        },
        {
            title: "List Multiplication",
            instruction: "Create [1, 2, 3] repeated twice",
            example: "[1, 2, 3] * 2",
            validator: (input) => {
                try {
                    const result = eval(input);
                    return Array.isArray(result) &&
                        result.join(',') === '1,2,3,1,2,3';
                } catch {
                    return false;
                }
            },
            success: "Amazing! You repeated a list!"
        }
    ];

    const handleRun = () => {
        const challenge = challenges[currentChallenge];

        if (challenge.validator(input.trim())) {
            let result;
            try {
                const pythonized = input.trim().replace('True', 'true');
                result = eval(pythonized);
            } catch {
                result = input.trim();
            }

            setMyList(result);
            setFeedback({
                type: 'success',
                message: challenge.success,
                result: JSON.stringify(result)
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
                message: "Not quite right. Check the example!",
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

            <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Current List:</h4>
                <div className="font-mono text-sm">
                    {JSON.stringify(myList)}
                </div>
            </div>

            <div className="text-sm text-muted-foreground">
                Progress: {currentChallenge + 1} of {challenges.length}
            </div>
        </div>
    );
} 