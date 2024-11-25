'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

export function NumberWizardDemo() {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [currentGame, setCurrentGame] = useState(0);
    const [score, setScore] = useState(0);
    const [secretNumber, setSecretNumber] = useState(() => Math.floor(Math.random() * 20) + 1);
    const [attempts, setAttempts] = useState(0);

    const games = [
        {
            title: "Guess the Number",
            instruction: "I'm thinking of a number between 1 and 20",
            type: "guess",
            validator: (input) => {
                const num = parseInt(input);
                if (num === secretNumber) {
                    return { correct: true, message: "Perfect! You found it!" };
                } else if (num < secretNumber) {
                    return { correct: false, message: "Try a higher number!" };
                } else {
                    return { correct: false, message: "Try a lower number!" };
                }
            }
        },
        {
            title: "Simple Calculator",
            instruction: "Create a calculator that adds two numbers",
            type: "calculator",
            examples: [
                { nums: [5, 3], op: '+', result: 8 },
                { nums: [10, 7], op: '+', result: 17 },
                { nums: [15, 8], op: '+', result: 23 }
            ]
        },
        {
            title: "Score Keeper",
            instruction: "Keep track of points scored in a game",
            type: "score",
            events: [
                "Player scored a goal! (+1)",
                "Bonus point! (+2)",
                "Special move! (+3)",
                "Final point! (+1)"
            ]
        }
    ];

    const handleRun = () => {
        const game = games[currentGame];

        switch (game.type) {
            case "guess":
                const result = game.validator(input);
                setAttempts(prev => prev + 1);

                if (result.correct) {
                    setScore(score + Math.max(5 - attempts, 1));
                    setFeedback({
                        type: 'success',
                        message: `${result.message} It took you ${attempts + 1} attempts.`
                    });
                    setTimeout(() => moveToNextGame(), 2000);
                } else {
                    setFeedback({
                        type: 'error',
                        message: result.message
                    });
                }
                break;

            case "calculator":
                const example = game.examples[attempts];
                const expectedResult = example.nums[0] + example.nums[1];
                const userResult = parseInt(input);

                if (userResult === expectedResult) {
                    setScore(score + 1);
                    setFeedback({
                        type: 'success',
                        message: "Correct calculation!"
                    });
                    if (attempts < game.examples.length - 1) {
                        setAttempts(prev => prev + 1);
                    } else {
                        setTimeout(() => moveToNextGame(), 1500);
                    }
                } else {
                    setFeedback({
                        type: 'error',
                        message: "Try again! Check your math."
                    });
                }
                break;

            case "score":
                const points = parseInt(input);
                if (!isNaN(points) && points >= 0) {
                    setScore(score + points);
                    setFeedback({
                        type: 'success',
                        message: `Added ${points} points!`
                    });
                    if (attempts < game.events.length - 1) {
                        setAttempts(prev => prev + 1);
                    } else {
                        setTimeout(() => moveToNextGame(), 1500);
                    }
                } else {
                    setFeedback({
                        type: 'error',
                        message: "Please enter a valid number of points"
                    });
                }
                break;
        }
        setInput('');
    };

    const moveToNextGame = () => {
        if (currentGame < games.length - 1) {
            setCurrentGame(prev => prev + 1);
            setAttempts(0);
            setSecretNumber(Math.floor(Math.random() * 20) + 1);
            setFeedback('');
            setInput('');
        }
    };

    const getCurrentPrompt = () => {
        const game = games[currentGame];
        switch (game.type) {
            case "guess":
                return "Enter your guess:";
            case "calculator":
                const example = game.examples[attempts];
                return `Calculate: ${example.nums[0]} ${example.op} ${example.nums[1]}`;
            case "score":
                return game.events[attempts];
            default:
                return "";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Number Wizard</h3>
                <div className="text-sm text-muted-foreground">
                    Score: {score}
                </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">{games[currentGame].title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                    {games[currentGame].instruction}
                </p>
                <p className="text-sm font-medium">
                    {getCurrentPrompt()}
                </p>
            </div>

            <div className="flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your answer..."
                    className="font-mono"
                    onKeyPress={(e) => e.key === 'Enter' && handleRun()}
                />
                <Button onClick={handleRun}>Submit</Button>
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
                Game {currentGame + 1} of {games.length}
            </div>
        </div>
    );
} 