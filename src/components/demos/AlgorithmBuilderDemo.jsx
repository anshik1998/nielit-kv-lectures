'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function AlgorithmBuilderDemo() {
    const [draggedItem, setDraggedItem] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    const [steps, setSteps] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    const tasks = [
        {
            name: "Make a Sandwich",
            steps: [
                { id: 1, text: "get bread slices" },
                { id: 2, text: "spread condiments" },
                { id: 3, text: "add ingredients" },
                { id: 4, text: "stack ingredients" },
                { id: 5, text: "close sandwich" },
                { id: 6, text: "cut sandwich" }
            ],
            correctOrder: [
                "get bread slices",
                "spread condiments",
                "add ingredients",
                "stack ingredients",
                "close sandwich",
                "cut sandwich"
            ]
        },
        {
            name: "Brush Teeth",
            steps: [
                { id: 1, text: "get toothbrush" },
                { id: 2, text: "wet toothbrush" },
                { id: 3, text: "add toothpaste" },
                { id: 4, text: "brush teeth" },
                { id: 5, text: "spit out" },
                { id: 6, text: "rinse mouth" },
                { id: 7, text: "clean toothbrush" }
            ],
            correctOrder: [
                "get toothbrush",
                "wet toothbrush",
                "add toothpaste",
                "brush teeth",
                "spit out",
                "rinse mouth",
                "clean toothbrush"
            ]
        },
        {
            name: "Tie Shoelaces",
            steps: [
                { id: 1, text: "hold both laces" },
                { id: 2, text: "cross laces" },
                { id: 3, text: "make loop" },
                { id: 4, text: "wrap around" },
                { id: 5, text: "pull through" },
                { id: 6, text: "tighten knot" },
                { id: 7, text: "check if secure" }
            ],
            correctOrder: [
                "hold both laces",
                "cross laces",
                "make loop",
                "wrap around",
                "pull through",
                "tighten knot",
                "check if secure"
            ]
        }
    ];

    const handleDragStart = (e, step) => {
        setDraggedItem(step);
        e.dataTransfer.effectAllowed = "move";
        e.target.style.opacity = "0.5";
    };

    const handleDragEnd = (e) => {
        e.target.style.opacity = "1";
        setDraggedItem(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)";
    };

    const handleDragLeave = (e) => {
        e.currentTarget.style.backgroundColor = "";
    };

    const handleDrop = (e, targetStep) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = "";

        if (!draggedItem || draggedItem.id === targetStep.id) return;

        const newSteps = [...steps];
        const draggedIndex = steps.findIndex(step => step.id === draggedItem.id);
        const targetIndex = steps.findIndex(step => step.id === targetStep.id);

        [newSteps[draggedIndex], newSteps[targetIndex]] =
            [newSteps[targetIndex], newSteps[draggedIndex]];

        setSteps(newSteps);
    };

    const checkOrder = () => {
        const currentOrder = steps.map(step => step.text);
        const isCorrect = selectedTask.correctOrder.every(
            (step, index) => step === currentOrder[index]
        );

        if (isCorrect) {
            setIsComplete(true);
        } else {
            alert("Not quite right! Try arranging the steps in a more logical order.");
        }
    };

    const resetTask = () => {
        setIsComplete(false);
        if (selectedTask) {
            setSteps([...selectedTask.steps].sort(() => Math.random() - 0.5));
        }
    };

    const selectTask = (task) => {
        setSelectedTask(task);
        setSteps([...task.steps].sort(() => Math.random() - 0.5));
        setIsComplete(false);
    };

    if (isComplete) {
        return (
            <div className="flex flex-col items-center gap-6 text-center">
                <h3 className="text-xl font-bold">🎉 Congratulations!</h3>
                <p>You&apos;ve correctly arranged all the steps!</p>
                <Button onClick={resetTask}>Try Again</Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex gap-2 flex-wrap">
                {tasks.map(task => (
                    <Button
                        key={task.name}
                        variant={selectedTask?.name === task.name ? "default" : "outline"}
                        onClick={() => selectTask(task)}
                    >
                        {task.name}
                    </Button>
                ))}
            </div>

            {selectedTask && (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">
                        Arrange the steps to {selectedTask.name} in the correct order:
                    </h3>
                    <div className="grid gap-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, step)}
                                onDragEnd={handleDragEnd}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => handleDrop(e, step)}
                                className="bg-muted p-4 rounded-lg cursor-move hover:bg-muted/80 transition-colors"
                            >
                                <p className="font-medium">{index + 1}. {step.text}</p>
                            </div>
                        ))}
                    </div>
                    <Button onClick={checkOrder} className="w-full">
                        Check Order
                    </Button>
                </div>
            )}
        </div>
    );
} 