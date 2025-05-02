// components/missions/DecentralizationMission.js
import React, { useState } from 'react';
import '../Missions.css';

function DecentralizationMission({ onComplete }) {
  const [matchesCompleted, setMatchesCompleted] = useState(0);
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [discussionText, setDiscussionText] = useState('');
  const [discussionSubmitted, setDiscussionSubmitted] = useState(false);

  const benefits = [
    { id: 1, text: "Censorship Resistance" },
    { id: 2, text: "Security Through Redundancy" },
    { id: 3, text: "Removal of Middlemen" },
    { id: 4, text: "Global Accessibility" }
  ];

  const descriptions = [
    { id: 1, text: "No single entity can block or prevent transactions" },
    { id: 2, text: "Data is stored across many computers, reducing risk of failure" },
    { id: 3, text: "Direct peer-to-peer transactions without third parties" },
    { id: 4, text: "Anyone with internet access can participate" }
  ];

  const handleBenefitClick = (benefit) => {
    if (matchedPairs.some(pair => pair.benefitId === benefit.id)) {
      return;
    }
    setSelectedBenefit(benefit);
    checkForMatch(benefit, selectedDescription);
  };

  const handleDescriptionClick = (description) => {
    if (matchedPairs.some(pair => pair.descriptionId === description.id)) {
      return;
    }
    setSelectedDescription(description);
    checkForMatch(selectedBenefit, description);
  };

  const checkForMatch = (benefit, description) => {
    if (!benefit || !description) return;
    
    // If the ids match (simplified matching logic)
    if (benefit.id === description.id) {
      setMatchedPairs([...matchedPairs, { benefitId: benefit.id, descriptionId: description.id }]);
      setMatchesCompleted(matchesCompleted + 1);
    }
    
    // Reset selections
    setSelectedBenefit(null);
    setSelectedDescription(null);
  };

  const handleSubmitDiscussion = () => {
    if (discussionText.trim().length > 10) {
      setDiscussionSubmitted(true);
    }
  };

  const allMatched = matchesCompleted === benefits.length;

  return (
    <div className="mission-content">
      <h2>3.3 What Makes Bitcoin Different?</h2>
      <h3>Decentralized Truth</h3>
      
      <div className="mission-description">
        <p>
          Bitcoin operates on a decentralized network, meaning it is not governed by any single entity. 
          This decentralization ensures that no one person or group can control it, making it resistant 
          to censorship and fraud.
        </p>
        
        <div className="key-points">
          <h4>Key Points:</h4>
          <ul>
            <li><strong>Trustless Transactions:</strong> Users can transact without needing to trust a third party.</li>
            <li><strong>Transparency:</strong> Every transaction is publicly recorded on the blockchain.</li>
          </ul>
        </div>
      </div>
      
      <div className="challenge-section">
        <h3>Challenge: Decentralization Match</h3>
        <p>
          Match each benefit of decentralization with its correct description. 
          Complete the game to earn the "Decentralization Expert" badge.
        </p>
        
        <div className="matching-game">
          <div className="benefits-column">
            <h4>Benefits</h4>
            {benefits.map(benefit => (
              <div 
                key={benefit.id}
                className={`matching-item benefit ${
                  matchedPairs.some(pair => pair.benefitId === benefit.id) 
                    ? 'matched' 
                    : selectedBenefit?.id === benefit.id 
                    ? 'selected' 
                    : ''
                }`}
                onClick={() => handleBenefitClick(benefit)}
              >
                {benefit.text}
              </div>
            ))}
          </div>
          
          <div className="descriptions-column">
            <h4>Descriptions</h4>
            {descriptions.map(description => (
              <div 
                key={description.id}
                className={`matching-item description ${
                  matchedPairs.some(pair => pair.descriptionId === description.id) 
                    ? 'matched' 
                    : selectedDescription?.id === description.id 
                    ? 'selected' 
                    : ''
                }`}
                onClick={() => handleDescriptionClick(description)}
              >
                {description.text}
              </div>
            ))}
          </div>
        </div>
        
        {allMatched && (
          <div className="badge-earned">
            <h4>Congratulations! You've earned the Decentralization Expert badge!</h4>
            <div className="badge-icon">🏅</div>
          </div>
        )}
      </div>
      
      <div className="challenge-section">
        <h3>Discussion Prompt</h3>
        <p>
          Discuss the advantages and disadvantages of decentralization in financial systems.
        </p>
        
        <textarea
          value={discussionText}
          onChange={(e) => setDiscussionText(e.target.value)}
          placeholder="Share your thoughts here..."
          disabled={discussionSubmitted}
          rows={5}
        />
        
        {!discussionSubmitted ? (
          <button 
            onClick={handleSubmitDiscussion}
            disabled={discussionText.trim().length <= 10}
          >
            Submit Discussion
          </button>
        ) : (
          <div className="discussion-feedback">
            <p>Thank you for sharing your thoughts on decentralization!</p>
          </div>
        )}
      </div>
      
      {(allMatched && discussionSubmitted) && (
        <button className="next-mission-button" onClick={onComplete}>
          Complete Mission and Continue
        </button>
      )}
    </div>
  );
}

export default DecentralizationMission;