'use client';

import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Our quiz data
const quizData = [
  {
    id: 1,
    question: "In Python, the keyword used to start an if statement is [BLANK1], and to provide an alternative condition we use [BLANK2].",
    blanks: ["BLANK1", "BLANK2"],
    options: ["if", "else", "elif", "then"]
  },
  {
    id: 2,
    question: "To iterate over a sequence a specific number of times, we use a [BLANK1] loop, while to repeat an action until a condition is false, we use a [BLANK2] loop.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["for", "while", "do", "until"]
  },
  {
    id: 3,
    question: "In Python, a [BLANK1] is an ordered, immutable collection, while a [BLANK2] is an ordered, mutable collection.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["tuple", "list", "set", "dictionary"]
  },
  {
    id: 4,
    question: "To get user input in Python, we use the [BLANK1]() function, and to display output, we use the [BLANK2]() function.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["input", "print", "get", "display"]
  },
  {
    id: 5,
    question: "The [BLANK1] operator is used for exponentiation in Python, while the [BLANK2] operator is used for floor division.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["**", "//", "^", "%"]
  },
  {
    id: 6,
    question: "In Python, [BLANK1] are used to store multiple items in a single variable, while [BLANK2] are used to store key-value pairs.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["lists", "dictionaries", "tuples", "sets"]
  },
  {
    id: 7,
    question: "The [BLANK1]() function is used to determine the data type of a variable, while the [BLANK2]() function returns the absolute value of a number.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["type", "abs", "typeof", "absolute"]
  },
  {
    id: 8,
    question: "In Python, the [BLANK1] operator is used for string concatenation, while the [BLANK2] operator is used for string repetition.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["+", "*", "&", "x"]
  },
  {
    id: 9,
    question: "To check if an item is in a list, we use the [BLANK1] keyword, and to check if it's not in the list, we use [BLANK2].",
    blanks: ["BLANK1", "BLANK2"],
    options: ["in", "not in", "contains", "excludes"]
  },
  {
    id: 10,
    question: "The [BLANK1] statement is used to exit a loop prematurely, while the [BLANK2] statement is used to skip the rest of the current iteration.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["break", "continue", "exit", "skip"]
  },
  {
    id: 11,
    question: "In Python, [BLANK1] is used to represent a null or non-existent value, while [BLANK2] is used to represent a boolean false value.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["None", "False", "Null", "0"]
  },
  {
    id: 12,
    question: "The [BLANK1] method is used to add an item to the end of a list, while the [BLANK2] method is used to remove and return an item at a specific index.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["append", "pop", "add", "remove"]
  },
  {
    id: 13,
    question: "In Python, the [BLANK1] operator is used for logical AND, while the [BLANK2] operator is used for logical OR.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["and", "or", "&&", "||"]
  },
  {
    id: 14,
    question: "To convert a string to lowercase, we use the [BLANK1]() method, and to convert it to uppercase, we use the [BLANK2]() method.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["lower", "upper", "toLower", "toUpper"]
  },
  {
    id: 15,
    question: "The [BLANK1] function is used to find the length of a sequence, while the [BLANK2] function returns the largest item in an iterable.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["len", "max", "size", "largest"]
  },
  {
    id: 16,
    question: "In Python, a [BLANK1] is created using curly braces {} and stores unique elements, while a [BLANK2] is created using square brackets [] and can contain duplicate elements.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["set", "list", "tuple", "dict"]
  },
  {
    id: 17,
    question: "The [BLANK1] method is used to split a string into a list, while the [BLANK2] method is used to join list elements into a string.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["split", "join", "separate", "combine"]
  },
  {
    id: 18,
    question: "In Python, the [BLANK1] statement is used to define a function, while the [BLANK2] statement is used to return a value from a function.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["def", "return", "function", "yield"]
  },
  {
    id: 19,
    question: "To open a file for reading in Python, we use the mode [BLANK1], and to open it for writing, we use the mode [BLANK2].",
    blanks: ["BLANK1", "BLANK2"],
    options: ["'r'", "'w'", "'a'", "'x'"]
  },
  {
    id: 20,
    question: "The [BLANK1] method is used to remove whitespace from the beginning and end of a string, while the [BLANK2] method is used to replace occurrences of a substring.",
    blanks: ["BLANK1", "BLANK2"],
    options: ["strip", "replace", "trim", "substitute"]
  }
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Draggable option component
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

// Droppable blank component
const DroppableBlank = ({ blank, onDrop, onDragOver }) => {
  return (
    <span
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="inline-block w-24 h-8 mx-1 border-b-2 border-muted-foreground"
    >
      {blank !== '' && (
        <span className="p-1 bg-secondary text-secondary-foreground rounded">{blank}</span>
      )}
    </span>
  );
};

export function PythonQuiz2() {
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
    const currentQuestionData = quizData[currentQuestion];
    const isCorrect = currentQuestionData.blanks.every(
      (blank) => answers[blank] === currentQuestionData.options[currentQuestionData.blanks.indexOf(blank)]
    );

    if (isCorrect) {
      setScore((prev) => prev + 1);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setAnswers({});
      } else {
        setShowScore(true);
      }
    } else {
      alert("Incorrect answer. Please try again!");
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
          Your score: {score} out of {quizData.length}
        </p>
        <Button onClick={resetQuiz}>Restart Quiz</Button>
      </Card>
    );
  }

  const currentQuestionData = quizData[currentQuestion];
  const shuffledOptions = shuffleArray([...currentQuestionData.options]);

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Question {currentQuestion + 1} of {quizData.length}
      </h2>
      <p className="mb-4">
        {currentQuestionData.question.split(/(\[BLANK\d+\])/).map((part, index) => {
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
      </p>
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
        {currentQuestion < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </Button>
    </Card>
  );
}