import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  data: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">{data.name}</h3>
        
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a href={`mailto:${data.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {currentYear} {data.name}. Built with React, TypeScript, and Tailwind CSS.
        </div>
      </div>
    </motion.footer>
  );
};