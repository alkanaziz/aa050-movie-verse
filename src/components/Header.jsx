import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">🌐 Movie Verse</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
