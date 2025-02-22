import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "FACIAL STRESS DETECTION",
        description: "This project focuses on developing a Convolutional Neural Network (CNN) to classify facial images into 'stress' and 'no stress' categories. The model is trained on a dataset of facial images and achieves an accuracy of 88.52%.",
        image: "/desktopfacial.png",
        technologies: ["CNN", "Deep Learning"],
        githubLink: "https://github.com/Liantsoarandria0803/Facial-Stress-Recognition",
        liveLink: ""
    },
    {
        title: "BIBLE VERSE FINDER",
        description: "A mobile application that allows users to search for Bible verses based on keywords or phrases. The application retrieves relevant verses from the Bible and displays them to the user, providing a convenient way to explore and reference scriptural passages.",
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
        liveLink: ""
    },
    {
        title: "BOOK SYSTEM RECOMMENDATION",
        description: "A book recommendation system is designed to assist readers in discovering books that align with their interests and preferences. These systems analyze various data points to provide personalized suggestions, enhancing the user's reading experience.",
        image: "/book.png",
        technologies: ["Machine Learning", "Python"],
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
        technologies: ["Game Development", "Unity"],
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
        technologies: ["CNN", "Deep Learning"],
        githubLink: "https://github.com/Liantsoarandria0803/Sign-language-MNIST",
        liveLink: ""
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
        technologies: ["PHP", "Python"],
        githubLink: "https://github.com/Liantsoarandria0803/HEART-DISEASE-DIAGNOSTIC",
        liveLink: ""
    },
    {
        title: "MLP BY RANDRIA",
        description: "A multilayer perceptron (MLP) is a type of artificial neural network composed of multiple layers of neurons. The neurons in an MLP typically use nonlinear activation functions, allowing the network to learn complex patterns in the data. This is an ANN model I created that can classify 2 classes (0 or 1).",
        image: "deep.png",
        technologies: ["Python", "Neural Networks"],
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
        technologies: ["Machine Learning", "Python"],
        githubLink: "https://github.com/Liantsoarandria0803/WeatherForecast",
        liveLink: ""
    },
    {
        title: "Hanotan-e",
        description: "This application serves as an online forum platform where users can discuss various topics, share knowledge, ask questions, and provide answers.",
        image: "/Screenshot from 2024-12-26 10-05-46.png",
        technologies: ["PHP", "MySQL"],
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
        title: "SLOT MACHINE",
        description: "A simple web application or mini online game that follows the same principle as a real-life slot machine.",
        image: "/Screenshot from 2024-12-26 09-58-35.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://liantsoarandria0803.github.io/MachineAsous/",
        liveLink: ""
    },
    {
        title: "RANDRIA'SCRIPT",
        description: "An open-source software that encrypts and decrypts messages using its own type of encryption (symmetric encryption).",
        image: "/images.jpeg",
        technologies: ["C"],
        githubLink: "https://github.com/Liantsoarandria0803/Randria-scrypt",
        liveLink: ""
    },
    {
        title: "APP AGE CALCULATOR",
        description: "A simple web application that calculates the total time (Y/M/D) you have survived on Earth.",
        image: "",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://liantsoarandria0803.github.io/AGE_CALCULATOR/",
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
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
  >
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, i: number) => (
          <span 
            key={i}
            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a 
          href={project.githubLink}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} />
          Code
        </a>
        <a 
          href={project.liveLink}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects;