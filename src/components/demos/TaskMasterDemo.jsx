'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowDown, Plus, Trash2 } from "lucide-react";

export function TaskMasterDemo() {
    const [tasks] = useState([
        {
            id: 1,
            name: "Making a Cup of Tea",
            steps: [
                "Boil water in kettle",
                "Put tea bag in cup",
                "Pour hot water in cup",
                "Wait 2-3 minutes",
                "Remove tea bag",
                "Add milk if desired",
                "Add sugar if desired",
                "Stir and enjoy"
            ]
        },
        {
            id: 2,
            name: "Getting Ready for School",
            steps: [
                "Wake up when alarm rings",
                "Make the bed",
                "Brush teeth",
                "Take a shower",
                "Get dressed in uniform",
                "Pack school bag",
                "Eat breakfast",
                "Leave for school"
            ]
        }
    ]);

    const [selectedTask, setSelectedTask] = useState(null);
    const [customTask, setCustomTask] = useState({ name: '', steps: [] });
    const [newStep, setNewStep] = useState('');
    const [mode, setMode] = useState('explore'); // 'explore' or 'create'

    const handleAddStep = () => {
        if (newStep.trim()) {
            setCustomTask(prev => ({
                ...prev,
                steps: [...prev.steps, newStep.trim()]
            }));
            setNewStep('');
        }
    };

    const handleRemoveStep = (index) => {
        setCustomTask(prev => ({
            ...prev,
            steps: prev.steps.filter((_, i) => i !== index)
        }));
    };

    const renderTask = (task) => (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">{task.name}</h3>
            <div className="space-y-2">
                {task.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{step}</span>
                        {index < task.steps.length - 1 && (
                            <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <Button
                    variant={mode === 'explore' ? 'default' : 'outline'}
                    onClick={() => setMode('explore')}
                >
                    Explore Algorithms
                </Button>
                <Button
                    variant={mode === 'create' ? 'default' : 'outline'}
                    onClick={() => setMode('create')}
                >
                    Create Your Own
                </Button>
            </div>

            {mode === 'explore' && (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        {tasks.map(task => (
                            <div
                                key={task.id}
                                className={`p-4 rounded-lg cursor-pointer transition-colors
                                    ${selectedTask?.id === task.id ? 'bg-primary/10' : 'bg-muted'}`}
                                onClick={() => setSelectedTask(task)}
                            >
                                <h4 className="font-medium">{task.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                    {task.steps.length} steps
                                </p>
                            </div>
                        ))}
                    </div>

                    {selectedTask && (
                        <div className="p-4 bg-muted rounded-lg">
                            {renderTask(selectedTask)}
                        </div>
                    )}
                </div>
            )}

            {mode === 'create' && (
                <div className="space-y-4">
                    <Input
                        placeholder="Enter task name (e.g., Making a Sandwich)"
                        value={customTask.name}
                        onChange={(e) => setCustomTask(prev => ({ ...prev, name: e.target.value }))}
                    />

                    <div className="flex gap-2">
                        <Input
                            placeholder="Add a step..."
                            value={newStep}
                            onChange={(e) => setNewStep(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddStep()}
                        />
                        <Button onClick={handleAddStep}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="space-y-2">
                        {customTask.steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-2 bg-muted p-2 rounded">
                                <span>{index + 1}.</span>
                                <span className="flex-grow">{step}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleRemoveStep(index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>

                    {customTask.name && customTask.steps.length > 0 && (
                        <div className="p-4 bg-muted rounded-lg">
                            {renderTask(customTask)}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
} 