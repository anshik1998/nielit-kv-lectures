'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function NeuralNetworkDemo() {
    const [connections, setConnections] = useState([]);
    const [activeNeuron, setActiveNeuron] = useState(null);

    const neurons = {
        input: [
            { id: 'i1', x: 50, y: 100, label: 'Image' },
            { id: 'i2', x: 50, y: 200, label: 'Sound' },
            { id: 'i3', x: 50, y: 300, label: 'Text' }
        ],
        hidden: [
            { id: 'h1', x: 200, y: 150, label: 'Process' },
            { id: 'h2', x: 200, y: 250, label: 'Learn' }
        ],
        output: [
            { id: 'o1', x: 350, y: 200, label: 'Decision' }
        ]
    };

    const handleNeuronClick = (neuronId) => {
        if (!activeNeuron) {
            setActiveNeuron(neuronId);
        } else if (activeNeuron !== neuronId) {
            setConnections(prev => [...prev, {
                from: activeNeuron,
                to: neuronId
            }]);
            setActiveNeuron(null);
        }
    };

    return (
        <div className="relative w-full h-[400px] bg-muted rounded-lg p-4">
            <svg className="absolute inset-0 w-full h-full">
                {connections.map((connection, i) => {
                    const from = [...neurons.input, ...neurons.hidden, ...neurons.output]
                        .find(n => n.id === connection.from);
                    const to = [...neurons.input, ...neurons.hidden, ...neurons.output]
                        .find(n => n.id === connection.to);

                    return (
                        <line
                            key={i}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                        />
                    );
                })}
            </svg>

            {Object.values(neurons).flat().map((neuron) => (
                <div
                    key={neuron.id}
                    className={`absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer
            ${activeNeuron === neuron.id ? 'bg-primary' : 'bg-secondary'}`}
                    style={{
                        left: neuron.x - 32,
                        top: neuron.y - 32
                    }}
                    onClick={() => handleNeuronClick(neuron.id)}
                >
                    <span className="text-xs text-center">{neuron.label}</span>
                </div>
            ))}

            <Button
                className="absolute bottom-4 right-4"
                onClick={() => setConnections([])}
            >
                Reset
            </Button>
        </div>
    );
} 