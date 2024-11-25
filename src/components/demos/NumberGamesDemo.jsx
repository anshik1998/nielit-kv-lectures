'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

export function NumberGamesDemo() {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentProblem, setCurrentProblem] = useState(0);
    const [score, setScore] = useState(0);

    const problems = [
        {
            title: "Addition",
            question: "What is 15 + 7?",
            instruction: "Type the expression: 15 + 7",
            expectedInput: "15 + 7",
            answer: 22,
            hint: "Use the + symbol for addition"
        },
        {
            title: "Multiplication",
            question: "What is 6 × 4?",
            instruction: "Type the expression: 6 * 4",
            expectedInput: "6 * 4",
            answer: 24,
            hint: "Use the * symbol for multiplication"
        },
        {
            title: "Division",
            question: "What is 20 ÷ 5?",
            instruction: "Type the expression: 20 / 5",
            expectedInput: "20 / 5",
            answer: 4,
            hint: "Use the / symbol for division"
        },
        {
            title: "Mixed Operations",
            question: "What is (10 + 2) × 3?",
            instruction: "Type the expression: (10 + 2) * 3",
            expectedInput: "(10 + 2) * 3",
            answer: 36,
            hint: "Use parentheses () to group operations"
        }
    ];

    const handleRun = () => {
        const problem = problems[currentProblem];
        const userAnswer = eval(input.trim()); // Note: eval is used for demo purposes

        if (input.trim() === problem.expectedInput && userAnswer === problem.answer) {
            setScore(score + 1);
            setFeedback({
                type: 'success',
                message: `Correct! ${input} = ${userAnswer}`,
                result: userAnswer
            });

            setTimeout(() => {
                if (currentProblem < problems.length - 1) {
                    setCurrentProblem(prev => prev + 1);
                    setInput('');
                    setFeedback('');
                }
            }, 1500);
        } else {
            setFeedback({
                type: 'error',
                message: "Try again! " + problem.hint,
                result: userAnswer
            });
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Python Number Games</h3>
                <div className="text-sm text-muted-foreground">
                    Score: {score}/{problems.length}
                </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">{problems[currentProblem].title}</h4>
                <p className="text-lg mb-2">{problems[currentProblem].question}</p>
                <p className="text-sm text-muted-foreground">
                    {problems[currentProblem].instruction}
                </p>
            </div>

            <div className="flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your expression..."
                    className="font-mono"
                    onKeyPress={(e) => e.key === 'Enter' && handleRun()}
                />
                <Button onClick={handleRun}>Calculate</Button>
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
                        {feedback.result !== undefined && (
                            <div className="text-sm mt-1">
                                Your answer: {feedback.result}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="text-sm text-muted-foreground">
                Problem {currentProblem + 1} of {problems.length}
            </div>
        </div>
    );
} 