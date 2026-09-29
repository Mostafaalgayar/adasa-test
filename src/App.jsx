import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NotFound from "./pages/NotFound";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import About from "./Pages/ِAbout";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/about" element={<About />} />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
