'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight, BookOpen, GraduationCap, ChevronDown } from "lucide-react";
import { useState, Suspense } from "react";

function SidebarNavContent({ lectures }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentSection = searchParams.get('section');

    // Initialize all lectures as expanded
    const [expandedLectures, setExpandedLectures] = useState(
        lectures.reduce((acc, lecture) => ({
            ...acc,
            [lecture.id]: true
        }), {})
    );

    const toggleLecture = (lectureId) => {
        setExpandedLectures(prev => ({
            ...prev,
            [lectureId]: !prev[lectureId]
        }));
    };

    return (
        <nav className="p-4 space-y-4 overflow-x-hidden">
            {lectures.map((lecture) => (
                <div key={lecture.id} className="space-y-2">
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            className={cn(
                                "w-full justify-start text-left font-semibold",
                                pathname.includes(`/lecture/${lecture.id}`) &&
                                "bg-sidebar-accent text-sidebar-accent-foreground"
                            )}
                            onClick={() => toggleLecture(lecture.id)}
                        >
                            {expandedLectures[lecture.id] ? (
                                <ChevronDown className="mr-2 h-4 w-4" />
                            ) : (
                                <ChevronRight className="mr-2 h-4 w-4" />
                            )}
                            <BookOpen className="mr-2 h-4 w-4" />
                            {lecture.title}
                        </Button>
                    </div>
                    {expandedLectures[lecture.id] && (
                        <div className="ml-4 space-y-1">
                            {lecture.sections.map((section, index) => (
                                <Link
                                    key={index}
                                    href={`/lecture/${lecture.id}?section=${index}`}
                                >
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className={cn(
                                            "w-full justify-start text-left text-sm",
                                            pathname === `/lecture/${lecture.id}` &&
                                            currentSection === index.toString() &&
                                            "bg-sidebar-accent/50 text-sidebar-accent-foreground"
                                        )}
                                    >
                                        {section.type === 'quiz' ? (
                                            <GraduationCap className="mr-2 h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="mr-2 h-4 w-4" />
                                        )}
                                        {section.title}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}

export function SidebarNav({ lectures }) {
    return (
        <Suspense fallback={
            <nav className="p-4 space-y-4">
                <div className="animate-pulse space-y-4">
                    <div className="h-10 bg-muted rounded"></div>
                    <div className="h-10 bg-muted rounded"></div>
                    <div className="h-10 bg-muted rounded"></div>
                </div>
            </nav>
        }>
            <SidebarNavContent lectures={lectures} />
        </Suspense>
    );
} 