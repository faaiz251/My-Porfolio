"use client"

import { motion } from "framer-motion"

const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4 text-pink-300">My Journey</h2>
          <p className="mb-4 text-lg">
            I'm a passionate [Your Profession] with [X] years of experience in [Your Field]. I specialize in [Your
            Specialties] and have a strong background in [Your Background].
          </p>
          <p className="mb-4 text-lg">
            My journey in this field has been exciting and full of learning. I've had the opportunity to work on diverse
            projects and collaborate with talented individuals from around the world.
          </p>
        </motion.div>
        <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4 text-pink-300">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-pink-300">Education</h2>
        <p className="text-lg">[Your Degree] in [Your Field] - [Your University] ([Graduation Year])</p>
      </motion.div>
    </motion.div>
  )
}

