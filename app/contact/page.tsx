"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.form
        className="bg-gray-800/30 backdrop-blur-md p-8 rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold text-pink-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 bg-gray-700/50 rounded border-2 border-gray-600 focus:border-pink-300 focus:outline-none transition-colors text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold text-pink-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 bg-gray-700/50 rounded border-2 border-gray-600 focus:border-pink-300 focus:outline-none transition-colors text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold text-pink-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-2 bg-gray-700/50 rounded border-2 border-gray-600 focus:border-pink-300 focus:outline-none transition-colors text-white"
            required
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

