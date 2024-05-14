import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar>
      <Container >
      </Container>
      <Navbar.Text className="text gray" style={{ marginRight: 20 }}>
        footer
        <br />
      </Navbar.Text>
    </Navbar>
  )
}


export default Footer;