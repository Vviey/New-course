import { MissionContent, Question } from './realm1-missions';

export const realm3Missions: MissionContent[] = [
  {
    id: 1,
    title: "Cryptographic Foundations",
    subtitle: "Understanding Bitcoin's Building Blocks",
    description: "Explore the fundamental cryptographic concepts that make Bitcoin possible.",
    objectives: [
      "Learn about public key cryptography and digital signatures",
      "Understand how cryptographic primitives secure Bitcoin transactions",
      "Practice creating and verifying digital signatures"
    ],
    simulationType: "cryptography",
    simulationData: {
      challenges: [
        {
          id: 1,
          title: "Public Key Cryptography",
          description: "Generate key pairs and understand the relationship between public and private keys",
          interactive: true
        },
        {
          id: 2,
          title: "Digital Signatures",
          description: "Sign messages and verify signatures to understand Bitcoin transaction authorization",
          interactive: true
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Power of Hash Functions",
    subtitle: "Digital Fingerprints in Bitcoin",
    description: "Discover how hash functions create unique digital fingerprints and their role in Bitcoin's security.",
    objectives: [
      "Understand hash function properties",
      "Experience the avalanche effect",
      "Learn how Bitcoin uses SHA-256"
    ],
    simulationType: "hash",
    simulationData: {
      challenges: [
        {
          id: 1,
          title: "Hash Function Properties",
          description: "Experiment with hash functions to understand their key properties",
          interactive: true
        },
        {
          id: 2,
          title: "Mining Simulation",
          description: "Find valid hashes by adjusting the nonce value",
          interactive: true
        }
      ]
    }
  },
  {
    id: 3,
    title: "Merkle Trees",
    subtitle: "Efficient Transaction Verification",
    description: "Learn how Merkle trees enable efficient verification of Bitcoin transactions.",
    objectives: [
      "Build a Merkle tree from transaction data",
      "Generate and verify Merkle proofs",
      "Understand SPV (Simplified Payment Verification)"
    ],
    simulationType: "merkle",
    simulationData: {
      explanation: "A Merkle tree is a binary tree of hashes that allows efficient verification of data integrity",
      transactionData: [
        "tx1: Alice sends 1 BTC to Bob",
        "tx2: Charlie sends 0.5 BTC to Dave",
        "tx3: Eve sends 2 BTC to Frank",
        "tx4: Grace sends 1.5 BTC to Heidi"
      ]
    }
  },
  {
    id: 4,
    title: "Bitcoin's Network",
    subtitle: "Peer-to-Peer Architecture",
    description: "Explore how Bitcoin's peer-to-peer network maintains decentralization and security.",
    objectives: [
      "Understand Bitcoin's network topology",
      "Learn about node types and their roles",
      "Experience network message propagation"
    ],
    simulationType: "network",
    simulationData: {
      network: {
        nodes: 50,
        nodeTypes: {
          fullNodes: 35,
          miners: 10,
          lightClients: 5
        }
      }
    }
  },
  {
    id: 5,
    title: "Consensus Mechanisms",
    subtitle: "How Bitcoin Achieves Agreement",
    description: "Learn how Bitcoin nodes reach consensus about the state of the blockchain.",
    objectives: [
      "Understand Proof of Work consensus",
      "Experience chain selection rules",
      "Learn about network synchronization"
    ],
    simulationType: "consensus",
    simulationData: {
      scenarios: [
        {
          id: 1,
          title: "Chain Selection",
          description: "See how nodes handle competing chains and choose the valid one"
        },
        {
          id: 2,
          title: "Network Synchronization",
          description: "Watch how new nodes sync with the network"
        }
      ]
    }
  }
];