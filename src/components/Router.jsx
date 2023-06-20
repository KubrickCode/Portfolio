import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Profile = lazy(() => import("./Profile/Profile"));
const About = lazy(() => import("./About/About"));
const Skills = lazy(() => import("./Skills/Skills"));
const Projects = lazy(() => import("./Projects/Projects"));

const Router = () => {
  return (
    <ErrorBoundary FallbackComponent={<div>Error...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;
