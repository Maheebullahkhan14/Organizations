import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { lineCurve } from "../assets";

const AnimatedLineImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div ref={ref} className="why-matter-img-section">
      <motion.div
        className="h-auto"
      >
        <img src={lineCurve} alt="curve" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default AnimatedLineImage;
