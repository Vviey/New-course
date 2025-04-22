// This file contains static data for the realms and missions
// In a production app, this would be retrieved from an API

export const RealmData = [
  {
    id: 1,
    name: "Realm of Origins",
    description: "Discover the foundational stories of money at the grand trade festival. Learn about barter, early forms of value exchange, and the dawn of monetary systems.",
    focus: "Foundations of Money",
    moduleNumber: 1,
    imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-1.png",
    fallbackImageUrl: "/realms/origins.jpg",
    isLocked: false
  },
  {
    id: 2,
    name: "Realm of Systems",
    description: "Explore the intricate systems of modern money, central banks, and the evolution of currencies from physical coins to digital tokens.",
    focus: "Monetary Systems",
    moduleNumber: 2,
    imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-2.png",
    fallbackImageUrl: "/realms/systems.jpg",
    isLocked: false
  },
  {
    id: 3,
    name: "Realm of Crypto",
    description: "Venture into the blockchain frontier where cryptographic technology has revolutionized the concept of money and trust-based systems.",
    focus: "Cryptocurrency Basics",
    moduleNumber: 3,
    imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-3.png",
    fallbackImageUrl: "/realms/crypto.jpg",
    isLocked: true
  },
  {
    id: 4,
    name: "Realm of Bitcoin",
    description: "Master the fundamentals of Bitcoin, the first cryptocurrency that changed how we think about money, trust, and decentralization.",
    focus: "Bitcoin Fundamentals",
    moduleNumber: 4,
    imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-4.png",
    fallbackImageUrl: "/realms/bitcoin.jpg", 
    isLocked: true
  },
  {
    id: 5,
    name: "Realm of Future",
    description: "Glimpse into the future of finance, exploring emerging trends in decentralized finance, digital identity, and global economic shifts.",
    focus: "Future of Money",
    moduleNumber: 5,
    imageUrl: "https://bitcoiners.africa/wp-content/uploads/2025/04/realm-5.png",
    fallbackImageUrl: "/realms/future.jpg",
    isLocked: true
  }
];

export const missionData = [
  // Realm 1: Realm of Origins Missions
  {
    id: 101,
    title: "The Grand Bazaar",
    description: "Join Asha at the festive market to discover how people traded before money existed.",
    realmId: 1,
    imageUrl: "/missions/bazaar.jpg",
    duration: 15, // minutes
    points: 50
  },
  {
    id: 102,
    title: "Value & Exchange",
    description: "Learn why some items became valuable while others didn't in early trading systems.",
    realmId: 1,
    imageUrl: "/missions/value.jpg",
    duration: 20,
    points: 75
  },
  {
    id: 103,
    title: "First Coins",
    description: "Discover how the first standardized coins transformed trade and commerce forever.",
    realmId: 1,
    imageUrl: "/missions/coins.jpg",
    duration: 15,
    points: 50
  },
  {
    id: 104,
    title: "Money & Culture",
    description: "Explore how monetary practices reflected cultural values and social structures.",
    realmId: 1,
    imageUrl: "/missions/culture.jpg",
    duration: 25,
    points: 100
  },
  
  // Realm 2: Realm of Systems Missions
  {
    id: 201,
    title: "Banks & Trust",
    description: "Explore how banks became the guardians of money and developed systems of trust.",
    realmId: 2,
    imageUrl: "/missions/banks.jpg",
    duration: 20,
    points: 75
  },
  {
    id: 202,
    title: "Paper Money",
    description: "Discover how paper currency revolutionized the portability and usability of money.",
    realmId: 2,
    imageUrl: "/missions/paper.jpg",
    duration: 15,
    points: 50
  },
  {
    id: 203,
    title: "Digital Dollars",
    description: "Follow the transition of money from physical to digital in modern banking systems.",
    realmId: 2,
    imageUrl: "/missions/digital.jpg",
    duration: 20,
    points: 75
  },
  {
    id: 204,
    title: "Central Authority",
    description: "Learn about central banks and how they control monetary policy and currency.",
    realmId: 2,
    imageUrl: "/missions/central.jpg",
    duration: 25,
    points: 100
  },
  
  // Realm 3: Realm of Crypto Missions
  {
    id: 301,
    title: "Cryptography Basics",
    description: "Understand the fundamentals of cryptography that power modern digital currencies.",
    realmId: 3,
    imageUrl: "/missions/crypto-basics.jpg",
    duration: 20,
    points: 75
  },
  {
    id: 302,
    title: "Blockchain 101",
    description: "Explore the revolutionary distributed ledger technology behind cryptocurrencies.",
    realmId: 3,
    imageUrl: "/missions/blockchain.jpg",
    duration: 25,
    points: 100
  },
  {
    id: 303,
    title: "Digital Wallets",
    description: "Learn how to securely store and manage digital assets with cryptocurrency wallets.",
    realmId: 3,
    imageUrl: "/missions/wallets.jpg",
    duration: 15,
    points: 50
  },
  {
    id: 304,
    title: "Crypto Economy",
    description: "Discover the emerging ecosystem of decentralized applications and services.",
    realmId: 3,
    imageUrl: "/missions/crypto-economy.jpg",
    duration: 20,
    points: 75
  },
  
  // Realm 4: Realm of Bitcoin Missions
  {
    id: 401,
    title: "Satoshi's Vision",
    description: "Uncover the origin story of Bitcoin and the mysterious creator behind it.",
    realmId: 4,
    imageUrl: "/missions/satoshi.jpg",
    duration: 15,
    points: 50
  },
  {
    id: 402,
    title: "Mining & Consensus",
    description: "Understand how Bitcoin mining secures the network through proof-of-work.",
    realmId: 4,
    imageUrl: "/missions/mining.jpg",
    duration: 25,
    points: 100
  },
  {
    id: 403,
    title: "Bitcoin Transactions",
    description: "Learn how Bitcoin transactions work and how they differ from traditional payments.",
    realmId: 4,
    imageUrl: "/missions/transactions.jpg",
    duration: 20,
    points: 75
  },
  {
    id: 404,
    title: "Bitcoin Economics",
    description: "Explore the economic principles that govern Bitcoin's supply and demand.",
    realmId: 4,
    imageUrl: "/missions/economics.jpg",
    duration: 20,
    points: 75
  },
  
  // Realm 5: Realm of Future Missions
  {
    id: 501,
    title: "Global Impact",
    description: "Examine how cryptocurrency is reshaping global finance and empowering communities.",
    realmId: 5,
    imageUrl: "/missions/global.jpg",
    duration: 25,
    points: 100
  },
  {
    id: 502,
    title: "Lightning Network",
    description: "Discover how layer-2 solutions are addressing Bitcoin's scalability challenges.",
    realmId: 5,
    imageUrl: "/missions/lightning.jpg",
    duration: 20,
    points: 75
  },
  {
    id: 503,
    title: "Decentralized Finance",
    description: "Explore the innovative world of DeFi and how it's reimagining financial services.",
    realmId: 5,
    imageUrl: "/missions/defi.jpg",
    duration: 25,
    points: 100
  },
  {
    id: 504,
    title: "Digital Future",
    description: "Glimpse into the future where digital currencies and traditional finance converge.",
    realmId: 5,
    imageUrl: "/missions/future.jpg",
    duration: 20,
    points: 75
  }
];