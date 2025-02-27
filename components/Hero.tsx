'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-white mb-4"
          variants={textVariants}
        >
          Sunway Tech Club
        </motion.h1>
        <motion.p 
          className="text-xl text-white/80 max-w-2xl"
          variants={textVariants}
        >
          Empowering the next generation of tech innovators through collaboration, learning, and innovation.
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  )
}
