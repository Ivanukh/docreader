import { NavLink, useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { House } from 'react-bootstrap-icons';
import { Book } from "../types/Book";

type BookSelectorProps = {
  books: Book[],
  homeTitle: string
}

function BookSelector(props: BookSelectorProps) {
  const { bookPath } = useParams();
  const activeTitle = bookPath ? props.books.find((book: Book) => book.path == bookPath)?.title : '';
  return <>
    <Dropdown className="btn-block" align={'end'} >
      <Dropdown.Toggle variant="primary" className="w-100">
        {activeTitle || <House />}
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item as={NavLink} to={'/'}>{props.homeTitle}</Dropdown.Item>
        <Dropdown.Divider />
        {props.books.map((book: Book) =>
          <Dropdown.Item key={book.path} as={NavLink} to={book.path}>{book.title}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  </>

}

export {
  BookSelector,
};