import { MissionContent } from './realm1-missions';

// Types specific to Realm 4
export interface MiningPuzzle {
  id: number;
  difficulty: number;
  blockComponents: string[];
  correctOrder: number[];
  explanation: string;
}

export interface ValidationChallenge {
  id: number;
  transactions: {
    id: string;
    sender: string;
    receiver: string;
    amount: number;
    timestamp: number;
    isDoubleSpend: boolean;
    explanation?: string;
  }[];
}

export interface EnergySource {
  id: number;
  name: string;
  type: 'hydro' | 'solar' | 'wind' | 'gas' | 'coal' | 'nuclear' | 'geothermal';
  costPerKWh: number;
  carbonIntensity: number; // CO2 per kWh
  reliability: number; // 0-100%
  location: string;
  description: string;
}

export interface MiningOperation {
  id: number;
  name: string;
  hashRate: number; // TH/s
  powerConsumption: number; // kW
  initialCost: number;
  maintenanceCost: number;
  optimalEnergySource: 'hydro' | 'solar' | 'wind' | 'gas' | 'coal' | 'nuclear' | 'geothermal';
}

export interface AfricanEnergyResource {
  id: number;
  country: string;
  resourceType: 'hydro' | 'solar' | 'wind' | 'gas' | 'geothermal';
  capacity: number; // MW
  utilizationRate: number; // 0-100%
  potentialJobs: number;
  investmentRequired: number; // USD
  description: string;
}

export interface MiningSimulationParams {
  initialBudget: number;
  electricityCosts: {
    [key: string]: number;
  };
  hardwareOptions: {
    id: number;
    name: string;
    hashRate: number;
    powerConsumption: number;
    cost: number;
    lifespan: number;
  }[];
  difficultyAdjustment: number[];
  bitcoinPriceMovements: number[];
  events: {
    name: string;
    round: number;
    effect: string;
    impact: {
      type: 'cost' | 'hashrate' | 'price' | 'difficulty';
      value: number;
    };
  }[];
}

export interface HalvingSimulationParams {
  initialReward: number;
  halvingPeriods: {
    blocksRemaining: number;
    rewardPerBlock: number;
    difficulty: number;
    avgFees: number;
    bitcoinPrice: number;
  }[];
  hashPowerCost: number;
  events: {
    period: number;
    name: string;
    description: string;
    effect: {
      type: 'hashrate' | 'price' | 'fees';
      modifier: number;
    };
  }[];
}

