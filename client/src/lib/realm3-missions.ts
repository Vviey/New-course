// Define props interface
interface MissionProps {
  realmId: string;
  missionId: string;
}
export interface Realm3MissionData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  objectives?: string[]; // Making this optional since it wasn't in the original
  simulationType: 'scavenger-hunt' | 'quiz' | 'knowledge' | 'timeline' | 'reflection' | 'cryptography' | 'hash' | 'merkle' | 'consensus';
  simulationData?: any;
  content: {
    title: string;
    introduction: string;
    content: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  game: {
    name: string;
    description: string;
    tasks: string[];
    reward: string;
    criteria?: string;
    scenarios?: Array<{
      name: string;
      description: string;
      success: string;
    }>;
    rounds?: Array<{
      name: string;
      questions: number;
      topics: string[];
    }>;
  };
  quiz?: {
    questions: Array<{
      question: string;
      options: string[];
      answer: number;
    }>;
  };
  reflection?: {
    prompt: string;
    questions?: string[];
    guidelines?: string[];
  };
  discussionPrompt?: {
    question: string;
    guidelines: string[];
  };
  task?: string;
  discussionPoints?: string[];
}

export interface MissionContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  objectives: string[];
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  simulationType?: string;
  task?: string;
  reflection?: {
    prompt: string;
    questions?: string[];
    guidelines?: string[];
  };
  discussionPoints?: string[];
  game?: {
    name: string;
    description: string;
    tasks: string[];
    reward: string;
  };
}

