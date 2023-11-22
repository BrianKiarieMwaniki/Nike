import { useInView } from "react-intersection-observer";
import { slideIn } from "./../../utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { bigShoe5 } from "../../assets/images";
const Innovation = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <section className="flex flex-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
        <motion.div
          variants={slideIn("left")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
          }}
          className="flex-1 "
        >
          <img
            src={bigShoe5}
            alt=""
            width={773}
            height={687}
            className="object-contain w-full shadow-md rounded-xl"
          />
        </motion.div>

        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.6,
          }}
          className="flex flex-col flex-1"
        >
          <motion.h2
            variants={slideIn("right")}
            initial="hidden"
            animate={animation}
            transition={{
              duration: 0.5,
              delayChildren: 0.5,
              staggerChildren: 0.6,
            }}
            className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"
          >
            Innovation at Our Core
          </motion.h2>
          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            animate={animation}
            transition={{
              duration: 0.65,
              delay: 0.25,
              delayChildren: 0.5,
              staggerChildren: 0.6,
            }}
          >
            <p className="mt-4 lg:max-w-lg info-text">
              At <span className="text-coral-red">Nike</span>, innovation isn&lsquo;t just a buzzword; it&lsquo;s the
              heartbeat of our brand. We&lsquo;re dedicated to pushing the boundaries
              of what&lsquo;s possible, just as Nike has always done. From
              groundbreaking materials to ergonomic designs, every product is a
              testament to our commitment to innovation.
            </p>

            
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Innovation;
