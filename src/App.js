import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage.js";
import CampsiteDirectoryPage from "./pages/CampsiteDirectoryPage.js";
import CampsiteDetailPage from "./pages/CampsiteDetailPage.js";
import ContactPage from "./pages/ContactPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="directory" element={<CampsiteDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
