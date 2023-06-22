import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Profile = lazy(() => import("./Profile/Profile"));
const Skills = lazy(() => import("./Skills/Skills"));
const Projects = lazy(() => import("./Projects/Projects"));

const Router = () => {
  const location = useLocation();
  return (
    <ErrorBoundary FallbackComponent={<div>Error...</div>}>
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={500} classNames="fade">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    </ErrorBoundary>
  );
};

export default Router;
