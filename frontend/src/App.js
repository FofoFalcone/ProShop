import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./templates/HomeScreen";
import ProductScreen from "./templates/ProductScreen";
import CartScreen from "./templates/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Container>
          <Routes>
            <Route path="/" element={< HomeScreen />} />
            <Route path="/product/:id" element={< ProductScreen />} />
            <Route path="/cart" element={< CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