// Main mission data for Realm 4
export const realm4Missions: MissionContent[] = [
  {
    id: 401,
    title: "The Power of the Puzzle",
    subtitle: "How Bitcoin Mining Works",
    description: "Delve into the heart of Bitcoin mining, where powerful computers solve complex mathematical puzzles to create new blocks and secure the network. Explore the mechanics of hashing, block creation, and the difficulty adjustment that keeps Bitcoin's heartbeat steady at approximately one block every 10 minutes.",
    objectives: [
      "Understand the basics of Bitcoin mining and hashing",
      "Learn how blocks are created and linked together",
      "Discover the purpose of the difficulty adjustment mechanism",
      "Experience the mining process through interactive challenges"
    ],
    simulationType: 'miningBasics',
    simulationData: {
      explanation: "Bitcoin mining is the process of adding new transactions to the blockchain by solving a computational puzzle. Miners compete to find a specific number (nonce) that, when combined with the block data and hashed, produces a result with a certain number of leading zeros. This proof-of-work system ensures that the blockchain cannot be easily modified.",
      
      miningPuzzles: [
        {
          id: 1,
          difficulty: 1,
          blockComponents: [
            "Previous Block Hash",
            "Merkle Root (Transaction Data)",
            "Timestamp",
            "Difficulty Target",
            "Nonce"
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: "A Bitcoin block consists of these key components. The nonce is what miners are trying to find - a value that, when combined with the other components and hashed, produces a valid block hash."
        }
      ],
      
      hashingSimulation: {
        defaultData: "Block #789456",
        targetZeros: 2,
        maxAttempts: 25,
        visualizationSpeed: "medium"
      },
      
      difficultyAdjustment: {
        explanation: "Bitcoin automatically adjusts its mining difficulty every 2016 blocks (roughly two weeks) to maintain an average block time of 10 minutes. If blocks are being found too quickly, difficulty increases. If too slowly, difficulty decreases.",
        simulationParams: {
          startingDifficulty: 1,
          targetBlockTime: 10, // minutes
          hashrateTrend: [1, 1.2, 1.5, 2, 2.1, 2.3, 2.5], // relative hashrate changes
          resultingBlockTimes: [], // filled in by simulation
          resultingDifficulty: [] // filled in by simulation
        }
      },
      
      quizQuestions: [
        {
          id: 1,
          question: "What is hashing in Bitcoin mining?",
          options: [
            "A way to store Bitcoin in hardware wallets",
            "The process of cracking other miners' passwords",
            "Converting data into a fixed-size string of characters through a mathematical function",
            "The method of breaking down mining rewards among pool participants"
          ],
          correctIndex: 2,
          explanation: "Hashing is a one-way cryptographic function that converts data of any size into a fixed-size output. In Bitcoin, the SHA-256 hash function is used to create a unique 'fingerprint' of block data."
        },
        {
          id: 2,
          question: "How does Bitcoin's difficulty adjustment work?",
          options: [
            "Miners vote on the appropriate difficulty level",
            "The network automatically adjusts difficulty every 2016 blocks to maintain a 10-minute block time",
            "Bitcoin core developers manually adjust difficulty as needed",
            "The difficulty increases by a fixed percentage each month"
          ],
          correctIndex: 1,
          explanation: "Bitcoin's protocol automatically adjusts the mining difficulty every 2016 blocks (approximately two weeks) to maintain an average block time of 10 minutes, regardless of how much mining power is on the network."
        },
        {
          id: 3,
          question: "Why is decentralization important in Bitcoin mining?",
          options: [
            "It makes mining more profitable for individual miners",
            "It allows Bitcoin's rules to be changed more easily",
            "It ensures no single entity can control the network or reverse transactions",
            "It's not important; centralized mining would be more efficient"
          ],
          correctIndex: 2,
          explanation: "Decentralization in mining ensures that no single entity can control the network, alter the rules, or reverse transactions. This trustless security model is fundamental to Bitcoin's value proposition."
        },
        {
          id: 4,
          question: "What are the rewards for Bitcoin miners?",
          options: [
            "Fixed salary paid by the Bitcoin Foundation",
            "Newly created bitcoins (block subsidy) plus transaction fees",
            "Interest on bitcoins they already own",
            "Donations from Bitcoin users"
          ],
          correctIndex: 1,
          explanation: "Miners are rewarded with newly created bitcoins (the block subsidy, which halves approximately every four years) plus any transaction fees included in the block they mine."
        },
        {
          id: 5,
          question: "What is the significance of block creation in Bitcoin?",
          options: [
            "It's purely ceremonial and has no practical purpose",
            "It creates new bitcoins but doesn't affect security",
            "It only processes transactions without creating new bitcoins",
            "It secures the network by confirming transactions and adding them to the immutable blockchain"
          ],
          correctIndex: 3,
          explanation: "Block creation is the core process that secures the Bitcoin network. By confirming transactions and adding them to the blockchain in a way that's extremely difficult to alter, miners provide the security and immutability that gives Bitcoin its value."
        }
      ]
    }
  },
  {
    id: 402,
    title: "The Role of Miners",
    subtitle: "Security Through Consensus",
    description: "Explore how miners safeguard the Bitcoin network through distributed consensus. Learn about the critical role miners play in validating transactions, preventing double-spending, and maintaining the integrity of the blockchain through the longest chain rule.",
    objectives: [
      "Understand the role of miners in securing the Bitcoin network",
      "Learn how consensus is achieved through the longest chain rule",
      "Discover how double spending attacks are prevented",
      "Distinguish between different types of nodes in the network"
    ],
    simulationType: 'miningConsensus',
    simulationData: {
      explanation: "Miners serve as the security force of the Bitcoin network. By competing to solve computational puzzles, they validate transactions and agree on the state of the blockchain. This decentralized consensus mechanism eliminates the need for a trusted third party.",
      
      validationChallenges: [
        {
          id: 1,
          transactions: [
            {
              id: "tx234abc1",
              sender: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
              receiver: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
              amount: 2.5,
              timestamp: 1712345678,
              isDoubleSpend: false
            },
            {
              id: "tx234abc2",
              sender: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
              receiver: "bc1q9h8yqvhkzgzxl0mi8qm850eq6w8a46q96fcmne",
              amount: 2.5,
              timestamp: 1712345720,
              isDoubleSpend: true,
              explanation: "This is a double-spend attempt because the same funds from tx234abc1 are being spent again."
            },
            {
              id: "tx345bcd1",
              sender: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
              receiver: "bc1q9h8yqvhkzgzxl0mi8qm850eq6w8a46q96fcmne",
              amount: 1.0,
              timestamp: 1712345800,
              isDoubleSpend: false
            },
            {
              id: "tx456cde1",
              sender: "bc1q9h8yqvhkzgzxl0mi8qm850eq6w8a46q96fcmne",
              receiver: "3FkenCiXpSLqD8L2UcwSGLyVCqZ2GFkLat",
              amount: 0.5,
              timestamp: 1712345900,
              isDoubleSpend: false
            },
            {
              id: "tx567def1",
              sender: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
              receiver: "15K1YKJMiJ7xqV4R8aLii8q59wo41Scu1x",
              amount: 3.0,
              timestamp: 1712346000,
              isDoubleSpend: true,
              explanation: "This is a double-spend attempt because the sender already spent their funds in tx234abc1 and doesn't have 3.0 BTC available."
            }
          ]
        }
      ],
      
      longestChainSimulation: {
        initialBlocks: 5,
        events: [
          {
            name: "Network Split",
            description: "The network temporarily splits into two parts due to connectivity issues",
            chains: [
              { name: "Chain A", blocks: 2, hashPower: "60%" },
              { name: "Chain B", blocks: 1, hashPower: "40%" }
            ],
            outcome: "Chain A becomes the canonical chain as it has more accumulated proof-of-work."
          },
          {
            name: "51% Attack Attempt",
            description: "An attacker controls 45% of the network hashrate and attempts to build an alternative chain",
            chains: [
              { name: "Honest Chain", blocks: 3, hashPower: "55%" },
              { name: "Attack Chain", blocks: 2, hashPower: "45%" }
            ],
            outcome: "The attack fails as the honest chain continues to grow faster with more hashpower."
          }
        ]
      },
      
      nodeTypes: {
        types: [
          {
            name: "Full Node",
            description: "Maintains a complete copy of the blockchain and validates all transactions and blocks according to consensus rules.",
            storesFullBlockchain: true,
            validates: true,
            mines: false,
            relays: true
          },
          {
            name: "Mining Node",
            description: "A full node that also participates in mining by creating new blocks.",
            storesFullBlockchain: true,
            validates: true,
            mines: true,
            relays: true
          },
          {
            name: "Light/SPV Client",
            description: "Doesn't store the full blockchain but only block headers. Relies on full nodes to verify transactions.",
            storesFullBlockchain: false,
            validates: false,
            mines: false,
            relays: false
          }
        ]
      },
      
      quizQuestions: [
        {
          id: 1,
          question: "What role do miners play in the Bitcoin network?",
          options: [
            "They only create new bitcoins but don't affect security",
            "They simply relay transactions without validating them",
            "They validate transactions, create new blocks, and secure the network through proof of work",
            "They only set transaction fees"
          ],
          correctIndex: 2,
          explanation: "Miners validate transactions, package them into blocks, and secure the network through proof-of-work. This process simultaneously creates new bitcoins and ensures the blockchain remains secure and immutable."
        },
        {
          id: 2,
          question: "Describe the 'longest chain rule' in Bitcoin.",
          options: [
            "The chain with the most transactions is considered valid",
            "The chain with the most accumulated proof-of-work (not necessarily the most blocks) is considered valid",
            "The chain preferred by the most popular mining pools",
            "The chain with the most staked bitcoins"
          ],
          correctIndex: 1,
          explanation: "The 'longest chain rule' refers to the protocol rule where nodes follow the chain with the most accumulated proof-of-work, which is typically (but not always) the chain with the most blocks. This is how Bitcoin achieves consensus without a central authority."
        },
        {
          id: 3,
          question: "How do miners prevent double spending?",
          options: [
            "By requiring a waiting period before funds can be spent",
            "By checking account balances with a central database",
            "By validating all transactions against the blockchain history and only including valid ones in new blocks",
            "By requiring permission from Bitcoin core developers"
          ],
          correctIndex: 2,
          explanation: "Miners prevent double spending by validating all transactions against the blockchain's history. If someone tries to spend the same bitcoin twice, only the first transaction will be considered valid and included in a block, while subsequent attempts will be rejected."
        },
        {
          id: 4,
          question: "What is the difference between a full node and a non-mining node?",
          options: [
            "There is no difference; these terms mean the same thing",
            "Full nodes validate transactions and store the complete blockchain, while non-mining nodes do neither",
            "Full nodes store the complete blockchain, while non-mining nodes are simply nodes that don't participate in mining but may still be full nodes",
            "Full nodes only exist in mining pools, while non-mining nodes are independent"
          ],
          correctIndex: 2,
          explanation: "A full node is any node that stores the complete blockchain and validates all transactions and blocks. A non-mining node is simply a node that doesn't participate in mining. Many non-mining nodes are still full nodes that validate and relay transactions."
        },
        {
          id: 5,
          question: "Why is consensus important in blockchain?",
          options: [
            "It's primarily for marketing purposes",
            "It's only needed for transaction fee calculation",
            "It ensures all participants agree on the state of the ledger without requiring trust between them",
            "It's only important for developers, not users"
          ],
          correctIndex: 2,
          explanation: "Consensus is crucial in blockchain as it allows all participants to agree on the single state of the ledger without needing to trust each other. This decentralized agreement on transaction history is what enables Bitcoin to function as trustless money."
        }
      ]
    }
  },
  {
    id: 403,
    title: "Energy and Bitcoin",
    subtitle: "Truth vs Myth",
    description: "Separate fact from fiction regarding Bitcoin's energy usage. Explore how Bitcoin mining compares to traditional financial systems, the growing role of renewable energy in mining, and how mining operations can actually stabilize energy grids and incentivize renewable energy development.",
    objectives: [
      "Understand Bitcoin's energy consumption in proper context",
      "Compare Bitcoin's energy use to traditional financial systems",
      "Learn how miners are increasingly utilizing renewable energy",
      "Discover how Bitcoin mining can help stabilize energy grids"
    ],
    simulationType: 'energyUsage',
    simulationData: {
      explanation: "Bitcoin's energy consumption has been a topic of much debate. While mining does require significant electricity, it's important to understand the energy usage in context, the value provided for that energy, and how the industry is evolving toward more sustainable practices.",
      
      energyComparisons: [
        {
          system: "Bitcoin Network",
          annualEnergyConsumption: 120, // TWh
          servicePovided: "Secure, borderless, permissionless monetary network with finalized settlement",
          carbonIntensity: "Variable, trending toward renewable sources",
          notes: "Energy consumption does not scale with number of transactions. Energy secures entire network."
        },
        {
          system: "Gold Mining Industry",
          annualEnergyConsumption: 240, // TWh (estimated)
          servicePovided: "Extracting a physical store of value",
          carbonIntensity: "High - fossil fuels for heavy machinery",
          notes: "Additional energy required for vaulting, security, shipping, etc."
        },
        {
          system: "Traditional Banking System",
          annualEnergyConsumption: 700, // TWh (estimated)
          servicePovided: "Payment processing, lending, wealth management",
          carbonIntensity: "Medium - data centers, offices, ATMs, security",
          notes: "Includes physical branches, card networks, central banks, etc."
        }
      ],
      
      energySources: [
        {
          id: 1,
          name: "Hydroelectric Dam",
          type: "hydro",
          costPerKWh: 0.02,
          carbonIntensity: 24, // gCO2eq/kWh
          reliability: 85,
          location: "Northern Sweden",
          description: "Abundant, low-cost hydroelectric power with minimal environmental impact."
        },
        {
          id: 2,
          name: "Stranded Natural Gas",
          type: "gas",
          costPerKWh: 0.025,
          carbonIntensity: 400, // gCO2eq/kWh
          reliability: 95,
          location: "North Dakota Oil Fields",
          description: "Using gas that would otherwise be flared (burned off) at oil wells."
        },
        {
          id: 3,
          name: "Solar Farm",
          type: "solar",
          costPerKWh: 0.035,
          carbonIntensity: 45, // gCO2eq/kWh
          reliability: 60,
          location: "Nevada Desert",
          description: "Large-scale solar installation with high production during daylight hours."
        },
        {
          id: 4,
          name: "Wind Farm",
          type: "wind",
          costPerKWh: 0.04,
          carbonIntensity: 11, // gCO2eq/kWh
          reliability: 65,
          location: "Texas Plains",
          description: "Extensive wind turbine installation with variable output based on weather."
        },
        {
          id: 5,
          name: "Coal Power Plant",
          type: "coal",
          costPerKWh: 0.05,
          carbonIntensity: 1000, // gCO2eq/kWh
          reliability: 90,
          location: "Eastern China",
          description: "Traditional coal-fired power plant with high emissions."
        }
      ],
      
      miningOperations: [
        {
          id: 1,
          name: "Arctic Mining",
          hashRate: 5000, // TH/s
          powerConsumption: 18000, // kW
          initialCost: 25000000,
          maintenanceCost: 800000,
          optimalEnergySource: "hydro"
        },
        {
          id: 2,
          name: "Desert Solar",
          hashRate: 3000, // TH/s
          powerConsumption: 12000, // kW
          initialCost: 15000000,
          maintenanceCost: 600000,
          optimalEnergySource: "solar"
        },
        {
          id: 3,
          name: "Oilfield Mining",
          hashRate: 2500, // TH/s
          powerConsumption: 10000, // kW
          initialCost: 12000000,
          maintenanceCost: 500000,
          optimalEnergySource: "gas"
        },
        {
          id: 4,
          name: "Wind Power Mining",
          hashRate: 2000, // TH/s
          powerConsumption: 8000, // kW
          initialCost: 10000000,
          maintenanceCost: 400000,
          optimalEnergySource: "wind"
        }
      ],
      
      gridStabilization: {
        explanation: "Bitcoin miners are unique energy consumers because they can be turned on or off instantly. This flexibility allows them to perform valuable services for power grids.",
        benefits: [
          {
            name: "Demand Response",
            description: "Miners can reduce consumption during peak demand, helping prevent blackouts."
          },
          {
            name: "Renewable Integration",
            description: "Miners can use excess renewable energy that would otherwise be curtailed/wasted."
          },
          {
            name: "Base Load Provider",
            description: "Miners provide steady income to power plants during low-demand periods."
          },
          {
            name: "Geographic Flexibility",
            description: "Miners can locate near energy sources, eliminating transmission losses."
          }
        ],
        realWorldExamples: [
          {
            location: "Texas, USA",
            description: "Miners participate in demand response programs, shutting down during grid stress."
          },
          {
            location: "Norway",
            description: "Hydroelectric plants sell excess capacity to miners during high water flow periods."
          },
          {
            location: "Wyoming, USA",
            description: "Miners use stranded natural gas that would otherwise be flared, reducing emissions."
          }
        ]
      },
      
      quizQuestions: [
        {
          id: 1,
          question: "What are common myths about Bitcoin's energy consumption?",
          options: [
            "Bitcoin uses no energy at all",
            "Bitcoin's energy use is proportional to the number of transactions it processes",
            "Bitcoin only uses renewable energy",
            "Bitcoin mining is only profitable in countries with subsidized electricity"
          ],
          correctIndex: 1,
          explanation: "A common myth is that Bitcoin's energy usage scales with its transaction throughput. In reality, energy consumption is primarily tied to Bitcoin's price and mining difficulty, not transaction volume. Layer 2 solutions like Lightning Network can increase transaction throughput without increasing energy usage."
        },
        {
          id: 2,
          question: "How does Bitcoin mining compare to traditional banking in terms of energy use?",
          options: [
            "Traditional banking uses far less energy than Bitcoin",
            "Traditional banking uses more energy but processes more transactions",
            "They use exactly the same amount of energy",
            "The comparison is misleading as they provide different services"
          ],
          correctIndex: 3,
          explanation: "The comparison is not straightforward because Bitcoin provides a different set of services than traditional banking. Bitcoin offers a permissionless, borderless monetary network with irreversible settlement, while traditional banking offers a wider range of financial services but requires trust in third parties."
        },
        {
          id: 3,
          question: "What role can renewable energy play in Bitcoin mining?",
          options: [
            "Renewable energy is too unreliable for mining operations",
            "Renewables are only used by a tiny fraction of miners",
            "Bitcoin mining can incentivize renewable energy development and use stranded or excess renewable energy",
            "Renewable energy is too expensive to be viable for mining"
          ],
          correctIndex: 2,
          explanation: "Bitcoin mining can incentivize renewable energy development by providing a 'buyer of last resort' for excess energy that would otherwise be wasted. This creates economic incentives to build renewable infrastructure in locations that might otherwise not be economically viable."
        },
        {
          id: 4,
          question: "How can Bitcoin mining stabilize energy grids?",
          options: [
            "It can't; mining always destabilizes grids",
            "Miners can rapidly adjust their energy consumption based on grid conditions, providing demand response services",
            "By consuming a constant amount of energy regardless of grid conditions",
            "By replacing traditional energy generation entirely"
          ],
          correctIndex: 1,
          explanation: "Bitcoin miners are uniquely flexible energy consumers that can instantly reduce or increase their energy consumption. This allows them to provide valuable demand response services to grid operators, consuming excess energy when available and shutting down during peak demand or emergencies."
        },
        {
          id: 5,
          question: "What benefits does Bitcoin mining offer to energy economies?",
          options: [
            "Mining has no benefits for energy production",
            "Mining only benefits coal and other fossil fuel producers",
            "Mining can monetize stranded energy resources, support renewable development, and provide grid services",
            "Mining only benefits energy consumers by lowering prices"
          ],
          correctIndex: 2,
          explanation: "Bitcoin mining can monetize previously wasted energy sources (like flared natural gas or curtailed renewables), create financial incentives for renewable energy development in remote locations, and provide grid services like demand response and frequency regulation."
        }
      ]
    }
  },
  {
    id: 404,
    title: "Mining in Africa",
    subtitle: "Possibilities on the Continent",
    description: "Africa holds immense potential for Bitcoin mining due to its abundant renewable energy resources. Explore how countries across the continent can harness hydro, solar, and geothermal power for mining operations, creating jobs, supporting local infrastructure, and fostering economic development.",
    objectives: [
      "Identify Africa's untapped energy resources suitable for mining",
      "Understand the economic development potential of Bitcoin mining in Africa",
      "Learn about existing mining projects on the continent",
      "Explore how mining can support infrastructure development"
    ],
    simulationType: 'africanMining',
    simulationData: {
      explanation: "Africa is uniquely positioned to benefit from Bitcoin mining due to its abundant renewable energy resources, many of which remain untapped. Countries with significant hydro, solar, and geothermal potential could leverage these resources for mining operations, creating jobs and economic growth.",
      
      africanEnergyResources: [
        {
          id: 1,
          country: "Ethiopia",
          resourceType: "hydro",
          capacity: 45000, // MW
          utilizationRate: 15,
          potentialJobs: 50000,
          investmentRequired: 20000000000,
          description: "Ethiopia has some of Africa's largest hydroelectric potential, much of it still undeveloped. The Grand Ethiopian Renaissance Dam alone will generate 5,150 MW when completed."
        },
        {
          id: 2,
          country: "Democratic Republic of Congo",
          resourceType: "hydro",
          capacity: 100000, // MW
          utilizationRate: 3,
          potentialJobs: 100000,
          investmentRequired: 50000000000,
          description: "The Congo River holds the potential for the world's largest hydroelectric scheme, with the Grand Inga project potentially generating up to 40,000 MW."
        },
        {
          id: 3,
          country: "Kenya",
          resourceType: "geothermal",
          capacity: 10000, // MW
          utilizationRate: 16,
          potentialJobs: 25000,
          investmentRequired: 15000000000,
          description: "Kenya sits on the Great Rift Valley, giving it significant geothermal potential. It already leads Africa in geothermal development."
        },
        {
          id: 4,
          country: "Morocco",
          resourceType: "solar",
          capacity: 20000, // MW
          utilizationRate: 12,
          potentialJobs: 40000,
          investmentRequired: 18000000000,
          description: "Morocco receives some of the highest levels of solar irradiation globally and has invested heavily in large-scale solar projects."
        },
        {
          id: 5,
          country: "Nigeria",
          resourceType: "gas",
          capacity: 15000, // MW
          utilizationRate: 10,
          potentialJobs: 35000,
          investmentRequired: 12000000000,
          description: "Nigeria flares vast amounts of natural gas from oil production that could instead be used for power generation, including Bitcoin mining."
        }
      ],
      
      economicImpact: {
        directJobs: {
          engineering: "Electrical, software, and mechanical engineers to design and maintain mining facilities",
          operations: "Facility managers, security personnel, and maintenance staff",
          support: "Administrative, logistics, and supply chain professionals"
        },
        indirectBenefits: [
          "Infrastructure development: Power lines, roads, internet connectivity",
          "Education: Training programs for technical skills",
          "Energy development: Incentives to build power generation facilities",
          "Foreign investment: Capital inflows for energy and mining projects",
          "Financial inclusion: Increased access to Bitcoin and financial services"
        ],
        caseStudies: [
          {
            country: "Zimbabwe",
            project: "Blanket Mine Bitcoin Operation",
            outcome: "Mining operations helping stabilize local power grid and providing employment"
          },
          {
            country: "Kenya",
            project: "KenGen Geothermal Mining",
            outcome: "State power generator inviting Bitcoin miners to use excess geothermal capacity"
          }
        ]
      },
      
      miningSimulation: {
        initialBudget: 10000000,
        locationOptions: [
          {
            name: "Ethiopian Highlands",
            energyType: "hydro",
            costPerKWh: 0.03,
            availablePower: 50, // MW
            infrastructureCosts: 2000000,
            gridStability: 85, // %
            politicalRiskFactor: 0.7 // 0-1
          },
          {
            name: "Moroccan Desert",
            energyType: "solar",
            costPerKWh: 0.04,
            availablePower: 40, // MW
            infrastructureCosts: 1500000,
            gridStability: 90, // %
            politicalRiskFactor: 0.4 // 0-1
          },
          {
            name: "Kenyan Rift Valley",
            energyType: "geothermal",
            costPerKWh: 0.035,
            availablePower: 30, // MW
            infrastructureCosts: 1800000,
            gridStability: 88, // %
            politicalRiskFactor: 0.5 // 0-1
          }
        ],
        minerOptions: [
          {
            name: "Basic Setup",
            hashrate: 500, // PH/s
            power: 15, // MW
            cost: 3000000,
            efficiency: 40 // J/TH
          },
          {
            name: "Medium Operation",
            hashrate: 1000, // PH/s
            power: 28, // MW
            cost: 5500000,
            efficiency: 35 // J/TH
          },
          {
            name: "Large Facility",
            hashrate: 2000, // PH/s
            power: 50, // MW
            cost: 10000000,
            efficiency: 30 // J/TH
          }
        ],
        simulationPeriod: 24, // months
        difficultyAdjustment: [1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55,
                               1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2.0, 2.05, 2.1, 2.15],
        bitcoinPrice: [40000, 42000, 45000, 47000, 50000, 48000, 46000, 48000, 52000, 54000,
                       56000, 58000, 60000, 58000, 56000, 58000, 60000, 65000, 70000, 65000,
                       60000, 65000, 70000, 75000]
      },
      
      quizQuestions: [
        {
          id: 1,
          question: "What energy resources are abundant in Africa for Bitcoin mining?",
          options: [
            "Only coal and natural gas",
            "Primarily nuclear power",
            "Hydroelectric, solar, geothermal, and natural gas",
            "Africa lacks sufficient energy resources for mining"
          ],
          correctIndex: 2,
          explanation: "Africa is rich in various energy resources suitable for Bitcoin mining, including significant hydroelectric potential (especially in countries like Ethiopia and DRC), abundant solar resources across the Sahara and sub-Saharan regions, geothermal energy in East Africa's Rift Valley, and natural gas in countries like Nigeria and Algeria."
        },
        {
          id: 2,
          question: "How can Bitcoin mining create jobs in Africa?",
          options: [
            "Only through direct employment at mining facilities",
            "It can't create meaningful employment",
            "Through direct technical jobs, support roles, infrastructure development, and related services",
            "Only through government subsidies"
          ],
          correctIndex: 2,
          explanation: "Bitcoin mining creates various types of jobs, including direct technical positions (engineers, technicians), support roles (security, administration), infrastructure jobs (construction, electrical work), as well as indirect employment in education, hospitality, and local services that support mining operations."
        },
        {
          id: 3,
          question: "Which is a real Bitcoin mining project in Africa?",
          options: [
            "The African Bitcoin Alliance (a fictional organization)",
            "KenGen's geothermal Bitcoin mining initiative in Kenya",
            "The Pan-African Mining Consortium (fictional)",
            "African Mining Token (fictional)"
          ],
          correctIndex: 1,
          explanation: "KenGen, Kenya's largest power producer, has invited Bitcoin miners to use its excess geothermal power capacity for mining operations. This represents a real-world example of African power producers recognizing the opportunity Bitcoin mining presents for monetizing their energy resources."
        },
        {
          id: 4,
          question: "How does mining contribute to infrastructure development?",
          options: [
            "It doesn't affect infrastructure",
            "It only uses existing infrastructure without improvements",
            "By creating demand for reliable electricity, internet connectivity, and transportation networks",
            "Only through government mandates"
          ],
          correctIndex: 2,
          explanation: "Mining operations require reliable electricity, fast internet connections, and good transportation networks. This creates economic incentives to develop this infrastructure, which can then benefit the broader community and economy beyond just the mining operation itself."
        },
        {
          id: 5,
          question: "What are the potential economic impacts of Bitcoin mining in Africa?",
          options: [
            "Minimal impact limited to mining companies themselves",
            "Purely negative effects on local economies",
            "Job creation, foreign investment, infrastructure development, and improved energy access",
            "Benefits only foreign investors with no local advantages"
          ],
          correctIndex: 2,
          explanation: "Bitcoin mining can have substantial positive economic impacts in Africa, including job creation across various skill levels, attracting foreign investment, incentivizing development of power and digital infrastructure, improving energy access for communities, and creating opportunities for local businesses in the supply chain."
        }
      ]
    }
  },
  {
    id: 405,
    title: "Knowledge Test",
    subtitle: "Mining Wisdom",
    description: "Test your understanding of Bitcoin mining in this comprehensive challenge. Apply what you've learned about mining mechanics, network security, energy considerations, and economic opportunities to solve advanced mining scenarios and demonstrate your mastery of the subject.",
    objectives: [
      "Apply knowledge of mining mechanics in practical scenarios",
      "Demonstrate understanding of mining's role in network security",
      "Analyze energy considerations for mining operations",
      "Explore economic impacts of mining globally and in Africa specifically"
    ],
    simulationType: 'miningChallenge',
    simulationData: {
      explanation: "This comprehensive challenge tests your understanding of all aspects of Bitcoin mining covered in this realm. You'll face scenarios that require applying your knowledge of mining mechanics, security, energy usage, and economic impacts.",
      
      challengeLevels: [
        {
          id: 1,
          name: "Mining Basics",
          description: "Demonstrate your understanding of how mining works",
          tasks: [
            "Calculate mining profitability given specific hardware and energy costs",
            "Explain the relationship between block reward, difficulty, and miner incentives",
            "Describe the mining process from transaction selection to block validation"
          ],
          difficulty: "Medium"
        },
        {
          id: 2,
          name: "Network Security",
          description: "Show how mining secures the Bitcoin network",
          tasks: [
            "Analyze a potential double-spend attack and its likelihood of success",
            "Calculate the cost of a 51% attack against the network",
            "Explain the impact of block confirmations on transaction security"
          ],
          difficulty: "Hard"
        },
        {
          id: 3,
          name: "Energy Considerations",
          description: "Apply knowledge of mining's energy usage",
          tasks: [
            "Compare different energy sources for a mining operation",
            "Calculate the carbon footprint of different mining setups",
            "Design a mining operation that provides grid services"
          ],
          difficulty: "Hard"
        },
        {
          id: 4,
          name: "African Opportunities",
          description: "Explore mining possibilities in Africa",
          tasks: [
            "Create a business plan for a mining operation in a specific African country",
            "Analyze the economic impact of the operation on the local community",
            "Address regulatory and political considerations"
          ],
          difficulty: "Expert"
        }
      ],
      
      bossChallenge: {
        name: "The Mountain Forge Master",
        description: "Design and operate a successful mining operation under changing market conditions, various energy constraints, and shifting regulatory environments.",
        parameters: {
          initialCapital: 15000000,
          simulationLength: 36, // months
          events: [
            {
              month: 6,
              name: "Energy Crisis",
              description: "Energy prices increase by 30% for 3 months",
              effect: {
                type: "energy_cost",
                modifier: 1.3,
                duration: 3
              }
            },
            {
              month: 12,
              name: "Bitcoin Halving",
              description: "Block reward cuts in half",
              effect: {
                type: "block_reward",
                modifier: 0.5,
                duration: "permanent"
              }
            },
            {
              month: 18,
              name: "Regulatory Pressure",
              description: "New regulations increase operational costs",
              effect: {
                type: "operational_cost",
                modifier: 1.2,
                duration: 6
              }
            },
            {
              month: 24,
              name: "Market Bull Run",
              description: "Bitcoin price increases significantly",
              effect: {
                type: "bitcoin_price",
                modifier: 2.0,
                duration: 4
              }
            },
            {
              month: 30,
              name: "Technological Breakthrough",
              description: "New, more efficient miners become available",
              effect: {
                type: "miner_efficiency",
                modifier: 1.5,
                duration: "permanent"
              }
            }
          ]
        }
      },
      
      quizQuestions: [
        {
          id: 1,
          question: "Summarize the process of Bitcoin mining.",
          options: [
            "Miners create new bitcoins by solving simple math problems that anyone can verify",
            "Miners collect transaction fees by manually verifying each transaction's validity",
            "Miners compete to solve a computational puzzle by finding a nonce that produces a valid block hash, thereby confirming transactions and securing the network",
            "Miners vote on which transactions to include in the next block through a democratic process"
          ],
          correctIndex: 2,
          explanation: "Bitcoin mining involves miners collecting unconfirmed transactions, constructing a candidate block, and repeatedly trying different nonce values to find one that, when combined with the block data and hashed, produces a result that meets the network's difficulty target (has enough leading zeros). The first miner to find a valid hash broadcasts their block to the network and receives the block reward plus transaction fees."
        },
        {
          id: 2,
          question: "Explain the significance of miners in maintaining network security.",
          options: [
            "Miners only create new coins but don't affect security",
            "Miners prevent hacking by manually reviewing each transaction",
            "Miners secure the network by making it computationally expensive to alter transaction history through decentralized proof-of-work",
            "Miners report suspicious transactions to Bitcoin's security team"
          ],
          correctIndex: 2,
          explanation: "Miners secure the Bitcoin network by making it prohibitively expensive to rewrite transaction history. The computational work (electricity and hardware) required to mine blocks means an attacker would need to control more than 50% of the network's hash power to successfully alter the blockchain. This economic security model works because honest miners are incentivized to follow the protocol rules."
        },
        {
          id: 3,
          question: "Discuss the myths surrounding Bitcoin's energy use.",
          options: [
            "Bitcoin's energy use is justified because it's lower than any other financial system",
            "Bitcoin uses no energy because it's purely digital",
            "Common misconceptions include that Bitcoin's energy use scales with transactions, fails to account for the value provided, and ignores the growing use of renewables and stranded energy",
            "Energy concerns are entirely fabricated by Bitcoin critics"
          ],
          correctIndex: 2,
          explanation: "Common myths about Bitcoin's energy use include: 1) That it scales with transaction count (it doesn't - energy secures the entire network regardless of transaction volume), 2) That it's 'wasted' energy (it provides security and monetary value), 3) That it only uses fossil fuels (miners increasingly use renewables and stranded energy), and 4) That comparisons to traditional finance are invalid (both systems provide different services with different energy profiles)."
        },
        {
          id: 4,
          question: "Identify energy resources suitable for mining in Africa.",
          options: [
            "Africa has no suitable energy resources for mining",
            "Only imported fossil fuels can power African mining",
            "Hydroelectric potential in Ethiopia and DRC, geothermal in Kenya, solar in North Africa, and flared gas in Nigeria",
            "Only nuclear power is suitable for African mining operations"
          ],
          correctIndex: 2,
          explanation: "Africa has abundant renewable energy resources suitable for Bitcoin mining, including: massive hydroelectric potential in countries like Ethiopia and the Democratic Republic of Congo, significant geothermal resources along the East African Rift Valley (especially in Kenya), excellent solar irradiation across much of the continent, and wasted natural gas that's currently being flared in oil-producing nations like Nigeria."
        },
        {
          id: 5,
          question: "What are the broader economic implications of Bitcoin mining?",
          options: [
            "Mining only benefits large corporations with no local economic impact",
            "Mining creates jobs, drives infrastructure development, monetizes stranded energy resources, and can bring investment to underserved regions",
            "Mining only affects Bitcoin's price with no real-world economic impact",
            "Mining operates at a loss and is primarily conducted for ideological reasons"
          ],
          correctIndex: 1,
          explanation: "Bitcoin mining has several significant economic implications: it creates direct and indirect employment across various skill levels, drives development of energy and digital infrastructure, monetizes previously wasted energy resources, attracts investment to regions with abundant energy but limited economic opportunities, and can provide valuable services to electrical grids. In developing regions like parts of Africa, these benefits can be especially impactful."
        }
      ]
    }
  },
  {
    id: 406,
    title: "The Halving Hall",
    subtitle: "Bitcoin's Built-in Scarcity Mechanism",
    description: "Explore Bitcoin's revolutionary economic model centered around regular 'halvings' - events that cut the mining reward in half approximately every four years. Understand how this predictable issuance schedule creates digital scarcity, affects mining economics, and influences Bitcoin's long-term value proposition.",
    objectives: [
      "Understand Bitcoin's fixed supply cap and issuance schedule",
      "Learn how halvings affect miner incentives and network security",
      "Explore the economic implications of programmatic monetary policy",
      "Experience the mining landscape across multiple halving cycles"
    ],
    simulationType: 'halving',
    simulationData: {
      explanation: "Bitcoin has a fixed supply cap of 21 million coins, with new bitcoins issued on a predetermined schedule. Approximately every four years (or 210,000 blocks), the number of new bitcoins created in each block is cut in half - an event known as 'the halving'. This creates a predictable, disinflationary monetary policy that contrasts sharply with traditional fiat currencies.",
      
      halvingHistory: [
        {
          date: "January 3, 2009",
          blockHeight: 0,
          reward: 50,
          totalBitcoin: 0,
          percentageIssued: 0,
          bitcoinPrice: 0
        },
        {
          date: "November 28, 2012",
          blockHeight: 210000,
          reward: 25,
          totalBitcoin: 10500000,
          percentageIssued: 50,
          bitcoinPrice: 12
        },
        {
          date: "July 9, 2016",
          blockHeight: 420000,
          reward: 12.5,
          totalBitcoin: 15750000,
          percentageIssued: 75,
          bitcoinPrice: 650
        },
        {
          date: "May 11, 2020",
          blockHeight: 630000,
          reward: 6.25,
          totalBitcoin: 18375000,
          percentageIssued: 87.5,
          bitcoinPrice: 8600
        },
        {
          date: "April 2024 (estimated)",
          blockHeight: 840000,
          reward: 3.125,
          totalBitcoin: 19687500,
          percentageIssued: 93.75,
          bitcoinPrice: "~$70,000"
        },
        {
          date: "2028 (estimated)",
          blockHeight: 1050000,
          reward: 1.5625,
          totalBitcoin: 20343750,
          percentageIssued: 96.875,
          bitcoinPrice: "?"
        }
      ],
      
      supplyComparison: {
        bitcoin: {
          initialInflation: "~50% in year 1",
          currentInflation: "~1.7% annually (2024)",
          finalInflation: "0% after all 21 million coins are issued",
          supplyCapMechanism: "Programmatic, enforced by consensus rules",
          predictability: "Mathematically deterministic"
        },
        fiatCurrencies: {
          initialInflation: "Varies by country and policy",
          currentInflation: "Typically 2-10% annually, varies widely",
          finalInflation: "No upper bound, continues indefinitely",
          supplyCapMechanism: "Central bank discretion",
          predictability: "Subject to political and economic factors"
        },
        gold: {
          initialInflation: "Varies by discovery of new deposits",
          currentInflation: "~1.5% annually",
          finalInflation: "Limited by physical abundance on Earth",
          supplyCapMechanism: "Physics and economics of extraction",
          predictability: "Somewhat predictable based on known reserves"
        }
      },
      
      halvingSimulation: {
        initialReward: 6.25,
        halvingPeriods: [
          {
            blocksRemaining: 52500,
            rewardPerBlock: 6.25,
            difficulty: 1,
            avgFees: 0.1,
            bitcoinPrice: 60000
          },
          {
            blocksRemaining: 210000,
            rewardPerBlock: 3.125,
            difficulty: 1.2,
            avgFees: 0.15,
            bitcoinPrice: 90000
          },
          {
            blocksRemaining: 210000,
            rewardPerBlock: 1.5625,
            difficulty: 1.5,
            avgFees: 0.25,
            bitcoinPrice: 150000
          },
          {
            blocksRemaining: 210000,
            rewardPerBlock: 0.78125,
            difficulty: 1.8,
            avgFees: 0.5,
            bitcoinPrice: 300000
          }
        ],
        hashPowerCost: 0.05, // $ per TH/s per day
        events: [
          {
            period: 1,
            name: "Pre-Halving Mining Rush",
            description: "Miners race to accumulate as much bitcoin as possible before the reward cuts in half",
            effect: {
              type: "hashrate",
              modifier: 1.3
            }
          },
          {
            period: 2,
            name: "Difficulty Squeeze",
            description: "Some miners cannot remain profitable after the halving and shut down",
            effect: {
              type: "hashrate",
              modifier: 0.8
            }
          },
          {
            period: 2,
            name: "Price Reaction",
            description: "Market absorbs the supply shock from the halving",
            effect: {
              type: "price",
              modifier: 1.5
            }
          },
          {
            period: 3,
            name: "Fee Market Development",
            description: "As block rewards diminish, transaction fees become more important",
            effect: {
              type: "fees",
              modifier: 2.0
            }
          }
        ]
      },
      
      quizQuestions: [
        {
          id: 1,
          question: "What is a Bitcoin halving?",
          options: [
            "When the price of Bitcoin falls by 50%",
            "When the Bitcoin network divides into two separate blockchains",
            "When the block reward given to miners is reduced by 50%",
            "When the transaction capacity of the network doubles"
          ],
          correctIndex: 2,
          explanation: "A Bitcoin halving is a programmed event where the reward for mining new blocks is cut in half. This happens approximately every four years (or 210,000 blocks) and is hardcoded into Bitcoin's protocol. This mechanism gradually reduces the rate at which new bitcoins are created until all 21 million are in circulation."
        },
        {
          id: 2,
          question: "How does scarcity affect Bitcoin's value?",
          options: [
            "Scarcity has no effect on Bitcoin's value",
            "Bitcoin's programmed scarcity creates a supply cap that, combined with increased demand, can lead to price appreciation over time",
            "Bitcoin's scarcity makes it less valuable as fewer coins are available for use",
            "Scarcity only affects mining difficulty but not price"
          ],
          correctIndex: 1,
          explanation: "Bitcoin's programmed scarcity creates a fixed supply cap of 21 million coins. Following basic economic principles, when supply is limited and demand increases, price tends to rise. Bitcoin's halvings reduce the rate of new supply entering the market, potentially accentuating this effect if demand remains constant or grows."
        },
        {
          id: 3,
          question: "What happens to miner incentives during halving events?",
          options: [
            "Miners earn more because Bitcoin's price always doubles at halvings",
            "Miners earn the same amount because difficulty automatically adjusts to compensate",
            "Miners initially earn less bitcoin per block, potentially making some operations unprofitable unless price increases or efficiency improves",
            "Miner incentives aren't affected by halvings"
          ],
          correctIndex: 2,
          explanation: "During a halving, miners suddenly receive 50% fewer new bitcoins for each block they mine. This can make less efficient mining operations unprofitable, potentially causing some miners to shut down. For miners to maintain the same revenue in fiat terms, either the price of Bitcoin needs to increase proportionally, transaction fees need to rise, or miners need to become more efficient."
        },
        {
          id: 4,
          question: "Why is the 21 million limit significant?",
          options: [
            "It's an arbitrary number with no special significance",
            "It matches the global gold supply when measured in ounces",
            "It creates a known, fixed supply cap that makes Bitcoin the first digitally scarce asset and gives it deflationary characteristics",
            "It was chosen to match the total supply of dollars in circulation"
          ],
          correctIndex: 2,
          explanation: "The 21 million coin limit is significant because it establishes Bitcoin as the first truly scarce digital asset. This fixed supply cap, which cannot be changed without consensus from the network, gives Bitcoin deflationary characteristics unlike any previous form of money. This predictable scarcity is a fundamental aspect of Bitcoin's value proposition and contrasts sharply with fiat currencies that can be inflated endlessly."
        },
        {
          id: 5,
          question: "How do halvings impact the overall economy of Bitcoin?",
          options: [
            "They have no impact on Bitcoin's economy",
            "They only affect miners but not users or investors",
            "They decrease supply issuance, potentially changing the market dynamics between miners, users, and investors, and shifting incentives toward transaction fees in the long term",
            "They primarily exist to save electricity"
          ],
          correctIndex: 2,
          explanation: "Halvings impact Bitcoin's economy in several important ways: they reduce the rate of new supply entering the market (potentially affecting price if demand remains constant), they force miners to become more efficient or shut down (affecting network security), they gradually shift miner revenue from block subsidies to transaction fees (changing the long-term economic model), and they serve as focal points for market attention and price discovery."
        }
      ]
    }
  }
];