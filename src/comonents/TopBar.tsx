import { Dropdown, Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Book } from 'react-bootstrap-icons';


type TopBarProps = {
  title?: string,
  isLoading: boolean
}


function TobBar(props: TopBarProps) {

  return (
    <Navbar bg='light'>
      <Navbar.Text className="justify-content-start" style={{ marginLeft: 20 }}>
        {props.isLoading
          ?
          <Spinner animation="border">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          :
          <Book className='h2' />
        }
      </Navbar.Text>
      <Container fluid className='justify-content-center h1' style={{ margin: 5 }}>
        {props.title}
      </Container>
      <Navbar.Text className="justify-content-end text darkviolet" style={{ marginRight: 20 }}>
        <Dropdown align={'end'}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {props.title}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Navbar.Text>
    </Navbar>
  )
}


export default TobBar;