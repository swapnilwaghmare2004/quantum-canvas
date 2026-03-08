import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BE Electronics & Telecommunication Engineering",
    institution: "NMIET Pune",
    period: "2022 – Present",
  },
  {
    degree: "BS Data Science & Applications",
    institution: "IIT Madras",
    period: "2023 – Present",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Central Board of Secondary Education",
    period: "2020 – 2022",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Education</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">Academic Background</h3>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass-card rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary text-sm font-body mt-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs font-body mt-1">{edu.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
