import React from 'react';

const GameComponent = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-card">
        <div className="hero-content">
          <h2 className="hero-title">Digital Resistance Frontier</h2>
          <p className="hero-subtitle">
            Navigate the panopticon of financial control using ancestral wisdom and crypto tools.<br />
            <em style={{ color: 'var(--gold)', fontSize: '0.9em' }}>
              "The eye of the lion never closes" - African proverb
            </em>
          </p>
          <button className="button" style={{ background: 'var(--danger)' }}>
            Activate Privacy Shield
          </button>
        </div>
      </div>

      {/* Surveillance Warning */}
      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          background: 'var(--danger)',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--shadow)',
          zIndex: 1000,
        }}
        
      >
        🔒 Connection Encrypted | 🛡️ Firewall Active | 👁️ 3 Surveillance Attempts Blocked
      </div>
    </div>
  );
};

export default GameComponent;
