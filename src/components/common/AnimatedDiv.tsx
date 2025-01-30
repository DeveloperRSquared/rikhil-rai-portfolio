"use client";
import { useEffect, useState, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // to detect when elements enter the viewport

type AnimatedDivProps = {
  children: ReactNode;
  initial?: Record<string, number>;
  _delay?: number;
  _style?: Record<string, string>;
  className?: string;
};

const AnimatedDiv = ({
  children,
  _delay,
  _style,
  className = "",
}: AnimatedDivProps) => {
  const controls = useAnimation(); // control - can start, stop animation
  const [ref, inView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted && inView) {
      controls.start("visible");
    }
  }, [controls, inView, isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref || undefined}
      initial={{ opacity: 0, y: 10 }}
      animate={controls}
      // variants={{
      //   visible: {
      //     opacity: 1,
      //     y: 0,
      //   },
      //   hidden: { opacity: 0, y: 10 },
      // }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: _delay,
        type: "spring",
        stiffness: 180,
      }}
      style={_style}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
