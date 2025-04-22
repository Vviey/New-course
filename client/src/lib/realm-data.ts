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
    setting: "Trade festival at sunset, colorful market stalls, sounds of drums and laughter, barter exchanges happening all around.",
    focus: "Foundations of Money",
    imageUrl: "/realms/origins.jpg",
    isLocked: false,
    storyIntro: "Asha walks through the crowded festival, holding her grandmother's hand. She sees people exchanging food, bracelets, and herbs—not for money, but for other goods. Asha (wide-eyed): \"Why do we use paper to buy things now? Didn't people trade without it before?\" Odu (appearing behind her, cloaked in sunset light): \"Before coins clinked and notes crumpled, stories were the ledger. Walk the path of what came before... and you'll know what was lost.\"",
    realmCompletion: {
      reward: "A glowing cowrie shell charm is added to Asha's necklace.",
      nextClue: "\"To know where money begins is not enough. Now ask—who holds the reins?\""
    },
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

// Mission data for Realm 1 (updated with detailed content)
export const missionData = [
  // Realm 1: Origin - Missions
  {
    id: 101,
    realmId: 1,
    title: "The First Exchange",
    description: "Understand the origins of trade and the limitations of direct barter.",
    scenario: "Asha witnesses a salt trader exchanging for bananas. But the banana seller doesn't want salt—he wants cloth.",
    imageUrl: "/missions/barter-systems.svg",
    isLocked: false,
    isCompleted: false,
    progress: 0,
    keyPoints: [
      "Barter is the oldest form of exchange.",
      "Relied on mutual need — double coincidence of wants.",
      "Hard to scale beyond small communities."
    ],
    lessons: [
      {
        title: "Barter Web Challenge",
        content: "You're in the middle of the trade festival. Asha is watching villagers trying to barter for what they need — but it's not so easy!"
      }
    ],
    activities: [
      {
        type: "barter-web",
        description: "Match the trades to form a complete barter circle",
        data: {
          traders: [
            { name: "Mama Nia", has: "Basket of Yams", wants: "Cooking Pot" },
            { name: "Uncle Kofi", has: "Cooking Pot", wants: "Goat Milk" },
            { name: "Ayo the Herder", has: "Goat Milk", wants: "Herbal Medicine" },
            { name: "Nana Ama", has: "Herbal Medicine", wants: "Basket of Yams" }
          ],
          correctOrder: [
            "Mama Nia → Uncle Kofi (Yams for Cooking Pot)",
            "Uncle Kofi → Ayo the Herder (Cooking Pot for Goat Milk)",
            "Ayo the Herder → Nana Ama (Goat Milk for Herbal Medicine)",
            "Nana Ama → Mama Nia (Herbal Medicine for Yams)"
          ]
        }
      }
    ],
    reflection: "If your village had no money, how would you trade for something rare — like medicine?"
  },
  
  {
    id: 102,
    realmId: 1,
    title: "Cowries and Gold Dust",
    description: "Discover traditional African forms of money before colonialism.",
    scenario: "Asha is handed a shiny cowrie shell by a storyteller who says, \"This once bought an entire basket of grain.\"",
    imageUrl: "/missions/indigenous-currencies.svg",
    isLocked: false,
    isCompleted: false,
    progress: 0,
    keyPoints: [
      "Cowrie shells used widely in West and Central Africa.",
      "Gold dust, iron tools, beads also served as money.",
      "Value tied to beauty, scarcity, social agreement."
    ],
    historicalContext: [
      { name: "Akan people (Ghana)", contribution: "Used gold dust as currency" },
      { name: "Yoruba", contribution: "Used cowrie shells extensively" }
    ],
    activities: [
      {
        type: "matching-challenge",
        description: "Match each currency with its region and primary value source",
        data: {
          pairs: [
            { currency: "Cowrie Shells", region: "Yoruba", valueSource: "Scarcity & beauty" },
            { currency: "Gold Dust", region: "Akan", valueSource: "Commodity & prestige" },
            { currency: "Iron Tools", region: "Central Africa", valueSource: "Utility in agriculture" },
            { currency: "Beads", region: "Great Lakes", valueSource: "Cultural significance" }
          ]
        }
      }
    ],
    externalResources: [
      { name: "Cowrie Shells and the African Economy", source: "British Museum" }
    ]
  },
  
  {
    id: 103,
    realmId: 1,
    title: "Enter the Colonial Coin",
    description: "Understand how colonization disrupted indigenous monetary systems.",
    scenario: "Asha sees a soldier force market women to accept colonial coins instead of gold dust. Confusion and resistance follow.",
    imageUrl: "/missions/colonial-disruption.svg",
    isLocked: false,
    isCompleted: false,
    progress: 0,
    keyPoints: [
      "Colonial powers imposed European coins.",
      "Taxation systems required payment in colonial currency.",
      "Undermined traditional systems and centralized control."
    ],
    historicalContext: [
      { name: "Hut Tax", description: "In British colonies (e.g., Sierra Leone)" },
      { name: "Franc CFA", description: "In French colonies (and its lasting legacy)" }
    ],
    mythBreakdown: {
      myth: "Colonial currencies were more advanced",
      truth: "FALSE. They served control, not community."
    },
    activities: [
      {
        type: "timeline-challenge",
        description: "Arrange historical events in the correct order",
        data: {
          events: [
            "Widespread use of cowries and gold dust in local trade.",
            "Colonizers introduce taxes payable only in foreign currency.",
            "Traditional currencies criminalized or made obsolete.",
            "Full reliance on colonial and post-colonial state currency."
          ]
        }
      }
    ],
    discussionPrompt: "If someone forced your village to stop using what worked, would you call it progress?"
  },
  
  {
    id: 104,
    realmId: 1,
    title: "Rise of the Nation-State Currency",
    description: "Trace how African countries adopted fiat currencies post-independence and the challenges faced.",
    scenario: "Asha walks through her town where posters of new banknotes flutter with pride—but elders warn of past devaluations.",
    imageUrl: "/missions/fiat-currency.svg",
    isLocked: false,
    isCompleted: false,
    progress: 0,
    keyPoints: [
      "Fiat currency: issued by governments, not backed by commodities.",
      "Governments can print more — leading to inflation.",
      "Zimbabwe hyperinflation as a cautionary tale."
    ],
    historicalFigures: [
      { name: "Mansa Musa", significance: "Contrast with gold-backed wealth" },
      { name: "Zimbabwe", event: "2008 hyperinflation" }
    ],
    activities: [
      {
        type: "budget-simulation",
        description: "Budget in Chaos – Manage inventory during inflation",
        data: {
          days: [
            { day: 1, breadPrice: 100 },
            { day: 3, breadPrice: 400 },
            { day: 5, breadPrice: 2000 }
          ],
          challenge: "Can you keep your family fed and business alive?"
        }
      }
    ],
    quote: {
      speaker: "Odu",
      text: "When money becomes as common as leaves, hunger becomes common too."
    },
    quizQuestions: [
      "What is fiat currency?",
      "What happens when too much money is printed?",
      "Which African country suffered a currency collapse in 2008?"
    ]
  },
  
  {
    id: 105,
    realmId: 1,
    title: "Knowledge Test — Ancient to Modern Money",
    description: "Test your understanding of money's evolution throughout history.",
    scenario: "Asha walks into a trade where she must place relics (cowries, coins, notes) on a timeline.",
    imageUrl: "/missions/money-evolution.svg",
    isLocked: false,
    isCompleted: false,
    progress: 0,
    quizTypes: [
      "Drag and drop history matching.",
      "Identify value source (commodity vs fiat vs digital).",
      "Match currency to cultural region."
    ],
    goal: "Reinforce that money is a human invention, always evolving — and always controlled by someone."
  },
  
  {
    id: 106,
    realmId: 1,
    title: "Value Beyond Money",
    description: "Explore non-monetary forms of value exchange like social capital, labor, and trust.",
    scenario: "Asha helps a healer in exchange for a story and a favor—no money involved.",
    imageUrl: "/missions/value-beyond-money.svg",
    isLocked: false,
    isCompleted: false,
    progress: 0,
    keyPoints: [
      "Ubuntu philosophy: \"I am because we are.\"",
      "Social networks often replace money in rural settings.",
      "Bitcoin's peer-to-peer model echoes this trust economy."
    ],
    quote: {
      speaker: "Asha",
      text: "When did we decide money had to be metal? Wasn't memory and meaning enough?"
    },
    activities: [
      {
        type: "story-market-exchange",
        description: "Navigate a marketplace with non-monetary exchanges",
        data: {
          trades: [
            "Storytelling for help fetching water",
            "A favor for handmade herbs",
            "Guidance in return for a drum lesson"
          ],
          outcome: "Each trade builds her reputation and trust level. No coins. Just value through meaning."
        }
      }
    ],
    discussionPrompt: "Can trust-based systems scale in a digital world? What role might Bitcoin play in such a future?"
  },
  
  // Continue with other missions...
];