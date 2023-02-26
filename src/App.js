import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AllPublications from "./AllPublications";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import AllNews from "./AllNews";
import AboutMe from "./AboutMe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/allpublications",
      element: <AllPublications />,
    },
    {
      path: "/allnews",
      element: <AllNews />,
    },
    {
      path: "/about",
      element: <AboutMe />,
    },
  ]);
  return (
    <>
      <MobileMenu />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
