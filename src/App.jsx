import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Khadamat from "./components/Khadamat/Khadamat";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/shop";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Home />
        <Shop />
        <Khadamat />
        <About />
        <Contact />
        <Footer/>
      </main>
    </>
  )
}

export default App
