"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { motion, useScroll, useTransform } from "framer-motion";

const fadeUpVariant = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.0,
    },
  },
};

export default function FadeTextWrapper({ children, twClasses = "" }) {
  return (
    // <motion.div variants={fadeUpVariant} initial="initial" animate="animate">

    <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, ease: "easeOut" }} viewport={{ once: true }} className={twClasses}>
      {children}
    </motion.div>
  );
}
