import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const staggerItems = stagger(0.5, { startDelay: 0.15 });

export function useStaggerAnimation(isInView, element) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      element,
      isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0.25 },
      {
        type:"tween",
        ease: "easeIn",
        stiffness:10,
        bounce:0,
        duration: 0.5,
        delay: isInView ? staggerItems : 0,
      }
    );
  }, [isInView]);

  return scope;
}
