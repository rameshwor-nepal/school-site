import About from "./component/home/About";
import Contact from "./component/home/Contact";
import FeaturedProject from "./component/home/FeaturedProject";
import Footer from "./component/home/Footer";
import HeroSection from "./component/home/HeroSection";
import Services from "./component/home/Services";
import Testimonials from "./component/home/Testimonials";
import NewHomePage from "./component/new-home/NewHomePage";

export default function Home() {
  return (
    <>
    {/* <NewHomePage /> */}
      <div className="text-blue-600">
        <HeroSection />
        <About />
        <Services />
        <FeaturedProject />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
