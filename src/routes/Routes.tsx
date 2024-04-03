import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";

const Experience = lazy(() => import("../pages/Experience"));
const Home = lazy(() => import("../pages/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

const Routes: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <RouterRoutes>
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </RouterRoutes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
