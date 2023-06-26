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
import { requireAuth } from "./utils";

// const requireAuthLoader = async () => {
//   const isLoggedIn = false;
//   if(!isLoggedIn) {
    
//     let response = redirect("/login");
//     response.body = true;
//     console.log(response)
//     throw response;
//   } else {
//     return null
//   }
// }

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
    >
      <Route 
        index 
        element={<Dashboard />} 
        loader={async () => await requireAuth()}
      />
      <Route 
        path="income" 
        element={<Income />}
        loader={async () => await requireAuth()}
      />
      <Route 
        path="review" 
        element={<Review />}
        loader={async () => await requireAuth()}
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
            loader={async () => await requireAuth()}
          />
          <Route 
            path="pricing" 
            element={<HostVanPricing/>}
            loader={async () => await requireAuth()}
          />
          <Route 
            path="photos" 
            element={<HostVanPhotos/>}
            loader={async () => await requireAuth()}
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
