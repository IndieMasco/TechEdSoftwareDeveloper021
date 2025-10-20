"use client"; // Very important! motion is invoked in the client

// Install motion
// Import the motion element

import { motion } from "motion/react";

export default function Headings() {
  return (
    // Gave the motion element to one of our DOM elements
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 5 }}
    >
      <h1>Rollercoasters</h1>
      <p>something something something</p>
    </motion.div>
  );
}
