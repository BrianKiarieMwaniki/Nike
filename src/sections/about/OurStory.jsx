import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OurStory = () => {
    const {ref, animation} = useScrollAnimation();
  return (
    <section ref={ref} className="max-container">
      <motion.h2
        variants={fadeIn("up")}
        initial="hidden"
        animate={animation}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
        className="text-4xl font-bold font-palanquin"
      >
        Our Story
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
        className="mt-4 info-text"
      >
        Born from a dream to revolutionize the world of sports, Nike was founded
        on the principles of innovation, perseverance, and relentless pursuit of
        quality. Inspired by the trailblazing spirit of Nike, we embarked on a
        mission to craft products that elevate performance and inspire the
        athlete in everyone.
      </motion.p>
    </section>
  );
}

export default OurStory