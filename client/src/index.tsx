import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./pages/App";
import Auth from "./pages/Auth";
import Board from "./pages/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/board",
    element: <Board />,
  },
]);

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <div className="min-h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

reportWebVitals();
