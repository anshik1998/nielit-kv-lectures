'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";
import { pythonSimulator } from "@/utils/pythonSimulator";
import { Textarea } from '../ui/textarea';

export function ChatWithPythonDemo() {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [chatHistory, setChatHistory] = useState([]);

    const steps = [
        {
            title: "Print Statement",
            instruction: "Make Python say 'Hello!' using print()",
            expectedInput: "print('Hello!')",
            output: "Hello!",
            hint: "Use print() with quotes around your message"
        },
        {
            title: "User Input",
            instruction: "Ask for user's name using input()",
            expectedInput: "input('What is your name?')",
            output: "What is your name?",
            hint: "Use input() with a question in quotes"
        },
        {
            title: "Combine Input and Print",
            instruction: "Type these two lines:\nname = input('Your name: ')\nprint('Hello, ' + name + '!')",
            expectedInputs: [
                "name = input('Your name: ')",
                "print('Hello, ' + name + '!')"
            ],
            output: "Hello, friend!",
            hint: "First store input in 'name', then use print with it",
            multiline: true
        }
    ];

    const handleRun = () => {
        const step = steps[currentStep];
        let isCorrect = false;

        if (step.multiline) {
            const lines = input.split('\n').map(line => line.trim());
            isCorrect = step.expectedInputs.every(expected =>
                lines.includes(expected)
            );
        } else if (Array.isArray(step.expectedInputs)) {
            isCorrect = step.expectedInputs.includes(input.trim());
        } else {
            isCorrect = input.trim() === step.expectedInput;
        }

        if (isCorrect) {
            const newMessage = {
                type: 'success',
                code: input.trim(),
                output: step.output
            };
            setChatHistory([...chatHistory, newMessage]);
            setFeedback({
                type: 'success',
                message: "Perfect! That's exactly right!"
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
                message: step.hint
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                    Step {currentStep + 1}: {steps[currentStep].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {steps[currentStep].instruction}
                </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg max-h-48 overflow-y-auto">
                {chatHistory.map((msg, index) => (
                    <div key={index} className="mb-3">
                        <div className="font-mono text-sm text-muted-foreground">
                            &gt; {msg.code}
                        </div>
                        <div className="ml-4 mt-1">{msg.output}</div>
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