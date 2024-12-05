'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function PythonQuiz1() {
    const [draggedItem, setDraggedItem] = useState(null);
    const [isComplete, setIsComplete] = useState(false);
    const [currentProblem, setCurrentProblem] = useState(0);

    const pythonProblems = [
        {
            id: 1,
            title: "For Loop Example",
            description: "Arrange the code to create a for loop that prints numbers from 1 to 5",
            components: [
                { id: 1, code: "for i in range(1, 6):", position: 0 },
                { id: 2, code: "    print(i)", position: 1 }
            ]
        },
        {
            id: 2,
            title: "Function Definition",
            description: "Create a function that calculates the square of a number",
            components: [
                { id: 1, code: "def calculate_square(number):", position: 0 },
                { id: 2, code: "    return number * number", position: 1 }
            ]
        },
        {
            id: 3,
            title: "If Statement",
            description: "Create an if statement to check if a number is positive",
            components: [
                { id: 1, code: "if number > 0:", position: 0 },
                { id: 2, code: "    print('Positive number')", position: 1 },
                { id: 3, code: "else:", position: 2 },
                { id: 4, code: "    print('Not a positive number')", position: 3 }
            ]
        },
        {
            id: 4,
            title: "While Loop",
            description: "Create a while loop that prints numbers from 1 to 5",
            components: [
                { id: 1, code: "i = 1", position: 0 },
                { id: 2, code: "while i <= 5:", position: 1 },
                { id: 3, code: "    print(i)", position: 2 },
                { id: 4, code: "    i += 1", position: 3 }
            ]
        },
        {
            id: 5,
            title: "List Comprehension",
            description: "Create a list of squares of numbers from 1 to 5 using list comprehension",
            components: [
                { id: 1, code: "squares = [x**2 for x in range(1, 6)]", position: 0 },
                { id: 2, code: "print(squares)", position: 1 }
            ]
        },
        {
            id: 6,
            title: "Dictionary Creation",
            description: "Create a dictionary of squares of numbers from 1 to 3",
            components: [
                { id: 1, code: "squares = {", position: 0 },
                { id: 2, code: "    1: 1,", position: 1 },
                { id: 3, code: "    2: 4,", position: 2 },
                { id: 4, code: "    3: 9", position: 3 },
                { id: 5, code: "}", position: 4 },
                { id: 6, code: "print(squares)", position: 5 }
            ]
        },
        {
            id: 7,
            title: "String Manipulation",
            description: "Capitalize the first letter of each word in a string",
            components: [
                { id: 1, code: "text = 'hello world'", position: 0 },
                { id: 2, code: "capitalized = text.title()", position: 1 },
                { id: 3, code: "print(capitalized)", position: 2 }
            ]
        },
        {
            id: 8,
            title: "Try-Except Block",
            description: "Create a try-except block to handle division by zero",
            components: [
                { id: 1, code: "try:", position: 0 },
                { id: 2, code: "    result = 10 / 0", position: 1 },
                { id: 3, code: "except ZeroDivisionError:", position: 2 },
                { id: 4, code: "    print('Cannot divide by zero')", position: 3 }
            ]
        },
        {
            id: 9,
            title: "Lambda Function",
            description: "Create a lambda function to double a number",
            components: [
                { id: 1, code: "double = lambda x: x * 2", position: 0 },
                { id: 2, code: "print(double(5))", position: 1 }
            ]
        },
        {
            id: 10,
            title: "Set Operations",
            description: "Perform set union operation",
            components: [
                { id: 1, code: "set1 = {1, 2, 3}", position: 0 },
                { id: 2, code: "set2 = {3, 4, 5}", position: 1 },
                { id: 3, code: "union_set = set1.union(set2)", position: 2 },
                { id: 4, code: "print(union_set)", position: 3 }
            ]
        },
        {
            id: 11,
            title: "List Slicing",
            description: "Slice a list to get every second element",
            components: [
                { id: 1, code: "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", position: 0 },
                { id: 2, code: "every_second = numbers[::2]", position: 1 },
                { id: 3, code: "print(every_second)", position: 2 }
            ]
        },
        {
            id: 12,
            title: "Tuple Unpacking",
            description: "Unpack a tuple into variables",
            components: [
                { id: 1, code: "coordinates = (3, 4)", position: 0 },
                { id: 2, code: "x, y = coordinates", position: 1 },
                { id: 3, code: "print(f'x: {x}, y: {y}')", position: 2 }
            ]
        },
        {
            id: 13,
            title: "List Methods",
            description: "Use list methods to add and remove elements",
            components: [
                { id: 1, code: "fruits = ['apple', 'banana']", position: 0 },
                { id: 2, code: "fruits.append('orange')", position: 1 },
                { id: 3, code: "fruits.remove('banana')", position: 2 },
                { id: 4, code: "print(fruits)", position: 3 }
            ]
        },
        {
            id: 14,
            title: "String Formatting",
            description: "Use f-strings to format a string",
            components: [
                { id: 1, code: "name = 'Alice'", position: 0 },
                { id: 2, code: "age = 30", position: 1 },
                { id: 3, code: "print(f'{name} is {age} years old')", position: 2 }
            ]
        },
        {
            id: 15,
            title: "Nested Loops",
            description: "Create nested loops to print a pattern",
            components: [
                { id: 1, code: "for i in range(3):", position: 0 },
                { id: 2, code: "    for j in range(3):", position: 1 },
                { id: 3, code: "        print('*', end=' ')", position: 2 },
                { id: 4, code: "    print()", position: 3 }
            ]
        },
        {
            id: 16,
            title: "Dictionary Methods",
            description: "Use dictionary methods to add and remove items",
            components: [
                { id: 1, code: "person = {'name': 'John', 'age': 30}", position: 0 },
                { id: 2, code: "person['city'] = 'New York'", position: 1 },
                { id: 3, code: "del person['age']", position: 2 },
                { id: 4, code: "print(person)", position: 3 }
            ]
        },
        {
            id: 17,
            title: "List Sorting",
            description: "Sort a list of numbers in descending order",
            components: [
                { id: 1, code: "numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]", position: 0 },
                { id: 2, code: "sorted_numbers = sorted(numbers, reverse=True)", position: 1 },
                { id: 3, code: "print(sorted_numbers)", position: 2 }
            ]
        },
        {
            id: 18,
            title: "Set Comprehension",
            description: "Create a set of even numbers from 1 to 10 using set comprehension",
            components: [
                { id: 1, code: "even_numbers = {x for x in range(1, 11) if x % 2 == 0}", position: 0 },
                { id: 2, code: "print(even_numbers)", position: 1 }
            ]
        },
        {
            id: 19,
            title: "String Methods",
            description: "Use string methods to manipulate a string",
            components: [
                { id: 1, code: "text = '  Hello, World!  '", position: 0 },
                { id: 2, code: "cleaned_text = text.strip().lower().replace('hello', 'hi')", position: 1 },
                { id: 3, code: "print(cleaned_text)", position: 2 }
            ]
        },
        {
            id: 20,
            title: "Conditional Expression",
            description: "Use a conditional expression to assign a value",
            components: [
                { id: 1, code: "x = 10", position: 0 },
                { id: 2, code: "result = 'Even' if x % 2 == 0 else 'Odd'", position: 1 },
                { id: 3, code: "print(result)", position: 2 }
            ]
        },
        {
            id: 21,
            title: "File Handling",
            description: "Write to a file and then read its contents",
            components: [
                { id: 1, code: "with open('example.txt', 'w') as f:", position: 0 },
                { id: 2, code: "    f.write('Hello, File!')", position: 1 },
                { id: 3, code: "with open('example.txt', 'r') as f:", position: 2 },
                { id: 4, code: "    content = f.read()", position: 3 },
                { id: 5, code: "print(content)", position: 4 }
            ]
        },
        {
            id: 22,
            title: "List Filtering",
            description: "Filter a list to get only even numbers",
            components: [
                { id: 1, code: "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", position: 0 },
                { id: 2, code: "even_numbers = list(filter(lambda x: x % 2 == 0, numbers))", position: 1 },
                { id: 3, code: "print(even_numbers)", position: 2 }
            ]
        },
        {
            id: 23,
            title: "Dictionary Comprehension",
            description: "Create a dictionary of squares using dictionary comprehension",
            components: [
                { id: 1, code: "numbers = [1, 2, 3, 4, 5]", position: 0 },
                { id: 2, code: "squares = {x: x**2 for x in numbers}", position: 1 },
                { id: 3, code: "print(squares)", position: 2 }
            ]
        },
        {
            id: 24,
            title: "Exception Handling",
            description: "Handle multiple exceptions in a try-except block",
            components: [
                { id: 1, code: "try:", position: 0 },
                { id: 2, code: "    x = int(input('Enter a number: '))", position: 1 },
                { id: 3, code: "    result = 10 / x", position: 2 },
                { id: 4, code: "except ValueError:", position: 3 },
                { id: 5, code: "    print('Invalid input')", position: 4 },
                { id: 6, code: "except ZeroDivisionError:", position: 5 },
                { id: 7, code: "    print('Cannot divide by zero')", position: 6 }
            ]
        },
        {
            id: 25,
            title: "List Map",
            description: "Use map() to square all numbers in a list",
            components: [
                { id: 1, code: "numbers = [1, 2, 3, 4, 5]", position: 0 },
                { id: 2, code: "squared = list(map(lambda x: x**2, numbers))", position: 1 },
                { id: 3, code: "print(squared)", position: 2 }
            ]
        },
        {
            id: 26,
            title: "String Join",
            description: "Join a list of words into a sentence",
            components: [
                { id: 1, code: "words = ['Python', 'is', 'awesome']", position: 0 },
                { id: 2, code: "sentence = ' '.join(words)", position: 1 },
                { id: 3, code: "print(sentence)", position: 2 }
            ]
        },
        {
            id: 27,
            title: "Nested Dictionary",
            description: "Create and access a nested dictionary",
            components: [
                { id: 1, code: "person = {", position: 0 },
                { id: 2, code: "    'name': 'John',", position: 1 },
                { id: 3, code: "    'age': 30,", position: 2 },
                { id: 4, code: "    'address': {", position: 3 },
                { id: 5, code: "        'street': '123 Main St',", position: 4 },
                { id: 6, code: "        'city': 'New York'", position: 5 },
                { id: 7, code: "    }", position: 6 },
                { id: 8, code: "}", position: 7 },
                { id: 9, code: "print(person['address']['city'])", position: 8 }
            ]
        },
        {
            id: 28,
            title: "Set Operations",
            description: "Perform set intersection operation",
            components: [
                { id: 1, code: "set1 = {1, 2, 3, 4, 5}", position: 0 },
                { id: 2, code: "set2 = {4, 5, 6, 7, 8}", position: 1 },
                { id: 3, code: "intersection = set1.intersection(set2)", position: 2 },
                { id: 4, code: "print(intersection)", position: 3 }
            ]
        },
        {
            id: 29,
            title: "String Formatting with %",
            description: "Use % operator for string formatting",
            components: [
                { id: 1, code: "name = 'Alice'", position: 0 },
                { id: 2, code: "age = 30", position: 1 },
                { id: 3, code: "print('%s is %d years old' % (name, age))", position: 2 }
            ]
        },
        {
            id: 30,
            title: "List Enumerate",
            description: "Use enumerate() to get index and value of list items",
            components: [
                { id: 1, code: "fruits = ['apple', 'banana', 'cherry']", position: 0 },
                { id: 2, code: "for index, fruit in enumerate(fruits):", position: 1 },
                { id: 3, code: "    print(f'{index}: {fruit}')", position: 2 }
            ]
        }
    ];

    const [components, setComponents] = useState(
        [...pythonProblems[currentProblem].components].sort(() => Math.random() - 0.5)
    );

    const handleDragStart = (e, item) => {
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = "move";
        e.target.style.opacity = "0.5";
    };

    const handleDragEnd = (e) => {
        e.target.style.opacity = "1";
        setDraggedItem(null);
    };

    const handleDragOver = (e, item) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)";
    };

    const handleDragLeave = (e) => {
        e.currentTarget.style.backgroundColor = "";
    };

    const handleDrop = (e, targetItem) => {
        e.preventDefault();
        e.currentTarget.style.backgroundColor = "";

        if (!draggedItem || draggedItem.id === targetItem.id) return;

        const newComponents = [...components];
        const draggedIndex = components.findIndex(item => item.id === draggedItem.id);
        const targetIndex = components.findIndex(item => item.id === targetItem.id);

        [newComponents[draggedIndex], newComponents[targetIndex]] =
            [newComponents[targetIndex], newComponents[draggedIndex]];

        setComponents(newComponents);
    };

    const checkOrder = () => {
        const isCorrect = components.every((component, index) => 
            component.position === index
        );

        if (isCorrect) {
            if (currentProblem < pythonProblems.length - 1) {
                setCurrentProblem(prev => prev + 1);
                setComponents([...pythonProblems[currentProblem + 1].components].sort(() => Math.random() - 0.5));
            } else {
                setIsComplete(true);
            }
        } else {
            alert("Not quite right! Try again!");
        }
    };

    const resetQuiz = () => {
        setCurrentProblem(0);
        setComponents([...pythonProblems[0].components].sort(() => Math.random() - 0.5));
        setIsComplete(false);
    };

    if (isComplete) {
        return (
            <div className="flex flex-col items-center gap-6 text-center">
                <h3 className="text-xl font-bold">🎉 Congratulations!</h3>
                <p>You&apos;ve mastered Python code arrangement!</p>
                <Button onClick={resetQuiz}>Try Again</Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-bold mb-4">
                {pythonProblems[currentProblem].title}
            </h3>
            <p className="text-center mb-4">
                {pythonProblems[currentProblem].description}
            </p>
            <div className="flex flex-col gap-2 w-full max-w-2xl bg-muted p-4 rounded-lg font-mono">
                {components.map((component, index) => (
                    <div
                        key={component.id}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, component)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => handleDragOver(e, component)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, component)}
                        className="bg-background p-3 rounded cursor-move hover:bg-accent transition-colors whitespace-pre"
                    >
                        {component.code}
                    </div>
                ))}
            </div>
            <Button onClick={checkOrder}>
                {currentProblem < pythonProblems.length - 1 ? "Next Problem" : "Complete"}
            </Button>
        </div>
    );
}