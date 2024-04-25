import { useState } from 'react';
import './App.css';

import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('Home'); 
  const [showFakeCall, setShowFakeCall] = useState(false);

  const toggleFakeCall = () => {
    setShowFakeCall(true);
  };

  const hangUpFakeCall = () => {
    setShowFakeCall(false);
  };

  return (
    <div className="App">
      <button onClick={toggleFakeCall} style={{ position: 'absolute', top: 20, right: 20 }}>
      Switch theme 
      </button>
      {showFakeCall && (
        <div className="fake-call-screen" onClick={hangUpFakeCall}>
          <div className="call-container">
            Incoming Call...<br />
            <button onClick={hangUpFakeCall}>Hang Up</button>
          </div>
        </div>
      )}
      <Header setPage={setPage} />
      <MainArea page={page} />
      <Footer />
    </div>
  );
}

export default App;

