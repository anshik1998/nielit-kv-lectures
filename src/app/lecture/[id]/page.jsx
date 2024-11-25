'use client';

import { Suspense } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SidebarNav } from '@/components/navigation/SidebarNav';
import { Presentation } from '@/components/Presentation';
import { lectures, getLecture } from '@/data/lectures';
import { useParams, useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';

function LecturePageContent() {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const sectionParam = searchParams.get('section');
    const sectionIndex = sectionParam ? parseInt(sectionParam) : 0;

    const lecture = getLecture(id);

    if (!lecture) {
        notFound();
    }

    return (
        <MainLayout sidebar={<SidebarNav lectures={lectures} />}>
            <main className="flex flex-col min-h-screen p-4 sm:p-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-sidebar-primary">
                    {lecture.title}
                </h1>
                <Presentation
                    lecture={lecture}
                    initialSection={sectionIndex}
                />
            </main>
        </MainLayout>
    );
}

export default function LecturePage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-muted-foreground">Loading lecture...</p>
            </div>
        }>
            <LecturePageContent />
        </Suspense>
    );
} 