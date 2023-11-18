import { star } from "../assets/icons";
import { motion } from "framer-motion";

const ReviewCard = ({ imgURL, customerName, rating, feedback, variants }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        type:"spring",
        stiffness: 150,
        bounce: 0,
        duration: 0.5,
        delay:0.25
      }}
      className="flex flex-col items-center justify-center"
    >
      <img
        src={imgURL}
        alt="customer"
        className="object-cover rounded-full w-[120px] h-[120px]"
      />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="flex items-center justify-center gap-2.5 mt-3">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
