import { FC, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  const ref = useRef(null);
  const ifInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (ifInView) {
      mainControl.start("visible");
    }
  }, [ifInView, mainControl]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
