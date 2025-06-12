"use client";
import { useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// import { motion, useScroll, useTransform } from "framer-motion";
export default function SlideEventWrapper({ children, twClasses = "", eventRef, slideFrom, duration = "1.1", delay = "0.0" }) {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  const eventInView = useInView(eventRef, { once: true, amount: 0.5 }); // boolean - is the event in view ?

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
        x = 450;
        y = 0;
        break;
      case "left":
        x = -450;
        y = 0;
        break;
      case "top":
        x = 0;
        y = -450;
        break;
      case "bottom":
        x = 0;
        y = 450;
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

  // <motion.div variants={fadeUpVariant} initial="initial" animate="animate">

  // whileInView={{ opacity: 1, y: 0, x: 0 }}

  if (eventInView) {
    return (
      <motion.div initial={{ opacity: 0, y, x }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ delay, duration, ease: "easeOut" }} viewport={{ once: true }} className={twClasses}>
        {children}
      </motion.div>
    );
  } else {
    return <div></div>;
  }
}
