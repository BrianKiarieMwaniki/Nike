import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Empowering = () => {
  const {ref, animation} = useScrollAnimation();
  
  return (
    <section ref={ref} className="w-full parallax-banner min-h-[650px] px-4 flex flex-col justify-center">
      <div className="max-container">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
          className="text-4xl font-bold text-white-400 font-palanquin"
        >
          Empowering Every Athlete
        </motion.h2>
        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 0.25,
          }}
          className="mt-4 text-white-400 font-montserrat"
        >
          We believe that everyone with a body is an athlete. That&lsquo;s why our
          products are designed to cater to athletes of all levels, from weekend
          warriors to professional sports stars. Our goal is to inspire,
          motivate, and support you in your journey to greatness.
        </motion.p>
      </div>
    </section>
  );
};

export default Empowering;
