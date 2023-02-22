import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AllPublications from "./AllPublications";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import AllNews from "./AllNews";

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
  ]);
  return (
    <>
      <MobileMenu />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
