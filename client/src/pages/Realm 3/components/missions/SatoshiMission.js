// components/missions/SatoshiMission.js
import React, { useState } from 'react';
import '../Missions.css';

function SatoshiMission({ onComplete }) {
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [cluesFound, setCluesFound] = useState([false, false, false]);
  const [scavengerCompleted, setScavengerCompleted] = useState(false);

  const handleQuizSubmit = () => {
    // Checking if answer B is selected
    const correct = quizAnswer === 'B';
    setIsCorrect(correct);
    setQuizSubmitted(true);
  };

  const handleClueFound = (index) => {
    const newCluesFound = [...cluesFound];
    newCluesFound[index] = true;
    setCluesFound(newCluesFound);
    
    // Check if all clues are found
    if (newCluesFound.every(clue => clue === true)) {
      setScavengerCompleted(true);
    }
  };

  return (
    <div className="mission-content">
      <h2>3.1 The Spark of Satoshi</h2>
      <h3>The Origin Story of Bitcoin</h3>
      
      <div className="mission-description">
        <p>
          The story of Bitcoin begins with an enigmatic figure known as Satoshi Nakamoto, 
          who published the Bitcoin whitepaper in 2008. This document outlined a peer-to-peer 
          electronic cash system that would allow online payments to be sent directly from one 
          party to another without going through a financial institution.
        </p>
        
        <div className="key-points">
          <h4>Key Points:</h4>
          <ul>
            <li><strong>Satoshi's Vision:</strong> A system that enables trustless transactions.</li>
            <li><strong>Launch of Bitcoin:</strong> The software was released in 2009, marking the birth of Bitcoin.</li>
          </ul>
        </div>
      </div>
      
      <div className="challenge-section">
        <h3>Challenge: Quiz Question</h3>
        <p>Who is Satoshi Nakamoto, and what was the main purpose of Bitcoin?</p>
        
        <div className="quiz-options">
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="A" 
              onChange={() => setQuizAnswer('A')}
              disabled={quizSubmitted}
            />
            A financial institution aiming to control currency.
          </label>
          
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="B" 
              onChange={() => setQuizAnswer('B')}
              disabled={quizSubmitted}
            />
            A group of developers creating a decentralized currency.
          </label>
          
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="C" 
              onChange={() => setQuizAnswer('C')}
              disabled={quizSubmitted}
            />
            An individual advocating for traditional banking systems.
          </label>
        </div>
        
        {!quizSubmitted ? (
          <button onClick={handleQuizSubmit} disabled={!quizAnswer}>Submit Answer</button>
        ) : (
          <div className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct! Satoshi Nakamoto is believed to be a pseudonym for the person or group who created Bitcoin as a decentralized currency system.' 
            : 'Not quite right. Try again!'}
          </div>
        )}
      </div>
      
      <div className="challenge-section">
        <h3>Challenge: Satoshi's Quest</h3>
        <p>
          A scavenger hunt where you search for clues related to Bitcoin's origin. 
          Each clue leads to a fact about Satoshi Nakamoto or early Bitcoin history. 
          Completing the hunt earns you a "Satoshi Badge."
        </p>
        
        <div className="scavenger-hunt">
          <div className={`clue ${cluesFound[0] ? 'found' : ''}`} onClick={() => handleClueFound(0)}>
            {cluesFound[0] ? (
              <p>CLUE FOUND: Satoshi Nakamoto published the Bitcoin whitepaper on October 31, 2008.</p>
            ) : (
              <p>Click to search for clue 1...</p>
            )}
          </div>
          
          <div className={`clue ${cluesFound[1] ? 'found' : ''}`} onClick={() => handleClueFound(1)}>
            {cluesFound[1] ? (
              <p>CLUE FOUND: The first Bitcoin transaction was sent to Hal Finney in January 2009.</p>
            ) : (
              <p>Click to search for clue 2...</p>
            )}
          </div>
          
          <div className={`clue ${cluesFound[2] ? 'found' : ''}`} onClick={() => handleClueFound(2)}>
            {cluesFound[2] ? (
              <p>CLUE FOUND: Satoshi disappeared from public involvement with Bitcoin in 2011.</p>
            ) : (
              <p>Click to search for clue 3...</p>
            )}
          </div>
        </div>
        
        {scavengerCompleted && (
          <div className="badge-earned">
            <h4>Congratulations! You've earned the Satoshi Badge!</h4>
            <div className="badge-icon">🏅</div>
          </div>
        )}
      </div>
      
      {(isCorrect && scavengerCompleted) && (
        <button className="next-mission-button" onClick={onComplete}>
          Complete Mission and Continue
        </button>
      )}
    </div>
  );
}

export default SatoshiMission;