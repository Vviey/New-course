
import { MissionContent } from './realm1-missions';

export const realm3Missions: MissionContent[] = [
  {
    id: 1,
    title: "Cryptographic Foundations",
    subtitle: "Understanding Bitcoin's Essential Security Building Blocks",
    description: "Dive deep into the fundamental cryptographic concepts that make Bitcoin's security possible. Learn how modern cryptography enables digital ownership, secure transactions, and trustless verification.",
    objectives: [
      "Master the principles of public key cryptography and digital signatures",
      "Understand how cryptographic primitives secure Bitcoin transactions",
      "Practice creating and verifying digital signatures",
      "Learn about private key security and backup strategies",
      "Explore real-world applications of cryptography in Bitcoin transactions"
    ],
    simulationType: "cryptography",
    simulationData: {
      lessonContent: {
        intro: "Cryptography is the foundation of Bitcoin's security model. Without strong cryptography, digital scarcity and ownership would be impossible.",
        keyPoints: [
          {
            title: "Public Key Cryptography",
            content: "Also known as asymmetric cryptography, this system uses key pairs - a private key for signing and a mathematically related public key for verification. In Bitcoin, your private key is like your digital signature stamp, while your public key is like your public Bitcoin address that others can send funds to."
          },
          {
            title: "Digital Signatures",
            content: "Digital signatures prove ownership of bitcoins by demonstrating control of private keys. Every Bitcoin transaction requires valid signatures, creating an unbreakable chain of digital ownership."
          },
          {
            title: "Key Security",
            content: "Private keys must be kept secure and backed up, as they represent direct control over your bitcoins. We'll explore best practices for key management and common pitfalls to avoid."
          }
        ]
      },
      challenges: [
        {
          id: 1,
          title: "Key Pair Generation",
          description: "Generate your first public-private key pair and understand the mathematical relationship between them",
          interactive: true,
          steps: [
            "Generate a new private key",
            "Derive the corresponding public key",
            "Create a Bitcoin address from the public key",
            "Verify the relationship between keys"
          ]
        },
        {
          id: 2,
          title: "Transaction Signing",
          description: "Sign messages and verify signatures to understand Bitcoin transaction authorization",
          interactive: true,
          exercises: [
            "Create a digital signature for a sample transaction",
            "Verify signatures using public keys",
            "Identify invalid signatures",
            "Practice with multiple key pairs"
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Power of Hash Functions",
    subtitle: "Creating Unique Digital Fingerprints",
    description: "Explore how cryptographic hash functions create tamper-evident digital fingerprints, securing Bitcoin's blockchain and mining process. Learn why hash functions are called the 'digital fingerprints' of the cryptocurrency world.",
    objectives: [
      "Master the core properties of cryptographic hash functions",
      "Experience the avalanche effect in action",
      "Understand how Bitcoin uses SHA-256 for mining and transaction IDs",
      "Learn about merkle trees and blockchain structure",
      "Practice solving basic proof-of-work challenges"
    ],
    simulationType: "hash",
    simulationData: {
      lessonContent: {
        intro: "Hash functions are one-way mathematical functions that turn any input into a fixed-size output. They are crucial for Bitcoin's security and mining process.",
        properties: [
          {
            name: "Deterministic",
            explanation: "The same input always produces the same hash output"
          },
          {
            name: "Quick Computation",
            explanation: "It's fast to calculate the hash of any input"
          },
          {
            name: "Avalanche Effect",
            explanation: "Small input changes create completely different hash outputs"
          },
          {
            name: "Pre-image Resistance",
            explanation: "It's practically impossible to find the input from just the hash output"
          },
          {
            name: "Collision Resistance",
            explanation: "It's extremely difficult to find two different inputs that produce the same hash"
          }
        ]
      },
      challenges: [
        {
          id: 1,
          title: "Hash Function Properties",
          description: "Interactive experiments demonstrating key hash function properties",
          interactive: true,
          exercises: [
            "Test deterministic outputs",
            "Observe the avalanche effect",
            "Attempt to find collisions",
            "Verify pre-image resistance"
          ]
        },
        {
          id: 2,
          title: "Mining Simulation",
          description: "Experience Bitcoin mining by finding valid block hashes",
          interactive: true,
          difficulty: "adjustable",
          objectives: [
            "Understand difficulty targets",
            "Find nonce values",
            "Calculate hash rates",
            "Experience difficulty adjustment"
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Merkle Trees",
    subtitle: "Efficient and Secure Transaction Verification",
    description: "Master how Merkle trees enable efficient verification of Bitcoin transactions while maintaining security. Discover why this data structure is essential for light clients and scaling Bitcoin.",
    objectives: [
      "Understand Merkle tree structure and benefits",
      "Learn to construct Merkle trees from transaction data",
      "Practice generating and verifying Merkle proofs",
      "Explore Simplified Payment Verification (SPV)",
      "Understand how Merkle trees enable light clients"
    ],
    simulationType: "merkle",
    simulationData: {
      explanation: "Merkle trees are binary hash trees that allow efficient and secure verification of block contents. They are fundamental to Bitcoin's scalability.",
      concepts: [
        {
          title: "Tree Structure",
          content: "Transactions are paired, hashed together repeatedly until reaching a single root hash"
        },
        {
          title: "Merkle Proofs",
          content: "Prove transaction inclusion without downloading entire blocks"
        },
        {
          title: "SPV Clients",
          content: "Enable lightweight Bitcoin wallets that don't store the full blockchain"
        }
      ],
      transactionData: [
        "tx1: Alice sends 1 BTC to Bob",
        "tx2: Charlie sends 0.5 BTC to Dave",
        "tx3: Eve sends 2 BTC to Frank",
        "tx4: Grace sends 1.5 BTC to Heidi"
      ],
      exercises: [
        {
          type: "tree_construction",
          description: "Build a Merkle tree from sample transactions"
        },
        {
          type: "proof_verification",
          description: "Verify transaction inclusion using Merkle proofs"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Bitcoin's Network Architecture",
    subtitle: "Understanding the Peer-to-Peer Backbone",
    description: "Explore the sophisticated peer-to-peer network that powers Bitcoin's global operation. Learn how nodes communicate, propagate transactions, and maintain decentralization.",
    objectives: [
      "Master Bitcoin's network topology and node types",
      "Understand peer discovery and connection management",
      "Learn about transaction and block propagation",
      "Experience network message types and protocols",
      "Analyze network security and attack resistance"
    ],
    simulationType: "network",
    simulationData: {
      network: {
        nodes: 50,
        nodeTypes: {
          fullNodes: 35,
          miners: 10,
          lightClients: 5
        },
        concepts: [
          {
            title: "Node Types",
            description: "Full nodes validate everything, miners create blocks, light clients trust but verify"
          },
          {
            title: "Peer Discovery",
            description: "DNS seeds, hardcoded addresses, and peer sharing maintain network connectivity"
          },
          {
            title: "Message Types",
            description: "inv, getdata, tx, block, and other protocol messages coordinate the network"
          }
        ]
      },
      exercises: [
        {
          type: "network_simulation",
          description: "Watch transaction propagation through the network"
        },
        {
          type: "attack_simulation",
          description: "Observe network resistance to common attacks"
        }
      ]
    }
  },
  {
    id: 5,
    title: "Consensus Mechanisms",
    subtitle: "Bitcoin's Heartbeat of Agreement",
    description: "Dive deep into how Bitcoin nodes reach and maintain consensus about the state of the blockchain. Understand the elegance of Proof of Work and the economic incentives that secure the network.",
    objectives: [
      "Master Proof of Work consensus mechanics",
      "Understand blockchain reorganization rules",
      "Learn about difficulty adjustment",
      "Experience chain selection rules in action",
      "Analyze network synchronization processes"
    ],
    simulationType: "consensus",
    simulationData: {
      concepts: [
        {
          title: "Proof of Work",
          content: "Mining process that secures the blockchain through computational work"
        },
        {
          title: "Difficulty Adjustment",
          content: "Automatic calibration of mining difficulty every 2016 blocks"
        },
        {
          title: "Chain Selection",
          content: "Rules for choosing between competing chain versions"
        }
      ],
      scenarios: [
        {
          id: 1,
          title: "Chain Selection",
          description: "Interactive simulation of how nodes handle competing chains",
          exercises: [
            "Compare chain work",
            "Handle chain splits",
            "Resolve orphan blocks"
          ]
        },
        {
          id: 2,
          title: "Network Synchronization",
          description: "Watch how new nodes download and verify the blockchain",
          steps: [
            "Initial block download",
            "Header synchronization",
            "Block verification",
            "UTXO set construction"
          ]
        }
      ]
    }
  }
];
