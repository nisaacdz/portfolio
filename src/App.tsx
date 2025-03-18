import PageLoader from "@/components/custom/PageLoader";
import PageFailure from "@/components/custom/PageFailure";
import MainPage from "@/components/custom/MainPage";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePortfolioOwner } from "./hooks/usePortfolioOwner";

export default function App() {
  const { person, loading, error } = usePortfolioOwner();
  return (
    <main className="w-screen h-screen bg-background">
      <TooltipProvider>
        {loading ? (
          <PageLoader />
        ) : error || !person ? (
          <PageFailure error={error} />
        ) : (
          <MainPage person={person} />
        )}
      </TooltipProvider>
    </main>
  );
}
