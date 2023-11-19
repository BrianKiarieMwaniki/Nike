import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Outlet, createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from "react-router-dom";
import { Home, Products, AboutUs, ContactUs } from "./pages";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="relative overflow-x-hidden">
        <Outlet />
      </main>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Route>
  )
)

const App = () => (
  <RouterProvider router={router}/>
);
export default App;
