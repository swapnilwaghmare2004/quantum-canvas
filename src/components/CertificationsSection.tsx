import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Python Certified", issuer: "Cisco Networking Academy", link: "https://drive.google.com/file/d/15K-8PAMpSYqlpTq6f54-Ht753YPpLSuK" },
  { name: "Data Science", issuer: "Cisco Networking Academy", link: "https://drive.google.com/file/d/1uJGaP8sr8SNohflw4MDKD9cxqHcpI3ho" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft", link: "https://drive.google.com/file/d/12THFYNcO148e8rW5kqZioUL6qKsuH8G3" },
  { name: "Machine Learning Fundamentals", issuer: "Microsoft", link: "https://drive.google.com/file/d/1e-LA-M_xkd-vbxErj0UWhqbvrDyFrIuq" },
  { name: "Python Essentials 2", issuer: "Cisco Networking Academy", link: undefined },
  { name: "Introduction to IoT", issuer: "Cisco Networking Academy", link: "https://drive.google.com/file/d/1gtB0bbPK-duLc7ATmI-hg_7LMnHwWDs5" },
  { name: "AWS re/Start Graduate", issuer: "Amazon Web Services", link: "https://www.credly.com/badges/0b1c8b18-7b54-4f1f-b6b2-29755e0a8dad" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Certifications</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">Achievements</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 hover-glow group"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-heading text-sm font-bold text-foreground">{cert.name}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline"
                    >
                      View <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
