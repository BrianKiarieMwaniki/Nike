import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Products, AboutUs, ContactUs } from "./pages";
import { AnimatePresence } from "framer-motion";
import PageTransitionWrapper from "./Components/PageTransitionWrapper";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(    
    <Route path="/" element={<Layout />}>
      <Route index element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
      <Route path="/products" element={<PageTransitionWrapper><Products /></PageTransitionWrapper>} />
      <Route path="/about-us" element={<PageTransitionWrapper><AboutUs /></PageTransitionWrapper>} />
      <Route path="/contact-us" element={<PageTransitionWrapper><ContactUs /></PageTransitionWrapper>} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;
export default App;
