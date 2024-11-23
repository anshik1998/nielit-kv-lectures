'use client'

import { useState, useEffect, Suspense } from 'react'
import { Slide } from './Slide'
import { Quiz } from './Quiz'
import { InteractiveDemo } from './InteractiveDemo'
import { LectureFooter } from './layout/LectureFooter'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'

function PresentationContent({ lecture, initialSection = 0 }) {
  const searchParams = useSearchParams()
  const [currentSectionIndex, setCurrentSectionIndex] = useState(
    initialSection < (lecture?.sections?.length || 0) ? initialSection : 0
  )
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [showDemo, setShowDemo] = useState(null)

  // Listen for URL parameter changes
  useEffect(() => {
    if (!lecture?.sections) return

    const sectionParam = searchParams.get('section')
    const newSectionIndex = sectionParam ? parseInt(sectionParam) : 0

    if (newSectionIndex !== currentSectionIndex && newSectionIndex < lecture.sections.length) {
      setCurrentSectionIndex(newSectionIndex)
      setCurrentSlideIndex(0) // Reset slide index when section changes
      setShowDemo(null) // Reset demo state when section changes
    }
  }, [searchParams, lecture?.sections?.length, currentSectionIndex, lecture?.sections])

  if (!lecture || !lecture.sections) {
    return (
      <div className="flex flex-col min-h-[calc(100vh-7rem)]">
        <div className="flex-1 w-full max-w-4xl mx-auto flex items-center justify-center">
          <p className="text-muted-foreground">
            Lecture content not found.
          </p>
        </div>
        <LectureFooter />
      </div>
    );
  }

  const currentSection = lecture.sections[currentSectionIndex]
  const isLastSection = currentSectionIndex === lecture.sections.length - 1

  const handleNext = () => {
    if (currentSection.type === 'slides') {
      if (currentSlideIndex < currentSection.content.length - 1) {
        // Move to next slide in current section
        setCurrentSlideIndex(currentSlideIndex + 1)
      } else if (!isLastSection) {
        // Move to next section
        const nextSectionIndex = currentSectionIndex + 1

        // Update URL parameters
        const url = new URL(window.location.href)
        url.searchParams.set('section', nextSectionIndex.toString())
        window.history.pushState({}, '', url)

        setCurrentSectionIndex(nextSectionIndex)
        setCurrentSlideIndex(0)
      }
    }
  }

  const handlePrev = () => {
    if (currentSection.type === 'slides') {
      if (currentSlideIndex > 0) {
        // Move to previous slide in current section
        setCurrentSlideIndex(currentSlideIndex - 1)
      } else if (currentSectionIndex > 0) {
        // Move to previous section
        const prevSectionIndex = currentSectionIndex - 1

        // Update URL parameters
        const url = new URL(window.location.href)
        url.searchParams.set('section', prevSectionIndex.toString())
        window.history.pushState({}, '', url)

        setCurrentSectionIndex(prevSectionIndex)
        const prevSection = lecture.sections[prevSectionIndex]
        if (prevSection.type === 'slides') {
          setCurrentSlideIndex(prevSection.content.length - 1)
        } else {
          setCurrentSlideIndex(0)
        }
      }
    }
  }

  const handleQuizComplete = () => {
    if (!isLastSection) {
      const nextSectionIndex = currentSectionIndex + 1

      // Update URL parameters
      const url = new URL(window.location.href)
      url.searchParams.set('section', nextSectionIndex.toString())
      window.history.pushState({}, '', url)

      setCurrentSectionIndex(nextSectionIndex)
      setCurrentSlideIndex(0)
    }
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-7rem)]">
      <div className="flex-1 w-full max-w-4xl mx-auto">
        {currentSection.type === 'slides' ? (
          showDemo ? (
            <InteractiveDemo
              demo={showDemo}
              onEnd={() => setShowDemo(null)}
            />
          ) : (
            <Slide
              {...currentSection.content[currentSlideIndex]}
              onNext={handleNext}
              onPrev={handlePrev}
              onStartDemo={(demo) => setShowDemo(demo)}
              isFirst={currentSectionIndex === 0 && currentSlideIndex === 0}
              isLast={isLastSection && currentSlideIndex === currentSection.content.length - 1}
            />
          )
        ) : (
          <Quiz
            questions={currentSection.questions}
            onComplete={handleQuizComplete}
            showNavigation={!isLastSection}
            onPrev={currentSectionIndex > 0 ? () => {
              setCurrentSectionIndex(currentSectionIndex - 1)
              const prevSection = lecture.sections[currentSectionIndex - 1]
              if (prevSection.type === 'slides') {
                setCurrentSlideIndex(prevSection.content.length - 1)
              }
            } : undefined}
          />
        )}
      </div>
      <LectureFooter />
    </div>
  );
}

// Wrapper component with Suspense
export function Presentation({ lecture, initialSection = 0 }) {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-[calc(100vh-7rem)]">
        <div className="flex-1 w-full max-w-4xl mx-auto flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <PresentationContent lecture={lecture} initialSection={initialSection} />
    </Suspense>
  )
}

