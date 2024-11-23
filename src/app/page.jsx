import { MainLayout } from '@/components/layout/MainLayout';
import { SidebarNav } from '@/components/navigation/SidebarNav';
import { lectures } from '@/data/lectures';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <MainLayout sidebar={<SidebarNav lectures={lectures} />}>
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl space-y-8">
          {/* NIELIT Logo and Header */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/nielit-logo.png"
              alt="NIELIT Logo"
              width={150}
              height={150}
              className="mb-4"
            />
            <div className="text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                National Institute of Electronics and Information Technology (NIELIT)
              </h1>
              <p className="text-lg text-muted-foreground">
                Delhi Centre
              </p>
              <p className="text-sm text-muted-foreground italic">
                An Autonomous Scientific Society of Ministry of Electronics and Information Technology (MeitY), Govt. of India
              </p>
            </div>
          </div>

          {/* Course Information Card */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-sidebar-primary">
              AI/ML using Python
            </h2>
            <div className="space-y-4 text-center">
              <div className="flex justify-center items-center space-x-2">
                <span className="text-muted-foreground">Course Duration:</span>
                <span className="font-semibold text-primary">30 hours per classroom</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Select a lecture from the sidebar to begin your learning journey
              </p>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-primary/80 bg-background/50 backdrop-blur-sm border-t border-border">
        <div className="container">
          Developed with ❤️ by{" "}
          <a
            href="https://linkedin.com/in/anshik1998"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Anshik Bansal
          </a>
          <br />
          Guest Faculty at NIELIT, Delhi Centre
        </div>
      </footer>
    </MainLayout>
  );
}

