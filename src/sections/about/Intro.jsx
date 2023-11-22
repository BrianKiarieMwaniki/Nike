import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Intro = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[600px] bg-image-gradient">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            type: "tween",
          }}
          className="mb-5 text-4xl font-extrabold text-white-400 font-palanquin"
        >
          Inspired by Excellence, Committed to Performance
        </motion.h2>
        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 0.25,
          }}
          className="text-lg leading-normal sm:w-1/2 font-montserrat text-white-400"
        >
          Welcome to <span className="font-bold text-coral-red">Nike</span>, where our
          journey is fueled by a passion for excellence. Our ethos is simple: to
          provide high-quality ,innovative sportswear and gear that empowers
          athletes and fitness enthusiasts alike.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
