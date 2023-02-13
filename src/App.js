import { useState } from 'react'
import useEntities from './hooks/useEntities';

import Header from './components/Header';
import ImportData from './components/ImportData';
import Dashboard from './components/Dashboard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const rechartsData = useEntities();
  const [txtLines, setTxtLines] = useState([]);

  // loadFileHandler
  const loadFileHandler = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    // file onload
    reader.onload = () => {
      const lines = reader.result.split(/\r?\n/);
      setTxtLines(lines);
      console.log(lines);
    }

    // API POST req
    const fetchLines = async (e) => {
      e.preventDefault();

      console.log('try to fetch')
      const response = await fetch('https://api.textrazor.com', {
        method: 'POST',
        // mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          'X-TextRazor-Key': '1898c7f45f67f1c87763915a784a2812dcf1ea9f54c90b2bd4bae338',
          'Accept-encoding': 'gzip'
        },
        body: JSON.stringify({
          'text': 'George Bush was a president of USA',
          'extractors': 'entities'
        })
      },);

      // const data = await response.json();
    }
    // fetchLines();
    console.log('Entcounts: ', rechartsData)
  }


  return (
    <Container className="App">
      <Row>
        <Col>
          <Header className='d-flex justify-content-centre' />
          <ImportData
            loadFileHandler={loadFileHandler}
            txtLines={txtLines} />
          <Dashboard txtLines={txtLines} rechartsData={rechartsData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
