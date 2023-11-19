import { motion } from "framer-motion";
import { pageTransitions } from "../utils/motion";

const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageTransitions}
      initial="hidden"
      animate="in"
      exit="exit"
      transition={{ duration: 1.25 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
