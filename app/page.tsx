"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-8 text-center text-white"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Elegant Portfolio
      </motion.h1>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full mb-8 border-4 border-pink-300/50 shadow-lg"
        />
      </motion.div>
      <motion.p
        className="text-lg sm:text-xl text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Hi, I'm [Your Name]. I'm a [Your Profession] specializing in [Your Skills]. Welcome to my portfolio where you
        can explore my creative journey and professional accomplishments.
      </motion.p>
    </motion.div>
  )
}

