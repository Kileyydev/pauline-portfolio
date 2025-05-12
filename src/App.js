import TopNavBar from "./components/TopNavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <div className="font-sans">
      <TopNavBar/>
      <Hero />
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}

export default App;
