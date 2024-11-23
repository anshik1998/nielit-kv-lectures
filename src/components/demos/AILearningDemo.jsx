'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function AILearningDemo() {
    const [draggedItem, setDraggedItem] = useState(null);
    const [isComplete, setIsComplete] = useState(false);
    const [steps, setSteps] = useState([
        { id: 1, title: "Testing", description: "Let&apos;s see how well the AI learned!", position: 0 },
        { id: 2, title: "Collecting Data", description: "First, we gather examples to train the AI", position: 1 },
        { id: 3, title: "Training", description: "The AI learns patterns from the data", position: 2 },
        { id: 4, title: "Making Predictions", description: "The AI can now make predictions!", position: 3 }
    ].sort(() => Math.random() - 0.5));

    const correctOrder = [
        "Collecting Data",
        "Training",
        "Testing",
        "Making Predictions"
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

    const handleDragOver = (e, step) => {
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
        const currentOrder = steps.map(step => step.title);
        const isCorrect = correctOrder.every((step, index) => step === currentOrder[index]);

        if (isCorrect) {
            setIsComplete(true);
        } else {
            alert("Not quite right! Remember, AI needs to learn from data before it can make predictions. Try again!");
        }
    };

    const resetQuiz = () => {
        setSteps(prev => [...prev].sort(() => Math.random() - 0.5));
        setIsComplete(false);
    };

    if (isComplete) {
        return (
            <div className="flex flex-col items-center gap-6 text-center">
                <h3 className="text-xl font-bold">🎉 Congratulations!</h3>
                <p>You&apos;ve mastered the steps of how AI learns!</p>
                <Button onClick={resetQuiz}>Try Again</Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-bold mb-4">Can you arrange the AI learning steps in the correct order?</h3>
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, step)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => handleDragOver(e, step)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, step)}
                        className="bg-muted p-4 rounded-lg cursor-move hover:bg-muted/80 transition-colors"
                    >
                        <h4 className="font-bold">{index + 1}. {step.title}</h4>
                        <p className="text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
            <Button onClick={checkOrder}>Check Order</Button>
        </div>
    );
} 