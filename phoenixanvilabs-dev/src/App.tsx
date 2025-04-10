import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/application/Menu";

import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
// ... other imports

function App() {
  return (
    <Router>
      <Container fluid>
        <Row className="flex-nowrap">
          {/* Menu on the left */}
          <Col xs={12} md={3} lg={2} className="bg-dark text-light p-3">
            <Menu />
          </Col>

          {/* Main content on the right */}
          <Col xs={12} md={9} lg={10} className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              {/* Add more routes here */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
