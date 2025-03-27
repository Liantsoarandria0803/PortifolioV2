import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "Shell", "GdScript", "HTML", "CSS", "SQL", "PHP"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLITE", "MCD", "MLD"]
  },
  {
    category: "Stacks & Libraries",
    items: ["React", "React Native", "NextJs", "Django", "Scikit-Learn", "Tensorflow", "Pytorch", "Prisma", "NodeJs", "NestJs", "Expo"]
  },
  {
    category: "Tools",
    items: ["Git", "Github", "Gitlab", "Figma", "Mathematics", "Kaggle", "AnalyseSI", "Godot", "Unity"]
  },
  {
    category: "Other",
    items: ["Project Management","Communication skills"]
  }
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-[#006466] via-[#065a60] via-[#0b525b] via-[#144552] via-[#1b3a4b] via-[#212f45] via-[#272640] via-[#312244] via-[#3e1f47] to-[#4d194d]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <SkillCard key={index} skillSet={skillSet} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillSet {
  category: string;
  items: string[];
}

const SkillCard = ({ skillSet, index }: { skillSet: SkillSet; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }} // Animation de survol
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-gray-800 rounded-xl p-6 shadow-lg border border-[#4d194d]"
  >
    <h3 className="text-xl font-bold mb-4 text-white">{skillSet.category}</h3>
    <div className="flex flex-wrap gap-2">
      {skillSet.items.map((skill, i) => (
        <motion.span
          key={i}
          whileHover={{ scale: 1.05 }} // Animation de survol pour les badges
          className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Skills;