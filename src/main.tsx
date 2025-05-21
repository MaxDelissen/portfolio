import "./i18n.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import ProjectDetails from "./pages/projects/template.tsx";

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
  {
    path: "/projects",
    errorElement: <NotFound isProject={true}/>,
    children: [
      {
        index: true,
        element: (
          <ProjectDetails
            title={"Demo Project"}
            description={"Hello World!"}
            images={["https://dummyimage.com/220x185/ff0000/fff.png"]}
          />
        ),
      },
      {
        path: "*",
        element: <NotFound isProject={true} />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsights />
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>
);
