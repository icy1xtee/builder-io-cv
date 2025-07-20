import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import meImage from "@/assets/me.webp";

export function Me() {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: false,
  });

  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDir("up");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const yInitial = scrollDir === "down" ? 50 : -50;
  const yExit = scrollDir === "down" ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      className="
      -mr-0  
      xl:-mr-36
      3xl:-mr-0
    select-none 
    pointer-events-none
  "
      initial={{ opacity: 0, y: yInitial }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : yExit,
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.img
        src={meImage}
        alt=""
        className="
      w-[720px]
      hidden
      xl:block
      3xl:hidden
      aspect-square 
      object-cover
    "
        style={{
          WebkitMaskImage: "linear-gradient(to right, black 50%, transparent)",
          maskImage: "linear-gradient(to right, black 60%, transparent)",
        }}
      />
    </motion.div>
  );
}
