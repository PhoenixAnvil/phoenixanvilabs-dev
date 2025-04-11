import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./components/application/Menu";
import Header from "./components/application/Header";
import './App.css';

// Placeholder page components
import Home from "./pages/Home";
import About from "./pages/About";
import MissionPage from "./pages/Mission";
import VisionPage from "./pages/Vision";

function App() {
  return (
      <Router>
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3} lg={2}>
              <Menu />
            </Col>
            <Col xs={12} md={9} lg={10}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mission" element={<MissionPage />} />
                <Route path="/vision" element={<VisionPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
  );
}

export default App;
