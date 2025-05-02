// components/missions/PrivateKeysMission.js
import React, { useState } from 'react';
import '../Missions.css';

function PrivateKeysMission({ onComplete }) {
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [currentThreat, setCurrentThreat] = useState(0);
  const [selectedAction, setSelectedAction] = useState(null);

  const threats = [
    {
      id: 1,
      description: "You receive an email claiming to be from a cryptocurrency exchange asking for your private keys to 'verify your account'.",
      actions: [
        { id: 'a', text: "Share your private keys to verify your account", correct: false },
        { id: 'b', text: "Ignore the email and report it as phishing", correct: true },
        { id: 'c', text: "Reply asking for more information", correct: false }
      ]
    },
    {
      id: 2,
      description: "Your computer crashes and you haven't backed up your private keys.",
      actions: [
        { id: 'a', text: "Accept that you've lost access to your funds", correct: false },
        { id: 'b', text: "Try to recover the keys by hiring a hacker", correct: false },
        { id: 'c', text: "This situation could have been prevented by backing up keys in a secure location", correct: true }
      ]
    },
    {
      id: 3,
      description: "You want to store your private keys securely. What's the best approach?",
      actions: [
        { id: 'a', text: "Write them on a sticky note on your monitor", correct: false },
        { id: 'b', text: "Use a hardware wallet and keep the recovery phrase in a secure location", correct: true },
        { id: 'c', text: "Save them in a text file named 'private_keys.txt' on your desktop", correct: false }
      ]
    }
  ];

  const handleQuizSubmit = () => {
    // Checking if answer B is selected
    const correct = quizAnswer === 'B';
    setIsCorrect(correct);
    setQuizSubmitted(true);
  };

  const handleThreatAction = (actionId) => {
    setSelectedAction(actionId);
    const currentThreatObj = threats[currentThreat];
    const selectedActionObj = currentThreatObj.actions.find(action => action.id === actionId);
    
    if (selectedActionObj.correct) {
      setGameScore(gameScore + 1);
    }
    
    // Move to next threat or complete game
    if (currentThreat < threats.length - 1) {
      setTimeout(() => {
        setCurrentThreat(currentThreat + 1);
        setSelectedAction(null);
      }, 1500);
    } else {
      setTimeout(() => {
        setGameCompleted(true);
      }, 1500);
    }
  };

  return (
    <div className="mission-content">
      <h2>3.4 Private Keys & Digital Sovereignty</h2>
      <h3>Self-Custody Begins</h3>
      
      <div className="mission-description">
        <p>
          A private key is a cryptographic key that allows users to access their Bitcoin. 
          Understanding private keys is crucial for digital sovereignty, as it gives 
          individuals control over their funds without reliance on intermediaries.
        </p>
        
        <div className="key-points">
          <h4>Key Points:</h4>
          <ul>
            <li><strong>Private Key vs. Public Key:</strong> Public keys are shared; private keys are kept secret.</li>
            <li><strong>Self-Custody:</strong> The practice of managing one's own cryptocurrencies.</li>
          </ul>
        </div>
      </div>
      
      <div className="challenge-section">
        <h3>Challenge: Quiz Question</h3>
        <p>Why is it important to keep your private key secure?</p>
        
        <div className="quiz-options">
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="A" 
              onChange={() => setQuizAnswer('A')}
              disabled={quizSubmitted}
            />
            It is needed to access your bank account.
          </label>
          
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="B" 
              onChange={() => setQuizAnswer('B')}
              disabled={quizSubmitted}
            />
            Losing it could mean losing access to your funds.
          </label>
          
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="C" 
              onChange={() => setQuizAnswer('C')}
              disabled={quizSubmitted}
            />
            It helps to increase your Bitcoin balance.
          </label>
        </div>
        
        {!quizSubmitted ? (
          <button onClick={handleQuizSubmit} disabled={!quizAnswer}>Submit Answer</button>
        ) : (
          <div className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct! Your private key is the only way to access and control your cryptocurrency. If lost, you permanently lose access to your funds.' 
            : 'Not quite right. Try again!'}
          </div>
        )}
      </div>
      
      <div className="challenge-section">
        <h3>Challenge: Key Keeper</h3>
        <p>
          Protect your private keys from various threats. Make the right choices to secure your keys.
        </p>
        
        {!gameCompleted ? (
          <div className="key-keeper-game">
            <div className="game-status">
              <div className="threat-counter">Threat {currentThreat + 1} of {threats.length}</div>
              <div className="score-display">Score: {gameScore}</div>
            </div>
            
            <div className="threat-scenario">
              <p>{threats[currentThreat].description}</p>
            </div>
            
            <div className="action-choices">
              {threats[currentThreat].actions.map(action => (
                <button 
                  key={action.id}
                  className={`action-button ${selectedAction === action.id ? (action.correct ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleThreatAction(action.id)}
                  disabled={selectedAction !== null}
                >
                  {action.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="game-results">
            <h4>Game Completed!</h4>
            <p>Your final score: {gameScore} out of {threats.length}</p>
            {gameScore === threats.length ? (
              <div className="perfect-score">
                <p>Perfect score! You're a master of private key security!</p>
              </div>
            ) : gameScore >= threats.length / 2 ? (
              <div className="good-score">
                <p>Good job! You have a solid understanding of private key security.</p>
              </div>
            ) : (
              <div className="low-score">
                <p>Keep learning about private key security to better protect your digital assets.</p>
              </div>
            )}
          </div>
        )}
      </div>
      
      {(isCorrect && gameCompleted) && (
        <button className="next-mission-button" onClick={onComplete}>
          Complete Mission and Continue
        </button>
      )}
    </div>
  );
}

export default PrivateKeysMission;