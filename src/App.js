import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
