import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./templates/HomeScreen";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
