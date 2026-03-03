
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SocialMedia from "./pages/SocialMedia";
import Branding from "./pages/Branding";
function App() {
  return (
      <div className="App">
          <>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/socialmedia" element={<SocialMedia />} />
                  <Route path="/branding" element={<Branding />} />
              </Routes>
              <Footer></Footer>
          </>
      </div>
  );
}

export default App;
