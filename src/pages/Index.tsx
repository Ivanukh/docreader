import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Book } from "../types/Book";
import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";
import { Star, Github, Book as BookIcon } from 'react-bootstrap-icons'

type BookCardProps = {
  title: string,
  path: string
}

const BookCard = (props: BookCardProps) => {
  return (
    <Card style={{ margin: '20px' }}>
      <Card.Header>
        <h2>{props.title}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text>

          <Row>
            <Col sm={3}>TODO: add logo</Col>
            <Col>
              With supporting text below as a natural lead-in to additional content.<br />
              With supporting text below as a natural lead-in to additional content.<br />
              TODO: add description
              TODO: add image or logo
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Card.Link><NavLink to={props.path} className="btn btn-outline-primary"><BookIcon /> read documentaion</NavLink></Card.Link>
        <Card.Link><Star /></Card.Link>
        <Card.Link><Github /></Card.Link>
        <Card.Link>demo</Card.Link>

      </Card.Footer>
    </Card>
  )
}

const Index = () => {
  const settings = useContext(SettingsContext)
  return (
    <>
      <div className="content">
        <div className="index" style={{ border: '1px solid #d4d4d5' }}>
          <Container>
            {settings.books.map((book: Book) => <BookCard key={book.path} title={book.title} path={book.path} />)}
          </Container>
        </div>
      </div>
    </>
  )
}

export default Index;