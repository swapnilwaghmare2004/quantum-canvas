import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const repos = [
  { name: "NSE-NIFTY-50-Stock-Data-Analysis", url: "https://github.com/swapnilwaghmare2004/NSE-NIFTY-50-Stock-Data-Analysis-and-Visualization-Using-Python" },
  { name: "Real-Time-Traffic-Detection-YOLOv8", url: "https://github.com/swapnilwaghmare2004/Real-Time-Traffic-Detection-with-YOLOv8-OpenCV-CUDA-main" },
  { name: "Wine-Quality-Prediction-ML", url: "https://github.com/swapnilwaghmare2004/Wine-Quality-Prediction-ML" },
  { name: "Sahyadri-Quant-Capital", url: "https://github.com/swapnilwaghmare2004/Sahyadri-Quant-Capital" },
  { name: "Map-Navigate-India", url: "https://github.com/swapnilwaghmare2004/Map-Navigate-India" },
];

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">GitHub</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">Open Source</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=swapnilwaghmare2004&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117"
              alt="GitHub Stats"
              className="rounded-xl neon-border max-w-full"
              loading="lazy"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=swapnilwaghmare2004&theme=tokyonight&hide_border=true&background=0d1117"
              alt="GitHub Streak"
              className="rounded-xl neon-border max-w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=swapnilwaghmare2004&theme=tokyo-night&hide_border=true&bg_color=0d1117"
              alt="Contribution Graph"
              className="rounded-xl neon-border max-w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Top Repos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-heading text-lg font-bold text-foreground text-center mb-6">Top Repositories</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="glass-card rounded-lg p-4 hover-glow flex items-center gap-3 group"
                >
                  <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  <span className="text-sm font-body text-foreground group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground ml-auto flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="text-center">
            <motion.a
              href="https://github.com/swapnilwaghmare2004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full neon-border text-primary font-heading text-sm hover:bg-primary/10 transition-all"
            >
              <Github size={16} />
              View GitHub Profile
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
