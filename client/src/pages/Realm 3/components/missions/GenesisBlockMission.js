// components/missions/GenesisBlockMission.js
import React, { useState } from 'react';
import '../Missions.css';

function GenesisBlockMission({ onComplete }) {
  const [message, setMessage] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [blockCreated, setBlockCreated] = useState(false);

  const handleCreateBlock = () => {
    if (message.trim() && timestamp.trim()) {
      setBlockCreated(true);
    }
  };

  const generateRandomHash = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  return (
    <div className="mission-content">
      <h2>3.2 The Genesis Block</h2>
      <h3>The Very First Block, with a Message</h3>
      
      <div className="mission-description">
        <p>
          The first block mined in the Bitcoin network is known as the Genesis Block (Block 0). 
          It was created on January 3, 2009, and contained a hidden message referencing a newspaper 
          headline about bank bailouts, emphasizing Bitcoin's anti-establishment ethos.
        </p>
        
        <div className="key-points">
          <h4>Key Points:</h4>
          <ul>
            <li><strong>Timestamp:</strong> The Genesis Block established the starting point of the blockchain.</li>
            <li><strong>Embedded Message:</strong> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."</li>
          </ul>
        </div>
      </div>
      
      <div className="challenge-section">
        <h3>Challenge: Block Builder</h3>
        <p>
          Create your own "Genesis Block" with a message that reflects your views on financial independence.
        </p>
        
        <div className="block-builder">
          <div className="block-interface">
            <div className="block-header">
              <h4>Your Genesis Block</h4>
            </div>
            
            <div className="block-body">
              <div className="input-group">
                <label>Message:</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter a message for your block..."
                  disabled={blockCreated}
                />
              </div>
              
              <div className="input-group">
                <label>Timestamp:</label>
                <input 
                  type="text"
                  value={timestamp}
                  onChange={(e) => setTimestamp(e.target.value)}
                  placeholder="e.g., May 1, 2025"
                  disabled={blockCreated}
                />
              </div>
              
              {!blockCreated && (
                <button 
                  className="create-block-button" 
                  onClick={handleCreateBlock}
                  disabled={!message.trim() || !timestamp.trim()}
                >
                  Mine Genesis Block
                </button>
              )}
            </div>
          </div>
          
          {blockCreated && (
            <div className="created-block">
              <h4>Your Block Has Been Mined!</h4>
              <div className="block-visualization">
                <div className="block-data">
                  <p><strong>Block #:</strong> 0 (Genesis)</p>
                  <p><strong>Timestamp:</strong> {timestamp}</p>
                  <p><strong>Message:</strong> {message}</p>
                  <p><strong>Hash:</strong> {generateRandomHash()}</p>
                </div>
              </div>
              <div className="badge-earned">
                <h4>You've earned the Genesis Creator title!</h4>
                <div className="badge-icon">🏆</div>
              </div>
              <button className="next-mission-button" onClick={onComplete}>
                Complete Mission and Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenesisBlockMission;