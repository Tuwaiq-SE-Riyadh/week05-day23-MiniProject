import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    // <Link to="/">Home</Link>
    //<Link to="/WatchLater">Watch Later</Link>
    <div className="links">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Youtube</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/WatchLater">Watch Later</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
