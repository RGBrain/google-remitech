"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function SlideEventWrapper({
  children,
  twClasses = "",
  eventRef,
  slideFrom,
  duration = "1.1",
  delay = "0.0",
}) {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  const eventInView = useInView(eventRef, { once: true }); // boolean - is the event in view?

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

  if (eventInView) {
    return (
      <motion.div
        initial={{ opacity: 0, y, x }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay, duration, ease: "easeOut" }}
        viewport={{ once: true }}
        className={twClasses}
      >
        {children}
      </motion.div>
    );
  } else {
    return <div></div>;
  }
}
