'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function AIDetectiveDemo() {
    const [discoveredItems, setDiscoveredItems] = useState(new Set());
    const [currentCategory, setCurrentCategory] = useState('home');

    const categories = {
        home: {
            title: "At Home",
            items: [
                { id: 'smart-speaker', name: "Smart Speaker", hint: "It listens to your voice commands" },
                { id: 'thermostat', name: "Smart Thermostat", hint: "Learns your temperature preferences" },
                { id: 'robot-vacuum', name: "Robot Vacuum", hint: "Cleans floors automatically" },
                { id: 'tv', name: "Smart TV", hint: "Suggests shows you might like" }
            ]
        },
        school: {
            title: "At School",
            items: [
                { id: 'calculator', name: "Smart Calculator", hint: "Helps solve complex math" },
                { id: 'spellcheck', name: "Spell Checker", hint: "Finds writing mistakes" },
                { id: 'search', name: "Search Engine", hint: "Finds information online" },
                { id: 'translator', name: "Language Translator", hint: "Helps learn new languages" }
            ]
        },
        outside: {
            title: "Outside",
            items: [
                { id: 'traffic-lights', name: "Smart Traffic Lights", hint: "Controls traffic flow" },
                { id: 'weather-app', name: "Weather App", hint: "Predicts weather patterns" },
                { id: 'maps', name: "Navigation App", hint: "Finds the best route" },
                { id: 'camera', name: "Security Camera", hint: "Detects unusual activity" }
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
              ${discoveredItems.has(item.id) ? 'bg-primary/10' : 'bg-muted'}`}
                        onClick={() => handleDiscover(item.id)}
                    >
                        <div className="flex items-center gap-2">
                            {discoveredItems.has(item.id) && <CheckCircle className="text-primary h-4 w-4" />}
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
                } AI applications
            </div>
        </div>
    );
} 