import { motion } from 'framer-motion';

function About() {
  return (
    <section className="py-16 bg-gray-800 text-gray-300" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          <p>– <strong>AI Research Engineer</strong>, LIAM, Mai 2025 – présent</p>
          <p>Recherche et développement de solutions basées sur l’intelligence artificielle. Test et mise en production de modèles.</p>
          <p>– <strong>AI Developer</strong>, RAMAROFISH, Décembre 2024 – présent</p>
          <p>Développement de solutions d’intelligence artificielle appliquées à l’aquaculture. Mise en place de modèles prédictifs pour l’optimisation de l’alimentation des poissons, détection automatique des maladies via vision par ordinateur, et automatisation des rapports d’analyse. Utilisation de Python, FastAPI, LangChain pour la mise en œuvre. Collaboration avec les équipes de production pour intégrer les solutions dans les systèmes existants.</p>
          <p>– <strong>Coordinateur de Projet</strong>, Smart Kajy Club, 2023 – présent</p>
          <p>Gestion de projets, gestion des activités, Mentor.</p>
          <p><strong>Master 1 Informatique - MISA</strong>, Université d’Antananarivo, 2024 – présent</p>
          <p>– Autodidacte, créatif, rigoureux</p>
          <p>– Forte capacité d’apprentissage</p>
          <p>– Esprit d’équipe et d’innovation</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;