'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCw } from "lucide-react";

export function RobotInstructionsDemo() {
    const [commands, setCommands] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [success, setSuccess] = useState(false);

    const maze = [
        ['S', ' ', ' ', ' '],
        ['#', '#', ' ', '#'],
        [' ', ' ', ' ', ' '],
        ['#', '#', ' ', 'E']
    ];

    const addCommand = (command) => {
        if (commands.length < 10 && !isRunning) {
            setCommands([...commands, command]);
        }
    };

    const clearCommands = () => {
        setCommands([]);
        setPosition({ x: 0, y: 0 });
        setSuccess(false);
        setIsRunning(false);
    };

    const runCommands = async () => {
        setIsRunning(true);
        setPosition({ x: 0, y: 0 });
        setSuccess(false);

        for (let command of commands) {
            await new Promise(resolve => setTimeout(resolve, 500));

            let newPos = { ...position };
            switch (command) {
                case 'UP':
                    newPos.y = Math.max(0, newPos.y - 1);
                    break;
                case 'DOWN':
                    newPos.y = Math.min(3, newPos.y + 1);
                    break;
                case 'LEFT':
                    newPos.x = Math.max(0, newPos.x - 1);
                    break;
                case 'RIGHT':
                    newPos.x = Math.min(3, newPos.x + 1);
                    break;
            }

            if (maze[newPos.y][newPos.x] !== '#') {
                setPosition(newPos);
            }
        }

        await new Promise(resolve => setTimeout(resolve, 500));
        setSuccess(position.x === 3 && position.y === 3);
        setIsRunning(false);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-4 gap-2 w-fit mx-auto">
                {maze.map((row, y) => (
                    row.map((cell, x) => (
                        <div
                            key={`${x}-${y}`}
                            className={`w-12 h-12 flex items-center justify-center border
                                ${cell === '#' ? 'bg-muted' : 'bg-background'}
                                ${position.x === x && position.y === y ? 'bg-primary' : ''}
                            `}
                        >
                            {cell === 'S' && '🚦'}
                            {cell === 'E' && '🏁'}
                            {position.x === x && position.y === y && '🤖'}
                        </div>
                    ))
                ))}
            </div>

            <div className="flex gap-2 justify-center">
                <Button onClick={() => addCommand('UP')} disabled={isRunning}>
                    <ArrowUp className="h-4 w-4" />
                </Button>
                <Button onClick={() => addCommand('DOWN')} disabled={isRunning}>
                    <ArrowDown className="h-4 w-4" />
                </Button>
                <Button onClick={() => addCommand('LEFT')} disabled={isRunning}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button onClick={() => addCommand('RIGHT')} disabled={isRunning}>
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
                {commands.map((cmd, i) => (
                    <div key={i} className="px-2 py-1 bg-muted rounded">
                        {cmd}
                    </div>
                ))}
            </div>

            <div className="flex gap-2 justify-center">
                <Button onClick={runCommands} disabled={isRunning || commands.length === 0}>
                    Run
                </Button>
                <Button onClick={clearCommands} disabled={isRunning} variant="outline">
                    <RotateCw className="h-4 w-4 mr-2" />
                    Reset
                </Button>
            </div>

            {success && (
                <div className="text-center text-green-600 font-bold">
                    Success! You reached the goal! 🎉
                </div>
            )}
        </div>
    );
} 