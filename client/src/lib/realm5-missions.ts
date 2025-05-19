
import React from 'react';

interface Mission {
  id: number;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  simulationType: 'bip' | 'fork' | 'historicalForks' | 'governance' | 'knowledge' | 'failedForks';
  unlocked: boolean;
  completed: boolean;
}

export const realm5Missions: Mission[] = [
  {
    id: 1,
    title: "The Proposal Path",
    subtitle: "Learn how improvements are proposed and implemented in Bitcoin",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "Welcome to the Council of Forks. In this mission, we'll explore Bitcoin Improvement Proposals (BIPs) in detail."
      ),
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "What is a BIP?"),
      React.createElement("p", null, 
        "A Bitcoin Improvement Proposal (BIP) is a formal document proposing changes to the Bitcoin protocol. Each BIP goes through several stages:"
      ),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
        React.createElement("li", null, "Draft: Initial proposal documentation"),
        React.createElement("li", null, "Proposed: Community review and feedback"),
        React.createElement("li", null, "Final: Accepted and implemented"),
        React.createElement("li", null, "Rejected: Not accepted by the community")
      ),
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "BIP Categories"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 mb-4" },
        React.createElement("li", null, "Standards Track BIPs: Protocol changes requiring network consensus"),
        React.createElement("li", null, "Informational BIPs: Design guidelines and information"),
        React.createElement("li", null, "Process BIPs: Changes to Bitcoin processes")
      ),
      React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl my-4" },
        React.createElement("h4", { className: "font-semibold mb-2" }, "Notable BIP Examples:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "BIP39: Mnemonic code for generating deterministic keys"),
          React.createElement("li", null, "BIP141: Segregated Witness (consensus layer)"),
          React.createElement("li", null, "BIP173: Base32 address format for native v0-16 witness outputs")
        )
      )
    ),
    simulationType: 'bip',
    unlocked: true,
    completed: false
  },
  {
    id: 2,
    title: "Path of the Fork",
    subtitle: "Understanding Bitcoin's upgrade mechanisms",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Types of Forks"),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mb-4" },
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Soft Forks"),
          React.createElement("p", null, "Backward-compatible changes that restrict the rule set:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Old nodes still accept new blocks"),
            React.createElement("li", null, "Only miners need to upgrade"),
            React.createElement("li", null, "Example: SegWit implementation")
          )
        ),
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Hard Forks"),
          React.createElement("p", null, "Non-backward-compatible changes:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Creates incompatible chain split"),
            React.createElement("li", null, "All nodes must upgrade"),
            React.createElement("li", null, "Example: Bitcoin Cash fork")
          )
        )
      ),
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Fork Activation Methods"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
        React.createElement("li", null, "Miner Signaling (BIP9)"),
        React.createElement("li", null, "Flag Day Activation"),
        React.createElement("li", null, "User Activated Soft Forks (UASF)"),
        React.createElement("li", null, "Miner Activated Soft Forks (MASF)")
      )
    ),
    simulationType: 'fork',
    unlocked: true,
    completed: false
  },
  {
    id: 3,
    title: "Historic Forks: Bitcoin's Evolution",
    subtitle: "Exploring pivotal moments in Bitcoin's technical history",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Major Historical Forks"),
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "SegWit (2017)"),
          React.createElement("p", null, "A soft fork that fixed transaction malleability and increased block capacity:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Implemented as BIP141"),
            React.createElement("li", null, "Enabled Lightning Network development"),
            React.createElement("li", null, "Achieved through UASF pressure")
          )
        ),
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Bitcoin Cash Fork (2017)"),
          React.createElement("p", null, "A contentious hard fork over block size limits:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Increased block size to 8MB"),
            React.createElement("li", null, "Different scaling philosophy"),
            React.createElement("li", null, "Created separate cryptocurrency")
          )
        ),
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Taproot (2021)"),
          React.createElement("p", null, "Privacy and smart contract upgrade:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Enhanced script capabilities"),
            React.createElement("li", null, "Improved multisig privacy"),
            React.createElement("li", null, "Activated through Speedy Trial")
          )
        )
      )
    ),
    simulationType: 'historicalForks',
    unlocked: true,
    completed: false
  },
  {
    id: 4,
    title: "The Governance Council",
    subtitle: "How decisions are made in a decentralized network",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Bitcoin's Governance Model"),
      React.createElement("p", null, 
        "Bitcoin's governance is deliberately decentralized, with multiple stakeholders playing crucial roles in the decision-making process."
      ),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-4 mb-4" },
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Key Stakeholders"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Core Developers"),
            React.createElement("li", null, "Miners"),
            React.createElement("li", null, "Node Operators"),
            React.createElement("li", null, "Users & Businesses")
          )
        ),
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Power Distribution"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "No central authority"),
            React.createElement("li", null, "Consensus-driven changes"),
            React.createElement("li", null, "Economic incentives"),
            React.createElement("li", null, "Social layer coordination")
          )
        )
      ),
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Governance Mechanisms"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
        React.createElement("li", null, "BIP Process"),
        React.createElement("li", null, "GitHub Pull Requests"),
        React.createElement("li", null, "Developer Meetings"),
        React.createElement("li", null, "Community Discussion Forums")
      )
    ),
    simulationType: 'governance',
    unlocked: true,
    completed: false
  },
  {
    id: 5,
    title: "Governance in Action",
    subtitle: "Testing your understanding of Bitcoin's governance model",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null,
        "Put your knowledge to the test with practical scenarios and decisions about Bitcoin governance."
      ),
      React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl mb-4" },
        React.createElement("h4", { className: "font-semibold mb-2" }, "Scenario Challenges:"),
        React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
          React.createElement("li", null, "BIP Proposal Evaluation"),
          React.createElement("li", null, "Stakeholder Coordination"),
          React.createElement("li", null, "Fork Decision Making"),
          React.createElement("li", null, "Consensus Building")
        )
      ),
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Interactive Exercises"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
        React.createElement("li", null, "Draft a BIP proposal"),
        React.createElement("li", null, "Navigate stakeholder conflicts"),
        React.createElement("li", null, "Build consensus for changes"),
        React.createElement("li", null, "Analyze trade-offs in decisions")
      )
    ),
    simulationType: 'knowledge',
    unlocked: true,
    completed: false
  },
  {
    id: 6,
    title: "Learning from Failures",
    subtitle: "Exploring Bitcoin's forgotten forks and governance challenges",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Failed Fork Case Studies"),
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "SegWit2x (2017)"),
          React.createElement("p", null, "A contentious scaling proposal that failed:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "Proposed 2MB block size increase"),
            React.createElement("li", null, "New York Agreement (NYA)"),
            React.createElement("li", null, "Lack of consensus"),
            React.createElement("li", null, "Last-minute cancellation")
          )
        ),
        React.createElement("div", { className: "bg-purple-900/30 p-4 rounded-xl" },
          React.createElement("h4", { className: "font-semibold mb-2" }, "Bitcoin Gold (2017)"),
          React.createElement("p", null, "A failed attempt to change mining algorithm:"),
          React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
            React.createElement("li", null, "GPU mining focus"),
            React.createElement("li", null, "Limited adoption"),
            React.createElement("li", null, "Security vulnerabilities")
          )
        )
      ),
      React.createElement("h3", { className: "text-xl font-semibold mb-2 text-purple-400" }, "Key Lessons"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2" },
        React.createElement("li", null, "Importance of broad consensus"),
        React.createElement("li", null, "Role of technical preparation"),
        React.createElement("li", null, "Impact of community division"),
        React.createElement("li", null, "Value of conservative approach")
      )
    ),
    simulationType: 'failedForks',
    unlocked: true,
    completed: false
  }
];
