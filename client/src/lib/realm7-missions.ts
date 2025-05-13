import React from 'react';

// Mission interface for The Summit of Knowledge (Realm 7)
interface Mission {
  id: number;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  contentType: 'comprehensive' | 'practical' | 'technical' | 'final' | 'certificate';
  content?: string; // Detailed educational content in HTML/Markdown format
  unlocked: boolean;
  completed: boolean;
}

// Missions for The Summit of Knowledge (Realm 7) - the final realm in the Bitcoin journey
export const realm7Missions: Mission[] = [
  {
    id: 1,
    title: "Comprehensive Review",
    subtitle: "Your Bitcoin Journey So Far",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "Welcome to the final realm of your Bitcoin journey! In this first mission, you'll revisit the key concepts from each realm you've explored, reinforcing your understanding of Bitcoin from its historical origins to its modern applications."
      ),
      React.createElement("p", null, 
        "You'll revisit the Realm of Origins' foundations of money, The Central Citadel's exploration of surveillance and privacy, The Forest of Sparks' cryptographic principles, The Mountain Forge's mining and consensus mechanisms, The Council of Forks' governance structures, and The Ubuntu Village's real-world applications in Africa."
      ),
      React.createElement("p", null, 
        "This comprehensive review will prepare you for the challenges ahead as you demonstrate mastery of the entire spectrum of Bitcoin knowledge you've acquired."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "You'll Review:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Money's evolutionary journey and Bitcoin's place in it"),
        React.createElement("li", null, "The importance of privacy and security in financial systems"),
        React.createElement("li", null, "How cryptography enables trust in a trustless system"),
        React.createElement("li", null, "Bitcoin's mining, consensus, and halving mechanisms"),
        React.createElement("li", null, "Protocol governance and the upgrade process"),
        React.createElement("li", null, "Real-world Bitcoin applications and impact")
      )
    ),
    content: `
      <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0; text-align: center;">Your Complete Bitcoin Journey</h2>
        
        <p style="margin-bottom: 16px;">Congratulations on reaching the Summit of Knowledge! This comprehensive review will help consolidate your understanding of Bitcoin's foundational concepts, technical aspects, and real-world implications that you've explored throughout your journey.</p>
        
        <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; margin: 16px 0; text-align: center;">
          <p style="font-size: 18px; font-weight: bold; margin: 0; color: #67e8f9;">Bitcoin is a revolutionary technology that combines cryptography, distributed systems, economics, and game theory to create a secure, censorship-resistant monetary network</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0;">Realm 1: The Origins of Money</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>The evolution from barter to commodity and fiat money</li>
              <li>Money's essential functions: medium of exchange, store of value, unit of account</li>
              <li>The properties of sound money: durability, portability, divisibility, fungibility, scarcity</li>
              <li>Historical examples of money from different African cultures</li>
              <li>How hyperinflation destroys value and undermines financial systems</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Bitcoin's Relevance</h3>
            <p style="margin-bottom: 0;">Bitcoin addresses the historical challenges of money by providing:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Digital scarcity through a fixed supply of 21 million</li>
              <li>Perfect divisibility down to 1/100,000,000 (one satoshi)</li>
              <li>Borderless transferability without permission</li>
              <li>Resistance to censorship and confiscation</li>
              <li>Protection against arbitrary inflation and debasement</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">Bitcoin represents the first successful implementation of digital scarcity without requiring trust in a central authority, solving the "double-spending problem" that prevented previous digital money systems from working.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0;">Realm 2: The Central Citadel</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Centralized vs. decentralized financial systems</li>
              <li>Privacy concerns in traditional financial infrastructure</li>
              <li>How surveillance capitalism commoditizes personal data</li>
              <li>Central Bank Digital Currencies (CBDCs) and their implications</li>
              <li>The balance between convenience and sovereignty</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Bitcoin's Relevance</h3>
            <p style="margin-bottom: 0;">Bitcoin offers an alternative to centralized control through:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Permissionless participation in a global network</li>
              <li>Pseudonymous transactions that increase privacy</li>
              <li>Self-custody options that eliminate counterparty risk</li>
              <li>Resistance to arbitrary rules and restrictions</li>
              <li>Protection against financial censorship and monitoring</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">The importance of Bitcoin's decentralization cannot be overstated - it creates a financial system where rules are enforced by mathematics and consensus rather than by corruptible institutions.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0;">Realm 3: The Forest of Sparks</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Bitcoin's origin with Satoshi Nakamoto's 2008 whitepaper</li>
              <li>The cypherpunk movement and digital privacy advocates</li>
              <li>Previous digital currency attempts (DigiCash, e-gold, etc.)</li>
              <li>Cryptographic primitives: hash functions and digital signatures</li>
              <li>The blockchain as a chronological, immutable ledger</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Technical Foundation</h3>
            <p style="margin-bottom: 0;">Bitcoin's technical innovation combines:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>SHA-256 hash functions to create unique digital fingerprints</li>
              <li>Public-key cryptography for secure ownership verification</li>
              <li>Digital signatures to prove transaction authorization</li>
              <li>Distributed ledger technology for transparent record-keeping</li>
              <li>Peer-to-peer network architecture for direct value transfer</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">Bitcoin represents the synthesis of decades of cryptographic research and experimentation - it didn't emerge from nowhere but built upon a foundation of prior work in digital currency and distributed systems.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0;">Realm 4: The Mountain Forge</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Mining as the process of transaction validation and block creation</li>
              <li>Proof-of-Work (PoW) as Bitcoin's consensus mechanism</li>
              <li>The halving schedule and controlled supply issuance</li>
              <li>Difficulty adjustment to maintain consistent block times</li>
              <li>Energy consumption and incentive alignment</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Security Model</h3>
            <p style="margin-bottom: 0;">Bitcoin's security derives from:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Economic incentives that make honesty more profitable than cheating</li>
              <li>Computational work that makes attacking the network prohibitively expensive</li>
              <li>Decentralized validation by thousands of independent nodes</li>
              <li>The difficulty adjustment mechanism that maintains security regardless of hash rate</li>
              <li>Game theory that aligns miners' profit motives with network security</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">Mining transforms electricity into security, creating an immutable history that becomes exponentially more difficult to change as time passes - this is Bitcoin's key innovation for establishing trust without authorities.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0;">Realm 5: The Council of Forks</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Bitcoin's governance model through distributed consensus</li>
              <li>Soft forks vs. hard forks as mechanism for protocol upgrades</li>
              <li>Bitcoin Improvement Proposals (BIPs) process</li>
              <li>The balance of power between developers, miners, users, and businesses</li>
              <li>Historical upgrades and the conservative approach to changes</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Governance in Practice</h3>
            <p style="margin-bottom: 0;">Bitcoin's resilience comes from:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>The requirement for broad consensus before implementing changes</li>
              <li>The ability for users to reject unwanted changes by not upgrading</li>
              <li>The focus on backward compatibility to prevent network fragmentation</li>
              <li>Open development processes with multiple independent reviewers</li>
              <li>The principle of "rough consensus" requiring substantial agreement</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">Bitcoin's governance might seem slow and conservative, but this resistance to change is a feature, not a bug - it ensures that only thoroughly vetted improvements with broad support are implemented.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #22d3ee; margin-top: 0;">Realm 6: The Ubuntu Village</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Real-world Bitcoin applications across Africa</li>
              <li>Bitcoin's role in facilitating low-cost remittances</li>
              <li>Protection against currency devaluation and inflation</li>
              <li>Financial inclusion for the unbanked and underbanked</li>
              <li>The Lightning Network for fast, low-fee transactions</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #22d3ee;">
            <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Impact in Africa</h3>
            <p style="margin-bottom: 0;">Bitcoin is making a difference through:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Enabling cross-border payments without traditional banking infrastructure</li>
              <li>Providing an alternative to unstable local currencies</li>
              <li>Creating entrepreneurial opportunities in Bitcoin services</li>
              <li>Facilitating direct international trade without intermediaries</li>
              <li>Supporting community projects and educational initiatives</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">The principles of Ubuntu - "I am because we are" - align with Bitcoin's network effects, where the system becomes stronger and more valuable as more people participate in it.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(34, 211, 238, 0.07); border-radius: 8px; padding: 20px;">
        <h2 style="color: #22d3ee; margin-top: 0; text-align: center;">Bringing It All Together</h2>
        
        <p style="margin-bottom: 16px;">Bitcoin represents a synthesis of multiple disciplines and addresses challenges that have persisted throughout monetary history. Its lasting impact comes from combining:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">📜</div>
            <h3 style="color: #67e8f9; margin: 0 0 8px 0;">Historical Context</h3>
            <p style="margin: 0; font-size: 14px;">Bitcoin addresses the shortcomings of previous monetary systems, from commodity money to fiat currencies</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🔐</div>
            <h3 style="color: #67e8f9; margin: 0 0 8px 0;">Technical Innovation</h3>
            <p style="margin: 0; font-size: 14px;">A revolutionary combination of cryptography, distributed systems, and economic incentives</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">⚖️</div>
            <h3 style="color: #67e8f9; margin: 0 0 8px 0;">Governance Innovation</h3>
            <p style="margin: 0; font-size: 14px;">A new model for reaching consensus without central authorities or formal governance structures</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🌍</div>
            <h3 style="color: #67e8f9; margin: 0 0 8px 0;">Global Impact</h3>
            <p style="margin: 0; font-size: 14px;">Practical solutions to real-world problems of financial access, sovereignty, and inclusion</p>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px; text-align: center;">
          <p style="margin: 0; font-style: italic;">Understanding Bitcoin holistically requires appreciating both its technological foundation and its economic, social, and political implications. No single perspective captures its full significance.</p>
        </div>
      </div>
    `,
    contentType: 'comprehensive',
    unlocked: true,
    completed: false
  },
  {
    id: 2,
    title: "Practical Challenges",
    subtitle: "Apply Your Knowledge",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "Knowledge becomes wisdom through application. In this mission, you'll face practical challenges that require you to apply concepts from across your entire Bitcoin journey to solve real-world problems."
      ),
      React.createElement("p", null, 
        "From setting up wallets and estimating mining profitability to evaluating protocol upgrades and designing solutions for underserved communities, these challenges will test your ability to think critically about Bitcoin in context."
      ),
      React.createElement("p", null, 
        "By working through these practical scenarios, you'll develop the confidence to navigate the Bitcoin ecosystem and contribute meaningfully to its growth."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Challenge Areas:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Wallet selection and security best practices"),
        React.createElement("li", null, "Mining profitability and energy considerations"),
        React.createElement("li", null, "Protocol upgrade evaluation and impact assessment"),
        React.createElement("li", null, "Lightning Network channel management"),
        React.createElement("li", null, "Community education and adoption strategies")
      )
    ),
    contentType: 'practical',
    unlocked: true,
    completed: false
  },
  {
    id: 3,
    title: "Technical Mastery",
    subtitle: "Diving Deeper",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "This mission challenges you to demonstrate technical mastery of Bitcoin's most complex aspects. You'll engage with advanced concepts from cryptography, protocol design, network architecture, and economic mechanisms."
      ),
      React.createElement("p", null, 
        "By successfully navigating these technical challenges, you'll prove your deep understanding of how Bitcoin works under the hood and why its design choices matter for security, scalability, and censorship resistance."
      ),
      React.createElement("p", null, 
        "This technical mastery will distinguish you as someone who truly comprehends Bitcoin beyond surface-level understanding."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Technical Areas:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Cryptographic primitives and their implementation"),
        React.createElement("li", null, "Block structure and transaction validation"),
        React.createElement("li", null, "Script language and smart contract capabilities"),
        React.createElement("li", null, "Layer 2 solutions and scaling approaches"),
        React.createElement("li", null, "Network propagation and security assumptions")
      )
    ),
    contentType: 'technical',
    unlocked: true,
    completed: false
  },
  {
    id: 4,
    title: "The Final Challenge",
    subtitle: "Putting It All Together",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "The culmination of your Bitcoin journey has arrived. This final challenge integrates everything you've learned across all realms, testing your comprehensive understanding, practical application skills, and technical knowledge."
      ),
      React.createElement("p", null, 
        "You'll navigate a multi-part scenario that touches on Bitcoin's history, technology, governance, and real-world impact. By solving interconnected problems that span the entire scope of your learning, you'll demonstrate true mastery."
      ),
      React.createElement("p", null, 
        "Successfully completing this challenge represents the pinnacle of your Bitcoin education journey with Asha."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Final Challenge Areas:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Multi-faceted problem-solving across all Bitcoin domains"),
        React.createElement("li", null, "Strategic thinking about Bitcoin's role in the world"),
        React.createElement("li", null, "Technical implementation and practical application"),
        React.createElement("li", null, "Ethical considerations and societal impact"),
        React.createElement("li", null, "Future vision and continued development")
      )
    ),
    contentType: 'final',
    unlocked: true,
    completed: false
  },
  {
    id: 5,
    title: "Journey's End",
    subtitle: "Your Bitcoin Certification",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "Congratulations on completing your Bitcoin journey with Asha! This final mission celebrates your achievement and awards you with certification acknowledging your comprehensive understanding of Bitcoin."
      ),
      React.createElement("p", null, 
        "Reflect on how far you've come - from understanding the basic properties of money to grasping the technical intricacies of the Bitcoin network and appreciating its global impact. Your knowledge now spans the full spectrum of Bitcoin's significance."
      ),
      React.createElement("p", null, 
        "Though this structured journey ends here, your Bitcoin exploration continues. Armed with this solid foundation, you're well-equipped to deepen your involvement in the Bitcoin ecosystem and contribute to its ongoing evolution."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Your Certification Recognizes:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Comprehensive understanding of Bitcoin's history, purpose, and technology"),
        React.createElement("li", null, "Ability to evaluate Bitcoin's design decisions and trade-offs"),
        React.createElement("li", null, "Knowledge of Bitcoin's economic principles and security model"),
        React.createElement("li", null, "Awareness of Bitcoin's governance structure and upgrade process"),
        React.createElement("li", null, "Appreciation for Bitcoin's real-world applications and potential")
      )
    ),
    contentType: 'certificate',
    unlocked: true,
    completed: false
  }
];