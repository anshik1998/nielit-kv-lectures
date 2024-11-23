'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

export function AITimelineDemo() {
    const [currentYear, setCurrentYear] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');
    const [isExperimenting, setIsExperimenting] = useState(false);
    const [currentSequence, setCurrentSequence] = useState(null);

    const timeline = [
        {
            year: "1950s",
            title: "The Turing Test Era",
            description: "Can machines think? Try the simplified Turing test!",
            image: "🤖",
            experiment: {
                type: "turing",
                instruction: "Ask one of these questions: 'Can you feel emotions?', 'Do you dream?', 'Are you alive?', 'Can you learn?'",
                responses: {
                    "can you feel emotions?": "While I can recognize and respond to emotions, I don't feel them the way humans do. I process them as patterns of information.",
                    "do you dream?": "I don't sleep or dream like humans do. I'm a program that processes information when activated.",
                    "are you alive?": "I'm a different form of existence - I'm a computer program that can think and respond, but not in the biological sense of being alive.",
                    "can you learn?": "Yes, in a way - I can be programmed to recognize patterns and improve my responses, but it's different from human learning."
                }
            }
        },
        {
            year: "1960s",
            title: "Early Pattern Matching",
            description: "Simple pattern matching was revolutionary!",
            image: "🔍",
            experiment: {
                type: "pattern",
                instruction: "Type a word pattern (use * for wildcards, e.g., 'h*llo', 'a*e', 't*st')",
                patterns: {
                    "h*llo": ["hello", "hallo"],
                    "a*e": ["apple", "axe", "are"],
                    "t*st": ["test", "toast", "trust"]
                }
            }
        },
        {
            year: "1980s",
            title: "Expert Systems",
            description: "Rule-based systems solved specific problems.",
            image: "📚",
            experiment: {
                type: "expert",
                instruction: "Diagnose a simple computer problem (e.g., 'won't start', 'blue screen', 'slow', 'noisy')",
                rules: {
                    "won't start": "Check power connection",
                    "blue screen": "Memory might be faulty",
                    "slow": "Clear temporary files",
                    "noisy": "Check cooling fans"
                }
            }
        },
        {
            year: "2000s",
            title: "Machine Learning Basics",
            description: "Computers started learning from data!",
            image: "🧮",
            experiment: {
                type: "learning",
                instruction: "Complete the number pattern by entering the next number in the sequence:",
                sequences: [
                    {
                        pattern: [2, 4, 6, 8],
                        next: 10,
                        explanation: "Adding 2 each time"
                    },
                    {
                        pattern: [2, 4, 8, 16],
                        next: 32,
                        explanation: "Multiplying by 2 each time"
                    },
                    {
                        pattern: [1, 4, 9, 16],
                        next: 25,
                        explanation: "Square numbers: 1², 2², 3², 4², 5²"
                    }
                ]
            }
        },
        {
            year: "2020s",
            title: "Neural Networks",
            description: "Complex pattern recognition became possible.",
            image: "🧠",
            experiment: {
                type: "neural",
                instruction: "Type an object to classify (e.g., 'elephant', 'pizza', 'car', 'rose', 'smartphone')",
                categories: {
                    animals: ["elephant", "lion", "dog", "cat", "giraffe", "penguin"],
                    food: ["pizza", "burger", "sushi", "pasta", "cake"],
                    vehicles: ["car", "bus", "train", "airplane", "bicycle"],
                    nature: ["rose", "tree", "mountain", "ocean", "forest"],
                    technology: ["smartphone", "laptop", "robot", "computer", "tablet"]
                }
            }
        }
    ];

    const handleExperiment = () => {
        const current = timeline[currentYear].experiment;
        let experimentResult = '';

        switch (current.type) {
            case "turing":
                const userQuestion = userInput.toLowerCase().trim();
                experimentResult = current.responses[userQuestion] ||
                    "Please ask one of the suggested questions to see how an AI would respond differently from a human.";
                break;
            case "pattern":
                const patterns = Object.keys(current.patterns);
                const matchedPattern = patterns.find(p =>
                    new RegExp('^' + userInput.replace('*', '.*') + '$').test(p)
                );
                experimentResult = matchedPattern
                    ? `Matches found: ${current.patterns[matchedPattern].join(', ')}`
                    : 'No matches found';
                break;
            case "expert":
                const problem = Object.keys(current.rules)
                    .find(key => userInput.toLowerCase().includes(key));
                experimentResult = problem
                    ? `Diagnosis: ${current.rules[problem]}`
                    : 'Unknown problem';
                break;
            case "learning":
                if (!currentSequence) {
                    const newSequence = current.sequences[Math.floor(Math.random() * current.sequences.length)];
                    setCurrentSequence(newSequence);
                    setResult(`Pattern: ${newSequence.pattern.join(', ')} ... what comes next?`);
                    return;
                }

                const userGuess = parseInt(userInput);
                experimentResult = userGuess === currentSequence.next
                    ? `Correct! The pattern was: ${currentSequence.explanation}. Full sequence: ${currentSequence.pattern.join(', ')}, ${currentSequence.next}`
                    : `Try again! The pattern is: ${currentSequence.pattern.join(', ')} ... (Hint: ${currentSequence.explanation})`;
                break;
            case "neural":
                const userObject = userInput.toLowerCase().trim();
                let category = null;

                for (const [cat, items] of Object.entries(current.categories)) {
                    if (items.includes(userObject)) {
                        category = cat;
                        break;
                    }
                }

                experimentResult = category
                    ? `Classification: This is a ${category.toUpperCase()} object! Neural networks use patterns learned from thousands of images to make such classifications.`
                    : `Try one of these: elephant, pizza, car, rose, smartphone. Neural networks work best when trained on specific objects.`;
                break;
        }

        setResult(experimentResult);
        setIsExperimenting(true);
    };

    const resetExperiment = () => {
        setUserInput('');
        setResult('');
        setIsExperimenting(false);
        setCurrentSequence(null);
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-2xl bg-muted rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setCurrentYear(prev => Math.max(0, prev - 1));
                            resetExperiment();
                        }}
                        disabled={currentYear === 0}
                    >
                        <ChevronLeft />
                    </Button>
                    <h3 className="text-2xl font-bold">{timeline[currentYear].year}</h3>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setCurrentYear(prev => Math.min(timeline.length - 1, prev + 1));
                            resetExperiment();
                        }}
                        disabled={currentYear === timeline.length - 1}
                    >
                        <ChevronRight />
                    </Button>
                </div>

                <div className="text-center mb-4">
                    <span className="text-4xl">{timeline[currentYear].image}</span>
                    <h4 className="text-xl font-semibold mt-2">{timeline[currentYear].title}</h4>
                    <p className="text-muted-foreground">{timeline[currentYear].description}</p>
                </div>

                <div className="mt-6 space-y-4">
                    <p className="text-sm font-medium">
                        {timeline[currentYear].experiment.instruction}
                    </p>
                    <div className="flex gap-2">
                        <Input
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Try it out..."
                            className="flex-1"
                        />
                        <Button onClick={handleExperiment}>Run</Button>
                        {isExperimenting && (
                            <Button variant="ghost" onClick={resetExperiment}>
                                <RefreshCw className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                    {result && (
                        <div className="bg-primary/10 p-4 rounded-lg">
                            <p className="text-sm">{result}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-2">
                {timeline.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-8 rounded-full cursor-pointer transition-colors ${index === currentYear ? 'bg-primary' : 'bg-muted'
                            }`}
                        onClick={() => {
                            setCurrentYear(index);
                            resetExperiment();
                        }}
                    />
                ))}
            </div>
        </div>
    );
} 