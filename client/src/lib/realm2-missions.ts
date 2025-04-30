import { MissionContent } from './realm1-missions';

// Types specific to Realm 2
export interface RoleplayScenario {
  id: number;
  title: string;
  description: string;
  choices: {
    id: number;
    text: string;
    outcome: string;
    isOptimal: boolean;
  }[];
  explanation: string;
}

export interface PaymentOption {
  id: number;
  name: string;
  description: string;
  privacyRating: number; // 1-10
  surveillanceRisk: string[];
  privacyFeatures: string[];
  examples: string[];
}

export interface ExclusionBarrier {
  id: number;
  name: string;
  description: string;
}

export interface ExclusionGroup {
  id: number;
  name: string;
  description: string;
}

export interface CorrectMatch {
  barrierId: number;
  groupId: number;
  explanation?: string;
}

export interface FlowNode {
  id: string;
  label: string;
  type: 'institution' | 'country' | 'organization';
  influence: number; // 1-10
}

export interface Connection {
  source: string;
  target: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface DollarShockEvent {
  year: number;
  title: string;
  description: string;
  effects: string[];
}

export interface RouteOption {
  id: string;
  label: string;
  risk: number;
  outcome: {
    funds?: number;
    privacy?: number;
    nextRoute?: string;
    message: string;
    restart?: boolean;
    complete?: boolean;
  };
}

export interface Routes {
  [key: string]: {
    options: RouteOption[];
  };
}

export interface ResistanceNetwork {
  name: string;
  description: string;
}

// Main mission data for Realm 2
export const realm2Missions: MissionContent[] = [
  {
    id: 201,
    title: "Central Banking Simulation",
    subtitle: "Experience monetary policy challenges firsthand",
    description: "Step into the role of a central banker and discover the complex trade-offs involved in monetary policy decisions. Learn why giving a small group the power to control a nation's money can lead to significant unintended consequences.",
    objectives: [
      "Understand basic monetary policy tools",
      "Experience the challenge of balancing inflation and unemployment",
      "Learn about the impact of interest rate decisions",
      "Discover why Bitcoin's fixed supply presents an alternative model"
    ],
    simulationType: 'roleplay',
    simulationData: {
      scenarios: [
        {
          id: 1,
          title: "Managing Inflation",
          description: "Inflation has risen to 8% annually, well above your 2% target. Unemployment is at 4.5%. What action do you take as the central bank?",
          choices: [
            {
              id: 1,
              text: "Raise interest rates aggressively to 5%",
              outcome: "Inflation begins to slow, but unemployment rises to 7% as businesses cut back on borrowing and expansion.",
              isOptimal: false
            },
            {
              id: 2,
              text: "Raise interest rates moderately to 3%",
              outcome: "Inflation slows to 5%, while unemployment increases slightly to 5.5%.",
              isOptimal: true
            },
            {
              id: 3,
              text: "Keep interest rates unchanged",
              outcome: "Inflation rises to 10%, eroding savings and wages. Political pressure mounts to take action.",
              isOptimal: false
            },
            {
              id: 4,
              text: "Lower interest rates to stimulate growth",
              outcome: "The economy initially grows faster, but inflation surges to 15%, causing widespread economic harm.",
              isOptimal: false
            }
          ],
          explanation: "Central banks face a constant balancing act between controlling inflation and maintaining employment. However, any decision inevitably creates winners and losers. Bitcoin offers an alternative by removing this human decision-making and replacing it with a fixed, predictable issuance."
        },
        {
          id: 2,
          title: "Banking Crisis",
          description: "Several major banks are on the verge of collapse due to risky investments. The entire financial system is at risk of contagion. What do you do?",
          choices: [
            {
              id: 1,
              text: "Let the banks fail to avoid moral hazard",
              outcome: "The financial system experiences severe disruption, unemployment spikes to 12%, but surviving banks become more cautious.",
              isOptimal: false
            },
            {
              id: 2,
              text: "Bail out the banks using taxpayer money",
              outcome: "The financial system stabilizes, but it creates public resentment and encourages future risky behavior by banks.",
              isOptimal: false
            },
            {
              id: 3,
              text: "Create new money to provide emergency liquidity",
              outcome: "The crisis is averted, but the expanded money supply leads to 6% inflation, eroding savings.",
              isOptimal: true
            },
            {
              id: 4,
              text: "Force healthier banks to acquire failing ones",
              outcome: "The immediate crisis is resolved, but it creates larger, more systemically important banks, increasing future risks.",
              isOptimal: false
            }
          ],
          explanation: "Central banks often serve as 'lenders of last resort,' creating new money to prevent systemic collapse. While this can prevent immediate economic pain, it often leads to inflation and encourages risky behavior. Bitcoin's design prevents such interventions, which means participants must be more prudent."
        },
        {
          id: 3,
          title: "Pandemic Economic Response",
          description: "A global pandemic has shut down large portions of the economy. GDP is falling rapidly, and unemployment is rising. How do you respond?",
          choices: [
            {
              id: 1,
              text: "Dramatically increase the money supply to finance government stimulus",
              outcome: "The economy stabilizes initially, but inflation rises to 15% within 18 months, persisting for years.",
              isOptimal: false
            },
            {
              id: 2,
              text: "Moderately increase money supply while encouraging targeted relief",
              outcome: "The economy experiences a significant but manageable recession with 6% inflation that gradually subsides.",
              isOptimal: true
            },
            {
              id: 3,
              text: "Keep monetary policy unchanged and let markets adjust",
              outcome: "A deep depression occurs with 20% unemployment, causing widespread business failures and social unrest.",
              isOptimal: false
            },
            {
              id: 4,
              text: "Implement negative interest rates to force spending",
              outcome: "Banks struggle with profitability, savers are punished, and asset bubbles form in real estate and stock markets.",
              isOptimal: false
            }
          ],
          explanation: "Crises often prompt central banks to create large amounts of new money. While this can alleviate immediate suffering, it can lead to significant inflation and asset bubbles. Bitcoin's fixed supply means it cannot be inflated during crises, which could limit certain policy responses but also protect savings from devaluation."
        }
      ]
    }
  },
  {
    id: 202,
    title: "Financial Surveillance Detective",
    subtitle: "Uncover the hidden tracks of your financial transactions",
    description: "In this mission, you'll investigate how various payment methods reveal your personal data. From who you are, where you shop, and what you buy—your financial transactions create a detailed profile that governments and corporations eagerly monitor. Discover why financial privacy matters in a surveillance state and how Bitcoin might offer an alternative.",
    objectives: [
      "Analyze the privacy implications of different payment methods",
      "Understand how payment surveillance works",
      "Learn what data is collected about you with each transaction",
      "Discover Bitcoin's approach to financial privacy"
    ],
    simulationType: 'privacy',
    simulationData: {
      paymentOptions: [
        {
          id: 1,
          name: "Credit Card",
          description: "The most common electronic payment method that creates a detailed record of purchases.",
          privacyRating: 2,
          surveillanceRisk: [
            "All purchase data stored permanently",
            "Data shared with advertisers, banks, card networks, and governments",
            "Creates detailed spending profile (patterns, locations, preferences)",
            "Databases can be hacked or leaked"
          ],
          privacyFeatures: [
            "Limited identity verification for small purchases",
            "Some consumer protections against theft"
          ],
          examples: [
            "A government tracking all political donations made by card",
            "Advertisers purchasing your spending data from credit bureaus",
            "Banks analyzing your spending patterns to calculate 'social scores'"
          ]
        },
        {
          id: 2,
          name: "Mobile Banking App",
          description: "Banking apps that handle direct transfers and payments between individuals and merchants.",
          privacyRating: 3,
          surveillanceRisk: [
            "Location tracking through app permissions",
            "Transaction data shared with multiple parties",
            "Linked to your verified identity",
            "Often collects biometric data (fingerprints, face scans)"
          ],
          privacyFeatures: [
            "Some apps offer limited transaction visibility options"
          ],
          examples: [
            "Government requesting records of all transactions to certain organizations",
            "App companies building behavioral profiles by analyzing spending patterns",
            "Banks flagging 'suspicious' transactions for manual review"
          ]
        },
        {
          id: 3,
          name: "Cash",
          description: "Physical banknotes and coins used for in-person transactions.",
          privacyRating: 9,
          surveillanceRisk: [
            "Serial numbers can be tracked",
            "ATM withdrawals create records",
            "Large transactions often trigger reporting requirements",
            "Increasingly difficult to use in digital economy"
          ],
          privacyFeatures: [
            "No digital footprint for the transaction itself",
            "No third-party processors or data collection",
            "No need for identity verification for most transactions",
            "Works without electricity or internet"
          ],
          examples: [
            "Buying everyday items without creating a data trail",
            "Supporting local businesses directly",
            "Giving monetary gifts without surveillance"
          ]
        },
        {
          id: 4,
          name: "CBDC (Central Bank Digital Currency)",
          description: "Government-issued digital currency with direct central bank control.",
          privacyRating: 1,
          surveillanceRisk: [
            "Complete government visibility of all transactions",
            "Programmable restrictions on where, when, and how money can be spent",
            "Potential for funds to be frozen instantly",
            "Perfect record of all economic activity by identity"
          ],
          privacyFeatures: [
            "Theoretical possibility of privacy features (rarely implemented)",
            "Security against certain types of fraud"
          ],
          examples: [
            "Government limiting purchases during shortages",
            "Automatic taxation of every transaction",
            "Restricting purchases based on social credit scores or behavior",
            "Blocking payments to politically disfavored groups"
          ]
        },
        {
          id: 5,
          name: "Bitcoin (Base Layer)",
          description: "Peer-to-peer electronic cash system operating on a public blockchain.",
          privacyRating: 6,
          surveillanceRisk: [
            "All transactions permanently visible on public blockchain",
            "Address clustering can reveal patterns",
            "Exchange KYC creates identity attachment points",
            "Chain analysis companies track flows"
          ],
          privacyFeatures: [
            "No built-in identity requirement",
            "Pseudonymous by default",
            "No central authority with special visibility",
            "No permission needed to transact"
          ],
          examples: [
            "Making donations to causes regardless of political pressure",
            "Sending value globally without permissions",
            "Holding savings outside the banking system"
          ]
        },
        {
          id: 6,
          name: "Bitcoin (Lightning Network)",
          description: "Second layer payment protocol operating on top of Bitcoin's base layer.",
          privacyRating: 8,
          surveillanceRisk: [
            "Opening and closing channels visible on base chain",
            "Potential for routing nodes to collect some data",
            "Still requires on/off ramps that may involve KYC"
          ],
          privacyFeatures: [
            "Individual payments not recorded on public blockchain",
            "Onion routing obscures payment paths",
            "No central oversight of transactions",
            "Minimal data collection compared to traditional systems"
          ],
          examples: [
            "Making small daily purchases with minimal surveillance",
            "Sending global remittances with low fees and privacy",
            "Streaming small payments for services without identity verification"
          ]
        }
      ]
    }
  },
  {
    id: 203,
    title: "Breaking the Exclusion Web",
    subtitle: "Mapping financial barriers and bitcoin solutions",
    description: "Billions of people worldwide remain excluded from the modern financial system. In this mission, you'll connect various barriers to the specific populations they affect most severely. Then learn how Bitcoin's unique properties could help overcome these obstacles to bring financial services to everyone.",
    objectives: [
      "Identify major barriers to financial inclusion",
      "Understand which populations are most affected by each barrier",
      "Map the relationships between barriers and excluded groups",
      "Discover how Bitcoin addresses these challenges"
    ],
    simulationType: 'exclusion',
    simulationData: {
      barriers: [
        {
          id: 1,
          name: "Identity Requirements",
          description: "Traditional banks require government-issued ID, proof of address, and other documentation to open accounts."
        },
        {
          id: 2,
          name: "Minimum Balance Requirements",
          description: "Many banks require minimum deposits or balances to avoid fees, often hundreds of dollars."
        },
        {
          id: 3,
          name: "Geographic Access",
          description: "Physical bank branches and ATMs are concentrated in profitable urban areas, leaving many regions underserved."
        },
        {
          id: 4,
          name: "Financial Literacy Barriers",
          description: "Complex financial products, terms, and interfaces can be inaccessible to those with limited education or experience."
        },
        {
          id: 5,
          name: "High Transaction Costs",
          description: "Fees for basic services like money transfers or check cashing can consume a large percentage of income for the poor."
        },
        {
          id: 6,
          name: "Currency Controls & Instability",
          description: "Government restrictions on currency use and high inflation create barriers to saving and financial planning."
        }
      ],
      groups: [
        {
          id: 1,
          name: "Rural Populations",
          description: "People living in remote areas far from urban centers, often with limited infrastructure."
        },
        {
          id: 2,
          name: "Refugees & Migrants",
          description: "People who have been displaced from their homes, often lacking documentation from their host country."
        },
        {
          id: 3,
          name: "Unhoused Individuals",
          description: "People without permanent addresses, making it difficult to satisfy bank requirements."
        },
        {
          id: 4,
          name: "Low-Income Workers",
          description: "People with limited financial resources who cannot meet minimum balance requirements."
        },
        {
          id: 5,
          name: "Informal Economy Workers",
          description: "People who earn income through unofficial channels without formal documentation."
        },
        {
          id: 6,
          name: "Citizens of Unstable Economies",
          description: "People living in countries with hyperinflation, currency controls, or failing banking systems."
        }
      ],
      correctMatches: [
        {
          barrierId: 1,
          groupId: 2,
          explanation: "Refugees and migrants often lack the documentation required by traditional financial institutions in their host countries."
        },
        {
          barrierId: 1,
          groupId: 3,
          explanation: "Without a permanent address, unhoused individuals cannot satisfy standard KYC (Know Your Customer) requirements."
        },
        {
          barrierId: 2,
          groupId: 4,
          explanation: "Minimum balance requirements disproportionately affect those with limited income who cannot set aside sufficient funds."
        },
        {
          barrierId: 3,
          groupId: 1,
          explanation: "Rural populations often live far from bank branches or ATMs, making access to financial services physically difficult."
        },
        {
          barrierId: 4,
          groupId: 5,
          explanation: "Those working in the informal economy often have limited exposure to formal financial education and systems."
        },
        {
          barrierId: 5,
          groupId: 4,
          explanation: "High transaction fees disproportionately affect low-income individuals, as fees consume a larger percentage of their total funds."
        },
        {
          barrierId: 6,
          groupId: 6,
          explanation: "Citizens of countries with unstable economies suffer from currency controls that restrict their financial freedom and from inflation that erodes their savings."
        }
      ],
      stats: [
        {
          value: "1.7 billion",
          label: "Adults without bank accounts worldwide"
        },
        {
          value: "70%",
          label: "Unbanked who cite lack of documentation as a barrier"
        },
        {
          value: "60%",
          label: "Women's share of the global unbanked population"
        },
        {
          value: "$200+",
          label: "Average annual cost of maintaining a basic bank account in some regions"
        }
      ],
      caseStudies: [
        {
          title: "Bitcoin Beach: El Salvador",
          description: "A community project in El Zonte that helped residents use Bitcoin for everyday transactions, demonstrating financial inclusion without traditional banking infrastructure.",
          impact: "Enabled unbanked residents to save, transact, and build small businesses outside the traditional financial system."
        },
        {
          title: "Refugee Empowerment in Uganda",
          description: "Bitcoin and Lightning Network being used to help refugees receive money from family abroad without expensive remittance fees or documentation requirements.",
          impact: "Reduced costs from 10-15% to less than 1% for receiving critical financial support."
        },
        {
          title: "Financial Autonomy in Zimbabwe",
          description: "Citizens using Bitcoin to preserve savings value during periods of hyperinflation when the local currency rapidly depreciated.",
          impact: "Provided economic stability when the banking system and national currency failed to serve their basic functions."
        }
      ]
    }
  },
  {
    id: 204,
    title: "The Global Money Web",
    subtitle: "Mapping the Dollar Dominance System",
    description: "Visualize the global financial system and how a single currency—the US dollar—has become the center of world trade, creating both stability and vulnerabilities. Then explore what happened when this system faced its first major shock in the 1970s, and how Bitcoin offers an alternative model for international exchange.",
    objectives: [
      "Understand how the dollar-based financial system works",
      "Map connections between central banks, SWIFT, and international trade",
      "Learn what happened when the dollar left the gold standard in 1971",
      "Discover how Bitcoin provides an alternative global settlement system"
    ],
    simulationType: 'globalflow',
    simulationData: {
      globalFlow: {
        nodes: [
          {
            id: "fed",
            label: "US Federal Reserve",
            type: "institution",
            influence: 10
          },
          {
            id: "ecb",
            label: "European Central Bank",
            type: "institution",
            influence: 8
          },
          {
            id: "pboc",
            label: "People's Bank of China",
            type: "institution",
            influence: 7
          },
          {
            id: "boj",
            label: "Bank of Japan",
            type: "institution",
            influence: 6
          },
          {
            id: "imf",
            label: "International Monetary Fund",
            type: "organization",
            influence: 9
          },
          {
            id: "worldbank",
            label: "World Bank",
            type: "organization",
            influence: 8
          },
          {
            id: "swift",
            label: "SWIFT Network",
            type: "organization",
            influence: 9
          },
          {
            id: "usa",
            label: "United States",
            type: "country",
            influence: 10
          },
          {
            id: "eu",
            label: "European Union",
            type: "country",
            influence: 8
          },
          {
            id: "china",
            label: "China",
            type: "country",
            influence: 8
          },
          {
            id: "india",
            label: "India",
            type: "country",
            influence: 6
          },
          {
            id: "russia",
            label: "Russia",
            type: "country",
            influence: 5
          },
          {
            id: "developing",
            label: "Developing Nations",
            type: "country",
            influence: 3
          }
        ],
        correctConnections: [
          {
            source: "fed",
            target: "usa",
            isCorrect: true,
            explanation: "The Federal Reserve is the central bank of the United States, responsible for monetary policy."
          },
          {
            source: "fed",
            target: "imf",
            isCorrect: true,
            explanation: "The US has the largest voting share in the IMF and significant influence over its policies."
          },
          {
            source: "fed",
            target: "ecb",
            isCorrect: true,
            explanation: "Central banks coordinate monetary policy, with the Fed's decisions significantly impacting others."
          },
          {
            source: "fed",
            target: "worldbank",
            isCorrect: true,
            explanation: "The US is the largest shareholder in the World Bank, giving the Fed indirect influence."
          },
          {
            source: "usa",
            target: "swift",
            isCorrect: true,
            explanation: "The US has significant influence over the SWIFT financial messaging system, used for international fund transfers."
          },
          {
            source: "usa",
            target: "developing",
            isCorrect: true,
            explanation: "US monetary policy directly affects developing nations through interest rates, dollar availability, and debt obligations."
          },
          {
            source: "worldbank",
            target: "developing",
            isCorrect: true,
            explanation: "The World Bank provides loans and aid to developing countries, often with specific policy requirements."
          },
          {
            source: "imf",
            target: "developing",
            isCorrect: true,
            explanation: "The IMF provides emergency loans to countries in crisis, typically requiring economic reforms."
          },
          {
            source: "swift",
            target: "eu",
            isCorrect: true,
            explanation: "SWIFT facilitates international transactions between EU member states and other countries."
          },
          {
            source: "swift",
            target: "china",
            isCorrect: true,
            explanation: "China relies on SWIFT for international trade settlement, despite developing alternatives."
          },
          {
            source: "swift",
            target: "russia",
            isCorrect: true,
            explanation: "Russia uses SWIFT for international transactions, though access can be restricted as a sanction."
          }
        ]
      },
      dollarShock: {
        initialYear: 1971,
        events: [
          {
            year: 1971,
            title: "Nixon Ends Gold Standard",
            description: "President Nixon announces that the US will no longer convert dollars to gold, ending the Bretton Woods system.",
            effects: [
              "Dollar becomes a pure fiat currency without gold backing",
              "Other countries can no longer redeem dollars for gold",
              "Beginning of the floating exchange rate system",
              "US gains ability to create unlimited dollars"
            ]
          },
          {
            year: 1973,
            title: "Oil Crisis",
            description: "OPEC oil embargo drives major price increases, but oil continues to be priced exclusively in dollars (petrodollar).",
            effects: [
              "Reinforced dollar's global importance despite being untethered from gold",
              "Countries needed dollars to purchase oil, creating artificial demand",
              "US gained significant geopolitical advantage",
              "Increased inflation in many countries"
            ]
          },
          {
            year: 1979,
            title: "Volcker Shock",
            description: "Federal Reserve Chairman Paul Volcker raises interest rates dramatically to combat inflation.",
            effects: [
              "Interest rates reach nearly 20% in the United States",
              "Developing nations with dollar-denominated debt face crisis",
              "Demonstrated US ability to export monetary policy globally",
              "Created economic hardship across the world"
            ]
          },
          {
            year: 1997,
            title: "Asian Financial Crisis",
            description: "Currency collapse spreads across Asian economies, requiring IMF intervention with strict conditions.",
            effects: [
              "Demonstrated vulnerability of countries to dollar policy",
              "IMF required privatization and economic restructuring",
              "Increased dollar reserves in Asian countries as protection",
              "Sparked interest in monetary alternatives and regional cooperation"
            ]
          },
          {
            year: 2008,
            title: "Global Financial Crisis",
            description: "Federal Reserve creates trillions of new dollars through quantitative easing to stabilize markets.",
            effects: [
              "US exports inflation to countries holding dollar reserves",
              "Demonstrated unilateral power of US over global monetary system",
              "Asset prices rise globally as new money seeks investment",
              "Bitcoin created as a direct response to bank bailouts"
            ]
          }
        ]
      }
    }
  },
  {
    id: 205,
    title: "Escape the Surveillance State",
    subtitle: "Navigate financial censorship and control",
    description: "In this interactive challenge, you'll attempt to maintain financial privacy and autonomy in a dystopian surveillance state. Make strategic decisions about how to manage your money while avoiding the ever-watching eye of financial monitoring systems.",
    objectives: [
      "Experience the challenges of financial surveillance firsthand",
      "Navigate strategic choices to maintain privacy",
      "Learn about different types of financial censorship",
      "Discover Bitcoin's role in preserving financial freedom"
    ],
    simulationType: 'escape',
    simulationData: {
      playerStartFunds: 1000,
      routes: {
        "start": {
          options: [
            {
              id: "bank-account",
              label: "Open a Traditional Bank Account",
              risk: 40,
              outcome: {
                funds: -50, // account fees
                privacy: -10,
                nextRoute: "bank-account",
                message: "You've opened a monitored bank account. The bank requires your ID, address, and biometric data. They charge a monthly fee of $50. Your financial activity is now visible to authorities."
              }
            },
            {
              id: "cash-only",
              label: "Try to Live Cash-Only",
              risk: 70,
              outcome: {
                funds: -100, // inefficiency costs
                privacy: 25,
                nextRoute: "cash-limits",
                message: "You've chosen to use only cash. This provides good privacy for in-person transactions, but many services and online purchases are unavailable. You pay higher fees for basic services like bill payment."
              }
            },
            {
              id: "learn-bitcoin",
              label: "Learn About Bitcoin",
              risk: 20,
              outcome: {
                funds: -20, // cost of education materials
                privacy: 5,
                nextRoute: "bitcoin-basics",
                message: "You spend some time learning about Bitcoin fundamentals and self-custody. You now understand private keys, wallets, and basic transaction mechanics."
              }
            }
          ]
        },
        "bank-account": {
          options: [
            {
              id: "large-withdrawal",
              label: "Make a Large Cash Withdrawal",
              risk: 80,
              outcome: {
                funds: -30, // withdrawal fees
                privacy: -15,
                nextRoute: "flagged-activity",
                message: "Your attempt to withdraw $2,000 in cash triggers an automatic suspicious activity report. A bank officer questions the purpose of your withdrawal, and your account is flagged for enhanced monitoring."
              }
            },
            {
              id: "payment-app",
              label: "Use a Popular Payment App",
              risk: 50,
              outcome: {
                funds: -25, // fees and unfavorable exchange rates
                privacy: -20,
                nextRoute: "data-collection",
                message: "You start using a mainstream payment app that connects to your bank account. It's convenient but collects detailed data on your spending habits, location, contacts, and browsing behavior."
              }
            },
            {
              id: "research-alternatives",
              label: "Research Financial Alternatives",
              risk: 30,
              outcome: {
                funds: -10,
                privacy: 10,
                nextRoute: "bitcoin-basics",
                message: "You begin researching alternatives to traditional banking. You discover information about Bitcoin, privacy-preserving tools, and the concept of self-custody."
              }
            }
          ]
        },
        "flagged-activity": {
          options: [
            {
              id: "explain-withdrawal",
              label: "Explain Your Withdrawal Reasons",
              risk: 60,
              outcome: {
                funds: 0,
                privacy: -30,
                nextRoute: "increased-surveillance",
                message: "You explain your withdrawal, but this adds more information to your profile. The bank removes the immediate restriction but places your account under enhanced surveillance. Future activities will face greater scrutiny."
              }
            },
            {
              id: "close-account",
              label: "Close Your Bank Account",
              risk: 75,
              outcome: {
                funds: -200, // closing fees and penalties
                privacy: 15,
                nextRoute: "cash-limits",
                message: "You close your account, facing penalties and fees. You've escaped the immediate banking surveillance but now face challenges accessing the financial system."
              }
            },
            {
              id: "consult-advisor",
              label: "Consult a Privacy-Focused Financial Advisor",
              risk: 25,
              outcome: {
                funds: -150, // advisor fees
                privacy: 20,
                nextRoute: "bitcoin-basics",
                message: "The advisor explains various privacy-preserving financial techniques, including the role of Bitcoin in a surveillance-resistant financial strategy."
              }
            }
          ]
        },
        "increased-surveillance": {
          options: [
            {
              id: "comply-restrictions",
              label: "Comply with All Restrictions",
              risk: 15,
              outcome: {
                funds: -300, // ongoing fees and devaluations
                privacy: -40,
                nextRoute: "complete-monitoring",
                message: "You carefully follow all bank rules and restrictions. Your financial freedom diminishes as more controls are implemented, and your assets slowly lose value through fees and inflation."
              }
            },
            {
              id: "multiple-accounts",
              label: "Try Opening Multiple Small Accounts",
              risk: 85,
              outcome: {
                funds: -400, // setup and maintenance fees
                privacy: -25,
                nextRoute: "caught-structuring",
                message: "Your attempt to distribute funds across multiple accounts triggers anti-structuring algorithms. All your accounts are frozen pending investigation."
              }
            },
            {
              id: "bitcoin-exit",
              label: "Begin Gradually Moving to Bitcoin",
              risk: 40,
              outcome: {
                funds: -50, // learning curve costs
                privacy: 30,
                nextRoute: "bitcoin-strategy",
                message: "You start slowly converting some funds to Bitcoin through peer-to-peer exchanges, learning self-custody practices, and reducing reliance on surveilled financial systems."
              }
            }
          ]
        },
        "complete-monitoring": {
          options: [
            {
              id: "accept-cbdc",
              label: "Adopt the New Central Bank Digital Currency",
              risk: 10,
              outcome: {
                funds: -600, // value loss through devaluation
                privacy: -60,
                nextRoute: "complete-control",
                message: "You adopt the new CBDC as required. All transactions now require government approval, are fully tracked, and can be blocked or reversed. Your purchasing ability is now tied to your social compliance score."
              }
            },
            {
              id: "last-chance-exit",
              label: "Last-Ditch Effort to Exit the System",
              risk: 90,
              outcome: {
                funds: -500, // exit penalties
                privacy: 15,
                nextRoute: "caught-exiting",
                message: "Your attempt to withdraw remaining funds and exit the financial system is detected. Your accounts are frozen and assets seized under civil forfeiture laws."
              }
            },
            {
              id: "underground-economy",
              label: "Connect with the Underground Economy",
              risk: 70,
              outcome: {
                funds: -200, // inefficiency costs
                privacy: 25,
                nextRoute: "bitcoin-strategy",
                message: "You connect with local networks operating outside the surveillance system, where you learn about Bitcoin and other tools for financial sovereignty."
              }
            }
          ]
        },
        "complete-control": {
          options: [
            {
              id: "total-compliance",
              label: "Total Compliance with System",
              risk: 5,
              outcome: {
                funds: -800,
                privacy: -95,
                restart: true,
                message: "You surrender all financial autonomy. The system now decides what you can purchase, where you can go, and how you can earn. Your money can be frozen or devalued at any time. Game Over."
              }
            }
          ]
        },
        "caught-exiting": {
          options: [
            {
              id: "restart-surveillance",
              label: "Start Over",
              risk: 100,
              outcome: {
                funds: -900,
                privacy: -80,
                restart: true,
                message: "Your assets have been seized, and you've been blacklisted from the financial system. Game Over."
              }
            }
          ]
        },
        "caught-structuring": {
          options: [
            {
              id: "legal-defense",
              label: "Mount Legal Defense",
              risk: 60,
              outcome: {
                funds: -700, // legal fees
                privacy: -50,
                restart: true,
                message: "You spend thousands on legal defense but ultimately lose. Your accounts remain frozen, and you're now flagged in financial systems worldwide. Game Over."
              }
            }
          ]
        },
        "cash-limits": {
          options: [
            {
              id: "cash-economy",
              label: "Operate Solely in the Cash Economy",
              risk: 50,
              outcome: {
                funds: -250, // inefficiency and limitation costs
                privacy: 20,
                nextRoute: "cash-restrictions",
                message: "You manage to operate using only cash, but face increasing limitations. Many services and opportunities are unavailable, and you pay premium prices for basic financial services."
              }
            },
            {
              id: "cash-suspicious",
              label: "Make Large Cash Purchases",
              risk: 80,
              outcome: {
                funds: -200,
                privacy: -15,
                nextRoute: "flagged-person",
                message: "Your cash purchases over $600 are reported to authorities. Your name enters a database of 'unusual financial activity' subjects, and you face increased scrutiny."
              }
            },
            {
              id: "cash-to-bitcoin",
              label: "Find a Cash-to-Bitcoin Exchange",
              risk: 30,
              outcome: {
                funds: -50, // exchange premium
                privacy: 25,
                nextRoute: "bitcoin-basics",
                message: "You find a local Bitcoin meetup where you can exchange cash for Bitcoin. This opens up new possibilities while maintaining reasonable privacy."
              }
            }
          ]
        },
        "cash-restrictions": {
          options: [
            {
              id: "cash-ban",
              label: "Face New Cash Restrictions",
              risk: 60,
              outcome: {
                funds: -300,
                privacy: -20,
                restart: true,
                message: "New legislation severely restricts cash transactions above $500. Cash deposits require extensive documentation. Most businesses stop accepting cash for larger purchases. You can no longer function effectively in society. Game Over."
              }
            },
            {
              id: "cash-community",
              label: "Join Local Alternative Economy",
              risk: 40,
              outcome: {
                funds: -150,
                privacy: 15,
                nextRoute: "bitcoin-basics",
                message: "You connect with a community of privacy-conscious individuals who introduce you to various financial alternatives, including Bitcoin."
              }
            }
          ]
        },
        "flagged-person": {
          options: [
            {
              id: "surveillance-investigation",
              label: "Subjected to Investigation",
              risk: 70,
              outcome: {
                funds: -350,
                privacy: -60,
                restart: true,
                message: "Your unusual cash activity leads to a formal investigation. You face asset seizure and legal costs that deplete your resources. Game Over."
              }
            },
            {
              id: "go-underground",
              label: "Move Further Underground",
              risk: 50,
              outcome: {
                funds: -200,
                privacy: 10,
                nextRoute: "bitcoin-basics",
                message: "You connect with privacy-focused communities that help you learn about Bitcoin and other financial tools resistant to surveillance."
              }
            }
          ]
        },
        "data-collection": {
          options: [
            {
              id: "accept-monitoring",
              label: "Accept Comprehensive Monitoring",
              risk: 20,
              outcome: {
                funds: -150, // targeted price discrimination
                privacy: -40,
                nextRoute: "increased-surveillance",
                message: "You accept the convenience of digital financial services despite the surveillance. Companies now know your shopping habits, interests, and social connections, sharing this data with advertisers and authorities."
              }
            },
            {
              id: "deplatformed",
              label: "Express Controversial Views Online",
              risk: 60,
              outcome: {
                funds: -300,
                privacy: -25,
                nextRoute: "financial-exclusion",
                message: "After expressing political views online, you discover your payment app account has been suspended. You can no longer send or receive money through mainstream digital platforms."
              }
            },
            {
              id: "privacy-tools",
              label: "Research Privacy Tools",
              risk: 30,
              outcome: {
                funds: -40,
                privacy: 15,
                nextRoute: "bitcoin-basics",
                message: "You begin using privacy-preserving tools and learn about Bitcoin as an alternative financial system resistant to censorship and surveillance."
              }
            }
          ]
        },
        "financial-exclusion": {
          options: [
            {
              id: "plead-reinstatement",
              label: "Plead for Account Reinstatement",
              risk: 25,
              outcome: {
                funds: -50,
                privacy: -30,
                nextRoute: "social-compliance",
                message: "Your account is reinstated after you apologize and agree to enhanced monitoring and restrictions. You're now subject to special review of all transactions."
              }
            },
            {
              id: "permanent-exclusion",
              label: "Face Growing Financial Exclusion",
              risk: 70,
              outcome: {
                funds: -400,
                privacy: -20,
                restart: true,
                message: "You discover that your exclusion has spread to other financial services through shared blacklists. You can no longer access banking, payment apps, or online marketplaces. Game Over."
              }
            },
            {
              id: "find-bitcoin",
              label: "Discover Bitcoin as an Alternative",
              risk: 35,
              outcome: {
                funds: -70,
                privacy: 25,
                nextRoute: "bitcoin-basics",
                message: "Through research, you discover that Bitcoin doesn't require permission to use and cannot exclude users based on their views or profiles."
              }
            }
          ]
        },
        "social-compliance": {
          options: [
            {
              id: "self-censor",
              label: "Self-Censor to Maintain Access",
              risk: 15,
              outcome: {
                funds: -200,
                privacy: -50,
                nextRoute: "complete-monitoring",
                message: "You carefully avoid any controversy to maintain financial access. Your purchases are analyzed for 'suspicious patterns,' and certain transactions require pre-approval."
              }
            },
            {
              id: "social-credit-decline",
              label: "Watch Your Social Credit Score Decline",
              risk: 40,
              outcome: {
                funds: -350,
                privacy: -60,
                restart: true,
                message: "Despite efforts to comply, association with 'low-scoring' individuals impacts your own score. Higher interest rates, declined applications, and service limitations follow. Game Over."
              }
            },
            {
              id: "exit-strategy",
              label: "Develop Exit Strategy",
              risk: 45,
              outcome: {
                funds: -100,
                privacy: 20,
                nextRoute: "bitcoin-basics",
                message: "You begin discreetly reducing dependence on surveilled financial systems while learning about Bitcoin and self-custody."
              }
            }
          ]
        },
        "bitcoin-basics": {
          options: [
            {
              id: "buy-exchange",
              label: "Buy Bitcoin on a Regulated Exchange",
              risk: 40,
              outcome: {
                funds: -50, // fees
                privacy: -10,
                nextRoute: "bitcoin-kyc",
                message: "You purchase Bitcoin on a regulated exchange, requiring ID verification and creating a permanent record linking your identity to your Bitcoin address."
              }
            },
            {
              id: "p2p-purchase",
              label: "Purchase Bitcoin Peer-to-Peer",
              risk: 30,
              outcome: {
                funds: -70, // premium for p2p
                privacy: 20,
                nextRoute: "bitcoin-strategy",
                message: "You buy Bitcoin directly from another person, maintaining better privacy but paying a slight premium."
              }
            },
            {
              id: "bitcoin-education",
              label: "Deepen Your Bitcoin Knowledge",
              risk: 10,
              outcome: {
                funds: -30,
                privacy: 10,
                nextRoute: "bitcoin-security",
                message: "You learn about Bitcoin security best practices, self-custody, privacy techniques, and how the network operates without central control."
              }
            }
          ]
        },
        "bitcoin-kyc": {
          options: [
            {
              id: "exchange-freeze",
              label: "Experience Account Freeze",
              risk: 50,
              outcome: {
                funds: -200,
                privacy: -20,
                nextRoute: "bitcoin-lesson",
                message: "Your exchange account is temporarily frozen for 'suspicious activity' after withdrawing to a personal wallet. You realize exchanges can be points of control and surveillance."
              }
            },
            {
              id: "chain-analysis",
              label: "Learn About Chain Analysis",
              risk: 20,
              outcome: {
                funds: -30,
                privacy: 10,
                nextRoute: "bitcoin-privacy",
                message: "You discover that blockchain analytics companies track Bitcoin movements, especially those from KYC exchanges, potentially linking your future transactions to your identity."
              }
            },
            {
              id: "withdraw-wallet",
              label: "Withdraw to Self-Custody Wallet",
              risk: 25,
              outcome: {
                funds: -20, // withdrawal fee
                privacy: 15,
                nextRoute: "bitcoin-security",
                message: "You move your Bitcoin from the exchange to a wallet where you control the private keys, reducing counterparty risk and increasing autonomy."
              }
            }
          ]
        },
        "bitcoin-lesson": {
          options: [
            {
              id: "leave-kyc",
              label: "Avoid KYC Bitcoin Services",
              risk: 25,
              outcome: {
                funds: -50,
                privacy: 20,
                nextRoute: "bitcoin-strategy",
                message: "You learn to obtain and use Bitcoin without relying on regulated exchanges or services that report to authorities."
              }
            },
            {
              id: "recovery-lesson",
              label: "Implement Backup Strategy",
              risk: 15,
              outcome: {
                funds: -20,
                privacy: 10,
                nextRoute: "bitcoin-security",
                message: "You create secure backups of your wallet's recovery phrase, ensuring you can access your funds even if your devices are lost or confiscated."
              }
            }
          ]
        },
        "bitcoin-privacy": {
          options: [
            {
              id: "coinjoin-technique",
              label: "Learn Advanced Privacy Techniques",
              risk: 30,
              outcome: {
                funds: -40,
                privacy: 25,
                nextRoute: "bitcoin-strategy",
                message: "You learn about CoinJoin and other privacy-enhancing protocols that can help break the chain of surveillance when using Bitcoin."
              }
            },
            {
              id: "lightning-channels",
              label: "Explore Lightning Network",
              risk: 20,
              outcome: {
                funds: -30,
                privacy: 20,
                nextRoute: "bitcoin-victory",
                message: "You discover the Lightning Network, which offers faster, cheaper Bitcoin transactions with significantly improved privacy compared to on-chain transactions."
              }
            }
          ]
        },
        "bitcoin-security": {
          options: [
            {
              id: "hardware-wallet",
              label: "Invest in a Hardware Wallet",
              risk: 15,
              outcome: {
                funds: -80, // cost of hardware wallet
                privacy: 15,
                nextRoute: "bitcoin-strategy",
                message: "You purchase a hardware wallet to securely store your private keys offline, significantly improving security against hacking."
              }
            },
            {
              id: "multisig-setup",
              label: "Setup a Multisignature Wallet",
              risk: 25,
              outcome: {
                funds: -60,
                privacy: 15,
                nextRoute: "bitcoin-victory",
                message: "You configure a multisignature wallet requiring multiple devices to authorize transactions, protecting against single points of failure or confiscation."
              }
            },
            {
              id: "operational-security",
              label: "Improve Operational Security",
              risk: 10,
              outcome: {
                funds: -20,
                privacy: 20,
                nextRoute: "bitcoin-privacy",
                message: "You implement best practices for digital security, including strong passwords, 2FA, and compartmentalization of financial activities."
              }
            }
          ]
        },
        "bitcoin-strategy": {
          options: [
            {
              id: "gradual-transition",
              label: "Gradually Transition to Bitcoin Economy",
              risk: 25,
              outcome: {
                funds: -50,
                privacy: 30,
                nextRoute: "bitcoin-victory",
                message: "You slowly shift more of your economic activity to Bitcoin, reducing reliance on surveillance-based financial systems while maintaining practical functionality."
              }
            },
            {
              id: "community-building",
              label: "Connect with Privacy-Focused Community",
              risk: 20,
              outcome: {
                funds: -30,
                privacy: 25,
                nextRoute: "bitcoin-victory",
                message: "You join local meetups and online communities focused on privacy and financial sovereignty, learning from others with similar goals."
              }
            },
            {
              id: "stablecoin-hedge",
              label: "Use Stablecoins as Volatility Hedge",
              risk: 35,
              outcome: {
                funds: -70,
                privacy: 5,
                nextRoute: "bitcoin-caution",
                message: "You diversify into stablecoins to reduce price volatility, but discover that most stablecoins have centralized control and surveillance capabilities."
              }
            }
          ]
        },
        "bitcoin-caution": {
          options: [
            {
              id: "reassess-stables",
              label: "Reassess Centralized Stablecoins",
              risk: 25,
              outcome: {
                funds: -40,
                privacy: 15,
                nextRoute: "bitcoin-strategy",
                message: "You realize that many stablecoins have centralized controls that reproduce the surveillance and censorship vulnerabilities you're trying to avoid."
              }
            },
            {
              id: "self-sovereignty",
              label: "Embrace Self-Sovereign Bitcoin Strategy",
              risk: 15,
              outcome: {
                funds: -30,
                privacy: 30,
                nextRoute: "bitcoin-victory",
                message: "You develop a long-term perspective on Bitcoin, focusing on its censorship-resistance and protection against monetary debasement rather than short-term price movements."
              }
            }
          ]
        },
        "bitcoin-victory": {
          options: [
            {
              id: "financial-freedom",
              label: "Achieve Financial Sovereignty",
              risk: 5,
              outcome: {
                funds: 100,
                privacy: 40,
                complete: true,
                message: "You've successfully established financial sovereignty through Bitcoin. You control your own keys, can transact globally without permission, and your savings are protected from surveillance and debasement. Congratulations!"
              }
            }
          ]
        }
      },
      resistanceNetworks: [
        {
          name: "Bitcoin Privacy Tools",
          description: "Software that enhances Bitcoin transaction privacy through techniques like CoinJoin, PayJoin, and Lightning Network payments."
        },
        {
          name: "Self-Custody Education",
          description: "Communities teaching secure self-custody of Bitcoin private keys, reducing reliance on regulated third parties."
        },
        {
          name: "P2P Exchange Networks",
          description: "Person-to-person Bitcoin trading platforms that facilitate exchange without requiring identity verification."
        },
        {
          name: "Financial Freedom Media",
          description: "Educational resources explaining monetary history, Bitcoin fundamentals, and techniques for financial sovereignty."
        },
        {
          name: "Open-Source Hardware",
          description: "Community-verified hardware wallet projects that secure Bitcoin private keys without backdoors or surveillance capabilities."
        }
      ]
    }
  }
];