import { services } from "../../constants";
import { useStaggerAnimation } from "../../hooks/useStaggerAnimation";
import ServiceCard from "../../Components/ServiceCard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Services = () => {
  const {ref, isInView} = useScrollAnimation();
  const scope = useStaggerAnimation(isInView, "article");
  return (
    <div ref={ref}>
      <motion.div
        ref={scope}
        transition={{ staggerChildren: 0.5, delayChildren: 0.25 }}
      >
        <section className="flex flex-wrap justify-center max-container gap-9">
          {services.map((service) => (
            <article key={service.label}>
              <ServiceCard {...service} />
            </article>
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default Services;
