export const dropNavVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export const dropNavlinkVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const popularProductCardContainerVariants = {
    visible:{
        transition: {staggerChildren: 0.1}
    }
}

export const popularProductCardVariants = {
    hidden: {opacity:0, y:4000},
    visible:{opacity:1, y:0 , transition:{duration:0.5}}
}

export const slideIn = (direction) =>{
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      opacity: 0.6
    },
    visible: {
      x:0,
      opacity:1
    }
  }
}

export const fadeIn = (direction)=>{
  return {
    hidden: {
      y: direction === "up" ? 100 :direction === "down"? -100 :0,
      opacity: 0.25
    },
    visible:{
      y:0,
      opacity:1
    }
  }
}

export const pageTransitions = {
  hidden:{
    opacity:0,
    x:"-100%"
  },
  in: {
    opacity: 1,
    x:0
  },
  exit:{
    opacity:0.25,
    x:"100%"
  }
}