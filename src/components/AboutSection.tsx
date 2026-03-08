import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Cpu, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning Models" },
  { icon: Code, label: "AI-driven Applications" },
  { icon: Cpu, label: "Intelligent Automation" },
  { icon: BarChart3, label: "Data Analytics Solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">About Me</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">Who I Am</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am pursuing a BE in Electronics & Telecommunication Engineering from NMIET Pune and a BS in Data Science & Applications from IIT Madras.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong interest in Data Analytics, Artificial Intelligence, Machine Learning, and Electronics & Telecommunication, I aim to apply my technical and analytical skills to solve complex challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am an emerging professional in AI/ML and software development, passionate about building intelligent systems and solving real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in Python, C, C++, AI frameworks, and web development, I constantly explore new technologies and build innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-xl p-5 hover-glow text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-heading font-semibold text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
