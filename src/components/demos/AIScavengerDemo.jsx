'use client';
import { useState } from 'react';
import { CheckCircle, Circle, XCircle } from "lucide-react";

export function AIScavengerDemo() {
    const [foundItems, setFoundItems] = useState(new Set());
    const [selectedItem, setSelectedItem] = useState(null);
    const [wrongItems, setWrongItems] = useState(new Set());

    const items = [
        {
            id: 1,
            name: "Smartphone Assistant",
            isAI: true,
            hint: "Uses natural language processing to understand your voice commands and help with tasks like setting alarms, reminders, and answering questions"
        },
        {
            id: 2,
            name: "Social Media Filters",
            isAI: true,
            hint: "Uses computer vision and deep learning to detect faces and apply real-time effects and enhancements"
        },
        {
            id: 3,
            name: "Video Recommendations",
            isAI: true,
            hint: "Analyzes your viewing history and preferences to suggest personalized content using machine learning algorithms"
        },
        {
            id: 4,
            name: "Smart Home Device",
            isAI: true,
            hint: "Combines voice recognition and machine learning to control your home environment and learn from your preferences"
        },
        {
            id: 5,
            name: "Auto-Complete",
            isAI: true,
            hint: "Uses predictive text models to anticipate and suggest what you might type next"
        },
        {
            id: 6,
            name: "Calculator",
            isAI: false,
            hint: "This is a traditional tool that follows fixed mathematical rules - no AI needed!"
        },
        {
            id: 7,
            name: "Digital Clock",
            isAI: false,
            hint: "Simply displays time based on your device's system clock - no artificial intelligence here"
        },
        {
            id: 8,
            name: "Weather App",
            isAI: false,
            hint: "Basic weather apps just fetch and display data from weather stations - they don't necessarily use AI"
        }
    ];

    // Shuffle items array using Fisher-Yates algorithm
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);

    const toggleItem = (id) => {
        const item = items.find(i => i.id === id);
        if (item.isAI) {
            const newFound = new Set(foundItems);
            if (newFound.has(id)) {
                newFound.delete(id);
            } else {
                newFound.add(id);
            }
            setFoundItems(newFound);
            // Remove from wrong items if it was there
            const newWrong = new Set(wrongItems);
            newWrong.delete(id);
            setWrongItems(newWrong);
        } else {
            // Handle non-AI item selection
            const newWrong = new Set(wrongItems);
            if (newWrong.has(id)) {
                newWrong.delete(id);
            } else {
                newWrong.add(id);
            }
            setWrongItems(newWrong);
        }
        setSelectedItem(id);
    };

    const getIcon = (item) => {
        if (foundItems.has(item.id)) {
            return <CheckCircle className="h-5 w-5 text-primary" />;
        } else if (wrongItems.has(item.id)) {
            return <XCircle className="h-5 w-5 text-destructive" />;
        }
        return <Circle className="h-5 w-5" />;
    };

    const aiItemsCount = items.filter(item => item.isAI).length;

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">
                Found {foundItems.size} of {aiItemsCount} AI examples
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {shuffledItems.map((item) => (
                    <div
                        key={item.id}
                        className={`flex flex-col p-3 rounded-lg ${selectedItem === item.id ? 'bg-primary/10' : 'bg-muted'
                            } cursor-pointer hover:bg-primary/5 transition-colors`}
                        onClick={() => toggleItem(item.id)}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            {getIcon(item)}
                            <div className="font-medium">{item.name}</div>
                        </div>
                        {selectedItem === item.id && (
                            <div className="text-sm text-muted-foreground mt-2">
                                {item.hint}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
                Click on the items you think use AI. The hint will appear when you click!
            </p>
        </div>
    );
} 