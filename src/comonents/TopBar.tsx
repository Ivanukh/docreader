import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Book as BookIcon } from 'react-bootstrap-icons';
import { BookSelector } from './BookSelector';
import { Book } from '../types/Book';
import { NavLink } from 'react-router-dom';


type TopBarProps = {
  title?: string,
  isLoading: boolean,
  books: Book[]
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
          <BookIcon className='h2' />
        }
      </Navbar.Text>
      <Container fluid className='h1' style={{ margin: 5, textDecoration: 'none' }} as={NavLink} to='/'>
        {props.title}
      </Container>
      <Navbar.Text className="justify-content-end text darkviolet" style={{ marginRight: 20, }}>
        <BookSelector books={props.books} homeTitle={props.title || ''} />
      </Navbar.Text>
    </Navbar>
  )
}


export default TobBar;