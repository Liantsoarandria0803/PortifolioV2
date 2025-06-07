import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; 

function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-purple-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              'About Me', // Types 'About Me'
              2000, // Waits 2 seconds
              'Who I Am', // Replaces with 'Who I Am'
              2000, // Waits 2 seconds
              'What I Do', // Replaces with 'What I Do'
              2000, // Waits 2 seconds
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block', color: "#4d194d" }} // Updated color
          />
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "#fff9" }} // Updated color
        >
          I am an Artificial Intelligence and Machine Learning enthusiast with a passion for building innovative solutions. 
          I specialize in full-stack web and mobile development, and I am also exploring game development. 
          My goal is to create impactful projects that solve real-world problems while continuously learning and growing in the tech industry.
        </motion.p>
        <motion.div
          className="mt-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p style={{ color: "#9d194d" }}>– <strong>Junior AI Research Engineer</strong>, LIAM, May 2025 – present</p>
          <p style={{ color: "#fff9" }}>Research and development of artificial intelligence-based solutions. Testing and deploying models to production.</p>
            <p style={{ color: "#9d194d" }}>– <strong>AI Developer</strong>, RAMAROFISH, December 2024 – present</p>
            <p style={{ color: "#fff9" }}>
            Development of artificial intelligence solutions applied to aquaculture. Implementation of predictive models for fish feeding optimization, automatic disease detection using computer vision, and automation of analysis reports. Utilized Python, FastAPI, LangChain for implementation. Collaborated with production teams to integrate solutions into existing systems.
            </p>
            <p style={{ color: "#9d194d" }}>– <strong>Project Coordinator</strong>, Smart Kajy Club, 2023 – present</p>
            <p style={{ color: "#fff9" }}>Project management, activity management, Mentor.</p>
            <p style={{ color: "#9d194d" }}><strong>Master 1 Computer Science - MISA</strong>, University of Antananarivo, 2024 – present</p>
            <p style={{ color: "#fff9" }}>– Self-taught, creative, rigorous</p>
            <p style={{ color: "#fff9" }}>– Strong learning ability</p>
            <p style={{ color: "#fff9" }}>– Team spirit and innovation</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;