import { motion } from 'framer-motion';
import React from 'react';

const certifications = [
  { id: 1, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg", alt: "Certification 1" },
  { id: 2, path: "/RANDRIANASIMBOLARIVELO20241020-72-1e0j7vh.jpg", alt: "Certification 2" },
  { id: 3, path: "/Liantsoa Randria - Intro to Machine Learning.png", alt: "Intro to Machine Learning" },
  { id: 4, path: "/Liantsoa Randria - Pandas.png", alt: "Pandas Certification" },
  { id: 5, path: "/Liantsoa Randria - Intro to SQL.png", alt: "Intro to SQL" },
  { id: 6, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg", alt: "Certification 6" },
  {id:7,path:"/Liantsoa Randria - Time Series.png", alt: "Time Series Certification" }
];

const Certification: React.FC = () => {
  return (
    <section
      id="certification"
      className="py-20 bg-gradient-to-r from-[#006466] via-[#065a60] via-[#0b525b] via-[#144552] via-[#1b3a4b] via-[#212f45] via-[#272640] via-[#312244] via-[#3e1f47] to-[#4d194d]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }} // Effet de zoom au survol
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-[#4d194d] w-64"
              >
                <img src={cert.path} alt={cert.alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;