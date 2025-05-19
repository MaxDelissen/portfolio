import "./i18n.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsights/>
    <Analytics/>
    <RouterProvider router={router} />
  </StrictMode>
);
