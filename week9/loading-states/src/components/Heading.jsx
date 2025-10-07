"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Headings() {
  return (
    // Gave the motion element to one of our DOM elements
    <motion.div
      animate="{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%']
        }"
      transition="{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
        }"
      class="box"
    >
      <Image src="/just-wait.gif" alt="fluff" width={500} height={500} />
    </motion.div>
  );
}
