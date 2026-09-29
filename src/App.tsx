import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy load pages to slice JS memory footprint
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Hardware = lazy(() => import("./pages/Hardware"));
const SupportAdmin = lazy(() => import("./pages/SupportAdmin"));
const Automation = lazy(() => import("./pages/Automation"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/support-admin" element={<SupportAdmin />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
