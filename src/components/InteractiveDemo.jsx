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

const DEMO_COMPONENTS = {
  "Meet an AI Assistant": AIAssistantDemo,
  "How AI Learns": AILearningDemo,
  "AI Scavenger Hunt": AIScavengerDemo,
  "Time Travel Through AI History": AITimelineDemo,
  "Build Your Own Neural Network": NeuralNetworkDemo,
  "AI Vision Explorer": ComputerVisionDemo,
  "Language Games with AI": NLPGamesDemo,
  "AI Detective": AIDetectiveDemo,
  "AI Domain Workshop": DomainWorkshopDemo
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

