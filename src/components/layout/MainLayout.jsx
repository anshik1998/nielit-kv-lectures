'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from 'next/image';
import Link from 'next/link';

export function MainLayout({ children, sidebar }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-background to-muted">
            {/* Overlay for mobile */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-72 bg-background border-r border-border transform transition-transform duration-200 ease-in-out",
                    isMobile && !isSidebarOpen && "-translate-x-full"
                )}
            >
                {/* Sidebar Header with Logo */}
                <div className="flex flex-col border-b border-border bg-background">
                    <div className="flex items-center justify-between h-16 px-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/nielit-logo.png"
                                alt="NIELIT Logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                            <span className="font-semibold text-md text-foreground">
                                Delhi Centre
                            </span>
                        </Link>
                        {isMobile && (
                            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        )}
                    </div>
                    <div className="px-4 py-2 border-t border-border">
                        <h2 className="text-sm font-medium text-muted-foreground">
                            Course Content
                        </h2>
                    </div>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-7rem)] bg-background">
                    {sidebar}
                </div>
            </aside>

            {/* Main Content */}
            <div className={cn(
                "flex-1 transition-all duration-200 ease-in-out",
                !isMobile && "ml-64",
            )}>
                {isMobile && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="fixed top-4 left-4 z-40"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                )}
                {children}
            </div>
        </div>
    );
} 