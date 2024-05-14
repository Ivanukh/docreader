import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Gear, Book } from 'react-bootstrap-icons';


type TopBarProps = {
  title?: string,
  isLoading: boolean
}


function TobBar(props: TopBarProps) {

  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Text className="justify-content-start text darkviolet" style={{ marginLeft: 20 }}>
        <Gear className='h2' />
      </Navbar.Text>
      <Container fluid className='justify-content-center h1 text darkviolet' style={{ margin: 5 }}>
        {props.title}
      </Container>
      <Navbar.Text className="justify-content-end text darkviolet" style={{ marginRight: 20 }}>
        {props.isLoading
          ?
          <Spinner animation="border">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Book className='h2' />
        }
      </Navbar.Text>
    </Navbar>
  )
}


export default TobBar;