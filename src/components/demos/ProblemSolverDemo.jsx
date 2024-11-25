'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ProblemSolverDemo() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isComplete, setIsComplete] = useState(false);

    const problem = {
        title: "Birthday Party Planning",
        steps: [
            {
                title: "Understand the Problem",
                questions: [
                    "What is the goal?",
                    "What information do we need?",
                    "What are the constraints?"
                ],
                options: [
                    ["Have fun", "Plan a birthday party", "Make cake"],
                    ["Guest list, venue, date", "Only money", "Just food"],
                    ["Budget, time, space", "No limits", "Only food"]
                ],
                correct: [1, 0, 0]
            },
            {
                title: "Plan the Solution",
                questions: [
                    "What should we do first?",
                    "What comes next?",
                    "What's the final step?"
                ],
                options: [
                    ["Buy decorations", "Set date and budget", "Send invites"],
                    ["Choose venue", "Start party", "Buy food"],
                    ["Clean up", "Enjoy party", "Plan more"]
                ],
                correct: [1, 0, 1]
            },
            {
                title: "Execute the Plan",
                questions: [
                    "How do we start?",
                    "How do we track progress?",
                    "How do we handle problems?"
                ],
                options: [
                    ["Just start", "Follow checklist", "Ask friends"],
                    ["Memory", "Checklist", "No tracking"],
                    ["Give up", "Solve as they come", "Ignore them"]
                ],
                correct: [1, 1, 1]
            },
            {
                title: "Review and Improve",
                questions: [
                    "How do we know if successful?",
                    "What can we learn?",
                    "How to improve next time?"
                ],
                options: [
                    ["Just guess", "Ask guests feedback", "Don't check"],
                    ["Nothing", "What worked/didn't", "Forget it"],
                    ["No need", "Make notes for next time", "Same plan"]
                ],
                correct: [1, 1, 1]
            }
        ]
    };

    const handleAnswer = (questionIndex, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [`${currentStep}-${questionIndex}`]: optionIndex
        }));
    };

    const checkAnswers = () => {
        const currentQuestions = problem.steps[currentStep].questions;
        const allAnswered = currentQuestions.every((_, index) =>
            answers[`${currentStep}-${index}`] !== undefined
        );

        if (allAnswered) {
            const allCorrect = problem.steps[currentStep].correct.every((correctAnswer, index) =>
                answers[`${currentStep}-${index}`] === correctAnswer
            );

            if (allCorrect) {
                if (currentStep < problem.steps.length - 1) {
                    setCurrentStep(prev => prev + 1);
                } else {
                    setIsComplete(true);
                }
            } else {
                alert("Some answers are incorrect. Try again!");
            }
        } else {
            alert("Please answer all questions before proceeding.");
        }
    };

    if (isComplete) {
        return (
            <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">🎉 Congratulations!</h3>
                <p>You've mastered the problem-solving process!</p>
                <Button onClick={() => {
                    setCurrentStep(0);
                    setAnswers({});
                    setIsComplete(false);
                }}>Try Again</Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h3 className="text-xl font-bold">{problem.title}</h3>
                <p className="text-muted-foreground">Step {currentStep + 1}: {problem.steps[currentStep].title}</p>
            </div>

            <div className="space-y-4">
                {problem.steps[currentStep].questions.map((question, qIndex) => (
                    <div key={qIndex} className="space-y-2">
                        <p className="font-medium">{question}</p>
                        <div className="grid grid-cols-1 gap-2">
                            {problem.steps[currentStep].options[qIndex].map((option, oIndex) => (
                                <Button
                                    key={oIndex}
                                    variant={answers[`${currentStep}-${qIndex}`] === oIndex ? "default" : "outline"}
                                    onClick={() => handleAnswer(qIndex, oIndex)}
                                    className="justify-start"
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Button onClick={checkAnswers}>
                    {currentStep < problem.steps.length - 1 ? "Next Step" : "Complete"}
                </Button>
            </div>
        </div>
    );
} 