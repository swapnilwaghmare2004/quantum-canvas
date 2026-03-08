import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "primary",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    color: "secondary",
    skills: ["React", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib", "OpenCV"],
  },
  {
    title: "AI & Machine Learning",
    color: "accent",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "RAG", "Prompt Engineering", "Generative AI"],
  },
  {
    title: "Technologies",
    color: "primary",
    skills: ["Artificial Intelligence", "Data Analytics", "IoT", "VLSI", "Full Stack Development", "Cloud Computing (AWS)"],
  },
  {
    title: "Tools",
    color: "secondary",
    skills: ["Git", "GitHub", "MATLAB", "PySpark", "Dask", "Jupyter Notebook"],
  },
  {
    title: "Electronics & Embedded Systems",
    color: "accent",
    skills: ["MATLAB", "Xilinx", "NI Multisim", "Tinkercad", "Keil uVision 5", "Arduino IDE", "Circuit Design", "Cisco Packet Tracer"],
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
  primary: { border: "border-primary/30 hover:border-primary/60", bg: "bg-primary/10", text: "text-primary" },
  secondary: { border: "border-secondary/30 hover:border-secondary/60", bg: "bg-secondary/10", text: "text-secondary" },
  accent: { border: "border-accent/30 hover:border-accent/60", bg: "bg-accent/10", text: "text-accent" },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Skills</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">What I Know</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const cc = colorClasses[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card rounded-xl p-6 hover-glow"
              >
                <h4 className={`font-heading text-lg font-bold ${cc.text} mb-4`}>{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + i * 0.05 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-body border ${cc.border} ${cc.bg} ${cc.text} transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
