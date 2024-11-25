'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";
import { Textarea } from '../ui/textarea';

export function BuildABotDemo() {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [botResponses, setBotResponses] = useState([]);
    const [botName, setBotName] = useState('');

    const steps = [
        {
            title: "Name Your Bot",
            instruction: "First, let's name your bot using a variable",
            example: "bot_name = 'Buddy'",
            validator: (input) => {
                try {
                    return /^bot_name\s*=\s*['"][^'"]+['"]$/.test(input);
                } catch {
                    return false;
                }
            },
            success: "Great name choice! Your bot is coming to life!"
        },
        {
            title: "Greeting Function",
            instruction: "Create a function to greet users",
            example: "def greet():\n    print('Hello! I am ' + bot_name)",
            expectedOutput: "Hello! I am {bot_name}",
            validator: (input) => {
                return input.includes('def greet') &&
                    input.includes('print') &&
                    input.includes('Hello') &&
                    input.includes('bot_name');
            },
            success: "Perfect! Your bot can now greet people!"
        },
        {
            title: "Ask Questions",
            instruction: "Make your bot ask for the user's name",
            example: "name = input('What is your name? ')",
            validator: (input) => {
                return input.includes('input') &&
                    input.includes('name') &&
                    input.includes('?');
            },
            success: "Excellent! Your bot is getting more interactive!"
        },
        {
            title: "Respond to Input",
            instruction: "Make your bot respond using the user's name",
            example: "print('Nice to meet you, ' + name + '!')",
            validator: (input) => {
                return input.includes('print') &&
                    input.includes('name') &&
                    input.includes('Nice to meet you');
            },
            success: "Amazing! Your bot is now fully interactive!"
        }
    ];

    const handleRun = () => {
        const step = steps[currentStep];

        if (step.validator(input.trim())) {
            // Extract bot name from first step
            if (currentStep === 0) {
                const nameMatch = input.match(/['"]([^'"]+)['"]/);
                if (nameMatch) {
                    setBotName(nameMatch[1]);
                }
            }

            // Add bot's response to chat
            const response = {
                type: 'success',
                code: input.trim(),
                output: step.expectedOutput ?
                    step.expectedOutput.replace('{bot_name}', botName) :
                    "Command executed successfully!"
            };
            setBotResponses([...botResponses, response]);

            setFeedback({
                type: 'success',
                message: step.success
            });

            setTimeout(() => {
                if (currentStep < steps.length - 1) {
                    setCurrentStep(prev => prev + 1);
                    setInput('');
                    setFeedback('');
                }
            }, 1500);
        } else {
            setFeedback({
                type: 'error',
                message: "Not quite right. Check the example!"
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                    Step {currentStep + 1}: {steps[currentStep].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                    {steps[currentStep].instruction}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                    Example: {steps[currentStep].example}
                </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg max-h-48 overflow-y-auto">
                {botResponses.map((response, index) => (
                    <div key={index} className="mb-3">
                        <div className="font-mono text-sm text-muted-foreground">
                            &gt; {response.code}
                        </div>
                        <div className="ml-4 mt-1 text-primary">
                            {response.output}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <Textarea
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

            <div className="text-sm text-muted-foreground">
                Progress: {currentStep + 1} of {steps.length}
            </div>
        </div>
    );
} 