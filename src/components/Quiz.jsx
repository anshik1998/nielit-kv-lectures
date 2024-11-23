'use client';
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Quiz({ questions, onComplete, showNavigation, onPrev }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <Card className="p-6 sm:p-8 h-[calc(100vh-15rem)] flex flex-col bg-card/50 backdrop-blur-sm">
      {showScore ? (
        <div className="text-center flex-grow flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Quiz Completed!</h2>
          <p className="text-2xl text-card-foreground mb-8">
            You scored {score} out of {questions.length}
          </p>
          {showNavigation && (
            <div className="flex justify-center gap-4">
              {onPrev && (
                <Button variant="outline" onClick={onPrev}>
                  Back to Previous Section
                </Button>
              )}
              <Button onClick={onComplete}>
                Continue to Next Section
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
            Question {currentQuestion + 1}
          </h2>
          <p className="mb-6 text-lg sm:text-xl text-card-foreground">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-3 overflow-y-auto flex-grow pr-2">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleAnswerClick(index)}
                className="w-full justify-start h-auto py-3 text-left text-base"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

