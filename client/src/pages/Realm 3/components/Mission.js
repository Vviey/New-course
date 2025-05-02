// components/Mission.js
import React from 'react';
import SatoshiMission from './missions/SatoshiMission';
import GenesisBlockMission from './missions/GenesisBlockMission';
import DecentralizationMission from './missions/DecentralizationMission';
import PrivateKeysMission from './missions/PrivateKeysMission';
import FinalChallengeMission from './missions/FinalChallengeMission';
import BonusMission from './missions/BonusMission';
import './Mission.css';

function Mission({ missionNumber, onBack, onNextMission }) {
  const renderMission = () => {
    switch(missionNumber) {
      case 1:
        return <SatoshiMission onComplete={onNextMission} />;
      case 2:
        return <GenesisBlockMission onComplete={onNextMission} />;
      case 3:
        return <DecentralizationMission onComplete={onNextMission} />;
      case 4:
        return <PrivateKeysMission onComplete={onNextMission} />;
      case 5:
        return <FinalChallengeMission onComplete={onNextMission} />;
      case 6:
        return <BonusMission onComplete={onNextMission} />;
      default:
        return <div>Mission not found</div>;
    }
  };

  return (
    <div className="mission-container">
      <div className="mission-header">
        <button className="back-button" onClick={onBack}>Back to Home</button>
        <h2>Mission {missionNumber}</h2>
      </div>
      
      {renderMission()}
    </div>
  );
}

export default Mission;