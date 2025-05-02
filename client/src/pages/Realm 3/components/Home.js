// components/Home.js
import React from 'react';
import './Home.css';

function Home({ onStartMission }) {
  const missions = [
    { id: 1, title: "The Spark of Satoshi", description: "Discover the origin story of Bitcoin" },
    { id: 2, title: "The Genesis Block", description: "Explore the very first block with a message" },
    { id: 3, title: "What Makes Bitcoin Different?", description: "Understanding decentralized truth" },
    { id: 4, title: "Private Keys & Digital Sovereignty", description: "Learn about self-custody" },
    { id: 5, title: "Bitcoin's Birthright", description: "Final challenge and knowledge test" },
    { id: 6, title: "Bonus: The Quest for Knowledge", description: "Explore Bitcoin's ecosystem" }
  ];

  return (
    <div className="home">
      <div className="header">
        <h1>Realm 3: The Forest of Sparks</h1>
        <h2>The Digital Money Revolution</h2>
        <p>Embark on a journey of discovery and hope in the world of digital currencies</p>
      </div>
      
      <div className="introduction">
        <h3>Introduction to Digital Money</h3>
        <p>
          Digital money refers to any form of currency that exists electronically. Unlike traditional currencies, 
          digital money is decentralized, meaning it isn't controlled by a central authority like a bank or government. 
          This revolution empowers individuals with greater financial freedom, allowing for secure transactions, 
          lower fees, and the potential for global access.
        </p>
        <div className="key-concepts">
          <h4>Key Concepts:</h4>
          <ul>
            <li><strong>Digital Currency:</strong> Any currency that is available in digital form.</li>
            <li><strong>Cryptocurrency:</strong> A type of digital currency that uses cryptography for security.</li>
            <li><strong>Blockchain:</strong> A decentralized ledger that records transactions across many computers.</li>
          </ul>
        </div>
      </div>
      
      <div className="missions-container">
        <h3>Your Missions</h3>
        <div className="missions-grid">
          {missions.map(mission => (
            <div key={mission.id} className="mission-card" onClick={() => onStartMission(mission.id)}>
              <h4>{mission.title}</h4>
              <p>{mission.description}</p>
              <button>Start Mission</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;