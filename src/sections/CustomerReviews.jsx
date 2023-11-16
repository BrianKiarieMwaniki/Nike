import { reviews } from "../constants";
import ReviewCard from './../Components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-bold text-center font-palanquin">
        What Our &nbsp;
        <span className="text-coral-red">Customers</span>
        &nbsp; Say?
      </h3>
      <p className="max-w-lg m-auto mt-4 text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review) =>(
          <ReviewCard key={review.customerName} {...review}/>
        ) )}
      </div>
    </section>
  );
};

export default CustomerReviews;
