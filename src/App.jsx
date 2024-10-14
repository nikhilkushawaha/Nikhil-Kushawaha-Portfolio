import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import About from "./screen/About";
import Projects from "./screen/Projects";
import Reviews from "./screen/Reviews";
import WorkExperience from "./screen/Experience";
import Contact from "./screen/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Home/>
      <About/>
      <Projects />
      <Reviews/>
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;