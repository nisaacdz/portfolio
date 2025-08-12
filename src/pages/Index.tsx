import { useEffect } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { data, loading, error } = usePortfolioData();

  // Apply dark mode based on system preference
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Set initial theme
    updateTheme(darkModeQuery);
    
    // Listen for changes
    darkModeQuery.addEventListener('change', updateTheme);
    
    return () => darkModeQuery.removeEventListener('change', updateTheme);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-destructive">Error</h1>
          <p className="text-muted-foreground">{error || "Failed to load portfolio data"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header data={data} />
      <main>
        <Hero data={data} />
        <Experience data={data.experience} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
      </main>
      <Footer data={data} />
    </div>
  );
};

export default Index;
