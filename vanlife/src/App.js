import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import "./server"
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Login from "./pages/Login";
import HostVanDetailLayout from "./components/HostVanDetailLayout";
import Page404 from "./pages/Page404";
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />}/>
    <Route path="login" element={<Login />}/>
    <Route path="about" element={<About />}/>
    <Route path="vans">
      <Route 
        index 
        element={<Vans />} 
        loader={vansLoader}
        errorElement={<ErrorElement/>}
      />
      <Route path=":id" element={<VanDetail />}/>
    </Route>
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />}/>
      <Route path="review" element={<Review />}/>
      <Route path="vans">
        <Route index element={<HostVans />}/>
        <Route path=":id" element={<HostVanDetailLayout />}>
          <Route index element={<HostVanDetail/>}/>
          <Route path="pricing" element={<HostVanPricing/>}/>
          <Route path="photos" element={<HostVanPhotos/>}/>
        </Route>
      </Route>
    </Route>
    <Route path="*" element={<Page404/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
