import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

export function Slide({
  title,
  content,
  demo,
  onNext,
  onPrev,
  onStartDemo,
  isFirst,
  isLast
}) {
  const isMobile = useIsMobile()

  return (
    <Card className="p-6 sm:p-8 h-[calc(100vh-15rem)] flex flex-col bg-card/50 backdrop-blur-sm">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{title}</h2>
      <ul className="list-disc pl-6 mb-6 flex-grow overflow-y-auto space-y-2 text-card-foreground">
        {content.map((item, index) => (
          <div key={index} className="mb-2">{item}</div>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 justify-between mt-4">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={isFirst}
          size={isMobile ? "sm" : "default"}
        >
          Previous
        </Button>
        {demo && (
          <Button
            variant="secondary"
            onClick={() => onStartDemo(demo)}
            size={isMobile ? "sm" : "default"}
          >
            Start {demo.title}
          </Button>
        )}
        <Button
          onClick={onNext}
          size={isMobile ? "sm" : "default"}
        >
          {isLast ? "Start Quiz" : "Next"}
        </Button>
      </div>
    </Card>
  );
}

