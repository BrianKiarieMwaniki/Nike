import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";
import { useInView } from "react-intersection-observer";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";
import { motion } from 'framer-motion';

const PopularProducts = () => {
  const [ref, isInView] = useInView({triggerOnce:true, threshold:0.1});
  const scope = useStaggerAnimation(isInView, "article")
  return (
    <div ref={ref}>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-bold font-palanquin">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="mt-2 lg:max-w-lg font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design and value.
          </p>
        </div>

        <motion.div
          ref={scope}
          transition={{ staggerChildren: 0.5, delayChildren: 0.25 }}
          className="grid justify-center mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 sm:gap-4 gap-14"
        >
          {products.map((product) => (
            <article key={product.name}>
              <PopularProductCard {...product} />
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default PopularProducts
