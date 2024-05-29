import { HeroSection } from "../Components/HeroSection"
import { Headers } from "../Components/Headers"
import { FeaturedProducts } from "../Components/FeaturedProducts"
import { Feedback } from "../Components/Feedback"
import { LandingSection5 } from "../Components/LandingSection5"
import { BandageFooter } from "../Components/BandageFooter"



export const LandingPage = () => {
  return (
    <section>
        <Headers />
        <HeroSection />
        <FeaturedProducts />
        <Feedback />
        <LandingSection5 />
        <BandageFooter />
    </section>
  )
}


