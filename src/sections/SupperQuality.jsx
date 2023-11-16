import { shoe8 } from "../assets/images";
import Button from "./../Components/Button";

const SupperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full max-lg:flex-col gap-1- max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super</span>
          &nbsp;
          <span className="text-coral-red">Quality</span>
          &nbsp; Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SupperQuality;
