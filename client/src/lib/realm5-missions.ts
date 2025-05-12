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
        "Welcome to the Council of Forks, where Bitcoin's governance and evolution take place. In this first mission, you'll learn about Bitcoin Improvement Proposals (BIPs), the standard process for proposing changes to Bitcoin."
      ),
      React.createElement("p", null, 
        "Unlike traditional software projects with clear leadership hierarchies, Bitcoin evolves through a decentralized process where no single entity has control. BIPs provide structure to this process, allowing ideas to be proposed, discussed, refined, and eventually implemented or rejected."
      ),
      React.createElement("p", null, 
        "You'll explore the lifecycle of a BIP from initial idea to potential implementation, understanding the roles different stakeholders play and the challenges of achieving consensus in a decentralized system."
      ),
      
      React.createElement("h3", { className: "text-xl font-semibold mt-6 mb-3 text-purple-400" }, "The BIP Process In Detail"),
      
      React.createElement("h4", { className: "text-lg font-medium mt-4 mb-2 text-purple-300" }, "What is a BIP?"),
      React.createElement("p", null, 
        "A Bitcoin Improvement Proposal (BIP) is a formal document that describes potential new features, processes, or environment changes to the Bitcoin protocol. It serves as the primary mechanism for proposing significant changes and documenting design decisions within the Bitcoin ecosystem."
      ),
      React.createElement("p", null, 
        "BIPs follow a standardized format to ensure clarity and completeness. They include sections such as abstract, motivation, specification, rationale, and compatibility considerations. This structured approach helps the community evaluate proposals systematically."
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-4 mb-2 text-purple-300" }, "BIP Categories"),
      React.createElement("p", null, "BIPs fall into three main categories:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 my-3" },
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Standards Track BIPs: "), "Changes to the Bitcoin network protocol, transaction validity rules, or other modifications that affect interoperability. Examples include BIP141 (SegWit) and BIP341 (Taproot)."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Informational BIPs: "), "Design guidelines or information for the community that doesn't propose new features. For instance, BIP21 (URI scheme) and BIP44 (HD wallet structure)."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Process BIPs: "), "Changes to processes surrounding Bitcoin development. Examples include BIP2 (the BIP process itself) and BIP8 (version bits deployment).")
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-4 mb-2 text-purple-300" }, "The BIP Lifecycle"),
      React.createElement("p", null, "A BIP goes through several stages during its lifecycle:"),
      
      React.createElement("ol", { className: "list-decimal pl-5 space-y-2 my-3" },
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Idea & Pre-proposal Discussion: "), "Before creating a formal BIP, developers typically discuss ideas on mailing lists, forums, and chat channels to gauge initial feedback."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Draft: "), "The author submits a properly formatted BIP draft to the BIP repository. This stage involves refining the proposal based on community feedback."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Proposed: "), "Once the draft meets formatting requirements and addresses initial feedback, it's assigned a BIP number by the BIP editor."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Final/Active/Rejected: "), "After thorough review and discussion, a BIP may be accepted (Final/Active) or rejected. Implementation follows for accepted proposals."),
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-4 mb-2 text-purple-300" }, "Key Stakeholders"),
      React.createElement("p", null, "Several stakeholders influence the BIP process:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 my-3" },
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Developers: "), "Write code, review proposals, and implement changes."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Miners: "), "Signal support for protocol changes through version bits in mined blocks."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Node Operators: "), "Choose which software to run, effectively voting on changes by adopting or rejecting them."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-purple-200" }, "Users & Businesses: "), "Influence decisions through economic activity and community participation.")
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-4 mb-2 text-purple-300" }, "Case Study: BIP141 (Segregated Witness)"),
      React.createElement("p", null,
        "SegWit (BIP141) provides an excellent case study of the BIP process. Proposed in December 2015, it aimed to solve transaction malleability and increase block capacity. Despite technical merit, it faced significant community debate."
      ),
      React.createElement("p", null, 
        "The proposal went through multiple revisions and eventually activated in August 2017 after complex negotiations and the development of BIP91 and BIP148 to facilitate its activation. This example illustrates both the technical and social dimensions of Bitcoin governance."
      ),
      
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Concepts You'll Learn:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "The BIP process and document structure"),
        React.createElement("li", null, "How technical improvements are proposed and documented"),
        React.createElement("li", null, "The stages a proposal goes through before implementation"),
        React.createElement("li", null, "The importance of clear technical specifications")
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
      React.createElement("p", null, 
        "In the Bitcoin protocol, changes are implemented through either soft forks or hard forks. Each approach has different implications for backward compatibility, security, and network consensus."
      ),
      React.createElement("p", null, 
        "Soft forks add restrictions to the protocol rules, making previously valid blocks or transactions invalid. They're backward compatible, meaning old nodes will still accept blocks created under the new rules."
      ),
      React.createElement("p", null, 
        "Hard forks, by contrast, loosen rules or add incompatible changes. They create a permanent divergence in the blockchain, with nodes following the new rules creating blocks that old nodes will reject as invalid."
      ),
      React.createElement("p", null, 
        "In this mission, you'll explore the technical and social dimensions of both fork types, learning why Bitcoin prioritizes soft forks for most upgrades and when hard forks might be necessary or controversial."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Concepts You'll Learn:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "The technical differences between soft and hard forks"),
        React.createElement("li", null, "How backward compatibility affects network security and adoption"),
        React.createElement("li", null, "The activation mechanisms for protocol changes"),
        React.createElement("li", null, "The consensus challenges of implementing changes in a decentralized network")
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
      React.createElement("p", null, 
        "Throughout Bitcoin's history, several significant forks have shaped its technical capabilities and community. These moments of evolution reveal much about Bitcoin's governance model and values."
      ),
      React.createElement("p", null, 
        "In this mission, you'll journey through three critical forks that defined Bitcoin's development path: the Bitcoin Cash hard fork, the SegWit soft fork, and the Taproot upgrade."
      ),
      React.createElement("p", null, 
        "Each fork represents different technical approaches, community dynamics, and methods of achieving consensus. By understanding these historical events, you'll gain insight into how Bitcoin balances innovation with stability and security."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Forks You'll Explore:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Bitcoin Cash (2017) - A contentious hard fork that increased the block size"),
        React.createElement("li", null, "SegWit (2017) - A soft fork that fixed transaction malleability and increased capacity"),
        React.createElement("li", null, "Taproot (2021) - A soft fork that enhanced privacy and smart contract capabilities")
      ),
      React.createElement("p", { className: "mt-4" },
        "Through these case studies, you'll understand the technical details, community debates, and long-term impacts of each fork on Bitcoin's development trajectory."
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
      React.createElement("p", null, 
        "Bitcoin has no central authority, CEO, or governing body. Instead, it operates through a complex form of governance involving multiple stakeholders, each with different powers and priorities."
      ),
      React.createElement("p", null, 
        "In this mission, you'll step into the Governance Council simulation to experience how different stakeholders influence Bitcoin's evolution. You'll play the role of a coordinator navigating the interests of developers, miners, node operators, and users to build consensus for protocol changes."
      ),
      React.createElement("p", null, 
        "Through this hands-on experience, you'll understand why Bitcoin's governance is often described as 'rough consensus' rather than formal voting, and why changes to the protocol tend to be conservative and thoroughly tested."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Stakeholders You'll Coordinate:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Developers - Who write and review the code"),
        React.createElement("li", null, "Miners - Who secure the network and signal support for changes"),
        React.createElement("li", null, "Node Operators - Who verify transactions and enforce consensus rules"),
        React.createElement("li", null, "Users & Businesses - Who provide economic activity and determine value")
      ),
      React.createElement("p", { className: "mt-4" },
        "This mission will demonstrate how Bitcoin's decentralized governance, while slower than centralized decision-making, provides crucial resistance to capture and helps maintain Bitcoin's core properties of security, scarcity, and censorship resistance."
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
        "Now that you've explored Bitcoin's governance through various missions, it's time to test your knowledge and understanding of this complex system."
      ),
      React.createElement("p", null, 
        "In this challenge, you'll face scenarios and questions that assess your grasp of how Bitcoin evolves, who influences its development, and what makes its governance model unique among both cryptocurrencies and traditional organizations."
      ),
      React.createElement("p", null, 
        "You'll need to recall concepts from previous missions about BIPs, forks, stakeholder roles, and consensus mechanisms to successfully complete this challenge."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Areas of Knowledge Tested:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Bitcoin's governance philosophy and structure"),
        React.createElement("li", null, "The roles and powers of different stakeholders"),
        React.createElement("li", null, "How consensus is achieved for protocol changes"),
        React.createElement("li", null, "Why Bitcoin's governance is resistant to capture"),
        React.createElement("li", null, "The tradeoffs between innovation speed and security")
      ),
      React.createElement("p", { className: "mt-4" },
        "This challenge will solidify your understanding of Bitcoin's unique approach to governance and prepare you for the final mission in this realm."
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
      React.createElement("p", null, 
        "Not all proposed changes to Bitcoin succeed. For every implemented improvement, many proposals fail to gain consensus or are abandoned. These failed attempts provide valuable lessons about Bitcoin's governance."
      ),
      React.createElement("p", null, 
        "In this final mission, you'll explore case studies of significant proposals that either failed to be implemented or forked off but failed to gain meaningful adoption. These include the SegWit2x proposal, the potential failure scenario of BIP 148 (UASF), and Bitcoin Gold."
      ),
      React.createElement("p", null, 
        "By understanding why these proposals didn't succeed, you'll gain deeper insights into the practical realities of Bitcoin's governance system, its resistance to changes without broad consensus, and the challenges of coordinating improvements in a decentralized network."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Failed Proposals You'll Analyze:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "SegWit2x (NYA) - A proposed hard fork canceled due to lack of consensus"),
        React.createElement("li", null, "UASF (BIP 148) Without Miner Support - A theoretical failure scenario that was averted"),
        React.createElement("li", null, "Bitcoin Gold - A fork that changed the mining algorithm but struggled to gain significant adoption")
      ),
      React.createElement("p", { className: "mt-4" },
        "This mission completes your journey through Bitcoin's governance, giving you a comprehensive understanding of how the protocol evolves while maintaining its essential properties."
      )
    ),
    simulationType: 'failedForks',
    unlocked: true,
    completed: false
  }
];