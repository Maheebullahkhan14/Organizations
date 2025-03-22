import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { lineCurve } from "../assets";

const AnimatedLineImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className=" w-full"
    >
      <img src={lineCurve} alt="curve" className="w-full h-auto" />
    </motion.div>
  );
};

export default AnimatedLineImage;
