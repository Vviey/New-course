// This file contains the data for all realms, missions, and lesson content

// Realm data
export const RealmData = [
  // Realm 1: Realm of Origins
  {
    id: 1,
    name: "Realm of Origins",
    moduleNumber: 1,
    description: "A bustling trade festival at sunset where you'll discover the foundations of money, from ancient barter systems to modern currencies.",
    emotionalTone: "Curiosity, wonder",
    setting: "A bustling trade festival at sunset",
    focus: "Foundations of Money",
    imageUrl: "/realms/origins.jpg",
    isLocked: false,
    badges: [
      {
        id: 1,
        name: "Money Historian",
        description: "Mastered the history and evolution of money",
        imageUrl: "/badges/money-historian.svg",
        earned: true
      }
    ]
  },
  
  // Realm 2: The Forest of Sparks
  {
    id: 2,
    name: "The Forest of Sparks",
    moduleNumber: 4,
    description: "Enter a mystical forest of knowledge where the spark of Bitcoin was first ignited, exploring blockchain technology and how Bitcoin works.",
    emotionalTone: "Discovery, fascination",
    setting: "Mystical forest of knowledge and digital connections",
    focus: "Bitcoin's Birth",
    imageUrl: "/realms/forest.jpg",
    isLocked: false,
    badges: [
      {
        id: 2,
        name: "Crypto Defender",
        description: "Applied cryptography principles",
        imageUrl: "/badges/crypto-defender.svg",
        earned: true
      },
      {
        id: 3,
        name: "Bitcoin Beginner",
        description: "Mastered core Bitcoin concepts",
        imageUrl: "/badges/bitcoin-beginner.svg",
        earned: true
      },
      {
        id: 4,
        name: "Wallet Wizard",
        description: "Set up and secured Bitcoin wallets",
        imageUrl: "/badges/wallet-wizard.svg",
        earned: false
      },
      {
        id: 5,
        name: "Transaction Expert",
        description: "Understands Bitcoin transactions",
        imageUrl: "/badges/transaction-expert.svg",
        earned: false
      }
    ]
  },
  
  // Realm 3: The Central Citadel
  {
    id: 3,
    name: "The Central Citadel",
    moduleNumber: 6,
    description: "A high mountain fortress with ancient scrolls and digital firewalls where you'll learn about Bitcoin security, custody, and running nodes.",
    emotionalTone: "Responsibility, mastery",
    setting: "A high mountain fortress with ancient scrolls and digital firewalls",
    focus: "Governance",
    imageUrl: "/realms/citadel.jpg",
    isLocked: true,
    badges: [
      {
        id: 6,
        name: "Network Guardian",
        description: "Understands Bitcoin network",
        imageUrl: "/badges/network-guardian.svg",
        earned: false
      },
      {
        id: 7,
        name: "Bitcoin Guardian",
        description: "Mastered Bitcoin security",
        imageUrl: "/badges/bitcoin-guardian.svg",
        earned: false
      }
    ]
  },
  
  // Realm 4: The Council of Forks
  {
    id: 4,
    name: "The Council of Forks",
    moduleNumber: 6,
    description: "A digital roundtable in a shifting network space where you'll explore Bitcoin governance, open-source development, and network upgrades.",
    emotionalTone: "Reflection, collaboration",
    setting: "A digital roundtable in a shifting network space",
    focus: "Governance",
    imageUrl: "/realms/forks.jpg",
    isLocked: true,
    badges: [
      {
        id: 8,
        name: "Decentralization Defender",
        description: "Understands Bitcoin governance",
        imageUrl: "/badges/decentralization-defender.svg",
        earned: false
      }
    ]
  },
  
  // Realm 5: The Ubuntu Village
  {
    id: 5,
    name: "The Ubuntu Village",
    moduleNumber: 7,
    description: "An interactive map-based village of diverse Bitcoin projects where you'll discover real-world Bitcoin applications across Africa.",
    emotionalTone: "Empowerment, community, hope",
    setting: "An interactive map-based village of diverse Bitcoin projects",
    focus: "Bitcoin in Africa",
    imageUrl: "/realms/ubuntu.jpg",
    isLocked: true,
    badges: [
      {
        id: 9,
        name: "Bitcoin Ambassador",
        description: "Expert in Bitcoin applications in Africa",
        imageUrl: "/badges/bitcoin-ambassador.svg",
        earned: false
      }
    ]
  }
];

