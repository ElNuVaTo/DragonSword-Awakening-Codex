import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import Footer from "./layout/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Footer/>
  </StrictMode>,
);
