import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Line Follower Robot",
    description: "Arduino-based robot that follows a black line using SmartElex RLS-6 sensors and DRV8833 motor driver.",
    tags: ["Arduino", "IoT", "Robotics"],
    link: "https://drive.google.com/file/d/1bD-Z7J2PjWtKNm--1z1C0zKpkf2-3Jxc/view",
  },
  {
    title: "Predictive Analysis Using ML",
    description: "ML regression model predicting housing prices.",
    tags: ["Python", "Machine Learning", "Regression"],
    link: "https://colab.research.google.com/drive/1TTbnIALgxtc25p1nSR3s5Hbe7UHDOVr8",
  },
  {
    title: "Airline Big Data Analysis",
    description: "Analyzed airline datasets using PySpark and Dask.",
    tags: ["PySpark", "Dask", "Big Data"],
    link: "https://colab.research.google.com/drive/13pSw5LUdEeUdBIvx0zEIUFPpJMUxu8xL",
  },
  {
    title: "Attendance Radius Recognition",
    description: "WiFi based attendance system using ESP module updating Excel in real time.",
    tags: ["IoT", "ESP", "WiFi"],
    link: "https://drive.google.com/file/d/10KGfYYeldbV-Bis787QCX0NvFTHmESzC/view",
  },
  {
    title: "Automatic Overload Detector",
    description: "Overload detection system for four wheelers.",
    tags: ["Electronics", "IoT", "Sensors"],
    link: "https://drive.google.com/file/d/1JgC1OnNOTekHmE3oVpjd9lyquk1D33-P",
  },
  {
    title: "Object Detection using MATLAB",
    description: "Object detection and edge enhancement using MATLAB.",
    tags: ["MATLAB", "Computer Vision", "Image Processing"],
    link: "https://drive.google.com/file/d/1P7_qzMMTqYK47ajEPINE4Qgcp_VHyBiO",
  },
  {
    title: "NSE NIFTY 50 Stock Analysis",
    description: "Stock data analysis and visualization using Python.",
    tags: ["Python", "Data Analytics", "Finance"],
    link: "https://github.com/swapnilwaghmare2004/NSE-NIFTY-50-Stock-Data-Analysis-and-Visualization-Using-Python",
  },
  {
    title: "Real Time Traffic Detection YOLOv8",
    description: "Traffic detection using YOLOv8, OpenCV, and CUDA.",
    tags: ["YOLOv8", "Deep Learning", "OpenCV"],
    link: "https://github.com/swapnilwaghmare2004/Real-Time-Traffic-Detection-with-YOLOv8-OpenCV-CUDA-main",
  },
  {
    title: "Wine Quality Prediction ML",
    description: "Machine learning model for wine quality prediction.",
    tags: ["Python", "ML", "Classification"],
    link: "https://github.com/swapnilwaghmare2004/Wine-Quality-Prediction-ML",
  },
  {
    title: "Traffic Light Controller 8051",
    description: "Traffic light controller using 8051 microcontroller.",
    tags: ["8051", "Embedded", "Electronics"],
    link: "https://drive.google.com/file/d/1jmwEFFszcV4H7dfNIQqdXcfYg7S4YFO6",
  },
  {
    title: "IoT Smart Water Level Indicator",
    description: "Smart water level indicator using IoT.",
    tags: ["IoT", "Sensors", "Arduino"],
    link: "https://drive.google.com/file/d/1fns74aw-r2TlkILIbshy-mGXHau7AnIc",
  },
  {
    title: "Cloud Temperature Monitoring",
    description: "Cloud enabled temperature monitoring system.",
    tags: ["Cloud", "IoT", "Monitoring"],
    link: "https://drive.google.com/file/d/1C-wSaZvvg3-tVWcKWG2xGLY4NrpR7zGR",
  },
  {
    title: "Sahyadri Quant Capital Website",
    description: "Website for Sahyadri Quant Capital.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://swapnilwaghmare2004.github.io/Sahyadri-Quant-Capital/",
  },
  {
    title: "Map Navigate India Website",
    description: "Interactive map navigation website for India.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://swapnilwaghmare2004.github.io/Map-Navigate-India/",
  },
  {
    title: "LoRaWAN Based Smart Clamp System",
    description: "ESP32-based IoT clamp with LoRaWAN communication, tamper detection, DC motor actuation, PCB layout, and low-power firmware optimization.",
    tags: ["IoT", "ESP32", "LoRaWAN", "Embedded"],
    link: "https://drive.google.com/file/d/Major_Project_Report_BE_SW",
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Projects</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">What I've Built</h3>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-1.5 rounded-full text-xs font-body border transition-all duration-300 ${
              filter === "All"
                ? "border-primary bg-primary/20 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            All
          </button>
          {["Python", "IoT", "Machine Learning", "Deep Learning", "JavaScript"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-body border transition-all duration-300 ${
                filter === tag
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-6 group cursor-pointer hover-glow block"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-body border border-primary/20 text-primary/70 bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
