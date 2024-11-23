'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ComputerVisionDemo() {
    const [selectedObject, setSelectedObject] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const objects = [
        { id: 1, name: 'Cat', emoji: '🐱', hints: ['Has whiskers', 'Says meow', 'Likes to chase mice'] },
        { id: 2, name: 'Dog', emoji: '🐕', hints: ['Loyal pet', 'Barks', 'Loves walks'] },
        { id: 3, name: 'Car', emoji: '🚗', hints: ['Has wheels', 'Used for transport', 'Runs on fuel'] },
        { id: 4, name: 'House', emoji: '🏠', hints: ['Has a roof', 'People live here', 'Has windows'] }
    ];

    const analyzeObject = () => {
        if (!selectedObject) return;

        // Simulate AI processing
        setPrediction(null);
        setTimeout(() => {
            setPrediction(selectedObject);
        }, 1500);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                {objects.map(obj => (
                    <div
                        key={obj.id}
                        className={`p-6 rounded-lg text-center cursor-pointer transition-colors
              ${selectedObject?.id === obj.id ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                        onClick={() => setSelectedObject(obj)}
                    >
                        <div className="text-4xl mb-2">{obj.emoji}</div>
                        <div className="font-medium">{obj.name}</div>
                    </div>
                ))}
            </div>

            {selectedObject && (
                <div className="space-y-4">
                    <Button
                        className="w-full"
                        onClick={analyzeObject}
                    >
                        Analyze Image
                    </Button>

                    {prediction ? (
                        <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-bold mb-2">AI Detection Results:</h4>
                            <p>I see a {prediction.name}! Here&apos;s how I know:</p>
                            <ul className="list-disc list-inside mt-2">
                                {prediction.hints.map((hint, i) => (
                                    <li key={i}>{hint}</li>
                                ))}
                            </ul>
                        </div>
                    ) : selectedObject && (
                        <div className="text-center text-muted-foreground">
                            Processing image...
                        </div>
                    )}
                </div>
            )}
        </div>
    );
} 