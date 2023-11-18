import { useEffect } from "react";
import { reviews } from "../constants";
import ReviewCard from "./../Components/ReviewCard";
import { motion, useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { fadeIn } from "../utils/motion";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";

const CustomerReviews = () => {
  const [ref, isInView] = useInView({triggerOnce:true, threshold: 0.1});
  const animation = useAnimation();

  const scope = useStaggerAnimation(isInView, "article");

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <section className="max-container">
        <motion.h3
          variants={fadeIn("up")}
          initial="hidden"
          animate={animation}
          transition={{ duraton: 0.5, type: "spring", stiffness: 100 }}
          className="text-4xl font-bold text-center font-palanquin"
        >
          What Our &nbsp;
          <span className="text-coral-red">Customers</span>
          &nbsp; Say?
        </motion.h3>
        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          animate={animation}
          transition={{
            duraton: 0.5,
            delay: 0.35,
            type: "spring",
            bounce: 0,
            stiffness: 50,
          }}
          className="max-w-lg m-auto mt-4 text-center info-text"
        >
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </motion.p>

        <motion.div
          ref={scope}
          transition={{ staggerChildren: 0.5, delayChildren:0.25 }}
          className="flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14"
        >
          {reviews.map((review) => (
            <article key={review.customerName}>
              <ReviewCard                
                {...review}
              />
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default CustomerReviews;
