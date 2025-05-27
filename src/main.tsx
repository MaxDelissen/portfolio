import "./i18n.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useParams } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import createProjectPage from "./pages/projects/ProjectLoader.tsx";

import "./custom.scss";

function DynamicProjectPage() {
  const { projectId } = useParams();
  const id = parseInt(projectId || "", 10);
  return isNaN(id) ? <NotFound isProject={true} /> : createProjectPage(id);
}

const router = createBrowserRouter([
  { path: "/", errorElement: <NotFound />, children: [{ index: true, element: <Home /> }] },
  { path: "/projects/:projectId", element: <DynamicProjectPage />, errorElement: <NotFound isProject={true} /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsights />
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>
);