import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TobBar from './comonents/TopBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form, ListGroup } from 'react-bootstrap';
import Footer from './comonents/Footer';
import { useEffect, useState } from 'react';

const TestText = () => {
  const groups = [];
  for (let i = 1; i < 10; i++) {
    groups.push('group_' + i);
  }

  return (
    <Container>
      {groups.map((g) => {
        const items = [];
        for (let i = 1; i < 6; i++) {
          // groups.push('group ' + i);
          items.push(i)
        }
        return (
          <ListGroup key={g} style={{ margin: 10 }}>
            <ListGroup.Item className='text violet text-right'>{g}</ListGroup.Item>
            {items.map((i) => <ListGroup.Item action key={`${g}_${i}`}>{i}<br /></ListGroup.Item>)}
          </ListGroup>
        )
      })}
    </Container>

  )
}


function App() {
  const [settings, setSettings] = useState({
    title: window.location.host
  });

  const [fetchCounter, setFetchCounter] = useState(0);
  const incCounter = () => setFetchCounter((prevState) => (prevState + 1));
  const decCounter = () => setFetchCounter((prevState) => (prevState - 1));


  function getSettings() {
    fetch(window.location.origin + '/docs/settings.json').
      then(d => d.json()).
      then(setSettings).
      then(decCounter).
      catch((e) => { console.log(e); decCounter() });

  }

  useEffect(() => {
    incCounter()
    setTimeout(getSettings, 1000);
  }, []);

  return (
    <>
      <div className="layout">
        <TobBar title={settings.title} isLoading={fetchCounter > 0} />
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
          <Col className="align-middle text-center h3" style={{
            borderWidth: '1px 0px 1px 1px',
            borderStyle: 'solid',
            borderColor: '#d4d4d5',
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

