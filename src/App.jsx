import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RazaGato from "./pages/RazaGato";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/raza/:raza" element={<RazaGato />} />
      </Routes>
    </BrowserRouter>
  );
}
