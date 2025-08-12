import { useState, useEffect } from 'react';

interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  portfolio: string;
  bio: string;
  education: {
    degree: string;
    school: string;
    period: string;
    gpa: string;
    relevantCourses: string[];
  };
  experience: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    details: string[];
  }>;
  skills: Record<string, string[]>;
  projects: Array<{
    title: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    thumbnail: string;
    githubLink?: string;
    liveLink?: string;
    demoLink?: string;
  }>;
}

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        const portfolioData = await response.json();
        setData(portfolioData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};