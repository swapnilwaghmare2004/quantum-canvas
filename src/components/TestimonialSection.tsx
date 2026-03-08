import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Alok Singh", text: "Swapnil is a highly dedicated engineer with strong skills in AI, image processing, and full-stack development." },
  { name: "Pruthvirajsingh Bayas", text: "Swapnil has an exceptional ability to combine electronics knowledge with modern software technologies." },
  { name: "Kanchan Patkar", text: "He approaches every problem analytically and always builds practical technical solutions." },
  { name: "Soham Mane", text: "Swapnil is passionate about technology and continuously learns new frameworks and tools." },
  { name: "Atharva Dahake", text: "His knowledge in Arduino, MATLAB, and embedded systems is impressive." },
  { name: "Kaushal Pawar", text: "Swapnil always refines his work until the best solution is achieved." },
  { name: "Pranav Darokar", text: "He combines analytical thinking with strong execution in both hardware and software." },
  { name: "Pranav Chaudhari", text: "A motivated engineer who constantly improves his technical expertise." },
  { name: "Shrut Kamble", text: "Great team player with excellent problem-solving mindset." },
  { name: "Ravindra Menkar", text: "Swapnil is passionate about emerging technologies and innovation." },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Testimonials</h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">What People Say</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
            <div className="min-h-[140px] flex flex-col justify-center items-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                    "{testimonials[index].text}"
                  </p>
                  <h4 className="text-xl font-heading font-semibold text-primary neon-text">
                    {testimonials[index].name}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
