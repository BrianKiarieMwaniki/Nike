import { shoe8 } from "../../assets/images";
import Button from "../../Components/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { slideIn } from "../../utils/motion";
import { motion } from "framer-motion";

const SupperQuality = () => {
  const { ref, animation } = useScrollAnimation();

  return (
    <div ref={ref}>
      <section
        id="about-us"
        className="flex items-center justify-between w-full max-lg:flex-col gap-1- max-container"
      >
        <motion.div
          variants={slideIn("left")}
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
            variants={slideIn("left")}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"
          >
            We Provide You
            <br />
            <span className="text-coral-red">Super</span>
            &nbsp;
            <span className="text-coral-red">Quality</span>
            &nbsp; Shoes
          </motion.h2>
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.75 }}
          >
            <p className="mt-4 lg:max-w-lg info-text">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>

            <p className="mt-6 lg:max-w-lg info-text">
              Our dedication to detail and excellence ensures your satisfaction.
            </p>
          </motion.div>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="flex items-center justify-center flex-1"
        >
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default SupperQuality;
