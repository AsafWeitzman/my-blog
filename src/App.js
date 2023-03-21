import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/acticles" element={<ArticlesListPage />} />
            <Route path="/acticles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
