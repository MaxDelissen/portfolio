import "./i18n.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useParams } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// import Home from "./pages/Home.tsx";
// import NotFound from "./pages/NotFound.tsx";
// import createProjectPage from "./pages/projects/ProjectLoader.tsx";

import "./custom.scss";

// function DynamicProjectPage() {
//   const { projectId } = useParams();
//   const id = parseInt(projectId || "", 10);
//   return isNaN(id) ? <NotFound isProject={true} /> : createProjectPage(id);
// }

// const router = createBrowserRouter([
//   { path: "/", errorElement: <NotFound />, children: [{ index: true, element: <Home /> }] },
//   { path: "/projects/:projectId", element: <DynamicProjectPage />, errorElement: <NotFound isProject={true} /> },
//   { path: "*", element: <NotFound /> },
// ]);

function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Playfair Display', serif",
      margin: 0,
      padding: 0
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
          body { margin: 0; padding: 0; }
        `}
      </style>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        padding: '2rem',
        maxWidth: '90%'
      }}>
        This site is being replaced.<br />Be prepared for something more amazing
      </h1>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    { <SpeedInsights /> }
    { <Analytics /> }
    {/* <RouterProvider router={router} /> */}
    <ComingSoon />
  </StrictMode>
);
