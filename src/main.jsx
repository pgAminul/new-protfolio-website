import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Router from "./Components/Router/Router.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParallaxProvider>
      <Router />
    </ParallaxProvider>
  </StrictMode>
);
