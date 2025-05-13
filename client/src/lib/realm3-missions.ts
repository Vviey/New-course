import { MissionContent, Question } from './realm1-missions';

// Types specific to Realm 3
export interface CodeChallenge {
  id: number;
  challenge: string;
  hint?: string;
  solution: string;
  explanation: string;
}

export interface Algorithm {
  id: number;
  name: string;
  description: string;
  visualRepresentation: string; // SVG or ASCII representation
  steps: string[];
}

export interface Merkle {
  data: string[];
  challenge: string;
  solution: {
    root: string;
    path: string[];
  };
  explanation: string;
}

export interface Network {
  nodes: {
    id: string;
    type: 'miner' | 'node' | 'user' | 'attacker';
    status: 'online' | 'offline' | 'compromised';
    connections: string[];
  }[];
  initialState: string;
  events: {
    name: string;
    description: string;
    affects: string[];
    outcome: string;
  }[];
}

export interface Cryptography {
  message: string;
  key: string;
  ciphertext: string;
  steps: string[];
  visualization: string;
}

// Main mission data for Realm 3
export const realm3Missions: MissionContent[] = [
  {
    id: 300,
    title: "Lightning Network",
    subtitle: "Enhanced privacy through Layer 2 solutions",
    description: "Learn how Bitcoin's Layer 2 solutions enhance privacy and transaction efficiency.",
    objectives: [
      "Understand how the Lightning Network functions as a second layer solution",
      "Explore how payment channels provide privacy benefits",
      "Experience the speed and low fees of Lightning payments"
    ],
    simulationType: "lightning-network",
    simulationData: {
      channelState: "open",
      balance: 100000,
      transactions: [
        { id: 1, type: "channel_open", amount: 100000, fee: 1000, time: "10:00 AM" },
        { id: 2, type: "payment", amount: 5000, fee: 1, time: "10:05 AM", recipient: "Coffee Shop" },
        { id: 3, type: "payment", amount: 10000, fee: 1, time: "10:15 AM", recipient: "Bookstore" }
      ]
    },
    reflectionQuestion: "How does the Lightning Network's approach to privacy differ from on-chain Bitcoin transactions?",
    content: `
      <div style="background-color: rgba(255, 127, 0, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #FF7F00; margin-top: 0; text-align: center;">The Lightning Network</h2>
        
        <p style="margin-bottom: 16px;">The Lightning Network is a "layer 2" payment protocol that operates on top of Bitcoin. It enables fast transactions between participating nodes and has been proposed as a solution to the bitcoin scalability problem.</p>
        
        <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; margin: 16px 0; text-align: center;">
          <p style="font-size: 18px; font-weight: bold; margin: 0; color: #FF9933;">Bitcoin's Layer 2 scaling solution for faster, cheaper, and more private transactions</p>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 127, 0, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #FF7F00; margin-top: 0;">Beyond the Base Layer</h2>
        
        <p style="margin-bottom: 16px;">While Bitcoin's base layer provides transparent, censorship-resistant transactions, the Lightning Network adds several important features:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(255, 127, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center;">
            <div style="font-size: 20px; margin-right: 12px;">⚡</div>
            <div><strong>Near-instant settlements</strong> - no 10-minute block times</div>
          </div>
          
          <div style="background-color: rgba(255, 127, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center;">
            <div style="font-size: 20px; margin-right: 12px;">💲</div>
            <div><strong>Extremely low transaction fees</strong> - often less than a penny</div>
          </div>
          
          <div style="background-color: rgba(255, 127, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center;">
            <div style="font-size: 20px; margin-right: 12px;">🔒</div>
            <div><strong>Improved privacy</strong> - only channel open/close transactions on-chain</div>
          </div>
          
          <div style="background-color: rgba(255, 127, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center;">
            <div style="font-size: 20px; margin-right: 12px;">🔍</div>
            <div><strong>Individual payments not publicly visible</strong> on the blockchain</div>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 127, 0, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #FF7F00; margin-top: 0; text-align: center;">How It Works</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #FF7F00;">
            <h3 style="color: #FF9933; margin-top: 0; font-size: 18px;">1. Opening Payment Channels</h3>
            <p style="margin-bottom: 0;">Two parties create an on-chain transaction that locks up some bitcoin, creating a payment channel between them</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #FF7F00;">
            <h3 style="color: #FF9933; margin-top: 0; font-size: 18px;">2. Multiple Transactions</h3>
            <p style="margin-bottom: 0;">Once a channel is open, the parties can conduct unlimited transactions between them without touching the blockchain</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #FF7F00;">
            <h3 style="color: #FF9933; margin-top: 0; font-size: 18px;">3. Routing Payments</h3>
            <p style="margin-bottom: 0;">Payments can be routed through multiple connected channels, allowing you to pay someone you don't have a direct channel with</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #FF7F00;">
            <h3 style="color: #FF9933; margin-top: 0; font-size: 18px;">4. Closing Channels</h3>
            <p style="margin-bottom: 0;">When finished, either party can close the channel, settling the final balances to the blockchain</p>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 127, 0, 0.07); border-radius: 8px; padding: 20px;">
        <h2 style="color: #FF7F00; margin-top: 0;">Privacy Innovations</h2>
        
        <p style="margin-bottom: 16px;">The Lightning Network introduces several privacy enhancements over regular Bitcoin transactions:</p>
        
        <ul style="margin-bottom: 0; padding-left: 20px;">
          <li><strong>Payment channels</strong> mask transaction details from the public blockchain</li>
          <li><strong>Onion routing</strong> ensures intermediary nodes can't determine payment source or destination</li>
          <li><strong>Atomic swaps</strong> enable cross-chain trading without centralized exchanges</li>
          <li><strong>Evolving standards</strong> continuously improve privacy protections</li>
        </ul>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px; text-align: center;">
          <p style="margin: 0; font-style: italic;">Layers of technology built on sound money foundations can create systems that are both efficient and privacy-preserving</p>
        </div>
      </div>
    `,
    questions: [
      {
        question: "What is the main advantage of the Lightning Network over the Bitcoin base layer?",
        options: [
          "It allows mining without specialized equipment",
          "It enables near-instant transactions with low fees",
          "It creates new bitcoins at a faster rate",
          "It removes the need for private keys"
        ],
        correctIndex: 1
      },
      {
        question: "How does the Lightning Network improve transaction privacy?",
        options: [
          "It encrypts all blockchain transactions",
          "It makes all user identities anonymous",
          "Only channel opening/closing is recorded on the blockchain, not individual payments",
          "It erases transaction history after 24 hours"
        ],
        correctIndex: 2
      }
    ]
  },
  {
    id: 301,
    title: "The Glowing Path",
    subtitle: "Understand the fundamentals of cryptography",
    description: "In the bioluminescent forest, patterns of light create secure messages. Learn how cryptography protects Bitcoin transactions through a series of code-breaking challenges.",
    objectives: [
      "Decrypt three encoded messages using different techniques",
      "Understand the importance of key security",
      "Visualize how cryptographic signatures work in Bitcoin"
    ],
    simulationType: 'cryptography',
    simulationData: {
      challenges: [
        {
          id: 1,
          title: "Simple Substitution",
          description: "Decode this message using pattern recognition.",
          ciphertext: "GUVF VF BAYL GUR ORTVAAVAT BS LBHE WBHEARL",
          hint: "Each letter is shifted by 13 places in the alphabet.",
          solution: "THIS IS ONLY THE BEGINNING OF YOUR JOURNEY",
          explanation: "This is a ROT13 cipher, one of the simplest encryption techniques. Each letter is replaced by the letter 13 positions after it in the alphabet."
        },
        {
          id: 2,
          title: "The Private Key",
          description: "Use the provided key to decrypt the message.",
          ciphertext: "8f7d56a92c3b1e4d",
          key: "b10c6542",
          solution: "3e7b32fd",
          explanation: "This simulates a XOR operation, which is used in many encryption algorithms. The XOR (exclusive OR) operation is used in cryptography because it's easy to apply but difficult to reverse without the key."
        },
        {
          id: 3,
          title: "Digital Signatures",
          description: "Verify if the message was signed by the correct private key.",
          message: "Send 5 BTC to Alice",
          signature: "304402201c1ee66e7c996e0a6e9a782fc1d442d40658816310c332a06d6b79670a56f42a02204147daf7372914e9d99b73db350a5076b6e82814cb5506eefb4d4f2138545e4c",
          publicKey: "02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc",
          isValid: true,
          explanation: "Digital signatures in Bitcoin use Elliptic Curve Cryptography. When you make a transaction, you sign it with your private key. Anyone can verify it was you using your public key, but they can't create a signature without your private key."
        }
      ],
      visualExplanations: [
        {
          id: 1,
          title: "Symmetric vs Asymmetric Encryption",
          description: "In symmetric encryption, the same key is used for encryption and decryption. In asymmetric encryption, there are two keys: a public key for encryption and a private key for decryption.",
          svgPath: "/assets/symmetric-vs-asymmetric.svg"
        },
        {
          id: 2,
          title: "How Bitcoin Uses Cryptography",
          description: "Bitcoin uses public key cryptography to secure transactions. Your private key creates signatures that can be verified with your public key, proving you authorized a transaction without revealing the private key.",
          svgPath: "/assets/bitcoin-cryptography.svg"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Forest of Hash Functions",
    subtitle: "Explore Bitcoin's fundamental security mechanism",
    description: "Deep within the bioluminescent forest lies the secret of hash functions - the building blocks of Bitcoin's security. Navigate through luminous trees to understand how cryptographic hashes maintain the integrity of the blockchain.",
    objectives: [
      "Understand how hash functions work",
      "Visualize collision resistance and the avalanche effect",
      "Generate SHA-256 hashes with small input changes"
    ],
    simulationType: 'hash',
    simulationData: {
      challenges: [
        {
          id: 1,
          title: "The One-Way Path",
          description: "A hash function is a one-way cryptographic function that maps data of any size to a fixed-size output. Try changing the input to see how the output changes drastically.",
          examples: [
            {
              input: "Hello, Bitcoin!",
              hash: "0x5c969a44347d68a5f4bda129c296d8d656e65de58eb6964e9055e9a0576eb885"
            },
            {
              input: "Hello, bitcoin!",
              hash: "0x9dfdf9c909b9d3178cf09551ec8fdfb6dd7fd79aa82625d01646b08e7b476311"
            }
          ]
        },
        {
          id: 2,
          title: "Avalanche Effect",
          description: "Even a tiny change in the input creates a completely different hash output - this is called the avalanche effect.",
          interactive: true,
          defaultInput: "Satoshi Nakamoto",
          previousHash: "",
          currentHash: ""
        },
        {
          id: 3,
          title: "Mining Simulation",
          description: "Miners try to find a hash that starts with a certain number of zeros by changing a nonce value. This is called proof of work.",
          blockData: {
            previousBlockHash: "0000000000000000000512a2a0c9bc71dd1990aed08c4b6a88bae4eee3e3fc44",
            merkleRoot: "2cb21783d4d5e5e3d7364498671ab6843651f28867107675e44237ce4554ebcf",
            difficulty: 3, // number of leading zeros required
            timestamp: 1713673483
          }
        }
      ],
      visualizations: [
        {
          id: 1,
          title: "Visualization of SHA-256",
          description: "SHA-256 processes input data in blocks and goes through 64 rounds of transformation to produce the final hash.",
          animation: true
        },
        {
          id: 2,
          title: "Hash Function Properties",
          properties: [
            {
              name: "Deterministic",
              description: "The same input always produces the same output hash."
            },
            {
              name: "Fast to compute",
              description: "Calculating the hash is computationally efficient."
            },
            {
              name: "Collision resistant",
              description: "It's computationally infeasible to find two different inputs that produce the same hash."
            },
            {
              name: "Avalanche effect",
              description: "A small change in input results in a completely different hash."
            },
            {
              name: "Preimage resistance",
              description: "Given an output hash, it's computationally infeasible to find the input."
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Merkle's Canopy",
    subtitle: "The efficiency of data verification",
    description: "Beneath the canopy of the bioluminescent forest lies an elegant structure - the Merkle tree. Explore how Bitcoin efficiently verifies transactions without needing the entire blockchain.",
    objectives: [
      "Understand what a Merkle tree is and how it works",
      "Build a Merkle tree from transaction data",
      "Verify transactions using Merkle proofs"
    ],
    simulationType: 'merkle',
    simulationData: {
      explanation: "A Merkle tree is a binary tree of hashes, where leaf nodes contain transaction hashes and non-leaf nodes contain the hash of their child nodes. The root hash can verify any transaction with a small proof.",
      transactionData: [
        "tx1: Alice sends 1 BTC to Bob",
        "tx2: Charlie sends 0.5 BTC to Dave",
        "tx3: Eve sends 3 BTC to Frank",
        "tx4: Grace sends 2 BTC to Heidi"
      ],
      challenges: [
        {
          id: 1,
          title: "Build the Tree",
          description: "Construct a Merkle tree from these transactions by hashing pairs until you reach the root.",
          verifyTx: "tx3: Eve sends 3 BTC to Frank",
          solution: {
            root: "Root Hash",
            path: ["tx3 hash", "Hash(tx4)", "Hash(Hash(tx1)+Hash(tx2))"]
          }
        },
        {
          id: 2,
          title: "Verify a Transaction",
          description: "Given a Merkle root and a path, verify if a transaction is included in the block without seeing all transactions.",
          merkleRoot: "1817d58bc72944e1b7319b480fffef2e1eb7a4ee731f0e6a75f8137d40b9cf9d",
          proof: {
            txIndex: 2,
            siblings: ["hash1", "hash2", "hash3"],
            direction: "right-left-right"
          }
        },
        {
          id: 3,
          title: "Spot the Invalid Proof",
          description: "One of these Merkle proofs is invalid. Can you identify it?",
          proofs: [
            {
              description: "Proof A for transaction tx2",
              path: ["hash1", "hash2"],
              direction: "left-right",
              valid: true
            },
            {
              description: "Proof B for transaction tx4",
              path: ["hash3", "hash4"],
              direction: "right-left",
              valid: false
            },
            {
              description: "Proof C for transaction tx1",
              path: ["hash5", "hash6"],
              direction: "left-left",
              valid: true
            }
          ]
        }
      ],
      visualization: {
        type: "interactive-tree",
        levels: 3,
        highlight: "path-verification"
      }
    }
  },
  {
    id: 4,
    title: "Consensus Grove",
    subtitle: "How the network agrees on truth",
    description: "In the heart of the bioluminescent forest, diverse trees must reach consensus on which growth patterns to follow. Similarly, Bitcoin nodes must agree on the state of the blockchain without a central authority.",
    objectives: [
      "Understand the Byzantine Generals Problem",
      "Experience how Proof of Work creates consensus",
      "Visualize network propagation and chain splits"
    ],
    simulationType: 'consensus',
    simulationData: {
      scenarios: [
        {
          id: 1,
          title: "Byzantine Generals Problem",
          description: "Several generals must agree on a battle plan, but some might be traitors. How can the loyal generals reach consensus?",
          interactive: true,
          generals: 9,
          traitors: 2
        },
        {
          id: 2,
          title: "Nakamoto Consensus",
          description: "Bitcoin solves the Byzantine Generals Problem with Proof of Work. Miners compete to create the next block, and the longest chain wins.",
          simulation: {
            miners: 5,
            blockTime: 10, // minutes
            difficulty: "variable",
            chainSplitProbability: 0.15
          }
        },
        {
          id: 3,
          title: "Chain Reorganization",
          description: "Sometimes miners find competing blocks at nearly the same time, creating a temporary fork. The network eventually reconciles by following the longest chain.",
          visualization: {
            type: "chain-fork",
            initialBlocks: 5,
            forkAtBlock: 6,
            forkLength: 2,
            mainChainContinuation: 3
          }
        }
      ],
      quizQuestions: [
        {
          id: 1,
          question: "What happens if two miners find a valid block at the same time?",
          options: [
            "The network immediately rejects one of them",
            "Both blocks are temporarily accepted, creating a fork until one chain becomes longer",
            "The block with more transactions wins",
            "Miners vote on which block to keep"
          ],
          correctIndex: 1,
          explanation: "When two miners find valid blocks at nearly the same time, a temporary fork occurs. Some nodes see one block first, others see the alternative. This fork resolves when one chain becomes longer, as all nodes switch to the longest valid chain."
        },
        {
          id: 2,
          question: "What primarily secures the Bitcoin network against attacks?",
          options: [
            "Government regulation",
            "Cryptographic encryption",
            "The high cost of attacking (mining power)",
            "The large number of users"
          ],
          correctIndex: 2,
          explanation: "Proof of Work makes attacks economically unfeasible because an attacker would need to control over 51% of the network's mining power (hash rate), which would be extremely expensive."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Forest Network Resilience",
    subtitle: "Understanding Bitcoin's decentralized architecture",
    description: "Just as the forest's ecosystem maintains balance through its interconnected web of roots, Bitcoin's peer-to-peer network ensures resilience against attacks and censorship.",
    objectives: [
      "Visualize Bitcoin's network topology",
      "Understand how messages propagate through the network",
      "Test network resilience against different attack scenarios"
    ],
    simulationType: 'network',
    simulationData: {
      network: {
        nodes: 50,
        connections: "random", // Each node connects to random peers
        nodeTypes: {
          fullNodes: 35,
          miners: 10,
          lightClients: 5
        }
      },
      scenarios: [
        {
          id: 1,
          title: "Transaction Propagation",
          description: "Watch how a transaction spreads through the network from a single node.",
          visualization: true,
          propagationDelay: {
            perConnection: "100-300ms",
            perNode: "50-150ms"
          }
        },
        {
          id: 2,
          title: "Eclipse Attack Simulation",
          description: "An eclipse attack attempts to isolate a node from honest peers, showing it a manipulated view of the blockchain.",
          attacker: {
            targetNode: "random",
            controlledConnections: 8,
            strategy: "block_honest_peers"
          },
          defenses: ["random_peer_selection", "peer_rotation", "outbound_connection_minimum"]
        },
        {
          id: 3,
          title: "Sybil Attack Resistance",
          description: "A Sybil attack occurs when an attacker creates many fake identities to gain influence. Bitcoin's Proof of Work makes this ineffective.",
          simulation: {
            attackerNodes: 100,
            attackerHashPower: "5%",
            outcome: "minimal_impact"
          },
          explanation: "In Bitcoin, network influence comes from computing power, not the number of nodes. Creating many fake nodes doesn't help an attacker gain control of the network."
        }
      ],
      interactiveTests: [
        {
          id: 1,
          title: "Node Disruption Test",
          description: "Select nodes to take offline and watch how the network adapts.",
          interactive: true
        },
        {
          id: 2,
          title: "Geographic Censorship",
          description: "Simulate what happens when a country blocks Bitcoin within its borders.",
          regions: ["North America", "Europe", "Asia", "South America", "Africa", "Australia"],
          blockRegion: "selectable"
        }
      ]
    }
  },
  {
    id: 6,
    title: "The Scripting Vines",
    subtitle: "Exploring Bitcoin's programming language",
    description: "Winding through the forest are programmable vines representing Bitcoin's scripting language. Learn how Bitcoin's transactions are actually small programs that determine how funds can be spent.",
    objectives: [
      "Understand Bitcoin Script basics",
      "Build simple locking and unlocking scripts",
      "Create advanced spending conditions"
    ],
    simulationType: 'code',
    simulationData: {
      explanation: "Bitcoin transactions use a programming language called Script. It's simple but powerful, allowing for various conditions to control how coins can be spent.",
      basics: [
        {
          name: "Stack-based",
          description: "Bitcoin Script is a stack-based language where operations manipulate data on a stack."
        },
        {
          name: "Purposefully limited",
          description: "Script doesn't have loops to prevent infinite loops, making it predictable and secure."
        },
        {
          name: "Two script parts",
          description: "Each transaction involves a locking script (scriptPubKey) that sets spending conditions and an unlocking script (scriptSig) that satisfies those conditions."
        }
      ],
      challenges: [
        {
          id: 1,
          title: "Standard Pay-to-Public-Key-Hash",
          description: "The most common transaction type requires a digital signature from the recipient's private key.",
          lockingScript: "OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG",
          unlockingScript: "<signature> <pubKey>",
          visualized: true
        },
        {
          id: 2,
          title: "Timelock: Future Spending",
          description: "Create a script that can only be spent after a certain block height.",
          challenge: "Lock 0.1 BTC until block 780000",
          solution: {
            lockingScript: "<780000> OP_CHECKLOCKTIMEVERIFY OP_DROP OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG",
            unlockingScript: "<signature> <pubKey>"
          }
        },
        {
          id: 3,
          title: "Multi-signature Vault",
          description: "Create a 2-of-3 multisig wallet requiring signatures from any 2 of 3 possible keys.",
          challenge: "Require any 2 of 3 signatures from Alice, Bob, and Charlie",
          solution: {
            lockingScript: "OP_2 <alicePubKey> <bobPubKey> <charliePubKey> OP_3 OP_CHECKMULTISIG",
            unlockingScript: "OP_0 <signatureA> <signatureC>"
          }
        }
      ],
      advanced: [
        {
          id: 1,
          title: "Puzzle Contract",
          description: "Create a transaction that can only be spent by someone who knows the solution to a mathematical puzzle.",
          challenge: "Find x where hash(x) = target",
          lockingScript: "OP_SHA256 <targetHash> OP_EQUAL",
          unlockingScript: "<solution>"
        },
        {
          id: 2,
          title: "Hash Time-Locked Contract (HTLC)",
          description: "Create the building block of the Lightning Network, allowing cross-chain atomic swaps.",
          explanation: "HTLCs enable transactions that expire after a time period unless the recipient can provide a secret preimage to a hash."
        }
      ]
    }
  },
  {
    id: 7,
    title: "Lightning Strikes the Canopy",
    subtitle: "Scaling Bitcoin with the Lightning Network",
    description: "Above the forest canopy, lightning creates a network of bright pathways that enable instant transactions. Explore how the Lightning Network creates a second layer on top of Bitcoin for fast, cheap transactions.",
    objectives: [
      "Understand the need for scaling solutions",
      "Create payment channels with other participants",
      "Route payments through a network of channels"
    ],
    simulationType: 'lightning-network',
    simulationData: {
      explanation: "The Lightning Network is a 'second layer' payment protocol that operates on top of Bitcoin. It enables fast transactions between participating nodes.",
      scaling: {
        problem: "Bitcoin's blockchain can process only about 7 transactions per second, making it too slow for everyday payments.",
        solution: "The Lightning Network allows millions of transactions to occur off-chain, with only the final balances settled on the Bitcoin blockchain."
      },
      interactive: {
        participants: [
          {
            name: "You",
            startingBalance: 1.0,
            role: "player"
          },
          {
            name: "Coffee Shop",
            startingBalance: 0.5,
            role: "merchant"
          },
          {
            name: "Alice",
            startingBalance: 1.2,
            role: "peer"
          },
          {
            name: "Bob",
            startingBalance: 0.8,
            role: "peer"
          },
          {
            name: "Charlie",
            startingBalance: 1.5,
            role: "peer"
          }
        ],
        tasks: [
          {
            id: 1,
            title: "Open a Channel",
            description: "Create a payment channel with the Coffee Shop by locking 0.2 BTC in a multisig address.",
            success: "Channel opened successfully! The on-chain transaction fee was 0.00001 BTC."
          },
          {
            id: 2,
            title: "Make Direct Payments",
            description: "Buy 5 coffees over time without creating on-chain transactions.",
            payments: [
              { amount: 0.001, description: "Espresso" },
              { amount: 0.0015, description: "Cappuccino" },
              { amount: 0.002, description: "Latte" },
              { amount: 0.0012, description: "Americano" },
              { amount: 0.0018, description: "Mocha" }
            ]
          },
          {
            id: 3,
            title: "Route a Payment",
            description: "Pay a new merchant without a direct channel by routing through mutual connections.",
            scenario: "You want to pay 0.003 BTC to a Bookstore, but you don't have a direct channel. Find a route through your network."
          }
        ],
        network: {
          type: "interactive",
          nodes: 8,
          channels: 12,
          visualization: "force-directed-graph"
        }
      },
      concepts: [
        {
          name: "Payment Channels",
          description: "Two parties lock funds in a multisig address and update transaction states off-chain."
        },
        {
          name: "Routing",
          description: "Payments can be routed through multiple channels to reach destinations without direct connections."
        },
        {
          name: "Hash Time-Locked Contracts",
          description: "These ensure payments are atomic across multiple hops - they either complete fully or not at all."
        },
        {
          name: "Watchtowers",
          description: "Third-party services that monitor channels for fraud when users are offline."
        }
      ]
    }
  }
];