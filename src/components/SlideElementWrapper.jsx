"use client";
import { useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// import { motion, useScroll, useTransform } from "framer-motion";
export default function SlideElementWrapper({ children, twClasses = "", slideFrom, duration = "1.1" }) {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  // animate={isLarge ? { opacity: 1, y: 0 } : {}}

  //! not required?
  // const fadeUpVariant = {
  //   initial: { opacity: 0, y: 0, x: 100 },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     x: 0,
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 1.0,
  //     },
  //   },
  // };

  let x = 0;
  let y = 0;

  if (isLg) {
    switch (slideFrom) {
      case "right":
        x = 470;
        y = 0;
        break;
      case "left":
        x = -470;
        y = 0;
        break;
      case "top":
        x = 0;
        y = -600;
        break;
      case "bottom":
        x = 0;
        y = 350;
        break;
      case "bottomRight":
        x = 450;
        y = 250;
        break;
      case "bottomLeft":
        x = -450;
        y = 250;
        break;

      default:
        x = 0;
        y = 0;
        break;
    }
  }

  return (
    // <motion.div variants={fadeUpVariant} initial="initial" animate="animate">

    <motion.div initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ duration, ease: "easeOut" }} viewport={{ once: true }} className={twClasses}>
      {children}
    </motion.div>
  );
}
