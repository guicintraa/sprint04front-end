import Lembretes from "./pages/Lembretes";
import LembreteDetalhe from "./pages/LembreteDetalhe";
import LembreteForm from "./pages/LembreteForm";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import NotFound from "./pages/NotFound.tsx";    // opção 2 (força resolução)
       


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavMenu />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/lembretes" element={<Lembretes />} />
<Route path="/lembretes/novo" element={<LembreteForm />} />
<Route path="/lembretes/:id" element={<LembreteDetalhe />} />
<Route path="/lembretes/:id/editar" element={<LembreteForm />} />

            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
