
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Hardware from "./pages/Hardware";
import SupportAdmin from "./pages/SupportAdmin";
import Automation from "./pages/Automation";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/support-admin" element={<SupportAdmin />} />
          <Route path="/automation" element={<Automation />} />
        </Routes>
      </Layout>
    </Router>
  );
}
