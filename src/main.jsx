import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import PageBuild from "./pages/build/PageBuild";
import Footer from "./layout/Footer";
import HeaderLanding from "./layout/HeaderLanding";
import PageWorld from "./pages/world/PageWorld";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <HeaderLanding />
          <PageBuild />
          <Footer />
        </>
      ),
    },
    {
      path: "/build/:code",
      element: (
        <>
          <PageBuild />

          <Footer />
        </>
      ),
    },
    {
      path: "/word",
      element: (
        <>
          <HeaderLanding />
          <PageWorld />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <HeaderLanding />
          <Footer />
        </>
      ),
    },
    {
      path: "/cook",
      element: (
        <>
          <HeaderLanding />
          <Footer />
        </>
      ),
    },
  ],
  {
    basename: "/DragonSword-Awakening-Codex",
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
