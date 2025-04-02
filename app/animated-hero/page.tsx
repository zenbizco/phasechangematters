import { HeroDemo } from "@/components/ui/demo";
import { Toaster } from "@/components/ui/sonner";

export default function AnimatedHeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <Toaster position="top-center" />
      <div className="container mx-auto">
        <header className="py-6 border-b mb-8">
          <h1 className="text-2xl font-bold">Animated Hero Demo</h1>
          <p className="text-muted-foreground">Showcasing the animated hero component</p>
        </header>
        
        <main>
          <HeroDemo />
        </main>
      </div>
    </div>
  );
}
