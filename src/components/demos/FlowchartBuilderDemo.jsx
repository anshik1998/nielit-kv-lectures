'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Diamond,
    Square,
    ArrowDown,
    ArrowRight,
    Plus,
    Trash2,
    Check,
    ArrowDownRight,
    ArrowDownLeft
} from "lucide-react";

// Custom Oval component for Start/End
const Oval = ({ className = "", size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <ellipse cx="12" cy="12" rx="8" ry="6" />
    </svg>
);

// Custom Parallelogram component for Input/Output
const Parallelogram = ({ className = "", size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M6 18L10 6h8l-4 12H6z" />
    </svg>
);

export function FlowchartBuilderDemo() {
    const [shapes, setShapes] = useState([]);
    const [selectedShape, setSelectedShape] = useState(null);
    const [text, setText] = useState('');
    const [mode, setMode] = useState('learn');

    const shapeTypes = [
        { id: 'start', icon: Oval, name: 'Start/End', color: 'bg-green-100' },
        { id: 'process', icon: Square, name: 'Process', color: 'bg-blue-100' },
        { id: 'decision', icon: Diamond, name: 'Decision', color: 'bg-yellow-100' },
        { id: 'input', icon: Parallelogram, name: 'Input/Output', color: 'bg-purple-100' }
    ];

    const examples = [
        {
            title: "Morning Routine",
            shapes: [
                { type: 'start', text: 'Wake Up' },
                { type: 'decision', text: 'Is it a school day?', hasYesNo: true },
                { type: 'process', text: 'Get dressed' },
                { type: 'process', text: 'Eat breakfast' },
                { type: 'process', text: 'Pack bag' },
                { type: 'start', text: 'Leave for school' }
            ]
        },
        {
            title: "Simple Calculator",
            shapes: [
                { type: 'start', text: 'Start' },
                { type: 'input', text: 'Enter numbers' },
                { type: 'input', text: 'Choose operation' },
                { type: 'process', text: 'Calculate result' },
                { type: 'input', text: 'Show result' },
                { type: 'start', text: 'End' }
            ]
        }
    ];

    const addShape = (type) => {
        if (text.trim()) {
            setShapes([...shapes, { type, text: text.trim() }]);
            setText('');
        }
    };

    const removeShape = (index) => {
        setShapes(shapes.filter((_, i) => i !== index));
    };

    const renderShape = (shape, index, shapes) => {
        const ShapeIcon = shapeTypes.find(s => s.id === shape.type)?.icon || Square;
        const color = shapeTypes.find(s => s.id === shape.type)?.color || 'bg-gray-100';

        return (
            <div key={index} className="flex flex-col items-center">
                <div className={`p-4 ${color} rounded-lg flex items-center justify-center min-w-[200px] relative`}>
                    <ShapeIcon className="h-6 w-6 absolute left-2" />
                    <span className="text-center">{shape.text}</span>
                    {mode === 'create' && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2"
                            onClick={() => removeShape(index)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    )}
                </div>
                {index < shapes.length - 1 && (
                    <div className="flex flex-col items-center py-2">
                        {shape.type === 'decision' ? (
                            <div className="relative h-12 w-full">
                                <div className="absolute left-1/4 transform -translate-x-1/2">
                                    <ArrowDownLeft className="h-6 w-6" />
                                    <span className="text-xs">No</span>
                                </div>
                                <div className="absolute right-1/4 transform translate-x-1/2">
                                    <ArrowDownRight className="h-6 w-6" />
                                    <span className="text-xs">Yes</span>
                                </div>
                            </div>
                        ) : (
                            <ArrowDown className="h-6 w-6 my-2" />
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <Button
                    variant={mode === 'learn' ? 'default' : 'outline'}
                    onClick={() => setMode('learn')}
                >
                    Learn Flowcharts
                </Button>
                <Button
                    variant={mode === 'create' ? 'default' : 'outline'}
                    onClick={() => setMode('create')}
                >
                    Create Flowchart
                </Button>
            </div>

            {mode === 'learn' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        {shapeTypes.map((shape) => (
                            <div key={shape.id} className={`p-4 ${shape.color} rounded-lg`}>
                                <div className="flex items-center gap-2">
                                    <shape.icon className="h-6 w-6" />
                                    <span className="font-medium">{shape.name}</span>
                                </div>
                                <p className="text-sm mt-2">
                                    {shape.id === 'start' && "Shows where the process begins or ends"}
                                    {shape.id === 'process' && "Shows an action or calculation step"}
                                    {shape.id === 'decision' && "Shows a yes/no question or decision point"}
                                    {shape.id === 'input' && "Shows data input or output"}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {examples.map((example, index) => (
                            <div key={index} className="p-4 bg-muted rounded-lg">
                                <h3 className="text-lg font-bold mb-4">{example.title}</h3>
                                <div className="space-y-2">
                                    {example.shapes.map((shape, i) => renderShape(shape, i, example.shapes))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {mode === 'create' && (
                <div className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            placeholder="Enter text for shape..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && selectedShape && addShape(selectedShape)}
                        />
                        <div className="flex gap-2">
                            {shapeTypes.map((shape) => (
                                <Button
                                    key={shape.id}
                                    variant="outline"
                                    onClick={() => {
                                        setSelectedShape(shape.id);
                                        if (text.trim()) {
                                            addShape(shape.id);
                                        }
                                    }}
                                    className={selectedShape === shape.id ? 'ring-2 ring-primary' : ''}
                                >
                                    <shape.icon className="h-4 w-4" />
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-muted rounded-lg min-h-[400px]">
                        <div className="space-y-2">
                            {shapes.map((shape, index) => renderShape(shape, index, shapes))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 