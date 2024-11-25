'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function SymbolMasterDemo() {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameComplete, setGameComplete] = useState(false);

    const symbols = [
        {
            name: "Oval",
            description: "Start/End point of the flowchart",
            shape: "rounded-full",
            color: "bg-green-100"
        },
        {
            name: "Rectangle",
            description: "Process or action step",
            shape: "rounded",
            color: "bg-blue-100"
        },
        {
            name: "Diamond",
            description: "Decision point (Yes/No question)",
            shape: "rotate-45",
            color: "bg-yellow-100"
        },
        {
            name: "Parallelogram",
            description: "Input or Output operation",
            shape: "skew-x-12",
            color: "bg-purple-100"
        }
    ];

    const generateQuestion = () => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const options = [
            symbol.description,
            ...symbols
                .filter(s => s.name !== symbol.name)
                .map(s => s.description)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
        ].sort(() => Math.random() - 0.5);

        setCurrentQuestion({
            symbol,
            options,
            correctAnswer: symbol.description
        });
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateQuestion();
    }, []);

    const handleAnswer = (answer) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(answer);
        const correct = answer === currentQuestion.correctAnswer;
        setIsCorrect(correct);
        if (correct) {
            setScore(score + 1);
        }

        if (score + (correct ? 1 : 0) >= 5) {
            setGameComplete(true);
        } else {
            setTimeout(generateQuestion, 1500);
        }
    };

    const resetGame = () => {
        setScore(0);
        setGameComplete(false);
        generateQuestion();
    };

    if (gameComplete) {
        return (
            <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">🎉 Congratulations!</h3>
                <p>You&apos;ve mastered the flowchart symbols!</p>
                <p>Final Score: {score}/5</p>
                <Button onClick={resetGame}>Play Again</Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <p className="text-lg mb-2">Score: {score}/5</p>
                <p>What does this symbol represent?</p>
            </div>

            {currentQuestion && (
                <>
                    <div className="flex justify-center">
                        <div className={`w-24 h-24 ${currentQuestion.symbol.color} ${currentQuestion.symbol.shape} flex items-center justify-center`}>
                            <div className={currentQuestion.symbol.name === "Diamond" ? "-rotate-45" : ""}>
                                {currentQuestion.symbol.name}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        {currentQuestion.options.map((option, index) => (
                            <Button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                variant={
                                    selectedAnswer === option
                                        ? option === currentQuestion.correctAnswer
                                            ? "default"
                                            : "destructive"
                                        : "outline"
                                }
                                disabled={selectedAnswer !== null}
                                className="justify-start"
                            >
                                {option}
                            </Button>
                        ))}
                    </div>

                    {isCorrect !== null && (
                        <div className={`text-center font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {isCorrect ? '✅ Correct!' : '❌ Try again!'}
                        </div>
                    )}
                </>
            )}
        </div>
    );
} 