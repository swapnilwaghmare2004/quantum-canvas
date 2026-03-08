import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  "Electronics & Telecommunication Engineer",
  "AI Enthusiast",
  "Machine Learning Developer",
  "Data Analyst",
  "Full Stack Developer",
  "IoT Engineer",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/swapnilwaghmare2004", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/swapnil-waghmare-103b93259", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SwapnilTuk8188", label: "Twitter" },
  { icon: Mail, href: "mailto:waghmareswapnil563@gmail.com", label: "Email" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="section-container flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Swapnil Waghmare</span>
          </h1>

          <div className="h-10 mb-6">
            <span className="font-display text-xl sm:text-2xl text-primary neon-text">
              {displayText}
            </span>
            <span className="border-r-2 border-primary ml-1 animate-typing-cursor">&nbsp;</span>
          </div>

          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            An Electronics & Telecommunication Engineer passionate about Artificial Intelligence,
            Machine Learning, Data Analytics, and Full Stack Development.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://drive.google.com/file/d/1DbPRJr5Ez7HzTgpK1MdCqjEnmqNUNPRl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading font-semibold text-primary-foreground bg-primary hover:shadow-[var(--glow-blue)] transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden neon-border animate-float relative">
            <img
              src={profilePhoto}
              alt="Swapnil Waghmare"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
          <div className="absolute -inset-4 rounded-full border border-primary/10 animate-glow-pulse" />
          <div className="absolute -inset-8 rounded-full border border-secondary/10 animate-glow-pulse" style={{ animationDelay: "1s" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
