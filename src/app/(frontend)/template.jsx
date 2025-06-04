"use client";

import { motion, AnimatePresence } from "framer-motion";

const fadeUpVariant = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

export default function Template({ children }) {
  return (
    <motion.div variants={fadeUpVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
