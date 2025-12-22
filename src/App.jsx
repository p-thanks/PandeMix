
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
