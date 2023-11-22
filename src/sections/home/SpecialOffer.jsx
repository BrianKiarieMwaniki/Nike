import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import Button from "../../Components/Button";
import { slideIn } from "../../utils/motion";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const SpecialOffer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            src={offer}
            alt=""
            width={773}
            height={687}
            className="object-contain w-full"
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
            <br />
            <span className="text-coral-red">Special</span>
            &nbsp;Offer
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
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings,
              we offer unparalleled value that sets us apart.
            </p>

            <p className="mt-6 lg:max-w-lg info-text">
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short of exceptional.
            </p>
            <div className="flex flex-wrap gap-4 mt-11">
              <Button
                label="Shop now"
                isLink={true}
                href="/products"
                iconUrl={arrowRight}
              />
              <Button
                label="Learn more"
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default SpecialOffer;
