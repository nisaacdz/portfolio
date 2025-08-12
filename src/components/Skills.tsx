import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  data: Record<string, string[]>;
}

const SkillCategory = ({ 
  title, 
  skills, 
  index 
}: { 
  title: string; 
  skills: string[]; 
  index: number; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1 + skillIndex * 0.05 
            }}
          >
            <Badge variant="secondary" className="text-xs font-medium">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = ({ data }: SkillsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and expertise</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(data).map(([category, skills], index) => (
            <SkillCategory
              key={category}
              title={category}
              skills={skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};