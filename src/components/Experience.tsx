import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  details: string[];
}

interface ExperienceProps {
  data: ExperienceItem[];
}

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-border">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground">
          <span className="font-medium">{experience.company}</span>
          <span className="text-sm">{experience.location}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
        
        <ul className="space-y-2">
          {experience.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="text-sm text-foreground/80 flex items-start">
              <span className="mr-2 mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const Experience = ({ data }: ExperienceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">Professional journey and key contributions</p>
        </motion.div>

        <div className="relative">
          {data.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};