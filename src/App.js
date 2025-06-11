import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route basename="/react">
          <Route path="/react" element={<Home />} />
        </Route>
        <Route basename="/react">
          <Route path="/react/key" element={<Key />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => navigate('/react/key')}>Go to key in localstore</button>
      </header>
    </div>
  );
}

function Key() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Key: {localStorage.getItem("key")}
        <button onClick={() => navigate('/react')}>Go to home</button>
      </header>
    </div>
  );
}

export default App;
