import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TobBar from './comonents/TopBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form, ListGroup } from 'react-bootstrap';
import Footer from './comonents/Footer';


const TestText = () => {
  const groups = [];
  for (let i = 1; i < 10; i++) {
    groups.push('group ' + i);
  }

  return (
    <Container>
      {groups.map((i) => {
        const items = [];
        for (let i = 1; i < 6; i++) {
          groups.push('group ' + i);
          items.push(i)
        }
        return (
          <ListGroup key={i} style={{ margin: 10 }}>
            <ListGroup.Item className='text violet text-right'>{i}</ListGroup.Item>
            {items.map((i) => <ListGroup.Item href="#link1" action key={i}>{i}<br /></ListGroup.Item>)}
          </ListGroup>
        )
      })}
    </Container>

  )
}
function App() {
  return (
    <>
      <div className="layout">
        <TobBar />
        <Row style={{
          margin: 0,
          padding: 0
        }}>
          <Col sm={3} style={{
            border: '1px solid #d4d4d5',
            borderRight: 0,
            margin: 0,
            padding: 10,
          }}
          >
            <Form.Control
              placeholder="search"
              className='shadow-none'
            />
          </Col>
          <Col className="align-middle text-center h3" style={{
            border: '1px solid #d4d4d5',
            margin: 0,
            padding: 10
          }}
          >
            title
          </Col>

        </Row>
        <div className="content">
          <div className="left">
            <TestText />
          </div>
          <div className="right">
            <TestText />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;

