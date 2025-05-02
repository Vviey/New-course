import React from 'react';

// Mission interface for The Summit of Knowledge (Realm 7)
interface Mission {
  id: number;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  contentType: 'comprehensive' | 'practical' | 'technical' | 'final' | 'certificate';
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