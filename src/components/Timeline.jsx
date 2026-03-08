import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    title: "Python Bootcamp",
    description: "Completed 100 Days of Code with Python.",
    certUrl: "https://example.com/certificate1"
  },
  {
    year: "2022",
    title: "AI/ML Internship",
    description: "Worked on predictive models and research papers.",
    certUrl: "https://example.com/certificate2"
  },
  {
    year: "2023",
    title: "React Developer Course",
    description: "Built interactive web apps using React & Tailwind.",
    certUrl: "https://example.com/certificate3"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding">
      <div className="flex-col-center space-y-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center">My certificates</h2>
        <div className="relative w-full max-w-3xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>

          <div className="space-y-12 relative z-10">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 relative ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="bg-black-100 border border-black-50 shadow-md rounded-xl p-6 w-full md:w-1/2">
                  <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
                  <p className="text-white-50 text-sm mb-2">{item.year}</p>
                  <p className="text-white-50 mb-4">{item.description}</p>
                  <a href={item.certUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">View Certificate</a>
                </div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-black-50"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;