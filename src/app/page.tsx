import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Work from "./Work/Work";
import About from "./About/About";
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
        <Blog />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
