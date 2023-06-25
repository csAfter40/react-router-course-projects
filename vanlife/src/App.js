import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader} from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import "./server"
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostLayout from "./components/HostLayout";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Login from "./pages/Login";
import HostVanDetailLayout, {loader as hostVanDetailLayoutLoader} from "./components/HostVanDetailLayout";
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
      <Route 
        path=":id" 
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<ErrorElement />}
      />
    </Route>
    <Route 
      path="host" 
      element={<HostLayout />}
      loader={async ()=>{
        return null;
      }}
    >
      <Route 
        index 
        element={<Dashboard />} 
        loader={async ()=>{
          return null
        }}
      />
      <Route 
        path="income" 
        element={<Income />}
        loader={async ()=>{
          return null
        }}
      />
      <Route 
        path="review" 
        element={<Review />}
        loader={async ()=>{
          return null
        }}
      />
      <Route 
        path="vans"
      >
        <Route 
          index 
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<ErrorElement />}
        />
        <Route 
          path=":id" 
          element={<HostVanDetailLayout />}
          loader={hostVanDetailLayoutLoader}
          errorElement={<ErrorElement />}
        >
          <Route 
            index 
            element={<HostVanDetail/>}
            loader={async ()=>{
              return null
            }}
          />
          <Route 
            path="pricing" 
            element={<HostVanPricing/>}
            loader={async ()=>{
              return null
            }}
          />
          <Route 
            path="photos" 
            element={<HostVanPhotos/>}
            loader={async ()=>{
              return null
            }}
          />
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
