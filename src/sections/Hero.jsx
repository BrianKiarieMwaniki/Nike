import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import ShoeCard from "./../Components/ShoeCard";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container "
    >
      <motion.div
        initial={{x:-200}}
        animate={{x:0}}
        transition={{
          type:"tween",
          duration: 0.7
        }}
      className="relative flex-col items-start justify-center w-full xl:w-2/5 flex- max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{x:4000}}
        animate={{x:0}}
        transition={{
          type:"tween",
          duration: 0.7
        }}
      className="relative flex items-center justify-center flex-1 bg-center bg-cover xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />

        <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imageUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
