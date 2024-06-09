import './App.css';
import './bootstrap.scss'
import TobBar from './comonents/TopBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import Footer from './comonents/Footer';
import { useEffect, useState } from 'react';
import Content from './comonents/Content';
import { LeftBar, SectionProps } from './comonents/LeftBar';
import { Route, Routes } from 'react-router-dom';


type Settings = {
  title: string,
  sections: SectionProps[]
}


function App() {
  const [settings, setSettings] = useState<Settings>({
    title: window.location.host,
    sections: []
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
            <LeftBar sections={settings.sections} />
          </div>
          <div className="right" style={{ padding: '20px' }}>
            <Routes>
              <Route path='*' element={<Content />} />
            </Routes>


          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;

