import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SupperQuality,
  Services,
  SpecialOffer,
  Subscribe,
} from "../sections";

const Home = () => {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="overflow-hidden padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SupperQuality />
      </section>
      <section className="py-10 padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="overflow-hidden bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="w-full padding-x sm:py-32 py-15">
        <Subscribe />
      </section>
    </>
  );
};

export default Home;
