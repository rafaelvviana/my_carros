import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import AnuncioDetalhes from './components/pages/AnuncioDetalhes';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/anuncioDetalhe/:id" element={<AnuncioDetalhes />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
