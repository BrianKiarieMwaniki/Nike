import Button from "../../Components/Button";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Subscribe = () => {
  const {ref, animation} = useScrollAnimation();
  return (
    <div ref={ref}>
      <section
        className="flex items-center justify-between gap-10 max-container max-lg:flex-col"
        id="contact-us"
      >
        <motion.h3
          variants={slideIn("left")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
        >
          Sign Up for &nbsp;
          <span className="text-coral-red">Updates</span>
          &nbsp; & newsletters.
        </motion.h3>

        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: "easeIn",
          }}
          className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        >
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="input"
          />
          <div className="flex items-center max-sm:justify-end max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Subscribe;
