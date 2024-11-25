'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

export function AIDetectiveDemo() {
    const [discoveredItems, setDiscoveredItems] = useState(new Set());
    const [currentCategory, setCurrentCategory] = useState('home');

    const categories = {
        home: {
            title: "At Home",
            items: [
                { id: 'smart-speaker', name: "Smart Speaker", hint: "It listens to your voice commands and learns your preferences", isAI: true },
                { id: 'microwave', name: "Microwave Oven", hint: "Just heats food with electromagnetic waves - no AI here!", isAI: false },
                { id: 'thermostat', name: "Smart Thermostat", hint: "Learns your temperature preferences over time", isAI: true },
                { id: 'toaster', name: "Regular Toaster", hint: "Simply uses a timer and heating elements", isAI: false },
                { id: 'robot-vacuum', name: "Robot Vacuum", hint: "Maps your home and learns optimal cleaning patterns", isAI: true },
                { id: 'tv', name: "Smart TV", hint: "Suggests shows based on your watching habits", isAI: true }
            ]
        },
        school: {
            title: "At School",
            items: [
                { id: 'calculator', name: "Scientific Calculator", hint: "Just follows pre-programmed formulas - no learning involved", isAI: false },
                { id: 'spellcheck', name: "AI Spell Checker", hint: "Learns from context to suggest better writing", isAI: true },
                { id: 'whiteboard', name: "Digital Whiteboard", hint: "Simply displays what you write - no intelligence", isAI: false },
                { id: 'search', name: "Smart Search Engine", hint: "Understands and predicts what you're looking for", isAI: true },
                { id: 'translator', name: "AI Translator", hint: "Learns and understands language context", isAI: true },
                { id: 'projector', name: "Projector", hint: "Just projects images onto a screen", isAI: false }
            ]
        },
        outside: {
            title: "Outside",
            items: [
                { id: 'traffic-lights', name: "Smart Traffic Lights", hint: "Adapts timing based on traffic patterns", isAI: true },
                { id: 'street-lamp', name: "Street Lamp", hint: "Simply turns on when it's dark", isAI: false },
                { id: 'weather-app', name: "AI Weather App", hint: "Learns from patterns to predict weather", isAI: true },
                { id: 'bike-lock', name: "Digital Bike Lock", hint: "Just needs a code to unlock - no AI here", isAI: false },
                { id: 'maps', name: "Smart Navigation", hint: "Learns traffic patterns and suggests best routes", isAI: true },
                { id: 'camera', name: "AI Security Camera", hint: "Detects and learns to recognize unusual activity", isAI: true }
            ]
        }
    };

    const handleDiscover = (itemId) => {
        setDiscoveredItems(prev => {
            const newSet = new Set(prev);
            newSet.add(itemId);
            return newSet;
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                {Object.entries(categories).map(([key, category]) => (
                    <Button
                        key={key}
                        variant={currentCategory === key ? "default" : "outline"}
                        onClick={() => setCurrentCategory(key)}
                    >
                        {category.title}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
                {categories[currentCategory].items.map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 rounded-lg cursor-pointer transition-colors
                            ${discoveredItems.has(item.id)
                                ? item.isAI
                                    ? 'bg-green-100 dark:bg-green-900/20'
                                    : 'bg-red-100 dark:bg-red-900/20'
                                : 'bg-muted'}`}
                        onClick={() => handleDiscover(item.id)}
                    >
                        <div className="flex items-center gap-2">
                            {discoveredItems.has(item.id) && (
                                item.isAI
                                    ? <CheckCircle className="text-green-600 dark:text-green-400 h-4 w-4" />
                                    : <XCircle className="text-red-600 dark:text-red-400 h-4 w-4" />
                            )}
                            <h4 className="font-medium">{item.name}</h4>
                        </div>
                        {discoveredItems.has(item.id) && (
                            <p className="text-sm text-muted-foreground mt-2">{item.hint}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-center text-muted-foreground">
                Discovered {discoveredItems.size} of {
                    Object.values(categories).reduce((acc, cat) => acc + cat.items.length, 0)
                } items
            </div>
        </div>
    );
} 