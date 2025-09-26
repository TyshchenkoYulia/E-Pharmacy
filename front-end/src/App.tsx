import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import MedicineStorePage from "./pages/MedicineStorePage";
import MedicinePage from "./pages/MedicinePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/medicine-store" element={<MedicineStorePage />} />
            <Route path="/medicine" element={<MedicinePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
