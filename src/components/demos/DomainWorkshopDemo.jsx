'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function DomainWorkshopDemo() {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [progress, setProgress] = useState({});
    const [taskInput, setTaskInput] = useState('');
    const [taskResult, setTaskResult] = useState(null);

    const domains = [
        {
            id: 'vision',
            title: "Computer Vision",
            description: "See how AI recognizes images",
            tasks: [
                {
                    title: "Object Recognition",
                    description: "What object is this? 🐱",
                    type: "choice",
                    options: ["Cat", "Dog", "Bird", "Fish"],
                    correct: "Cat"
                },
                {
                    title: "Face Detection",
                    description: "How many faces are in this emoji group? 👨‍👩‍👧‍👦",
                    type: "input",
                    correct: "4"
                },
                {
                    title: "Pattern Recognition",
                    description: "Complete the pattern: 🔵 🔴 🔵 🔴 ❓",
                    type: "choice",
                    options: ["🔵", "🔴"],
                    correct: "🔵"
                }
            ]
        },
        {
            id: 'language',
            title: "Natural Language",
            description: "Explore language understanding",
            tasks: [
                {
                    title: "Translation",
                    description: "What's 'Hello' in Spanish?",
                    type: "input",
                    correct: "hola"
                },
                {
                    title: "Sentiment Analysis",
                    description: "Is this sentence positive or negative: 'I love sunny days!'",
                    type: "choice",
                    options: ["Positive", "Negative"],
                    correct: "Positive"
                },
                {
                    title: "Text Completion",
                    description: "Complete: The sky is ___",
                    type: "choice",
                    options: ["blue", "green", "purple"],
                    correct: "blue"
                }
            ]
        },
        {
            id: 'neural',
            title: "Neural Networks",
            description: "Learn how AI thinks",
            tasks: [
                {
                    title: "Pattern Prediction",
                    description: "If 2→4, 4→8, 6→12, then 8→?",
                    type: "input",
                    correct: "16"
                },
                {
                    title: "Classification",
                    description: "Is this a fruit: 🍎?",
                    type: "choice",
                    options: ["Yes", "No"],
                    correct: "Yes"
                },
                {
                    title: "Learning Rate",
                    description: "After 3 wrong attempts, AI corrects itself. This is called:",
                    type: "choice",
                    options: ["Learning", "Guessing", "Random"],
                    correct: "Learning"
                }
            ]
        }
    ];

    const handleTaskAttempt = (task, answer) => {
        const isCorrect = answer.toLowerCase() === task.correct.toLowerCase();
        setTaskResult({
            isCorrect,
            message: isCorrect
                ? "Correct! Well done! 🎉"
                : "Not quite right. Try again! 💡"
        });

        if (isCorrect) {
            setProgress(prev => ({
                ...prev,
                [selectedDomain.id]: {
                    ...prev[selectedDomain.id],
                    [task.title]: true
                }
            }));
            setTaskInput('');
            setTimeout(() => setTaskResult(null), 2000);
        }
    };

    const getDomainProgress = (domainId) => {
        const domainTasks = progress[domainId] || {};
        return Object.values(domainTasks).filter(Boolean).length;
    };

    const renderTask = (task) => {
        const isCompleted = progress[selectedDomain.id]?.[task.title];

        return (
            <div className={`p-4 rounded-lg ${isCompleted ? 'bg-primary/10' : 'bg-muted'}`}>
                <h4 className="font-bold mb-2">{task.title}</h4>
                <p className="mb-4">{task.description}</p>

                {!isCompleted && (
                    <div className="space-y-2">
                        {task.type === 'choice' ? (
                            <div className="flex gap-2">
                                {task.options.map((option) => (
                                    <Button
                                        key={option}
                                        variant="outline"
                                        onClick={() => handleTaskAttempt(task, option)}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <Input
                                    value={taskInput}
                                    onChange={(e) => setTaskInput(e.target.value)}
                                    placeholder="Type your answer..."
                                    className="max-w-[200px]"
                                />
                                <Button
                                    onClick={() => handleTaskAttempt(task, taskInput)}
                                >
                                    Submit
                                </Button>
                            </div>
                        )}
                    </div>
                )}

                {isCompleted && (
                    <div className="text-primary font-medium">
                        ✓ Completed
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {!selectedDomain ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {domains.map(domain => (
                        <Card
                            key={domain.id}
                            className="p-4 cursor-pointer hover:bg-muted transition-colors"
                            onClick={() => setSelectedDomain(domain)}
                        >
                            <h3 className="font-bold mb-2">{domain.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{domain.description}</p>
                            <div className="text-sm">
                                Progress: {getDomainProgress(domain.id)}/{domain.tasks.length}
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setSelectedDomain(null);
                                setTaskResult(null);
                                setTaskInput('');
                            }}
                        >
                            ← Back to Domains
                        </Button>
                        <div className="text-sm text-muted-foreground">
                            Progress: {getDomainProgress(selectedDomain.id)}/{selectedDomain.tasks.length}
                        </div>
                    </div>

                    <h2 className="text-xl font-bold">{selectedDomain.title} Workshop</h2>

                    {taskResult && (
                        <div className={`p-4 rounded-lg ${taskResult.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                            {taskResult.message}
                        </div>
                    )}

                    <div className="grid gap-4">
                        {selectedDomain.tasks.map((task, index) => (
                            <div key={index}>
                                {renderTask(task)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 