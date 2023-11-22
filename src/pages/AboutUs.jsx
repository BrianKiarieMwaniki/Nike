import { Innovation, Intro, OurStory } from "../sections"
import Empowering from "../sections/about/Empowering"

const AboutUs = () => {
  return (
    <>
    <section>
      <Intro/>
    </section>
    <section className="padding">
      <OurStory/>
    </section>
    <section className="padding">
      <Innovation/>
    </section>
    <section>
     <Empowering/>
    </section>
    </>
  )
}

export default AboutUs