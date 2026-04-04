import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import Activities from "@/components/home/Activities";
import Cafe from "@/components/home/Cafe";
import Gallery from "@/components/home/Gallery";
import Contact from "@/components/home/Contact";
import Footer from "@/components/footer/Footer";
import BackgroundWordmark from "@/components/common/BackgroundWordmark";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      
      {/* Called directly in the Home page! */}
      <BackgroundWordmark />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Highlights />
        <Activities />
        <Cafe/>
        <Gallery/>
        <Contact/>
        <Footer />
      </div>

    </main>
  );
}