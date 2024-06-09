import { Col, Form, Row } from "react-bootstrap";
import Content from "../comonents/Content";
import { LeftBar } from "../comonents/LeftBar";


const sections = [
  {
    "title": "section1",
    "path": "/section1",
    "items": [
      {
        "title": "title 1",
        "path": "item1",
        "description": "some test description 1"
      },
      {
        "title": "title 2",
        "path": "item2"
      },
      {
        "title": "title 3",
        "path": "item3",
        "description": "some test description 3"
      },
      {
        "title": "title 4",
        "path": "item4"
      },
      {
        "title": "title 5",
        "path": "item5"
      },
      {
        "title": "title 6",
        "path": "item6"
      },
      {
        "title": "title 7",
        "path": "item7"
      }
    ]
  },
  {
    "title": "section2",
    "path": "/section2",
    "items": [
      {
        "title": "title 2",
        "path": "2item2"
      }
    ]
  },
  {
    "title": "section3",
    "path": "/section3",
    "items": [
      {
        "title": "title 3",
        "path": "3item3"
      }
    ]
  },
  {
    "title": "section4",
    "path": "/section4",
    "items": [
      {
        "title": "title 4",
        "path": "4item4",
        "description": "some test description"
      },
      {
        "title": "title 5",
        "path": "5item5",
        "description": "some test description"
      },
      {
        "title": "title 6",
        "path": "6item6",
        "description": "some test description"
      },
      {
        "title": "title 7",
        "path": "7item7"
      }
    ]
  }
]



function Book() {
  return (
    <>
      <Row style={{
        margin: 0,
        padding: 0
      }}>
        <Col sm={3} style={{
          borderWidth: '1px 0px 1px 1px',
          borderStyle: 'solid',
          borderColor: '#d4d4d5',
          margin: 0,
          padding: 10,
        }}
        >
          <Form.Control
            placeholder="search"
            className='shadow-none'
          />
        </Col>
        <Col className="align-middle h3 text violet" style={{
          borderWidth: '1px 0px 1px 1px',
          borderStyle: 'solid',
          borderColor: '#d4d4d5',
          margin: 0,
          padding: 10,
        }}
        >
          title
        </Col>

      </Row>
      <div className="content">
        <div className="left">
          <LeftBar sections={sections} />
        </div>
        <div className="right" style={{ padding: '20px' }}>
          <Content />
        </div>
      </div>
    </>
  )
}

export default Book;