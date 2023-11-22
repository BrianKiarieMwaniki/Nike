import { reviews } from "../../constants";
import ReviewCard from "../../Components/ReviewCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useStaggerAnimation } from "../../hooks/useStaggerAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CustomerReviews = () => {
  const {ref,animation, isInView} = useScrollAnimation();
  const scope = useStaggerAnimation(isInView, "article");

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
