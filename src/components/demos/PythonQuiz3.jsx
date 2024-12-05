'use client';

import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const codeQuizData = [
  {
    id: 1,
    code: 'print[BLANK1]"Hello, World!"[BLANK2]',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['(', ')', '[', ']']
  },
  {
    id: 2,
    code: 'name = input[BLANK1]"Enter your name: "[BLANK2]',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['(', ')', '[', ']']
  },
  {
    id: 3,
    code: 'if x [BLANK1] 10:\n    print("x is greater than 10")\n[BLANK2]:\n    print("x is not greater than 10")',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['>', 'else', '<', 'elif']
  },
  {
    id: 4,
    code: 'for i [BLANK1] range([BLANK2], 5):\n    print(i)',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['in', '0', 'of', '1']
  },
  {
    id: 5,
    code: 'numbers = [1, 2, 3, 4, 5]\ntotal = [BLANK1](numbers)\nprint("The sum is:", [BLANK2])',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['sum', 'total', 'sum()', 'total()']
  },
  {
    id: 6,
    code: 'fruits = ["apple", "banana", "cherry"]\nfruits.[BLANK1]("orange")\nprint(fruits[[BLANK2]])',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['append', '-1', 'add', '0']
  },
  {
    id: 7,
    code: 'person = {"name": "John", "age": 30}\nprint(person[[BLANK1]])\nprint(person.[BLANK2]("city", "New York"))',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['"name"', 'get', 'name', 'setdefault']
  },
  {
    id: 8,
    code: 'numbers = (1, 2, 3)\nx, y, [BLANK1] = numbers\nprint([BLANK2])',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['z', 'x + y + z', '*rest', 'sum(numbers)']
  },
  {
    id: 9,
    code: 'text = "Hello, World!"\nprint(text[[BLANK1]:[BLANK2]])',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['0', '5', '7', '-1']
  },
  {
    id: 10,
    code: 'x = 5\nwhile x [BLANK1] 0:\n    print(x)\n    x [BLANK2] 1',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['>', '-=', '<', '+=']
  },
  {
    id: 11,
    code: 'numbers = [1, 2, 3, 4, 5]\nsquared = [x [BLANK1] 2 [BLANK2] x in numbers]',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['**', 'for', '*', 'if']
  },
  {
    id: 12,
    code: 'def greet(name):\n    [BLANK1] f"Hello, {name}!"\n\nresult = [BLANK2]("Alice")\nprint(result)',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['return', 'greet', 'print', 'call']
  },
  {
    id: 13,
    code: 'numbers = [1, 2, 3, 4, 5]\neven_numbers = [BLANK1](lambda x: x % 2 == 0, [BLANK2])',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['filter', 'numbers', 'map', 'list']
  },
  {
    id: 14,
    code: 'try:\n    result = 10 / 0\nexcept [BLANK1]:\n    print([BLANK2])',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['ZeroDivisionError', '"Error: Division by zero"', 'Exception', '"An error occurred"']
  },
  {
    id: 15,
    code: 'import math\n\nradius = 5\narea = math.[BLANK1] * radius [BLANK2] 2',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['pi', '**', 'PI', '*']
  },
  {
    id: 16,
    code: 'numbers = {1, 2, 3, 4, 5}\nmore_numbers = {4, 5, 6, 7, 8}\nunion = numbers [BLANK1] more_numbers\nintersection = numbers [BLANK2] more_numbers',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['|', '&', 'union', 'intersection']
  },
  {
    id: 17,
    code: 'def factorial(n):\n    if n [BLANK1] 1:\n        return 1\n    else:\n        return n * [BLANK2](n - 1)',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['==', 'factorial', '<=', 'fact']
  },
  {
    id: 18,
    code: 'numbers = [1, 2, 3, 4, 5]\ntotal = [BLANK1](numbers)\naverage = total / [BLANK2](numbers)',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['sum', 'len', 'add', 'count']
  },
  {
    id: 19,
    code: 'text = "Hello, World!"\nreversed_text = text[BLANK1][BLANK2]',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['[::-1]', '.reverse()', '[::]', '.reversed()']
  },
  {
    id: 20,
    code: 'import random\n\nnumber = random.[BLANK1](1, 10)\nprint(f"The random number is: [BLANK2]")',
    blanks: ['BLANK1', 'BLANK2'],
    options: ['randint', '{number}', 'random', 'number']
  }
];
const DraggableOption = ({ option, index, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, { option, index })}
      className="p-2 m-1 bg-primary text-primary-foreground rounded cursor-move"
    >
      {option}
    </div>
  );
};

const DroppableBlank = ({ blank, onDrop, onDragOver }) => {
  return (
    <span
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="inline-block min-w-[60px] h-8 mx-1 border-b-2 border-muted-foreground"
    >
      {blank !== '' && (
        <span className="p-1 bg-secondary text-secondary-foreground rounded">{blank}</span>
      )}
    </span>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function PythonQuiz3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', ''); // Required for Firefox
  };

  const handleDrop = useCallback(
    (e, blank) => {
      e.preventDefault();
      if (draggedItem) {
        setAnswers((prev) => ({ ...prev, [blank]: draggedItem.option }));
      }
      setDraggedItem(null);
    },
    [draggedItem]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkAnswer = () => {
    const currentQuestionData = codeQuizData[currentQuestion];
    const isCorrect = currentQuestionData.blanks.every(
      (blank) => answers[blank] === currentQuestionData.options[currentQuestionData.blanks.indexOf(blank)]
    );

    if (isCorrect) {
      setScore((prev) => prev + 1);
      if (currentQuestion < codeQuizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setAnswers({});
      } else {
        setShowScore(true);
      }
    } else {
      alert("Incorrect answer. Please try again!")
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <Card className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">
          Your score: {score} out of {codeQuizData.length}
        </p>
        <Button onClick={resetQuiz}>Restart Quiz</Button>
      </Card>
    );
  }

  const currentQuestionData = codeQuizData[currentQuestion];
  const shuffledOptions = shuffleArray([...currentQuestionData.options])

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Question {currentQuestion + 1} of {codeQuizData.length}
      </h2>
      <pre className="bg-muted p-4 rounded-md mb-4 whitespace-pre-wrap">
        {currentQuestionData.code.split(/(\[BLANK\d+\])/).map((part, index) => {
          if (part.startsWith('[BLANK')) {
            const blank = part.slice(1, -1);
            return (
              <DroppableBlank
                key={index}
                blank={answers[blank] || ''}
                onDrop={(e) => handleDrop(e, blank)}
                onDragOver={handleDragOver}
              />
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </pre>
      <div className="flex flex-wrap mb-4">
        {shuffledOptions.map((option, index) => (
          <DraggableOption
            key={index}
            option={option}
            index={index}
            onDragStart={handleDragStart}
          />
        ))}
      </div>
      <Button
        onClick={checkAnswer}
        disabled={Object.keys(answers).length !== currentQuestionData.blanks.length}
      >
        {currentQuestion < codeQuizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </Button>
    </Card>
  );
}
