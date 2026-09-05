import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import PageBuild from "./pages/build/PageBuild";
import Footer from "./layout/Footer";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
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
