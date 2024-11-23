'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DomainWorkshopDemo() {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [progress, setProgress] = useState({});

    const domains = [
        {
            id: 'vision',
            title: "Computer Vision",
            description: "See how AI recognizes images",
            tasks: [
                "Identify objects in a picture",
                "Detect faces in photos",
                "Read text from images",
                "Track movement in videos"
            ]
        },
        {
            id: 'language',
            title: "Natural Language",
            description: "Explore language understanding",
            tasks: [
                "Translate sentences",
                "Chat with AI",
                "Complete sentences",
                "Answer questions"
            ]
        },
        {
            id: 'neural',
            title: "Neural Networks",
            description: "Learn how AI thinks",
            tasks: [
                "Connect neurons",
                "Train a simple network",
                "See patterns emerge",
                "Make predictions"
            ]
        }
    ];

    const completeTask = (domainId, taskIndex) => {
        setProgress(prev => ({
            ...prev,
            [domainId]: {
                ...prev[domainId],
                [taskIndex]: true
            }
        }));
    };

    const getDomainProgress = (domainId) => {
        const domainTasks = progress[domainId] || {};
        return Object.values(domainTasks).filter(Boolean).length;
    };

    return (
        <div className="space-y-6">
            {!selectedDomain ? (
                <div className="grid grid-cols-3 gap-4">
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
                    <Button
                        variant="ghost"
                        onClick={() => setSelectedDomain(null)}
                    >
                        ← Back to Domains
                    </Button>

                    <h2 className="text-xl font-bold">{selectedDomain.title} Workshop</h2>

                    <div className="grid gap-4">
                        {selectedDomain.tasks.map((task, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg ${progress[selectedDomain.id]?.[index]
                                        ? 'bg-primary/10'
                                        : 'bg-muted'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <span>{task}</span>
                                    <Button
                                        size="sm"
                                        variant={progress[selectedDomain.id]?.[index] ? "outline" : "default"}
                                        onClick={() => completeTask(selectedDomain.id, index)}
                                    >
                                        {progress[selectedDomain.id]?.[index] ? "Completed" : "Try It"}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 