import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const internships = [
  { company: "CODTECH IT Solutions Pvt Ltd", role: "Data Analysis Intern" },
  { company: "SkillDzire", role: "VLSI Intern" },
];

const InternshipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Experience</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">Internships</h3>
        </motion.div>

        <div className="relative max-w-xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-secondary to-accent" />

          {internships.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-secondary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary" />
              </div>

              <div className="glass-card rounded-xl p-6 hover-glow neon-border-purple">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground">{item.company}</h4>
                    <p className="text-secondary text-sm font-body mt-1">{item.role}</p>
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

export default InternshipsSection;
