import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
