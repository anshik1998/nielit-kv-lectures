'use client';
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AIAssistantDemo } from "./demos/AIAssistantDemo"
import { AILearningDemo } from "./demos/AILearningDemo"
import { AIScavengerDemo } from "./demos/AIScavengerDemo"
import { AITimelineDemo } from "./demos/AITimelineDemo"
import { NeuralNetworkDemo } from "./demos/NeuralNetworkDemo"
import { ComputerVisionDemo } from "./demos/ComputerVisionDemo"
import { NLPGamesDemo } from "./demos/NLPGamesDemo"
import { AIDetectiveDemo } from "./demos/AIDetectiveDemo"
import { DomainWorkshopDemo } from "./demos/DomainWorkshopDemo"
import { SymbolMasterDemo } from "./demos/SymbolMasterDemo"
import { AlgorithmBuilderDemo } from "./demos/AlgorithmBuilderDemo"
import { RobotInstructionsDemo } from "./demos/RobotInstructionsDemo"
import { ProblemSolverDemo } from "./demos/ProblemSolverDemo"
import { TaskMasterDemo } from "./demos/TaskMasterDemo"
import { FlowchartBuilderDemo } from "./demos/FlowchartBuilderDemo"
import { HelloPythonDemo } from "./demos/HelloPythonDemo"
import { VariableExplorerDemo } from "./demos/VariableExplorerDemo"
import { NumberGamesDemo } from "./demos/NumberGamesDemo"
import { StringMagicDemo } from "./demos/StringMagicDemo"
import { ListBuilderDemo } from "./demos/ListBuilderDemo"
import { ChatWithPythonDemo } from "./demos/ChatWithPythonDemo"
import { NumberWizardDemo } from "./demos/NumberWizardDemo"
import { BuildABotDemo } from "./demos/BuildABotDemo"
import { PythonQuiz1 } from './demos/PythonQuiz1';
import { PythonQuiz2 } from './demos/PythonQuiz2';
import { PythonQuiz3 } from './demos/PythonQuiz3';

const DEMO_COMPONENTS = {
  "Meet an AI Assistant": AIAssistantDemo,
  "How AI Learns": AILearningDemo,
  "AI Scavenger Hunt": AIScavengerDemo,
  "Time Travel Through AI History": AITimelineDemo,
  "Build Your Own Neural Network": NeuralNetworkDemo,
  "AI Vision Explorer": ComputerVisionDemo,
  "Language Games with AI": NLPGamesDemo,
  "AI Detective": AIDetectiveDemo,
  "AI Domain Workshop": DomainWorkshopDemo,
  "Symbol Master": SymbolMasterDemo,
  "Algorithm Builder": AlgorithmBuilderDemo,
  "Robot Instructions": RobotInstructionsDemo,
  "Problem Solver": ProblemSolverDemo,
  "Task Master": TaskMasterDemo,
  "Flowchart Builder": FlowchartBuilderDemo,
  "Hello Python!": HelloPythonDemo,
  "Variable Explorer": VariableExplorerDemo,
  "Number Games": NumberGamesDemo,
  "String Magic": StringMagicDemo,
  "List Builder": ListBuilderDemo,
  "Chat with Python": ChatWithPythonDemo,
  "Number Wizard": NumberWizardDemo,
  "Build-A-Bot": BuildABotDemo,
  "Python Programming": PythonQuiz1,
  "Python Programming 2": PythonQuiz2,
  "Python Programming 3": PythonQuiz3
};

export function InteractiveDemo({ demo, onEnd }) {
  const DemoComponent = DEMO_COMPONENTS[demo.title];

  return (
    <Card className="p-6 sm:p-8 h-[calc(100vh-10rem)] flex flex-col bg-card/50 backdrop-blur-sm">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
        {demo.title}
      </h2>
      <p className="mb-4 text-card-foreground">
        {demo.description}
      </p>
      <div className="flex-grow overflow-y-auto">
        {DemoComponent && <DemoComponent />}
      </div>
      <Button variant="outline" onClick={onEnd} className="mt-4">
        End Demo
      </Button>
    </Card>
  );
}

