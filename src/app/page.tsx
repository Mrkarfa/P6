import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Work from "./Work/Work";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Awards from "./Awards/Awards";
import Certificate from "./Certificate/Certificate";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-14">
        <Home />
        <About />
        <Experience />
        <Work />
        <Awards />
        <Certificate />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
