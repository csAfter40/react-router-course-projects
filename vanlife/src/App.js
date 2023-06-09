import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import "./server"
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostLayout from "./components/HostLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host/income" element={<Income />}/>
            <Route path="/host/review" element={<Review />}/>
            <Route index element={<Dashboard />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
