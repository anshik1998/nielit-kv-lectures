export function LectureFooter() {
    return (
        <footer className="py-2 px-4 bg-background/50 backdrop-blur-sm border-t border-border">
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground text-center sm:text-left">
                    <div className="font-semibold text-primary">
                        National Institute of Electronics and Information Technology (NIELIT)
                    </div>
                    <div>Delhi Centre</div>
                </div>
                <div className="text-sm text-primary/80 text-center sm:text-right">
                    <div>
                        Developed with ❤️ by{" "}
                        <a
                            href="https://linkedin.com/in/anshik1998"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:text-primary/80 transition-colors"
                        >
                            Anshik Bansal
                        </a>
                    </div>
                    <div>Faculty at NIELIT, Delhi Centre</div>
                </div>
            </div>
        </footer>
    );
} 