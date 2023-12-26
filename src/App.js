import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Results from './components/Results.jsx';
import About from './components/About.jsx';

function App() {
  const [speech, setSpeech] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <i className="bi bi-chat-quote"></i>
        <h1>The Simple Speech App</h1>
      </header>
      <section>
        <About />
      </section>
      <main className="main-section">
        <Form.Group className="textbox">
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Enter your speech here..."
            onChange={(e) => setSpeech(e.target.value)}
          />
          <Form.Text muted>
            You can expand this text box by dragging its bottom right corner.
          </Form.Text>
        </Form.Group>
        <Results speech={speech} />
      </main>
    </div>
  );
}

export default App;
