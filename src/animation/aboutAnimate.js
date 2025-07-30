// src/animation/aboutAnimate.js

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const MotionDiv = ({
  children,
  delay = 0.1,
  threshold = 0.15,
  className = "",
  ...props
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
