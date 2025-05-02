// App.js
import React, { useState } from 'react';
import Home from './components/Home';
import Mission from './components/Mission';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [currentMission, setCurrentMission] = useState(1);

  const navigateToMission = (missionNumber) => {
    setCurrentMission(missionNumber);
    setCurrentScreen('mission');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="app">
      {currentScreen === 'home' ? (
        <Home onStartMission={navigateToMission} />
      ) : (
        <Mission 
          missionNumber={currentMission} 
          onBack={navigateToHome}
          onNextMission={() => setCurrentMission(prev => prev + 1)}
        />
      )}
    </div>
  );
}

export default App;