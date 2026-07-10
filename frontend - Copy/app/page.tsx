import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Programs from "../components/Programs";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
      }}
    >
      <Navbar />
    
     <Hero />
      <About />
      <Programs />
      <Gallery />
      <WhyChooseUs />

      
      <Footer />
    
    </main>
  );
}