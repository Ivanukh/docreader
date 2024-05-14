import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Gear, Book } from 'react-bootstrap-icons';


function TobBar() {
  const [isLoading, setIsLoading] = useState(true);
  function toggle() {
    setIsLoading(!isLoading);
  }

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Navbar.Text className="justify-content-start text darkviolet" style={{ marginLeft: 20 }}>
          {!isLoading
            ?
            <Spinner animation="border">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            <Gear className='h2' />
          }
        </Navbar.Text>

        <Container fluid className='justify-content-center h1 text darkviolet' style={{ margin: 5 }} onClick={toggle}>
          {isLoading
            ? window.location.hostname
            : 'test title'
          }
        </Container>
        <Navbar.Text className="justify-content-end text darkviolet" style={{ marginRight: 20 }}>
          {isLoading
            ?
            <Spinner animation="border">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            <Book className='h2' />

          }
        </Navbar.Text>
      </Navbar>
    </>
  )
}


export default TobBar;