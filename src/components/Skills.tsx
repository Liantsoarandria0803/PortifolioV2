
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        category:"Languages",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#","Shell","GdScript", "HTML", "CSS", "SQL", "PHP"]
    },
    {
        category: "Databases",
        items: ["MySQL", "PostgreSQL", "SQLITE","MCD","MLD"]
    },
    {
        category: "Stacks & Libraries",
        items: ["React", "React Native", "NextJs", "Django", "Scikit-Learn", "Tensorflow", "Pytorch", "Prisma", "NodeJs", "NestJs","Expo"]
    },
    {
        category: "Tools",
        items: ["Git", "Github", "Gitlab", "Figma", "Mathematics", "Kaggle", "AnalyseSI","Godot","Unity"]
    }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
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

const SkillCard = ({ skillSet, index }: { skillSet: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
  >
    <h3 className="text-xl font-bold mb-4 text-white">{skillSet.category}</h3>
    <div className="flex flex-wrap gap-2">
      {skillSet.items.map((skill: string, i: number) => (
        <span
          key={i}
          className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Skills;