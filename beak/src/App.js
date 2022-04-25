import logo from './img/logo.png';
import './css/bootstrap.css';
import './css/beak.css';
import { BrowserRouter,Routes,  Route, } from "react-router-dom";
import Home from "./routes/Home";
import Report from "./routes/Report";
import {Navbar, Nav, Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>

            <Navbar>
              <Container>
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="report">Report</Nav.Link>
                    <Nav.Link href="pricing">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