export const realm3Missions: Realm3MissionData[] = [
  {
    id: 1,
    title: "Bitcoin's Revolutionary Foundation",
    subtitle: "Understanding the 2008 Financial Crisis Context and Cypherpunk Origins",
    description: "Journey through the comprehensive background that led to Bitcoin's creation. Explore the 2008 financial crisis, understand how traditional banking systems failed millions, and discover the cypherpunk movement that provided the ideological foundation for decentralized money. Learn how Satoshi Nakamoto synthesized decades of research into a working solution.",
    objectives: [
      "Analyze the 2008 financial crisis and its global impact on trust in institutions",
      "Understand the historical progression of digital money attempts before Bitcoin",
      "Explore the cypherpunk philosophy and its influence on Bitcoin's design",
      "Learn about key cryptographic innovations that made Bitcoin possible",
      "Examine Satoshi Nakamoto's identity mystery and its significance",
      "Understand why traditional monetary systems create inequality and exclusion",
      "Reflect on Bitcoin's potential to address African financial challenges"
    ],
    content: {
      title: "The Perfect Storm: Crisis, Technology, and Vision",
      content: "Bitcoin emerged from the convergence of a global financial crisis, mature cryptographic technology, and a philosophical movement committed to individual sovereignty. Understanding this context reveals why Bitcoin was inevitable and why it succeeded where others failed.",    
      introduction: "The year 2008 marked a watershed moment in financial history. As major banks collapsed, governments printed trillions to bail out the very institutions that caused the crisis, and millions lost their homes and savings, trust in the traditional financial system reached historic lows. Into this chaos stepped an anonymous figure who had been quietly working on a solution that would fundamentally challenge how money works.\n\nBitcoin wasn't born in isolation - it was the culmination of decades of research by cryptographers, failed attempts at digital money, and a growing movement of privacy advocates known as cypherpunks. For Africans watching foreign banks extract wealth while local currencies faced manipulation and inflation, Bitcoin represented something unprecedented: money that couldn't be controlled by any government or institution, accessible to anyone with internet access.",
      sections: [
        {
          title: "The 2008 Financial Crisis: When Trust Collapsed",
          content: "The 2008 financial crisis wasn't just an economic downturn - it was a complete breakdown of trust in the institutions that form the backbone of modern finance. Understanding this crisis is crucial to understanding why Bitcoin was created.\n\n### The Crisis Unfolds:\n**September 15, 2008**: Lehman Brothers, the fourth-largest investment bank in the US, collapsed overnight. This triggered a global financial meltdown that exposed decades of reckless lending, regulatory capture, and systemic corruption.\n\n### Key Problems Exposed:\n1. **Too Big to Fail**: Banks grew so large that their failure would crash the entire system\n2. **Moral Hazard**: Banks took extreme risks knowing taxpayers would bail them out\n3. **Fractional Reserve Banking**: Banks only held a tiny fraction of depositor funds\n4. **Regulatory Capture**: Regulators were controlled by the banks they were supposed to oversee\n5. **Counterparty Risk**: Every transaction required trusting intermediaries\n\n### Global Impact:\n- **$12 trillion** in bailouts and stimulus globally\n- **10 million** homes lost to foreclosure in the US alone\n- **Unemployment** doubled in most developed countries\n- **Currency debasement** through massive money printing\n\n### African Perspective:\nWhile Africa wasn't directly responsible for the crisis, it suffered severely from reduced trade, investment, and remittances. This highlighted how interconnected the global financial system had become and how vulnerable developing nations were to decisions made in distant financial centers.\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Key Insight**: The crisis proved that even the most sophisticated financial institutions couldn't be trusted. This created an opening for a trustless alternative.\n</style>"
        },
        {
          title: "The Cypherpunk Movement: Digital Privacy Warriors",
          content: "Long before Bitcoin, a group of mathematicians, computer scientists, and libertarian thinkers were working on the problem of digital privacy and freedom. The cypherpunk movement, active since the early 1990s, provided the philosophical foundation and technical building blocks for Bitcoin.\n\n### Cypherpunk Philosophy:\n**Core Belief**: Privacy and freedom are fundamental human rights that must be protected through strong cryptography, not political processes.\n\n**Key Principles:**\n1. **Privacy is necessary for an open society** - people must be able to transact without revealing their identity\n2. **Cryptography is the ultimate protection** - math is more reliable than laws or institutions\n3. **Code is speech** - software that protects privacy is a form of protected expression\n4. **Decentralization prevents tyranny** - no single point of control or failure\n\n### Notable Cypherpunks:\n**Eric Hughes** - Wrote the Cypherpunk Manifesto (1993): \"Privacy is not secrecy... Privacy is the power to selectively reveal oneself to the world.\"\n\n**Tim May** - Created the Crypto Anarchist Manifesto, envisioning a world where cryptography enables completely free markets\n\n**John Gilmore** - Co-founded the Electronic Frontier Foundation, famous for saying \"The Net interprets censorship as damage and routes around it\"\n\n**Wei Dai** - Proposed b-money, one of the key precursors to Bitcoin\n\n**Nick Szabo** - Created Bit Gold and smart contracts, often suspected of being Satoshi\n\n### The Cypherpunk Mailing List:\nFrom 1992-2009, this email list was the primary forum for discussing digital privacy, cryptography, and anonymous digital cash. It was here that Satoshi first announced Bitcoin on October 31, 2008.\n\n### African Relevance:\nCypherpunk ideals resonate strongly in Africa, where many have experienced government surveillance, capital controls, and censorship. The movement's focus on individual sovereignty and resistance to authoritarianism aligns with many African independence movements.\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Cultural Parallel**: Like traditional African secret societies that preserved knowledge and provided alternative governance structures, cypherpunks created hidden networks that preserved digital freedom.\n</style>"
        },
        {
          title: "Failed Digital Money Attempts: Learning from History",
          content: "Bitcoin wasn't the first attempt at digital money. Understanding the failures of previous systems helps explain why Bitcoin's design was so revolutionary and why it succeeded where others failed.\n\n### Early Digital Cash Systems:\n\n**DigiCash (1989-1998)**\n- **Creator**: David Chaum\n- **Innovation**: Blind signatures for anonymous digital cash\n- **Fatal Flaw**: Centralized - required trust in Chaum's company\n- **Lesson**: Centralization creates single points of failure\n\n**e-gold (1996-2009)**\n- **Innovation**: Digital currency backed by physical gold\n- **Growth**: At peak, processed $2 billion annually\n- **Fatal Flaw**: Centralized storage and management\n- **End**: Shut down by US government for money laundering\n- **Lesson**: Government can kill any centralized system\n\n**Liberty Reserve (2006-2013)**\n- **Innovation**: Anonymous digital currency for global transactions\n- **Fatal Flaw**: Used by criminals, completely unregulated\n- **End**: Founders arrested, called \"financial empire built on facilitating money laundering\"\n- **Lesson**: Pure anonymity without legitimacy invites shutdown\n\n### Theoretical Proposals:\n\n**b-money (1998) - Wei Dai**\n- Proposed decentralized digital cash using proof-of-work\n- First to suggest computational puzzles for money creation\n- Lacked details on how to prevent double-spending\n- **Satoshi explicitly credited b-money in Bitcoin whitepaper**\n\n**Bit Gold (2005) - Nick Szabo**\n- Proposed unforgeable digital scarcity using proof-of-work\n- Included concept of difficulty adjustment\n- Never implemented but extremely close to Bitcoin's design\n- **Many believe Szabo is Satoshi Nakamoto**\n\n### The Double-Spending Problem:\nAll digital money systems faced this fundamental challenge: How do you prevent someone from spending the same digital coin twice without a central authority to verify transactions?\n\n**Previous Solutions:**\n1. **Central verification** (DigiCash) - requires trust\n2. **Physical backing** (e-gold) - requires trust and storage\n3. **Legal enforcement** (banks) - requires government cooperation\n\n**Bitcoin's Solution:**\n- **Decentralized consensus** through proof-of-work\n- **Public ledger** that everyone can verify\n- **Economic incentives** that make honesty profitable\n\n### Why Bitcoin Succeeded:\n1. **Truly decentralized** - no single point of failure\n2. **Open source** - anyone can verify and improve the code\n3. **Network effects** - value increases with adoption\n4. **Fixed supply** - protects against inflation\n5. **Pseudonymous** - balances privacy with accountability\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Insight**: Like how mobile money succeeded in Africa by working within existing systems rather than replacing them entirely, Bitcoin succeeded by being complementary to, rather than directly challenging, traditional finance initially.\n</style>"
        },
        {
          title: "The Bitcoin Whitepaper: A Technical Masterpiece",
          content: "On October 31, 2008, Satoshi Nakamoto published \"Bitcoin: A Peer-to-Peer Electronic Cash System\" to the cryptography mailing list. This elegant 9-page document outlined a complete solution to problems that had puzzled cryptographers for decades.\n\n### The Whitepaper's Structure:\n**Abstract**: Summarizes the peer-to-peer electronic cash vision\n**Introduction**: Explains the trust problem in online commerce\n**Transactions**: Describes digital signatures and ownership transfer\n**Timestamp Server**: Introduces the concept of blockchain\n**Proof-of-Work**: Explains the mining consensus mechanism\n**Network**: Details how nodes reach consensus\n**Incentive**: Shows how economics align with security\n**Reclaiming Disk Space**: Merkle trees for efficiency\n**Simplified Payment Verification**: Lightweight client design\n**Combining and Splitting Value**: UTXO model basics\n**Privacy**: Pseudonymous transactions\n**Calculations**: Mathematical proof of security\n\n### Revolutionary Innovations:\n\n**1. Proof-of-Work Consensus**\n- Solves the Byzantine Generals Problem for digital money\n- Makes attacking the network economically irrational\n- Creates objective truth from subjective participants\n\n**2. Decentralized Timestamping**\n- Blockchain as an immutable, chronological record\n- No central authority needed to order transactions\n- Cryptographic proofs replace institutional trust\n\n**3. Economic Incentive Alignment**\n- Miners rewarded for honest behavior\n- Network security grows with adoption\n- Self-sustaining ecosystem without external funding\n\n**4. Simplified Payment Verification (SPV)**\n- Enables lightweight clients for mobile devices\n- Users can verify payments without downloading full blockchain\n- Critical for global adoption in bandwidth-limited regions\n\n### Technical Elegance:\nThe whitepaper's brilliance lies not just in individual innovations, but in how they work together. Each component solves specific problems while reinforcing the others:\n\n- **Digital signatures** prove ownership without revealing identity\n- **Proof-of-work** orders transactions without central authority\n- **Economic incentives** align individual profit with network security\n- **Merkle trees** enable efficient verification\n- **Difficulty adjustment** maintains consistent block times\n\n### African Context:\nFor African readers, the whitepaper's vision addresses specific challenges:\n- **No infrastructure requirements** beyond internet access\n- **Resistance to capital controls** and currency manipulation\n- **Global participation** without permission from financial gatekeepers\n- **Mathematical certainty** replacing institutional promises\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Ubuntu Connection**: The whitepaper's design embodies Ubuntu philosophy - individual participants acting in self-interest create collective benefit, with network security emerging from cooperative competition.\n</style>"
        },
        {
          title: "Satoshi Nakamoto: The Architect of Digital Sovereignty",
          content: "The true identity of Bitcoin's creator remains one of the internet's greatest mysteries, but this anonymity serves Bitcoin's decentralized nature perfectly. Understanding what we know about Satoshi helps us understand Bitcoin's design philosophy.\n\n### What We Know:\n\n**Timeline of Activity:**\n- **August 2008**: Registered bitcoin.org domain\n- **October 2008**: Published whitepaper\n- **January 2009**: Released Bitcoin software, mined Genesis Block\n- **2009-2010**: Active development, responding to community feedback\n- **April 2011**: Final known communication\n- **~1 million BTC**: Estimated holdings, never moved\n\n**Communication Patterns:**\n- Wrote primarily in British English\n- Posted during European/UK timezone hours\n- Demonstrated deep knowledge of cryptography and economics\n- Showed familiarity with financial systems and their flaws\n- Maintained strict operational security\n\n**Programming Style:**\n- C++ expertise with unique coding patterns\n- Focus on robustness over elegance\n- Extensive comments and documentation\n- Conservative approach to changes\n\n### Leading Theories:\n\n**Nick Szabo** (Legal scholar/cryptographer)\n- Created Bit Gold, extremely similar to Bitcoin\n- Writing style analysis shows similarities\n- Deep expertise in law, cryptography, and economics\n- Denied being Satoshi multiple times\n\n**Hal Finney** (Cryptographer)\n- First person besides Satoshi to run Bitcoin\n- Received first Bitcoin transaction\n- Worked on digital cash systems before Bitcoin\n- Lived near Dorian Nakamoto (red herring)\n\n**Wei Dai** (Computer scientist)\n- Created b-money, credited in Bitcoin whitepaper\n- Strong cryptographic background\n- Libertarian philosophy aligns with Bitcoin\n\n**Group Theory**\n- Bitcoin too sophisticated for one person\n- Combination of academic researchers\n- Explains consistent posting hours and varied expertise\n\n### Why Anonymity Matters:\n\n**1. Prevents Centralization**\n- No single person can control Bitcoin's direction\n- Community must reach consensus without appeal to authority\n- Forces focus on code quality over personality\n\n**2. Legal Protection**\n- Avoids potential prosecution for creating alternative money\n- Protects from government pressure to modify Bitcoin\n- Enables global adoption without regulatory capture\n\n**3. Philosophical Consistency**\n- Demonstrates commitment to decentralization\n- Shows Bitcoin can exist without its creator\n- Proves the network's antifragility\n\n**4. Economic Neutrality**\n- Satoshi's coins act as \"lost\" supply, reducing inflation\n- No founder enrichment concerns\n- Community owns Bitcoin's future, not creator\n\n### African Perspective:\nSatoshi's anonymity resonates with African traditions of wisdom attribution:\n\n- **Collective Knowledge**: Like proverbs attributed to ancestors rather than individuals\n- **Resistance to Authority**: Echoes anonymous resistance movements\n- **Community Ownership**: Knowledge belongs to everyone, not just the originator\n- **Protection from Persecution**: Similar to how activists use pseudonyms\n\n### The Satoshi Ethos:\nSatoshi's behavior established Bitcoin's cultural DNA:\n- **Gradual withdrawal** rather than dramatic exit\n- **Open source development** from the beginning\n- **Community consultation** on major decisions\n- **Economic restraint** (never selling bitcoin)\n- **Technical perfectionism** before public release\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Cultural Parallel**: Like African praise singers who remain anonymous to let their message transcend personality, Satoshi's anonymity allows Bitcoin's ideas to speak for themselves.\n</style>"
        },
        {
          title: "The Technological Foundation: Building on Giants' Shoulders",
          content: "Bitcoin didn't emerge from nothing - it synthesized decades of cryptographic research and digital cash experiments into a working system. Understanding these foundations shows how Bitcoin achieved what previous attempts couldn't.\n\n### Cryptographic Building Blocks:\n\n**Hash Functions (1970s-1990s)**\n- **MD5 (1991)**: Early hash function, now broken\n- **SHA-1 (1995)**: NSA-designed, later found vulnerable\n- **SHA-256 (2001)**: Bitcoin's choice, still unbroken\n- **Purpose**: Create unique digital fingerprints\n- **Bitcoin Usage**: Block hashing, proof-of-work, addresses\n\n**Digital Signatures (1976)**\n- **Diffie-Hellman (1976)**: Public key concept\n- **RSA (1978)**: First practical public key system\n- **Elliptic Curves (1985)**: More efficient alternative\n- **ECDSA**: Bitcoin's signature algorithm\n- **Purpose**: Prove ownership without revealing private keys\n\n**Merkle Trees (1979)**\n- **Inventor**: Ralph Merkle\n- **Innovation**: Efficient verification of large datasets\n- **Bitcoin Usage**: Transaction verification in blocks\n- **Benefit**: SPV clients can verify payments efficiently\n\n### Economic Theories:\n\n**Austrian Economics**\n- **Ludwig von Mises**: Regression theorem for money\n- **Friedrich Hayek**: Competition in currency\n- **Carl Menger**: Theory of money's emergence\n- **Bitcoin Connection**: Sound money principles, market-based value\n\n**Game Theory**\n- **Nash Equilibrium**: Stable strategies in competitive situations\n- **Mechanism Design**: Creating systems with desired outcomes\n- **Bitcoin Application**: Mining incentives, consensus rules\n- **African Relevance**: Community cooperation without central authority\n\n### Computer Science Innovations:\n\n**Distributed Systems**\n- **Byzantine Fault Tolerance**: Consensus with unreliable participants\n- **Lamport Timestamps**: Ordering events in distributed systems\n- **Consensus Algorithms**: Paxos, PBFT, and others\n- **Bitcoin Innovation**: First practical solution to Byzantine Generals Problem for money\n\n**Peer-to-Peer Networks**\n- **Napster (1999)**: Centralized P2P, easy to shut down\n- **Gnutella (2000)**: Decentralized but inefficient\n- **BitTorrent (2001)**: Efficient file sharing\n- **Bitcoin Adaptation**: Gossip protocol for transaction and block propagation\n\n### The Missing Piece: Economic Consensus\n\nPrevious systems failed because they couldn't solve the **consensus problem** in an economic context:\n\n**Technical Consensus** (solved by 1990s):\n- How do distributed computers agree on data?\n- Solutions: Paxos, PBFT, etc.\n- Limitation: Requires known, trusted participants\n\n**Economic Consensus** (solved by Bitcoin):\n- How do strangers agree on truth when money is involved?\n- Innovation: Proof-of-work makes lying expensive\n- Result: First trustless digital money\n\n### Why Bitcoin Succeeded Where Others Failed:\n\n**1. No Trusted Third Parties**\n- Previous systems required central authorities\n- Bitcoin eliminates single points of failure\n- Network security emerges from decentralized competition\n\n**2. Economic Incentive Alignment**\n- Honest behavior is always most profitable\n- Attackers must outspend entire network\n- Security budget grows automatically with adoption\n\n**3. Open Source from Day One**\n- Community can verify and improve code\n- No proprietary secrets or backdoors\n- Transparent development process\n\n**4. Gradual Decentralization**\n- Satoshi didn't try to control adoption\n- Community naturally took over development\n- Network became antifragile\n\n**5. Perfect Timing**\n- Financial crisis created demand for alternatives\n- Internet infrastructure mature enough for P2P networks\n- Cryptographic tools sufficiently advanced\n- Computing power available for mining\n\n### African Innovation Parallels:\nBitcoin's success mirrors African innovation patterns:\n- **Leapfrogging**: Skip traditional banking infrastructure\n- **Community Networks**: Decentralized organization\n- **Practical Solutions**: Solve real problems with available tools\n- **Adaptive Technology**: Modify global innovations for local needs\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Innovation Insight**: Like how African mobile money combined existing technologies (SMS, airtime) in novel ways, Bitcoin combined existing cryptographic tools to create something entirely new.\n</style>"
        },
        {
          title: "Satoshi's Identity",
          content: "The true identity of Satoshi Nakamoto remains unknown, with several candidates proposed but none conclusively proven. What we know:\n\n- First email from satoshin@gmx.com in August 2008\n- Active development until December 2010\n- Final communication in April 2011\n\n### Why Anonymity Matters:\n1. Prevents centralized authority figure\n2. Aligns with cypherpunk values\n3. Forces focus on the technology\n4. Protects against legal pressure\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Perspective**: Just as African folklore often attributes wisdom to anonymous or mythical figures to focus on the message rather than the messenger, Satoshi's anonymity keeps Bitcoin decentralized and community-owned.\n</style>"
        }
      ]
    },
    simulationType: 'scavenger-hunt',
    game: {
      name: "Satoshi's Quest",
      description: "Find hidden clues about Bitcoin's origins to earn your Satoshi Badge",
      tasks: [
        "Locate the timestamp of the first Bitcoin block",
        "Find the hidden message in the Genesis block",
        "Identify three cypherpunk influences on Bitcoin",
        "Decode Satoshi's estimated birth year from his PGP key"
      ],
      reward: "Satoshi Badge"
    },
    quiz: {
      questions: [
        {
          question: "What was the primary motivation for creating Bitcoin?",
          options: [
            "To make digital gold",
            "To create peer-to-peer electronic cash without trusted third parties",
            "To replace traditional banking completely",
            "To enable anonymous transactions"
          ],
          answer: 1
        },
        {
          question: "Which of these was NOT a direct influence on Bitcoin?",
          options: [
            "DigiCash",
            "HashCash",
            "Bit Gold",
            "Tor"
          ],
          answer: 3
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Genesis Block",
    subtitle: "Bitcoin's Immutable Beginning",
    description: "Explore the significance of Bitcoin's first block - the foundation of the entire blockchain. Understand the hidden message that connects Bitcoin to the financial crisis and reveals its purpose. Learn how this single block set in motion a revolution in digital trust.",
    objectives: [
      "Understand the components of the Genesis Block",
      "Analyze the significance of the embedded message",
      "Learn how the Genesis Block differs from subsequent blocks",
      "Explore the concept of block rewards and coinbase transactions",
      "Reflect on Bitcoin's creation as a response to financial instability"
    ],
    content: {
      title: "Bitcoin's First Block",
      content: "The Genesis Block, mined on January 3, 2009, marks the beginning of the Bitcoin blockchain and contains a powerful political statement about the traditional financial system it was designed to challenge.",
      introduction: "On January 3, 2009, at approximately 18:15:05 UTC, Satoshi Nakamoto mined the first Bitcoin block - Block 0, now known as the Genesis Block. This marked the launch of the Bitcoin network and the beginning of a new era in digital money.\n\nFor Africans facing currency instability and financial exclusion, the Genesis Block represents more than technical innovation - it symbolizes the possibility of money that can't be inflated away by distant central banks, a system where participation requires only internet access rather than permission from financial gatekeepers.",
      sections: [
        {
          title: "The Block That Started It All",
          content: "The Genesis Block contains several unique characteristics:\n\n### Technical Specifications:\n- Block Height: 0\n- Timestamp: 2009-01-03 18:15:05\n- Nonce: 2083236893\n- Difficulty: 1\n- Reward: 50 BTC (unspendable)\n\n### Unique Features:\n1. Hardcoded into Bitcoin clients\n2. Coinbase transaction can't be spent\n3. Doesn't reference previous block\n4. Special status in code\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Analogy**: Just as the baobab tree's roots run deep to support its massive structure, the Genesis Block provides the foundational root for Bitcoin's growing blockchain.\n</style>"
        },
        {
          title: "The Hidden Message",
          content: "Satoshi embedded a message in the Genesis Block's coinbase parameter:\n\n\"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks\"\n\nThis references a headline from The Times (UK) newspaper that day, serving multiple purposes:\n\n1. **Timestamp Proof**: Verifies the block wasn't created before that date\n2. **Political Statement**: Comments on the financial crisis\n3. **Mission Statement**: Shows Bitcoin's purpose as an alternative\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Context**: Many African currencies have experienced hyperinflation due to similar financial mismanagement. Bitcoin offers an alternative not controlled by any government.\n</style>"
        },
        {
          title: "The Unspendable Reward",
          content: "Unlike normal blocks, the Genesis Block's 50 BTC reward cannot be spent due to how it was coded. This creates several interesting implications:\n\n1. **Symbolic Gesture**: The first coins exist outside the economy\n2. **Technical Necessity**: Prevents blockchain reorganization issues\n3. **Historical Marker**: Clearly identifies the first block\n\nSubsequent blocks follow different rules, with spendable rewards that decrease through halvings every 210,000 blocks.\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Perspective**: Just as traditional communities might designate certain resources as sacred or untouchable, the unspendable Genesis coins serve as a permanent monument to Bitcoin's creation.\n</style>"
        }
      ]
    },
    simulationType: 'knowledge',
    game: {
      name: "Block Builder",
      description: "Create your own Genesis Block with a custom message",
      tasks: [
        "Design a block header with timestamp and nonce",
        "Embed a meaningful message in your block",
        "Explain why you chose your message",
        "Compare your block to the real Genesis Block"
      ],
      reward: "Genesis Creator Badge",
      criteria: "Most creative and meaningful message wins"
    },
    quiz: {
      questions: [
        {
          question: "Why can't the Genesis Block's coinbase reward be spent?",
          options: [
            "It was lost",
            "Satoshi chose not to spend it",
            "It's hardcoded as unspendable",
            "The private key is unknown"
          ],
          answer: 2
        },
        {
          question: "What was the significance of the Genesis Block's embedded message?",
          options: [
            "It proved the block wasn't pre-mined",
            "It commented on the financial crisis",
            "It served as a timestamp",
            "All of the above"
          ],
          answer: 3
        }
      ]
    }
  },
  {
    id: 3,
    title: "What Makes Bitcoin Different?",
    subtitle: "Decentralization and Trustless Architecture",
    description: "Discover the revolutionary aspects of Bitcoin that set it apart from traditional financial systems and earlier digital cash attempts. Learn how decentralization, censorship resistance, and transparent verification create money that doesn't require institutional trust.",
    objectives: [
      "Compare Bitcoin to traditional financial systems",
      "Understand the meaning of decentralization in Bitcoin",
      "Explore the concept of censorship resistance",
      "Learn how Bitcoin achieves trust minimization",
      "Analyze the tradeoffs of decentralized systems"
    ],
    content: {
      title: "Bitcoin's Unique Properties",
      content: "Bitcoin represents a fundamental shift in how we conceptualize money, replacing institutional trust with mathematical certainty through decentralization, censorship resistance, and transparent verification.",
      introduction: "Bitcoin represents a fundamental shift in how we conceptualize money and value transfer. Unlike traditional systems that rely on trusted intermediaries, Bitcoin replaces trust in institutions with trust in mathematics and decentralized consensus.\n\nFor Africans who have experienced currency controls, banking exclusion, or arbitrary account freezes, Bitcoin's properties offer an alternative paradigm - financial participation governed by transparent rules rather than opaque institutional decisions.",
      sections: [
        {
          title: "Decentralization: Power to the Edges",
          content: "Bitcoin distributes authority across a global network of participants:\n\n### Key Aspects:\n1. **No Single Point of Failure**: Thousands of independent nodes\n2. **Permissionless Participation**: Anyone can run a node or mine\n3. **Open-Source Code**: Transparent and community-developed\n4. **Distributed Consensus**: Rules enforced by network majority\n\n### African Benefits:\n- Reduces reliance on unstable local banking\n- Provides access without permission\n- Creates equal participation globally\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Ubuntu Connection**: \"I am because we are\" - Bitcoin's health depends on and benefits all participants, aligning with African communal values.\n</style>"
        },
        {
          title: "Censorship Resistance",
          content: "Bitcoin transactions are extremely difficult to block or reverse:\n\n### How It Works:\n1. **Global Network**: No single jurisdiction controls it\n2. **Pseudonymous**: Addresses aren't directly tied to identity\n3. **Irreversible**: Confirmed transactions can't be undone\n4. **Permissionless**: No one can prevent valid transactions\n\n### African Use Cases:\n- Cross-border trade despite capital controls\n- Protection from arbitrary account freezes\n- Remittances bypassing expensive corridors\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Historical Parallel**: Like griots preserving history against colonial suppression, Bitcoin preserves financial access against institutional exclusion.\n</style>"
        },
        {
          title: "Transparent Verification",
          content: "Bitcoin's public ledger enables unprecedented transparency:\n\n### Verification Features:\n1. **Public Blockchain**: All transactions visible\n2. **Full Auditability**: Anyone can verify supply\n3. **Mathematical Certainty**: Rules enforced by code\n4. **Predictable Issuance**: Fixed supply schedule\n\n### African Applications:\n- NGOs can prove fund allocation\n- Governments can demonstrate reserves\n- Businesses can verify payments\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Cultural Alignment**: Similar to community witnessing in traditional African dispute resolution, Bitcoin's transparency creates accountability through visibility.\n</style>"
        }
      ]
    },
    simulationType: 'quiz',
    game: {
      name: "Decentralization Match",
      description: "Match benefits and trade-offs of decentralized systems",
      tasks: [
        "Pair decentralization benefits with real-world examples",
        "Identify tradeoffs of decentralized vs centralized systems",
        "Match Bitcoin properties to problems they solve",
        "Rank decentralization aspects by importance"
      ],
      reward: "Decentralization Expert Badge"
    },
    discussionPrompt: {
      question: "Debate the strengths and weaknesses of decentralized systems",
      guidelines: [
        "Compare to traditional centralized systems",
        "Discuss real-world implications",
        "Consider African contexts specifically",
        "Weigh tradeoffs honestly"
      ]
    }
  },
  {
    id: 4,
    title: "Private Keys & Digital Sovereignty",
    subtitle: "Owning Your Financial Future",
    description: "Master the critical concept of private keys - the foundation of true ownership in Bitcoin. Learn why self-custody matters, how keys work cryptographically, and best practices for securing your digital wealth. Understand how private keys enable financial sovereignty unmatched by traditional systems.",
    objectives: [
      "Understand public/private key cryptography",
      "Learn why self-custody is essential",
      "Explore different wallet types and security models",
      "Practice secure key management techniques",
      "Analyze tradeoffs between convenience and security"
    ],
    content: {
      title: "Cryptographic Ownership",
      content: "Bitcoin's private key system puts users in complete control of their funds, offering unprecedented financial sovereignty but also requiring responsible key management and security practices.",
      introduction: "In Bitcoin, possession of private keys means true ownership of value. Unlike traditional finance where institutions control access to your money, Bitcoin puts you in complete control through cryptographic keys. This represents both unprecedented freedom and responsibility.\n\nFor Africans who have experienced currency confiscation, banking exclusion, or arbitrary account freezes, private key ownership offers a radical alternative - money that can't be taken without your consent, accessible with just a string of memorized words.",
      sections: [
        {
          title: "The Magic of Key Pairs",
          content: "Bitcoin uses asymmetric cryptography:\n\n### Key Concepts:\n1. **Private Key**: Secret number that controls funds\n2. **Public Key**: Mathematically derived from private key\n3. **Address**: Hashed version of public key\n\n### How It Works:\n- Private keys sign transactions\n- Public keys verify signatures\n- Addresses receive funds\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Analogy**: Like a chief's seal that can't be forged, your private key uniquely authorizes transactions while your public key lets others verify authenticity.\n</style>"
        },
        {
          title: "Self-Custody: Your Keys, Your Coins",
          content: "True Bitcoin ownership requires controlling private keys:\n\n### Custody Models:\n1. **Self-Custody**: You hold keys (most secure)\n2. **Multisig**: Shared control among parties\n3. **Custodial**: Third party holds keys (least secure)\n\n### African Importance:\n- Avoids exchange failures/freezes\n- Preserves access during instability\n- Enables true financial sovereignty\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Proverb Connection**: \"If you want to go fast, go alone. If you want to go far, go together.\" Self-custody is going alone - full control but full responsibility.\n</style>"
        },
        {
          title: "Secure Storage Practices",
          content: "Proper key management balances security and accessibility:\n\n### Best Practices:\n1. **Seed Phrases**: 12-24 word backups\n2. **Hardware Wallets**: Isolated signing\n3. **Multisig**: Distributed trust\n4. **Geographic Distribution**: Protect against local disasters\n\n### African Adaptations:\n- Metal seed storage for durability\n- Community-based multisig for families\n- Hidden storage methods\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Cultural Parallel**: Just as traditional communities developed sophisticated methods to protect physical wealth, Bitcoin requires new methods to protect digital wealth.\n</style>"
        }
      ]
    },
    simulationType: 'cryptography',
    game: {
      name: "Key Keeper",
      description: "Defend your private keys from various threats",
      tasks: [
        "Pair decentralization benefits with real-world examples",
        "Identify tradeoffs of decentralized vs centralized systems",
        "Match Bitcoin properties to problems they solve",
        "Rank decentralization aspects by importance"
      ],
      scenarios: [
        {
          name: "Phishing Attack",
          description: "Identify fake wallet websites",
          success: "Recognized URL mismatch"
        },
        {
          name: "Hardware Failure",
          description: "Recover from lost device",
          success: "Used seed phrase properly"
        },
        {
          name: "Social Engineering",
          description: "Resist fake support calls",
          success: "Never shared private info"
        }
      ],
      reward: "Security Guardian Badge"
    },
    quiz: {
      questions: [
        {
          question: "What is the most secure way to store Bitcoin?",
          options: [
            "Exchange account",
            "Mobile wallet",
            "Self-custody with hardware wallet",
            "Paper wallet"
          ],
          answer: 2
        },
        {
          question: "Why is self-custody important in Africa?",
          options: [
            "Avoids exchange failures/freezes",
            "Preserves access during instability",
            "Enables true financial sovereignty",
            "All of the above"
          ],
          answer: 3
        }
      ]
    }
  },
  {
    id: 5,
    title: "Knowledge Test: Bitcoin's Birthright",
    subtitle: "Proving Your Understanding",
    description: "Demonstrate your mastery of Bitcoin's origins, technical foundations, and philosophical principles. This comprehensive test combines all Realm 3 concepts into practical challenges that prove your readiness to advance to more complex Bitcoin topics.",
    objectives: [
      "Recall key facts about Bitcoin's creation",
      "Explain the significance of the Genesis Block",
      "Articulate Bitcoin's differentiating features",
      "Demonstrate proper key management understanding",
      "Synthesize how Bitcoin applies to African contexts"
    ],
    content: {
      title: "Bitcoin Fundamentals Review",
      content: "This comprehensive test combines all core Bitcoin concepts from its origins and Genesis Block to its differentiating features and key management principles, proving your readiness for advanced topics.",
      introduction: "You've journeyed through Bitcoin's origin story, from its cypherpunk roots to its revolutionary technical design. Now it's time to prove your understanding and reflect on how these concepts apply to real-world financial situations, particularly in African contexts.\n\nThis final mission combines knowledge testing with practical application, ensuring you've internalized why Bitcoin matters and how its foundational principles create a new paradigm for money and value transfer across the continent and beyond.",
      sections: [
        {
          title: "Comprehensive Review",
          content: "### Bitcoin's Origins:\n- Created by pseudonymous Satoshi Nakamoto\n- Whitepaper published October 2008\n- Genesis Block mined January 2009\n\n### Key Differentiators:\n- Decentralized and permissionless\n- Censorship-resistant\n- Transparent and verifiable\n- Fixed supply and predictable issuance\n\n### Private Key Sovereignty:\n- True ownership requires key control\n- Various security tradeoffs\n- Special importance in unstable regions\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Synthesis**: Bitcoin represents both a technical innovation and a philosophical shift - from permissioned, centralized systems to open, mathematical money that treats all participants equally regardless of geography or status.\n</style>"
        }
      ]
    },
    simulationType: 'quiz',
    game: {
      name: "Bitcoin Trivia Showdown",
      description: "Competitive team-based trivia on Realm 3 content",
      tasks: [
        "Pair decentralization benefits with real-world examples",
        "Identify tradeoffs of decentralized vs centralized systems",
        "Match Bitcoin properties to problems they solve",
        "Rank decentralization aspects by importance"
      ],
      rounds: [
        {
          name: "Origins Round",
          questions: 5,
          topics: ["Satoshi", "Whitepaper", "Cypherpunks"]
        },
        {
          name: "Genesis Round",
          questions: 5,
          topics: ["Block 0", "Message", "Unspendable reward"]
        },
        {
          name: "Decentralization Round",
          questions: 5,
          topics: ["Trustlessness", "Censorship", "Transparency"]
        },
        {
          name: "Keys Round",
          questions: 5,
          topics: ["Self-custody", "Security", "Wallets"]
        }
      ],
      reward: "Bitcoin Scholar Badge"
    },
    reflection: {
      prompt: "Journal about how Bitcoin could change your financial future",
      guidelines: [
        "Consider your local financial challenges",
        "Imagine Bitcoin solutions to specific problems",
        "Reflect on personal sovereignty",
        "Project 5-10 years into the future"
      ]
    }
  }
];

export const bonusMissions: MissionContent[] = [
  {
    id: 1,
    title: "Altcoin Exploration",
    subtitle: "Comparing Bitcoin to Alternative Cryptocurrencies",
    description: "Investigate the landscape of alternative cryptocurrencies (altcoins) and analyze how they compare to Bitcoin in purpose, design, and value proposition. Understand why Bitcoin remains unique despite thousands of competitors.",
    objectives: [
      "Research a selected altcoin's technical design",
      "Compare its properties to Bitcoin",
      "Analyze its value proposition",
      "Evaluate tradeoffs in its design",
      "Present findings to peers"
    ],
    content: {
      introduction: "Since Bitcoin's creation, thousands of alternative cryptocurrencies (altcoins) have emerged, each with different designs, goals, and tradeoffs. Understanding this landscape helps clarify Bitcoin's unique value proposition and why it remains dominant despite numerous competitors.\n\nFor African developers and entrepreneurs, this knowledge is crucial for making informed decisions about which technologies to build on and which to use for different applications.",
      sections: [
        {
          title: "Selecting an Altcoin",
          content: "Choose one altcoin to research from these categories:\n\n### Categories:\n1. **Privacy Coins**: Monero, Zcash\n2. **Smart Contract Platforms**: Ethereum, Solana\n3. **Stablecoins**: USDT, USDC\n4. **Meme Coins**: Dogecoin, Shiba Inu\n5. **African Projects**: eNaira, others\n\n### Research Framework:\n- Creation story and purpose\n- Technical design differences from Bitcoin\n- Consensus mechanism\n- Tokenomics and issuance\n- Use cases and adoption\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Focus**: Pay special attention to projects with African roots or particularly relevant use cases for African markets.\n</style>"
        },
        {
          title: "Comparative Analysis",
          content: "Compare your selected altcoin to Bitcoin:\n\n### Comparison Areas:\n1. **Decentralization**: Node count, development, mining/staking\n2. **Security**: Attack resistance, audit history\n3. **Monetary Policy**: Supply cap, inflation rate\n4. **Adoption**: Users, merchants, developers\n5. **Censorship Resistance**: Transaction reversibility\n\n### Presentation Tips:\n- Create slides or written report\n- Highlight key differences\n- Be objective about tradeoffs\n- Suggest appropriate use cases\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Critical Thinking**: Remember that different designs serve different purposes - assess whether tradeoffs align with stated goals.\n</style>"
        }
      ]
    },
    task: "Research and present on one altcoin",
    reflection: {
      prompt: "Compare your altcoin to Bitcoin in purpose and design",
      questions: [
        "What problem does it solve that Bitcoin doesn't?",
        "What tradeoffs does its design make?",
        "How might it be useful in African contexts?",
        "Why might Bitcoin still be preferable?"
      ]
    }
  },
  {
    id: 2,
    title: "Creating a Wallet",
    subtitle: "Your Gateway to Bitcoin Ownership",
    description: "Set up your first Bitcoin wallet, taking your first practical step into the Bitcoin ecosystem. Learn the differences between wallet types and experience the empowerment of generating your first Bitcoin address.",
    objectives: [
      "Understand different wallet types",
      "Generate a secure seed phrase",
      "Create receiving addresses",
      "Practice backup procedures",
      "Experience wallet interfaces"
    ],
    content: {
      introduction: "A Bitcoin wallet is your personal interface to the Bitcoin network, allowing you to receive, store, and send bitcoin. Setting up your first wallet is a foundational step in your Bitcoin journey.\n\nFor many Africans, this represents their first experience with truly self-sovereign money - an account that can't be frozen or closed, requiring no permission or identification to create and use.",
      sections: [
        {
          title: "Wallet Types",
          content: "### Custodial vs Non-Custodial:\n- **Custodial**: Exchange accounts (easy but risky)\n- **Non-Custodial**: You control keys (more secure)\n\n### Non-Custodial Options:\n1. **Mobile Wallets**: BlueWallet, Phoenix (convenient)\n2. **Desktop Wallets**: Sparrow, Electrum (feature-rich)\n3. **Hardware Wallets**: Coldcard, BitBox02 (most secure)\n4. **Paper Wallets**: Offline generated (advanced)\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Consideration**: Choose based on your threat model - mobile wallets may be most practical, but consider hardware if saving significant amounts.\n</style>"
        },
        {
          title: "Setup Process",
          content: "### Key Steps:\n1. **Download** from official source\n2. **Generate** seed phrase (12-24 words)\n3. **Secure** backup (write down, no digital copies)\n4. **Verify** backup (test recovery)\n5. **Receive** first payment (generate address)\n\n### Security Checklist:\n- Device free from malware\n- Private environment during setup\n- Multiple backup locations\n- Understanding of recovery process\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Pro Tip**: Start with small amounts as you learn, like practicing with a new tool before serious use.\n</style>"
        }
      ]
    },
    task: "Set up a Bitcoin wallet",
    reflection: {
      prompt: "Write about the wallet setup experience",
      questions: [
        "What type did you choose and why?",
        "What was most surprising?",
        "What security considerations did you make?",
        "How does it feel to control your own keys?"
      ]
    }
  },
  {
    id: 3,
    title: "Exchange Simulation",
    subtitle: "Practicing Bitcoin Trading",
    description: "Simulate trading Bitcoin in a risk-free environment, learning about order types, market dynamics, and the emotional aspects of trading. Understand why most Bitcoiners recommend holding long-term rather than active trading.",
    objectives: [
      "Learn basic exchange interfaces",
      "Practice different order types",
      "Track fictional portfolio performance",
      "Analyze trading psychology",
      "Understand long-term holding rationale"
    ],
    content: {
      introduction: "While Bitcoin is best held as long-term savings, understanding how exchanges work is valuable for times when you need to acquire or sell bitcoin. This simulation lets you practice in a risk-free environment before using real funds.\n\nFor Africans using Bitcoin to preserve wealth against currency devaluation or to participate in global markets, judicious exchange use is often necessary, making this practice valuable despite the risks of active trading.",
      sections: [
        {
          title: "Exchange Basics",
          content: "### Key Concepts:\n1. **Order Book**: Lists of buy/sell orders\n2. **Market Price**: Current trading price\n3. **Spread**: Difference between buy/sell prices\n4. **Liquidity**: How easily large orders fill\n\n### Order Types:\n1. **Market Order**: Buy/sell immediately\n2. **Limit Order**: Set your price\n3. **Stop Loss**: Limit downside\n4. **Recurring Buy**: Dollar-cost averaging\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Reality**: Many face limited exchange options - research which serve your country and have fair KYC policies.\n</style>"
        },
        {
          title: "Simulation Setup",
          content: "### How to Simulate:\n1. Use paper trading or demo accounts\n2. Track fictional portfolio in spreadsheet\n3. Set initial fictional capital (e.g., $1000)\n4. Make trades over set period\n5. Compare to simple buy-and-hold\n\n### Tracking Metrics:\n- Portfolio value over time\n- Trade frequency\n- Emotional responses\n- Comparison to benchmarks\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Warning**: Most traders lose money - this exercise often proves how hard outperforming simple holding is.\n</style>"
        }
      ]
    },
    task: "Simulate trading BTC for ETH using fictional rates",
    discussionPoints: [
      "What fees did you encounter?",
      "How did market prices affect your decisions?",
      "What was challenging about tracking investments?",
      "How did your performance compare to just holding?"
    ]
  },
  {
    id: 4,
    title: "Final Reflection",
    subtitle: "Synthesizing Your Bitcoin Journey",
    description: "Step back and reflect on your comprehensive Bitcoin learning experience. Consider how this knowledge might shape your financial future and how you can apply Bitcoin principles to improve your economic resilience.",
    objectives: [
      "Synthesize key lessons learned",
      "Project Bitcoin's role in your future",
      "Consider African-specific applications",
      "Identify next learning steps",
      "Commit to ongoing Bitcoin education"
    ],
    content: {
      introduction: "You've explored Bitcoin from its philosophical foundations to practical usage. Now take time to reflect on how this knowledge might transform your relationship with money and financial systems, particularly within African contexts.\n\nBitcoin represents more than technology - it's a toolkit for financial sovereignty, a hedge against instability, and a means of participating in global markets without traditional gatekeepers. How will you wield these tools?",
      sections: [
        {
          title: "Looking Back",
          content: "### Key Realizations:\n1. Bitcoin is fundamentally different from traditional money\n2. True ownership requires technical understanding\n3. Security is personal responsibility\n4. African applications are unique and important\n\n### Surprising Discoveries:\n- What challenged your assumptions?\n- What excited you most?\n- What concerns remain?\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**Cultural Reflection**: How do Bitcoin's values align or conflict with your community's financial traditions?\n</style>"
        },
        {
          title: "Looking Forward",
          content: "### Personal Applications:\n1. **Savings**: Bitcoin as long-term store of value\n2. **Remittances**: Cheaper cross-border transfers\n3. **Business**: New payment options\n4. **Hedge**: Against currency instability\n\n### Next Steps:\n- Deepen technical knowledge\n- Improve security practices\n- Share with community\n- Build Bitcoin-based solutions\n\n<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n**African Opportunity**: You're positioned at a historic inflection point - how will you help shape Bitcoin's African future?\n</style>"
        }
      ]
    },
    reflection: {
      prompt: "How does this knowledge shape your view of Bitcoin's potential?",
      questions: [
        "What role might digital currencies play in your future?",
        "How could Bitcoin address specific African challenges?",
        "What personal changes will you make?",
        "How will you continue learning?"
      ]
    }
  }
];

export const advancedTopicsIntroduction: MissionContent = {
  id: 0,
  title: "Advanced Bitcoin Concepts Preview",
  subtitle: "Your Roadmap to Mastering Bitcoin",
  description: "This overview introduces key advanced topics you'll master in later realms. Each builds on the cryptographic foundations you've just learned, creating Bitcoin's complete system of decentralized trust.",
  objectives: [
    "Understand how these concepts connect to what you've learned",
    "Recognize which realm will cover each topic in depth",
    "See Bitcoin as an interconnected system",
    "Prepare for deeper dives in upcoming realms"
  ],
  content: {
    introduction: "Just as a baobab tree's branches all connect to its massive trunk, Bitcoin's advanced systems all grow from the cryptographic roots you've learned. This preview shows how we'll expand your knowledge through five key branches of Bitcoin mastery.",
    sections: [
      {
        title: "🔐 Cryptography & Security (Realm 4)",
        content: "You'll dive deeper into:\n\n" +
          "• **Hash Functions**: How SHA-256 creates Bitcoin's unbreakable chain\n" +
          "• **Elliptic Curve Magic**: The math securing your bitcoin (ECDSA)\n" +
          "• **Digital Signatures**: Your unforgeable authorization stamp\n" +
          "• **Multisig Vaults**: Shared control for families/businesses\n" +
          "• **HD Wallets**: One seed to rule all your addresses (BIP32/39/44)\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**African Relevance**: Multisig enables cooperative finance models familiar in many African communities.\n" +
          "</style>"
      },
      {
        title: "🧱 Blockchain Architecture (Realm 5)",
        content: "Explore Bitcoin's engine room:\n\n" +
          "• **Merkle Trees**: The efficient verification backbone\n" +
          "• **UTXO Model**: How Bitcoin tracks who owns what\n" +
          "• **Bitcoin Script**: Simple but powerful transaction logic\n" +
          "• **Mining Difficulty**: The self-adjusting security dial\n" +
          "• **Orphan Blocks**: When two miners find blocks simultaneously\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**Real-World Impact**: UTXOs enable transparent auditing - valuable for NGOs and governments.\n" +
          "</style>"
      },
      {
        title: "⚙️ Network & Infrastructure (Realm 6)",
        content: "How Bitcoin stays decentralized:\n\n" +
          "• **Full vs Light Nodes**: Security vs convenience tradeoffs\n" +
          "• **Proof-of-Work**: Energy as security deposit\n" +
          "• **Gossip Protocol**: How nodes spread information\n" +
          "• **Mining Pools**: Cooperation with centralization risks\n" +
          "• **Mempool**: The waiting room for transactions\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**African Angle**: Light nodes enable smartphone participation where infrastructure is limited.\n" +
          "</style>"
      },
      {
        title: "⚡ Scalability & Second Layers (Realm 7)",
        content: "Bitcoin's expansion pack:\n\n" +
          "• **Scalability Trilemma**: Why Bitcoin chose security first\n" +
          "• **Lightning Network**: Instant, cheap microtransactions\n" +
          "• **SegWit**: The upgrade that fixed transaction malleability\n" +
          "• **Taproot**: Privacy and efficiency upgrade\n" +
          "• **Sidechains**: Experimental feature testing grounds\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**Use Case**: Lightning enables remittances for less than 1% fees across African borders.\n" +
          "</style>"
      },
      {
        title: "📊 Economics & Game Theory (Realm 8)",
        content: "The invisible hands shaping Bitcoin:\n\n" +
          "• **Halving Events**: Scheduled supply shocks every 4 years\n" +
          "• **Miner Incentives**: How security stays funded\n" +
          "• **Store of Value**: Digital gold properties\n" +
          "• **Nash Equilibrium**: Why cheating doesn't pay\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**Local Impact**: Fixed supply protects against currency devaluation affecting many African economies.\n" +
          "</style>"
      },
      {
        title: "🏛️ Governance & Ecosystem (Realm 9)",
        content: "How Bitcoin evolves without leaders:\n\n" +
          "• **BIPs**: How improvements get proposed\n" +
          "• **Soft Forks**: Backward-compatible upgrades\n" +
          "• **Hard Forks**: Contentious chain splits\n" +
          "• **Historical Events**: Lessons from past conflicts\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**Key Insight**: Bitcoin's governance mimics African palaver trees - open discussion but no central chief.\n" +
          "</style>"
      },
      {
        title: "📈 Adoption & Real-World Use (Realm 10)",
        content: "Bitcoin in action:\n\n" +
          "• **Global Regulations**: How countries approach Bitcoin\n" +
          "• **African Solutions**: Bitcoin addressing local challenges\n" +
          "• **Custody Choices**: From self-reliance to institutional\n" +
          "• **Energy Debate**: Separating myths from facts\n\n" +
          "<style={{backgroundImage: 'linear-gradient(to right, #1A8F60, #46D1A2)', textShadow: '0 0 15px rgba(6, 214, 160, 0.3)'}}>\n" +
          "**Fact**: Kenya and Nigeria lead Africa in peer-to-peer Bitcoin trading volume.\n" +
          "</style>"
      }
    ]
  },
  simulationType: 'roadmap',
  game: {
    name: "Concept Connector",
    description: "Match foundational concepts to their advanced applications",
    tasks: [
      "Pair cryptographic primitives to their real-world uses",
      "Trace how a transaction moves through network layers",
      "Predict how economic incentives affect behavior",
      "Connect African use cases to technical features"
    ],
    reward: "Bitcoin Visionary Badge"
  }
};