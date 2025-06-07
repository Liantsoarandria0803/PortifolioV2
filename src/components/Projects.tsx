import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "PotatoGuard",
    description: "A web application that helps users to protect their potato plants from pests and diseases by providing information on how to identify and treat them.",
   
    technologies: ["React", "Tailwind CSS","FastAPI", "Tensorflow", "Docker","deep learning"],
    image: "/potatoGuard.png",
    githubLink:"https://github.com/Liantsoarandria0803/health-ai-mobile-guide",
    liveLink: "https://potatoguardrandriaindustries.netlify.app/"
  },
    {
      title: "FRIDAY",
      description: "A virtual assistant that can help you with your daily tasks, such as setting reminders,giving you some news, informations ,... and answering questions.",
      technologies: ["Python", "NLP", "Deep Learning","Transformers","Large Language Models","Gradio"],
      image:"FRIDAY.png",
      githubLink:"#",
      liveLink: "https://huggingface.co/spaces/Liantsoaxx08/Friday"
    },
    {
        title: "FACIAL STRESS DETECTION",
        description: "This project focuses on developing a Convolutional Neural Network (CNN) to classify facial images into 'stress' and 'no stress' categories. The model is trained on a dataset of facial images and achieves an accuracy of 88.52%.",
        image: "/desktopfacial.png",
        technologies: ["CNN", "Deep Learning","FAstAPI","Hugging Face"],
        githubLink: "https://github.com/Liantsoarandria0803/Facial-Stress-Recognition",
        liveLink: "https://huggingface.co/spaces/Liantsoaxx08/Stress-Facial-Recognitipon"
    },
    {
        title: "BIBLE FOR YOU",
        description: "A mobile application that allows users to search all texts that the want to read by Bible verses.",
        image: "/bible.jpg",
        technologies: ["React Native", "Firebase"],
        githubLink: "https://github.com/Liantsoarandria0803/Bible-verse-finder",
        liveLink: ""
    },
    {
        title: "FAKE NEWS DETECTION",
        description: "Artificial intelligence based with deep learning algorithm which can detect if news is fake or real by analysing the content of the news.",
        image: "/FakeNews.png",
        technologies: ["NLP", "Deep Learning"],
        githubLink: "https://github.com/Liantsoarandria0803/Fake-News-Detection",
        
    },
    {
        title: "BOOK SYSTEM RECOMMENDATION",
        description: "A book recommendation system is designed to assist readers in discovering books that align with their interests and preferences. These systems analyze various data points to provide personalized suggestions, enhancing the user's reading experience.",
        image: "/book.png",
        technologies: ["Machine Learning", "Python","Cosinus simularity(MATHS)"],
        githubLink: "https://github.com/Liantsoarandria0803/Books-system-recommendation",
        liveLink: ""
    },
    {
        title: "HEALTH MENTAL DISEASE",
        description: "Analyzes a dataset related to depression and builds a predictive model to classify individuals as depressed or not based on various features.",
        image: "/depr.jpg",
        technologies: ["Machine Learning", "Python"],
        githubLink: "https://github.com/Liantsoarandria0803/Health-mental-disease",
        liveLink: ""
    },
    {
        title: "KAJY CARDS",
        description: "A strategy or card-based game, potentially inspired by classic collectible or trading card games (TCG), similar to games like Magic: The Gathering or Hearthstone. The game may involve different cards with unique attributes like attack power, health points, and special abilities.",
        image: "/kajy.jpg",
        technologies: ["Game Development", "GODOT","GDscript"],
        githubLink: "https://github.com/SMART-KAJY-AlgoGames/KAJY-CARDS",
        liveLink: ""
    },
    {
        title: "IMAGE CLASSIFICATION",
        description: "This project implements a deep learning model using a Convolutional Neural Network (CNN) architecture to classify images from the CIFAR-10 dataset. The CIFAR-10 dataset is a widely used benchmark dataset in computer vision, containing 60,000 color images across 10 classes, including airplanes, automobiles, birds, cats, deer, dogs, frogs, horses, ships, and trucks.",
        image: "Screenshot from 2025-01-10 19-14-39.png",
        technologies: ["CNN", "Deep Learning"],
        githubLink: "https://github.com/Liantsoarandria0803/CIFAR-10-",
        liveLink: ""
    },
    {
        title: "HAND SIGN LANGUAGE",
        description: "The HAND SIGN LANGUAGE project is a machine learning application designed to recognize hand sign language gestures using Convolutional Neural Networks (CNNs). By leveraging the Sign Language MNIST dataset, this program trains a model to classify different sign gestures into corresponding letters or numbers. The model is highly accurate and can be deployed in real-world applications to facilitate communication between sign language users and non-signers.",
        image: "/images2.png",
        technologies: ["CNN", "Deep Learning","FASTAPI"],
        githubLink: "https://github.com/Liantsoarandria0803/Sign-language-MNIST",
        liveLink: "https://huggingface.co/spaces/Liantsoaxx08/Sign-Language-MNIST"
    },
    {
        title: "BREAST CANCER DIAGNOSTIC",
        description: "Machine learning which can detect if you have breast cancer, it's based with decision trees algorithm that I've been implemented from scratch.",
        image: "breastC.png",
        technologies: ["Machine Learning", "Decision Trees"],
        githubLink: "https://github.com/Liantsoarandria0803/Breast-Cancer-Diagnosis-",
        liveLink: ""
    },
    {
        title: "HEART DISEASE DIAGNOSTIC",
        description: "A web application that diagnoses heart disease in an individual. This is powered by the RandriaMLP engine.",
        image: "/Screenshot from 2024-12-26 09-55-51.png",
        technologies: ["PHP", "Python","MAchine Learning"],
        githubLink: "https://github.com/Liantsoarandria0803/HEART-DISEASE-DIAGNOSTIC",
        liveLink: ""
    },
    {
        title: "MLP BY RANDRIA",
        description: "A multilayer perceptron (MLP) is a type of artificial neural network composed of multiple layers of neurons. The neurons in an MLP typically use nonlinear activation functions, allowing the network to learn complex patterns in the data. This is an ANN model I created that can classify 2 classes (0 or 1).",
        image: "deep.png",
        technologies: ["Python"],
        githubLink: "https://github.com/Liantsoarandria0803/MultiLayersPerceptron",
        liveLink: ""
    },
    {
        title: "TEXT SPAM",
        description: "A machine learning algorithm which can detect if your message is spam or not.",
        image: "",
        technologies: ["NLP", "Machine Learning"],
        githubLink: "https://github.com/Liantsoarandria0803/SpamMessage",
        liveLink: ""
    },
    {
        title: "RAIN PREDICTION",
        description: "A machine learning algorithm which can predict raining in function of historical data (Temperature, Pressure, Humidity, Wind's Velocity, Cloud covering).",
        image: "Screenshot from 2025-01-03 11-33-47.png",
        technologies: ["Machine Learning", "Python","FAstAPI"],
        githubLink: "https://github.com/Liantsoarandria0803/WeatherForecast",
        liveLink: ""
    },
    {
        title: "Hanotan-e",
        description: "This application serves as an online forum platform where users can discuss various topics, share knowledge, ask questions, and provide answers.",
        image: "/Screenshot from 2024-12-26 10-05-46.png",
        technologies: ["HTML","CSS","Javascript","PHP", "MySQL"],
        githubLink: "https://github.com/Liantsoarandria0803/Hanontan-e",
        liveLink: ""
    },
    {
        title: "JOYALESTORE",
        description: "A simple dynamic e-commerce website dedicated to selling clothing items.",
        image: "/Screenshot from 2024-12-26 09-53-48.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://liantsoarandria0803.github.io/JOYA/",
        liveLink: ""
    },
    {
        title: "RANDRIA'SCRIPT",
        description: "An open-source software that encrypts and decrypts messages using its own type of encryption (symmetric encryption).",
        image: "/images.jpeg",
        technologies: ["C","Makefile"],
        githubLink: "https://github.com/Liantsoarandria0803/Randria-scrypt",
        liveLink: ""
    },
    {
        title: "BRAINFUCK INTERPRETER",
        description: "A simple program that interprets Brainfuck code.",
        image: "",
        technologies: ["Python", "C++"],
        githubLink: "https://github.com/Liantsoarandria0803/Brainfuck-Interpreter",
        liveLink: ""
    },
    {
        title: "Group Chat App",
        description: "A web application dedicated to group communication.",
        image: "",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        githubLink: "https://github.com/Liantsoarandria0803/GroupChatApp",
        liveLink: ""
    },
    {
        title: "Samba Admin UI/UX",
        description: "A web interface dedicated to admins to manage all users for a SAMBA server.",
        image: "",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        githubLink: "https://github.com/Kimbohy/sambaWebUI",
        liveLink: ""
    }
];
function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-[#006466] via-[#065a60] via-[#0b525b] via-[#144552] via-[#1b3a4b] via-[#212f45] via-[#272640] via-[#312244] via-[#3e1f47] to-[#4d194d]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          {!showAll && (
          <div className="text-center mt-8">
            <motion.button
            whileHover={{ scale: 1.05 }} // Added hover scale effect
            onClick={() => setShowAll(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-500 transition-colors duration-200 ease-in-out font-bold uppercase focus:ring-2 focus:ring-purple-300" // Enhanced styling
            >
             See More
            </motion.button>
          </div>
)}
        </motion.div>
      </div>
    </section>
  );
}
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }} // Added initial scale transformation
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Added scale transformation on view
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }} // Enhanced hover scale effect
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#4d194d]`} // Unified bg and themed border
    >
      {project.image && ( // Conditional image rendering
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      )}
      <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p> {/* Improved contrast */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, i: number) => (
        <span 
          key={i}
          className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600"
        >
          {tech}
        </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a 
        href={project.githubLink}
        className="flex items-center gap-2 text-gray-400 hover:text-white hover:scale-105 transform transition-all duration-200 ease-in-out"
        >
        <Github size={20} />
        Code
        </a>
        {project.liveLink && (
        <a 
          href={project.liveLink}
          className="flex items-center gap-2 text-gray-400 hover:text-white hover:scale-105 transform transition-all duration-200 ease-in-out"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
        )}
      </div>
      </div>
    </motion.div>
  );
};


export default Projects;