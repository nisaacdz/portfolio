import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Play } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  thumbnail: string;
  githubLink?: string;
  liveLink?: string;
  demoLink?: string;
}

interface ProjectsProps {
  data: Project[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(e => console.error("Autoplay failed", e));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const isVideo = project.thumbnail.endsWith(".mp4");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden" // overflow-hidden is key for rounded corners
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          {/* ✨ CLEANER IMPLEMENTATION ✨ */}
          <div className="mb-4">
            <AspectRatio ratio={16 / 9} className="rounded-lg">
              {isVideo ? (
                <video
                  ref={videoRef}
                  src={`/portfolio/thumbnails/${project.thumbnail}`}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover" // object-cover works perfectly here
                />
              ) : (
                <img
                  src={`/portfolio/thumbnails/${project.thumbnail}`}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover"
                />
              )}
            </AspectRatio>
          </div>
          
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 pt-0"> {/* Adjusted padding to avoid large gap */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.githubLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-3 w-3" />
                  Code
                </a>
              </Button>
            )}
            {project.liveLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Live
                </a>
              </Button>
            )}
            {project.demoLink && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-1 h-3 w-3" />
                  Demo
                </a>
              </Button>
            )}
            
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="default" size="sm">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">{project.title}</DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Detailed project information
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {project.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.githubLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-1 h-3 w-3" />
                          Watch Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = ({ data }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">Featured work and technical achievements</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};