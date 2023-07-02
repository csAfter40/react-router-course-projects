import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
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
import Login, { loader as loginLoader } from "./pages/Login";
import Logout from "./pages/Logout";
import HostVanDetailLayout, {loader as hostVanDetailLayoutLoader} from "./components/HostVanDetailLayout";
import Page404 from "./pages/Page404";
import { requireAuth } from "./utils";
import { UserProvider } from "./components/UserProvider";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home />}/>
    <Route 
      path="login" 
      element={<Login />} 
      loader={loginLoader}
    />
    <Route path="logout" element={<Logout/>}/>
    <Route path="about" element={<About />}/>
    <Route path="vans">
      <Route 
        index 
        element={<Vans />} 
        loader={vansLoader}
      />
      <Route 
        path=":id" 
        element={<VanDetail />}
        loader={vanDetailLoader}
      />
    </Route>
    <Route 
      path="host" 
      element={<HostLayout />}
    >
      <Route 
        index 
        element={<Dashboard />} 
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route 
        path="income" 
        element={<Income />}
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route 
        path="review" 
        element={<Review />}
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route 
        path="vans"
      >
        <Route 
          index 
          element={<HostVans />}
          loader={hostVansLoader}
        />
        <Route 
          path=":id" 
          element={<HostVanDetailLayout />}
          loader={hostVanDetailLayoutLoader}
        >
          <Route 
            index 
            element={<HostVanDetail/>}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route 
            path="pricing" 
            element={<HostVanPricing/>}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route 
            path="photos" 
            element={<HostVanPhotos/>}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
      </Route>
    </Route>
    <Route path="*" element={<Page404/>}/>
  </Route>
))

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  );
}

export default App;
