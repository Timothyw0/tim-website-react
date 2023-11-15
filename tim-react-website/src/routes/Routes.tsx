import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const Routes: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <RouterRoutes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </RouterRoutes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
