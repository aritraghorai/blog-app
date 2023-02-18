import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ArticleListPage from "./Pages/ArticleListPage";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import FireBaseContext from "./Context/FireBaseAuthContext/FreBaseAuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <FireBaseContext>
      <div className="App">
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <div className="page-body container mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </FireBaseContext>
  );
}

export default App;