// Mission data
export const missionData = [
  // Realm 1: Origin - Mission 1
  {
    id: 1,
    realmId: 1,
    title: "A History of Money (Back to the Roots)",
    description: "Explore how money evolved from barter to Bitcoin, tracing its development through human history.",
    imageUrl: "/missions/money-history.svg",
    isLocked: false,
    isCompleted: true,
    progress: 100,
    scenario: "You're at a bustling market in an ancient African village. Traders are exchanging goods, but some are struggling with direct barter. Your task is to explore better trading methods and follow money's evolution through time.",
    lessons: [
      {
        title: "Barter Trade",
        content: "Barter was the original form of exchange, where goods or services were directly traded for other goods or services. However, this system had major limitations, primarily the 'double coincidence of wants' - both parties needed to desire what the other had. Additionally, different items had vastly different values, making fair trades difficult."
      },
      {
        title: "Commodity Money",
        content: "To solve barter issues, people began using valuable commodities as money. In Africa, items like cowrie shells, salt, and gold became early forms of money. These commodities were valuable, divisible, portable, and relatively scarce. However, they were sometimes bulky to transport and could vary in quality."
      },
      {
        title: "Paper Money",
        content: "Eventually, paper money was introduced as receipts for stored commodities like gold. Initially, these were backed by actual gold reserves, creating trust in their value. Later, governments shifted to 'fiat' currencies, where value comes from government decree and public trust rather than backing by physical commodities."
      },
      {
        title: "Digital Money",
        content: "With the rise of computers and the internet, money became increasingly digital. Online banking, credit cards, and mobile money systems like M-Pesa revolutionized financial transactions. However, these systems still relied on centralized authorities like banks and payment processors, creating vulnerabilities."
      },
      {
        title: "Bitcoin",
        content: "In 2009, Bitcoin emerged as the first truly decentralized digital currency. Unlike previous forms of money, Bitcoin has a fixed supply of 21 million, cannot be censored by governments, works across borders, and doesn't require trusted intermediaries. It combines the scarcity of gold with the digital portability of online banking."
      }
    ],
    challenge: {
      title: "Evolution of Money Challenge",
      description: "Choose which trade method would best solve common problems in different historical scenarios.",
      type: "multiple-choice",
      options: [
        { 
          id: "barter", 
          text: "Direct barter of goods", 
          isCorrect: false,
          feedback: "Barter requires a double coincidence of wants, making trade difficult and inefficient."
        },
        { 
          id: "cowries", 
          text: "Cowrie shells as currency", 
          isCorrect: true,
          feedback: "Correct! Commodity money like cowrie shells solved the double coincidence of wants problem."
        },
        { 
          id: "promissory", 
          text: "Personal promissory notes", 
          isCorrect: false,
          feedback: "Promissory notes require trust in the issuer, which doesn't scale well for everyday transactions."
        },
        { 
          id: "gold", 
          text: "Gold coins", 
          isCorrect: true,
          feedback: "Correct! Precious metals like gold became effective currencies due to their durability, divisibility, and scarcity."
        }
      ]
    },
    quiz: {
      title: "Money Evolution Quiz",
      description: "Test your knowledge about the evolution of money from barter to Bitcoin.",
      questions: [
        {
          id: 1,
          text: "What was the main problem with barter systems?",
          options: [
            { id: "a", text: "Items were too heavy to carry", isCorrect: false },
            { id: "b", text: "Double coincidence of wants", isCorrect: true },
            { id: "c", text: "People couldn't count properly", isCorrect: false },
            { id: "d", text: "Weather affected trade too much", isCorrect: false }
          ],
          explanation: "The 'double coincidence of wants' means both parties must desire what the other has, making direct barter inefficient."
        },
        {
          id: 2,
          text: "What makes Bitcoin different from previous forms of money?",
          options: [
            { id: "a", text: "It's the first form of digital money", isCorrect: false },
            { id: "b", text: "It's issued by a central bank", isCorrect: false },
            { id: "c", text: "It has a fixed supply cap of 21 million", isCorrect: true },
            { id: "d", text: "It can only be used in certain countries", isCorrect: false }
          ],
          explanation: "Bitcoin's fixed supply of 21 million coins creates digital scarcity, unlike fiat currencies that can be printed indefinitely."
        },
        {
          id: 3,
          text: "Which of these was an early form of commodity money in Africa?",
          options: [
            { id: "a", text: "Paper notes", isCorrect: false },
            { id: "b", text: "Credit cards", isCorrect: false },
            { id: "c", text: "Cowrie shells", isCorrect: true },
            { id: "d", text: "Digital tokens", isCorrect: false }
          ],
          explanation: "Cowrie shells were widely used as currency in parts of Africa, Asia, and Oceania for centuries."
        }
      ]
    },
    badgeName: "Money Historian",
    badgeDescription: "An expert in the evolution of money from ancient barter to modern Bitcoin",
    badgeImageUrl: "/badges/money-historian.svg"
  },
  
  // Realm 2: Forest of Sparks - Mission 2
  {
    id: 2,
    realmId: 2,
    title: "The Digital Money Revolution",
    description: "Understand how cryptography and decentralization revolutionized money through Bitcoin.",
    imageUrl: "/missions/digital-revolution.svg",
    isLocked: false,
    isCompleted: true,
    progress: 100,
    scenario: "A hacker attack has compromised a major centralized system. You must identify the weaknesses in centralized systems and explore how cryptography and decentralization could prevent such attacks.",
    lessons: [
      {
        title: "What is Cryptography?",
        content: "Cryptography is the science of secure communication in the presence of adversaries. It uses mathematical techniques to encrypt information, making it readable only to those who have the correct key. Cryptography enables secure online transactions, protected messaging, and is fundamental to Bitcoin's security model."
      },
      {
        title: "Importance for Digital Money",
        content: "For digital money to work, it must be secure from tampering and counterfeiting. Cryptography makes this possible by creating unforgeable digital signatures, securing transactions, and protecting users' funds even in a hostile environment like the open internet."
      },
      {
        title: "What is Decentralization?",
        content: "Decentralization means spreading control across a network rather than concentrating it in one place. In a decentralized system, there's no single point of failure, no central authority that can be corrupted, and no single entity that can shut the system down."
      },
      {
        title: "Centralized vs. Decentralized Comparison",
        content: "Centralized systems like banks are efficient but vulnerable to attacks, censorship, and corruption. Decentralized systems like Bitcoin are more resilient, censorship-resistant, and transparent, though they can be slower or less efficient in some aspects.",
        hasTable: true,
        table: {
          headers: ["Aspect", "Centralized", "Decentralized"],
          rows: [
            ["Control", "Single authority", "Distributed network"],
            ["Speed", "Usually faster", "Can be slower"],
            ["Vulnerability", "Single point of failure", "No single point of failure"],
            ["Censorship", "Possible", "Resistant"],
            ["Efficiency", "Higher", "Sometimes lower"]
          ]
        }
      },
      {
        title: "Bitcoin Combines Both",
        content: "Bitcoin's innovation was combining cryptography and decentralization to create money that can't be counterfeited, censored, or controlled by any single entity. It uses cryptographic proofs to secure transactions and a decentralized network of nodes to verify and record those transactions."
      }
    ],
    challenge: {
      title: "Spot the Vulnerabilities",
      description: "Identify the weak points in a centralized system that could be strengthened with cryptography or decentralization.",
      type: "matching",
      matchingPairs: [
        { left: "Passwords stored in plain text", right: "Encryption" },
        { left: "Single server holds all data", right: "Distributed storage" },
        { left: "One administrator has all access", right: "Multiple authorization keys" },
        { left: "Transactions can be modified", right: "Cryptographic signatures" }
      ]
    },
    quiz: {
      title: "Cryptography and Decentralization Quiz",
      description: "Test your understanding of how cryptography and decentralization enable Bitcoin.",
      questions: [
        {
          id: 1,
          text: "What aspect of Bitcoin makes it impossible to counterfeit?",
          options: [
            { id: "a", text: "Government regulation", isCorrect: false },
            { id: "b", text: "Cryptographic verification", isCorrect: true },
            { id: "c", text: "Bank oversight", isCorrect: false },
            { id: "d", text: "Community trust", isCorrect: false }
          ],
          explanation: "Bitcoin uses cryptographic proofs to verify that transactions are legitimate, making counterfeiting mathematically impossible."
        },
        {
          id: 2,
          text: "Why is decentralization important for Bitcoin?",
          options: [
            { id: "a", text: "It makes transactions faster", isCorrect: false },
            { id: "b", text: "It makes Bitcoin cheaper to use", isCorrect: false },
            { id: "c", text: "It prevents any single entity from controlling the network", isCorrect: true },
            { id: "d", text: "It allows more people to mine Bitcoin", isCorrect: false }
          ],
          explanation: "Decentralization ensures that Bitcoin remains censorship-resistant and that no single entity can shut it down or change the rules."
        },
        {
          id: 3,
          text: "What do we call the participants in the Bitcoin network who validate transactions?",
          options: [
            { id: "a", text: "Validators", isCorrect: false },
            { id: "b", text: "Nodes", isCorrect: true },
            { id: "c", text: "Signers", isCorrect: false },
            { id: "d", text: "Auditors", isCorrect: false }
          ],
          explanation: "Nodes are computers running the Bitcoin software that validate transactions and blocks according to the consensus rules."
        }
      ]
    },
    badgeName: "Crypto Defender",
    badgeDescription: "Mastered the principles of cryptography and decentralization in Bitcoin",
    badgeImageUrl: "/badges/crypto-defender.svg"
  },
  
  // Realm 2: Forest of Sparks - Mission 3
  {
    id: 3,
    realmId: 2,
    title: "Understanding Bitcoin",
    description: "Learn what makes Bitcoin special and why it's considered sound money.",
    imageUrl: "/missions/understand-bitcoin.svg",
    isLocked: false,
    isCompleted: true,
    progress: 100,
    scenario: "Your friend is skeptical about Bitcoin. You need to explain why Bitcoin is superior to traditional banking systems and fiat currencies in some important ways.",
    lessons: [
      {
        title: "Scarcity (21 million cap)",
        content: "Unlike fiat currencies that can be printed indefinitely, Bitcoin has a fixed supply cap of 21 million coins that can never be increased. This creates digital scarcity, making Bitcoin similar to precious metals but with the advantage of being easily verifiable. This scarcity protects Bitcoin from inflation."
      },
      {
        title: "Decentralization (no single control)",
        content: "Bitcoin isn't controlled by any government, company, or individual. It operates on a network of thousands of computers (nodes) around the world. This means no entity can shut it down, censor transactions, or change the rules without broad consensus from users."
      },
      {
        title: "Security (mathematical assurance)",
        content: "Bitcoin is secured by cryptography and game theory. The blockchain can't be hacked or altered without enormous computational power, making it extremely secure. Your bitcoins can only be spent with your private keys, giving you full control of your money."
      },
      {
        title: "Transparency (public ledger)",
        content: "All Bitcoin transactions are recorded on a public blockchain that anyone can view and verify. While transactions are pseudonymous (not tied directly to real-world identities), the system itself is fully transparent, unlike traditional banking systems."
      },
      {
        title: "Qualities of Money",
        content: "Bitcoin excels in the traditional qualities that make good money: it's durable (doesn't degrade), portable (can be sent anywhere instantly), divisible (to 8 decimal places), verifiable (can't be counterfeited), fungible (each unit is interchangeable), and scarce (limited supply).",
        hasTable: true,
        table: {
          headers: ["Quality", "Fiat Currency", "Gold", "Bitcoin"],
          rows: [
            ["Durability", "Medium", "High", "Perfect"],
            ["Portability", "Medium", "Low", "Perfect"],
            ["Divisibility", "High", "Medium", "Perfect"],
            ["Verifiability", "Medium", "Medium", "Perfect"],
            ["Scarcity", "Low", "Medium", "Perfect"],
            ["Fungibility", "High", "High", "High"]
          ]
        }
      }
    ],
    challenge: {
      title: "Bitcoin Benefits Challenge",
      description: "Choose the most accurate reason why Bitcoin is more secure and reliable than traditional banking systems.",
      type: "multiple-choice",
      options: [
        { 
          id: "govt", 
          text: "It's backed by multiple governments", 
          isCorrect: false,
          feedback: "Incorrect. Bitcoin isn't backed by any government - that's actually one of its strengths!"
        },
        { 
          id: "24-7", 
          text: "It works 24/7 and can't be shut down", 
          isCorrect: true,
          feedback: "Correct! Bitcoin operates continuously and has no central point that can be shut down."
        },
        { 
          id: "fees", 
          text: "It's always free to use", 
          isCorrect: false,
          feedback: "Incorrect. Bitcoin does have transaction fees that vary based on network demand."
        },
        { 
          id: "speed", 
          text: "It's always faster than bank transfers", 
          isCorrect: false,
          feedback: "Incorrect. While Bitcoin is faster for international transfers, some modern banking systems may be faster for local payments."
        }
      ]
    },
    quiz: {
      title: "Bitcoin Fundamentals Quiz",
      description: "Test your knowledge of Bitcoin's key properties and advantages.",
      questions: [
        {
          id: 1,
          text: "What is the maximum number of bitcoins that will ever exist?",
          options: [
            { id: "a", text: "1 million", isCorrect: false },
            { id: "b", text: "21 million", isCorrect: true },
            { id: "c", text: "100 million", isCorrect: false },
            { id: "d", text: "Unlimited", isCorrect: false }
          ],
          explanation: "Bitcoin's code limits the total supply to 21 million coins, creating digital scarcity."
        },
        {
          id: 2,
          text: "Why is Bitcoin considered more resistant to censorship than traditional banking?",
          options: [
            { id: "a", text: "It's approved by all governments", isCorrect: false },
            { id: "b", text: "It uses special encryption that banks don't have", isCorrect: false },
            { id: "c", text: "It's decentralized with no single point of control", isCorrect: true },
            { id: "d", text: "Its transactions are always private", isCorrect: false }
          ],
          explanation: "Bitcoin's decentralized nature means no single entity can block or reverse transactions, unlike banks which must comply with government orders."
        },
        {
          id: 3,
          text: "Which property makes Bitcoin particularly useful for international payments?",
          options: [
            { id: "a", text: "It's accepted as legal tender everywhere", isCorrect: false },
            { id: "b", text: "It works across borders without intermediaries", isCorrect: true },
            { id: "c", text: "It's always free to transfer", isCorrect: false },
            { id: "d", text: "It converts automatically to local currency", isCorrect: false }
          ],
          explanation: "Bitcoin works the same way globally and doesn't require permission from banks or currency exchangers to cross borders."
        }
      ]
    },
    badgeName: "Bitcoin Beginner",
    badgeDescription: "Mastered the fundamental properties that make Bitcoin revolutionary",
    badgeImageUrl: "/badges/bitcoin-beginner.svg"
  }
];