import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useRef } from "react";
import { Project } from "@/types";

export default function ProjectCard({
  project: {
    title,
    summary,
    details,
    repositoryUrl,
    demoUrl,
    thumbnailUrl,
    technologies,
    collaborators,
    deployments,
    status,
    tags,
    metrics,
  },
  active,
}: {
  project: Project;
  active: boolean;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
      {/* Status & Tags Header */}
      <div className="absolute top-0 z-20 flex w-full items-start justify-between p-2">
        <div className="flex flex-wrap gap-1">
          {tags?.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-2 py-1 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {status && (
          <Badge
            variant={status === "active" ? "default" : "destructive"}
            className="rounded-sm px-2 py-1 text-xs font-semibold"
          >
            {status.toUpperCase()}
          </Badge>
        )}
      </div>

      {/* Media Section */}
      <div className="relative bg-muted">
        <AspectRatio ratio={16 / 9}>
          <ProjectMedia
            thumbnailUrl={thumbnailUrl}
            demoUrl={demoUrl}
            keepPlaying={active}
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">
        <header className="mb-3">
          <div className="flex items-start justify-between gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="hover:underline focus-visible:underline focus-visible:outline-none">
                  <h3 className="text-lg font-semibold leading-tight">
                    {title}
                  </h3>
                </div>
              </TooltipTrigger>
              <TooltipContent>View project details</TooltipContent>
            </Tooltip>

            {repositoryUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <a
                      href={repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="h-4 w-4" /* GitHub icon */ />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View source code</TooltipContent>
              </Tooltip>
            )}
          </div>

          {summary && (
            <p className="mt-1.5 text-sm text-muted-foreground">{summary}</p>
          )}
        </header>

        {details?.length > 0 && (
          <ul className="mb-4 flex-1 space-y-1.5 text-sm">
            {details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start text-muted-foreground before:mr-2 before:mt-1.5 before:block before:h-1 before:w-1 before:rounded-full before:bg-current"
              >
                {detail}
              </li>
            ))}
          </ul>
        )}

        {/* Metadata Grid */}
        <div className="grid gap-3 border-t pt-3 text-sm">
          {/* Technologies */}
          {technologies?.length > 0 && (
            <div>
              <h4 className="mb-1.5 font-medium">Built With</h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div>
                        <img
                          src={tech.iconUrl}
                          alt=""
                          className="h-3.5 w-3.5"
                        />
                        <span className="sr-only md:not-sr-only">
                          {tech.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{tech.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}

          {/* Collaborators */}
          {collaborators?.length > 0 && (
            <div>
              <h4 className="mb-1.5 font-medium">Collaborators</h4>
              <div className="flex -space-x-2">
                {collaborators.map((person, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <Avatar className="h-8 w-8 border-2 border-background hover:z-10 hover:scale-110">
                        <AvatarImage src={person.avatarUrl} />
                        <AvatarFallback>{person.name[0]}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>{person.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}

          {/* Deployments */}
          {deployments?.length > 0 && (
            <div>
              <h4 className="mb-1.5 font-medium">Live At</h4>
              <div className="flex flex-wrap gap-1.5">
                {deployments.map((deploy, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1.5 px-2.5"
                    asChild={!!deploy.url}
                  >
                    {deploy.url ? (
                      <a
                        href={deploy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={deploy.iconUrl}
                          alt=""
                          className="h-3.5 w-3.5"
                        />
                        <span>{deploy.name}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 opacity-70">
                        <img
                          src={deploy.iconUrl}
                          alt=""
                          className="h-3.5 w-3.5"
                        />
                        <span>{deploy.name}</span>
                      </div>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {metrics && (
            <Card className="p-3">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-semibold text-primary">
                      {value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </article>
  );
}

interface ProjectMediaProps {
  thumbnailUrl: string;
  demoUrl?: string;
  keepPlaying?: boolean;
}

const ProjectMedia = ({
  thumbnailUrl,
  demoUrl,
  keepPlaying,
}: ProjectMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (keepPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [keepPlaying]);

  return (
    <div className="w-full h-full bg-red-500">
      {keepPlaying ? (
        <img
          src={thumbnailUrl}
          alt="Project preview"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          ref={videoRef}
          src={demoUrl}
          poster={thumbnailUrl}
          muted
          loop
          className="h-full w-full object-cover"
          playsInline
          disablePictureInPicture
        />
      )}
    </div>
  );
};
