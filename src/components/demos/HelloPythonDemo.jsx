'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pythonSimulator } from "@/utils/pythonSimulator";
import { Textarea } from '../ui/textarea';

export function HelloPythonDemo() {
    const [output, setOutput] = useState('');
    const [input, setInput] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const lessons = [
        {
            title: "Print Hello World",
            instruction: "Type: print('Hello World')",
            expectedInput: "print('Hello World')",
            success: "Great! You just made Python speak!",
            hint: "Make sure to use single quotes around 'Hello World'"
        },
        {
            title: "Use a Variable",
            instruction: "Type these two lines:\nname = 'Your Name'\nprint('Hello ' + name)",
            expectedInputs: ["name = 'Your Name'", "print('Hello ' + name)"],
            success: "Awesome! You used a variable to store and print text!",
            hint: "Remember to use quotes for text and + to join strings",
            multiline: true
        },
        {
            title: "Simple Math",
            instruction: "Type: print(5 + 3)",
            expectedInput: "print(5 + 3)",
            success: "You did it! Python can be your calculator too!",
            hint: "Just type the numbers and math operator"
        }
    ];

    const handleRun = () => {
        const current = lessons[currentStep];

        if (current.multiline) {
            const lines = input.split('\n').map(line => line.trim());
            const isCorrect = current.expectedInputs.every(expected =>
                lines.includes(expected)
            );

            if (isCorrect) {
                setOutput("Hello Your Name");
                setTimeout(() => {
                    if (currentStep < lessons.length - 1) {
                        setCurrentStep(prev => prev + 1);
                        setInput('');
                        setOutput('');
                    }
                }, 1500);
            } else {
                setOutput("Not quite right. Try again!");
            }
        } else {
            if (input.trim() === current.expectedInput) {
                let result = '';
                switch (currentStep) {
                    case 0:
                        result = "Hello World";
                        break;
                    case 2:
                        result = "8";
                        break;
                    default:
                        result = "Success!";
                }
                setOutput(result);
                setTimeout(() => {
                    if (currentStep < lessons.length - 1) {
                        setCurrentStep(prev => prev + 1);
                        setInput('');
                        setOutput('');
                    }
                }, 1500);
            } else {
                setOutput("Not quite right. Try again!");
            }
        }
    };

    const currentLesson = lessons[currentStep];

    return (
        <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold mb-2">Step {currentStep + 1}: {currentLesson.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {currentLesson.instruction}
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex gap-2">
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your Python code here..."
                        className="font-mono"
                        onKeyPress={(e) => e.key === 'Enter' && handleRun()}
                    />
                    <Button onClick={handleRun}>Run</Button>
                </div>

                {output && (
                    <div className={`p-4 rounded-lg ${output === "Not quite right. Try again!"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-primary/10 text-primary"
                        }`}>
                        <div className="font-mono mb-2">Output:</div>
                        <div>{output}</div>
                        {output === "Not quite right. Try again!" && (
                            <div className="text-sm mt-2">Hint: {currentLesson.hint}</div>
                        )}
                    </div>
                )}
            </div>

            <div className="text-sm text-muted-foreground">
                Progress: {currentStep + 1} of {lessons.length} lessons
            </div>
        </div>
    );
} 