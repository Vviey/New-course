import { MissionContent } from './realm1-missions';

// Realm 2: The Central Citadel - Control vs. Sovereignty
export const realm2Missions: MissionContent[] = [
  // Mission 1: The Central Bank Role Play
  {
    id: 201,
    title: "The Central Bank Experience",
    subtitle: "Understanding Monetary Policy",
    description: "Step into the role of a central banker and experience the challenges of maintaining economic stability through monetary policy decisions. See firsthand how money supply affects an economy and the trade-offs involved in monetary decision-making.",
    objectives: [
      "Experience the role and responsibilities of a central banker",
      "Make monetary policy decisions and observe their impact",
      "Balance inflation control and economic growth",
      "Understand the limitations of centralized monetary systems"
    ],
    simulationType: "roleplay",
    simulationData: {
      scenarios: [
        {
          id: 1,
          title: "The Inflation Crisis",
          description: "The economy is experiencing rising inflation at 7%, above your target of 2%. Unemployment is at 5%. What monetary policy action will you take?",
          options: [
            {
              id: "a",
              text: "Raise interest rates significantly (by 1%)",
              outcome: "Inflation begins to slow but unemployment rises to 7% as economic growth slows. Businesses struggle with higher borrowing costs.",
              consequences: ["Inflation: Decreasing", "Unemployment: Rising", "Economic Growth: Slowing"],
              isOptimal: true
            },
            {
              id: "b",
              text: "Raise interest rates modestly (by 0.5%)",
              outcome: "Inflation continues to rise slightly while unemployment stays stable. Markets are uncertain about your commitment to price stability.",
              consequences: ["Inflation: Stable/Slight Increase", "Unemployment: Stable", "Economic Growth: Steady"],
              isOptimal: false
            },
            {
              id: "c", 
              text: "Keep interest rates unchanged",
              outcome: "Inflation accelerates to 9% within six months. Economic activity remains strong initially but uncertainty increases.",
              consequences: ["Inflation: Rapidly Increasing", "Unemployment: Stable (Short-term)", "Economic Growth: Overheating"],
              isOptimal: false
            }
          ]
        },
        {
          id: 2,
          title: "The Growth Dilemma",
          description: "Economic growth has slowed to 0.5% and unemployment is rising to 8%. Inflation is low at 1%. How will you respond?",
          options: [
            {
              id: "a",
              text: "Cut interest rates significantly (by 1%)",
              outcome: "Economic activity begins to recover but asset prices rise rapidly, creating a potential bubble in housing and stock markets.",
              consequences: ["Economic Growth: Improving", "Unemployment: Decreasing", "Asset Prices: Potential Bubble"],
              isOptimal: false
            },
            {
              id: "b",
              text: "Cut interest rates modestly (by 0.5%)",
              outcome: "The economy recovers gradually with unemployment slowly decreasing. Inflation remains within target.",
              consequences: ["Economic Growth: Gradually Improving", "Unemployment: Slowly Decreasing", "Inflation: Within Target"],
              isOptimal: true
            },
            {
              id: "c",
              text: "Launch a large quantitative easing program",
              outcome: "Markets rally and economic growth improves quickly, but inflation expectations rise significantly, threatening future price stability.",
              consequences: ["Economic Growth: Rapidly Improving", "Inflation Expectations: Rising", "Financial Stability: At Risk"],
              isOptimal: false
            }
          ]
        },
        {
          id: 3,
          title: "The Financial Crisis",
          description: "Several major banks are facing liquidity problems due to bad loans. The financial system is showing signs of stress with interbank lending rates rising sharply. What action will you take?",
          options: [
            {
              id: "a",
              text: "Provide emergency liquidity to struggling banks",
              outcome: "Financial panic is averted but concerns about moral hazard grow. The public criticizes the central bank for bailing out irresponsible banks.",
              consequences: ["Financial Stability: Improved", "Moral Hazard: Increased", "Public Trust: Decreased"],
              isOptimal: true
            },
            {
              id: "b",
              text: "Let struggling banks fail to prevent moral hazard",
              outcome: "One major bank collapses, triggering widespread panic. The entire financial system faces a severe credit crunch, requiring an even larger intervention later.",
              consequences: ["Financial Stability: Severely Damaged", "Economic Activity: Sharp Decline", "Unemployment: Sharp Increase"],
              isOptimal: false
            },
            {
              id: "c",
              text: "Cut interest rates to zero and launch unprecedented quantitative easing",
              outcome: "Financial markets stabilize but the massive intervention causes currency depreciation and inflation concerns. Long-term economic distortions appear likely.",
              consequences: ["Financial Stability: Restored", "Currency Value: Decreased", "Future Inflation Risk: High"],
              isOptimal: false
            }
          ]
        }
      ]
    },
    reflectionQuestion: "Based on your experience as a central banker, what limitations did you observe in the central banking system? How might a decentralized monetary system like Bitcoin address some of these issues?"
  },

  // Mission 2: Inflation Time Machine
  {
    id: 202,
    title: "The Inflation Time Machine",
    subtitle: "Money Supply and Its Consequences",
    description: "Travel through different eras to witness how changes in money supply have affected prices, savings, and economic stability. Experience hyperinflation firsthand and understand why controlled supply matters for a currency's value.",
    objectives: [
      "Compare purchasing power across different monetary regimes",
      "Witness the effects of currency debasement and money printing",
      "Experience hyperinflation scenarios from history",
      "Understand Bitcoin's fixed supply as a solution to inflation"
    ],
    simulationType: "inflation",
    simulationData: {
      basicItems: [
        { id: "bread", name: "Loaf of Bread", initialPrice: 0.05 },
        { id: "house", name: "Average Home", initialPrice: 2000 },
        { id: "car", name: "Automobile", initialPrice: 800 },
        { id: "salary", name: "Average Annual Salary", initialPrice: 1500 }
      ],
      events: [
        {
          year: 1925,
          title: "Stable Gold Standard Era",
          description: "The U.S. dollar is backed by gold at a fixed rate of $20.67 per ounce, creating price stability over long periods.",
          priceMultiplier: 1.0
        },
        {
          year: 1935,
          title: "Gold Reserve Act",
          description: "The U.S. government revalues gold to $35 per ounce, effectively devaluing the dollar by 40%.",
          priceMultiplier: 1.4
        },
        {
          year: 1945,
          title: "Post-WWII Bretton Woods System",
          description: "International monetary system established with the U.S. dollar as the world's reserve currency, still backed by gold.",
          priceMultiplier: 1.8
        },
        {
          year: 1971,
          title: "Nixon Shock - End of Gold Standard",
          description: "President Nixon ends the dollar's convertibility to gold, moving to a pure fiat currency system with no commodity backing.",
          priceMultiplier: 2.5
        },
        {
          year: 1980,
          title: "Great Inflation Era",
          description: "Inflation reaches 14% in the U.S. following a decade of loose monetary policy and oil crises.",
          priceMultiplier: 5.0
        },
        {
          year: 1995,
          title: "Moderate Inflation Period",
          description: "The Federal Reserve maintains a 2-3% inflation target, with gradual but persistent price increases.",
          priceMultiplier: 10.0
        },
        {
          year: 2008,
          title: "Global Financial Crisis",
          description: "Central banks around the world implement quantitative easing, dramatically expanding the money supply.",
          priceMultiplier: 15.0
        },
        {
          year: 2020,
          title: "Pandemic Response",
          description: "Unprecedented money creation to fund economic support during the global pandemic, with the Fed's balance sheet expanding by trillions.",
          priceMultiplier: 22.0
        },
        {
          year: 2023,
          title: "Post-Pandemic Inflation Surge",
          description: "Inflation reaches multi-decade highs following years of monetary expansion.",
          priceMultiplier: 26.0
        }
      ]
    },
    reflectionQuestion: "How did the increasing money supply affect your purchasing power over time? What advantages might a currency with a fixed supply limit offer?"
  },

  // Mission 3: Payment Privacy Simulator
  {
    id: 203,
    title: "Financial Surveillance Detective",
    subtitle: "Payment Privacy in the Digital Age",
    description: "In this simulation, you'll analyze different payment methods and understand the surprising amount of personal data revealed through financial transactions. Learn how centralized financial systems enable surveillance and how Bitcoin provides an alternative.",
    objectives: [
      "Analyze the privacy implications of different payment methods",
      "Understand what data is collected in various financial systems",
      "Identify how financial surveillance works in practice",
      "Compare traditional finance privacy with Bitcoin privacy"
    ],
    simulationType: "privacy",
    simulationData: {
      paymentOptions: [
        {
          id: "credit",
          name: "Credit Card",
          description: "The most common electronic payment method",
          dataCollected: [
            "Full name and billing address",
            "Complete transaction history",
            "Merchant category codes for all purchases",
            "Location data at time of purchase",
            "Spending patterns and habits",
            "Credit history and score",
            "Purchase frequency and amount patterns"
          ],
          entities: [
            "Card issuing bank",
            "Card network (Visa, Mastercard)",
            "Merchant's payment processor",
            "Data aggregators and marketers",
            "Government agencies (with proper request)"
          ],
          privacyScore: 2,
          scenario: "Maria uses her credit card for most purchases. When she applies for health insurance, she's surprised to find her premium is higher than expected. The insurer's algorithm flagged frequent purchases at fast food restaurants and liquor stores as potential health risks."
        },
        {
          id: "mobile",
          name: "Mobile Payment App",
          description: "Smartphone-based payment services like Venmo, Cash App, or Apple Pay",
          dataCollected: [
            "Transaction history with timestamps",
            "Social connections between users",
            "Purchase locations and movement patterns",
            "Merchant information and categories",
            "Bank account or card details",
            "Device information",
            "Messages and notes attached to payments"
          ],
          entities: [
            "Payment app provider",
            "Phone manufacturer",
            "App store owner",
            "Advertising networks",
            "Partner companies in data sharing agreements",
            "Government agencies (with proper request)"
          ],
          privacyScore: 3,
          scenario: "Jamal regularly splits bills with friends using a popular payment app that has a social feed. When he paid his portion of the rent, he didn't realize the transaction was public. A potential landlord saw this activity, noted his irregular payment timing, and rejected his rental application."
        },
        {
          id: "bank",
          name: "Bank Transfer (ACH)",
          description: "Direct electronic transfers between bank accounts",
          dataCollected: [
            "Account numbers and bank details",
            "Transaction amount and frequency",
            "Sender and recipient information",
            "Transaction purpose (if noted)",
            "Balance information",
            "Spending and income patterns",
            "Linked account details"
          ],
          entities: [
            "Sending bank",
            "Receiving bank",
            "Central clearing houses",
            "Banking regulators",
            "Government agencies (with proper request)",
            "Financial intelligence units"
          ],
          privacyScore: 4,
          scenario: "Ahmed regularly sends money to family in his home country. After several transfers, his bank freezes his account pending a review, citing 'unusual activity patterns' that triggered automated anti-money laundering flags, despite the legitimate nature of his transactions."
        },
        {
          id: "cash",
          name: "Physical Cash",
          description: "Traditional paper and coin currency",
          dataCollected: [
            "No direct digital data collection",
            "Possible ATM withdrawal records",
            "Possible surveillance camera footage",
            "No transaction history beyond physical records"
          ],
          entities: [
            "No direct digital tracking entities",
            "Bank knows when cash was withdrawn (if applicable)",
            "Merchants don't capture personally identifiable data"
          ],
          privacyScore: 8,
          scenario: "Lin prefers using cash for most purchases, especially for politically sensitive books and materials. While this provides good privacy, she finds it increasingly difficult as more businesses go cashless and online purchases require digital payment methods."
        },
        {
          id: "bitcoin_exchange",
          name: "Bitcoin (via Exchange)",
          description: "Bitcoin purchased on exchange and sent from exchange wallet",
          dataCollected: [
            "Identity verification documents (KYC)",
            "Wallet addresses used",
            "Transaction values and timing",
            "IP address when accessing exchange",
            "Withdrawal destinations",
            "Blockchain transaction history (pseudonymous)"
          ],
          entities: [
            "Bitcoin exchange",
            "Blockchain analytics companies",
            "Anyone with blockchain explorer tools",
            "Government agencies (with proper request)"
          ],
          privacyScore: 5,
          scenario: "Carlos bought Bitcoin on a regulated exchange for investment purposes. When he later sent some to a friend who had an account flagged for gambling sites, Carlos received an inquiry from the exchange questioning the purpose of his transaction."
        },
        {
          id: "bitcoin_selfcustody",
          name: "Bitcoin (Self-Custody)",
          description: "Bitcoin acquired peer-to-peer and kept in self-custody wallet",
          dataCollected: [
            "Blockchain transaction record (pseudonymous)",
            "Public key information",
            "Transaction values",
            "Transaction timing"
          ],
          entities: [
            "Anyone with blockchain explorer tools",
            "Blockchain analytics companies (limited capability without KYC data)",
            "No central authority with complete view"
          ],
          privacyScore: 7,
          scenario: "Sophia uses Bitcoin acquired from a peer and kept in her own wallet. While her transactions are visible on the blockchain, they're not directly linked to her identity. She uses best practices like avoiding address reuse and maintaining separation between different activities."
        }
      ]
    },
    reflectionQuestion: "How does the level of financial surveillance in traditional systems compare to Bitcoin's approach? What are the trade-offs between convenience, compliance, and privacy in payment systems?"
  },

  // Mission 4: Exclusion Web Game
  {
    id: 204,
    title: "Breaking the Exclusion Web",
    subtitle: "Financial Inclusion and Barriers",
    description: "Discover the invisible barriers that keep billions of people from accessing basic financial services. Connect real-world barriers with the groups they affect most and learn how Bitcoin can help overcome these obstacles.",
    objectives: [
      "Identify key barriers to financial inclusion globally",
      "Understand which populations are most affected by financial exclusion",
      "Analyze how traditional banking requirements create systemic barriers",
      "Explore how Bitcoin addresses financial inclusion challenges"
    ],
    simulationType: "exclusion",
    simulationData: {
      barriers: [
        {
          id: 1,
          name: "Identity Documentation",
          description: "Requirement for government-issued IDs, proof of address, and other formal documentation to open accounts or access financial services."
        },
        {
          id: 2,
          name: "Minimum Balance Requirements",
          description: "Mandatory minimum deposits or balances required to open or maintain financial accounts without fees."
        },
        {
          id: 3,
          name: "Geographic Access",
          description: "Physical distance to bank branches or financial service providers."
        },
        {
          id: 4,
          name: "Banking Fees",
          description: "Monthly maintenance, transaction, withdrawal, and other service charges that make banking unaffordable."
        },
        {
          id: 5,
          name: "Financial Literacy",
          description: "Knowledge and understanding of financial concepts, products, and systems."
        },
        {
          id: 6,
          name: "Credit History",
          description: "Required past banking relationships and formal borrowing history to access loans and other services."
        }
      ],
      groups: [
        {
          id: 1,
          name: "Refugees & Displaced Persons",
          description: "People forced to flee their homes due to conflict, persecution, or disasters."
        },
        {
          id: 2,
          name: "Rural Communities",
          description: "Populations living in non-urban areas, often far from financial infrastructure."
        },
        {
          id: 3,
          name: "Low-Income Workers",
          description: "Individuals and families with limited financial resources, often working in informal economies."
        },
        {
          id: 4,
          name: "Unhoused Populations",
          description: "People without stable, permanent housing or addresses."
        },
        {
          id: 5,
          name: "Migrant Workers",
          description: "People who move within or across borders for employment, often sending money to family members."
        },
        {
          id: 6,
          name: "Women in Restrictive Societies",
          description: "Women in regions where cultural or legal barriers limit their financial independence."
        }
      ],
      correctMatches: [
        {
          barrierId: 1,
          groupId: 1,
          explanation: "Refugees often lose or lack identity documents when fleeing their homes. Without these papers, they cannot open bank accounts or access formal financial services in their new locations."
        },
        {
          barrierId: 1,
          groupId: 4,
          explanation: "Without a permanent address, unhoused individuals cannot meet proof of address requirements for opening bank accounts, creating a cycle of financial exclusion."
        },
        {
          barrierId: 2,
          groupId: 3,
          explanation: "Minimum balance requirements of $25-$100 can be unattainable for those living paycheck to paycheck, keeping low-income workers out of the banking system."
        },
        {
          barrierId: 3,
          groupId: 2,
          explanation: "In many countries, the nearest bank branch might be hours away from rural communities, making regular banking transactions impractical or impossible."
        },
        {
          barrierId: 4,
          groupId: 3,
          explanation: "Banking fees can consume a significant percentage of income for low-wage workers, making formal banking services unaffordable."
        },
        {
          barrierId: 5,
          groupId: 2,
          explanation: "Limited access to education in rural areas often results in lower financial literacy, creating barriers to understanding and using financial services effectively."
        },
        {
          barrierId: 6,
          groupId: 5,
          explanation: "Migrant workers moving between countries typically cannot transfer their credit history, forcing them to start from zero in each new location."
        },
        {
          barrierId: 6,
          groupId: 6,
          explanation: "In societies where women have limited financial independence, they often cannot build credit histories in their own names, restricting access to loans and financial services."
        }
      ],
      stats: [
        {
          value: "1.4 billion",
          label: "Adults globally without access to banking services"
        },
        {
          value: "43%",
          label: "Women in developing countries without bank accounts"
        },
        {
          value: "32%",
          label: "Cost of remittances to low-income countries (as % of amount sent)"
        },
        {
          value: "2.5 hours",
          label: "Average travel time to nearest bank branch in rural African communities"
        },
        {
          value: "56%",
          label: "Refugees in camps without access to any formal financial services"
        }
      ],
      caseStudies: [
        {
          title: "Bitcoin Beach: El Zonte, El Salvador",
          content: "In this small coastal town, an anonymous Bitcoin donor helped create a circular Bitcoin economy that provided financial services to unbanked residents, demonstrating how Bitcoin enables financial inclusion without traditional banking requirements."
        },
        {
          title: "Refugee Empowerment in Uganda",
          content: "Organizations are using Bitcoin to provide financial services to refugees who lack identification papers, allowing them to receive donations, build savings, and establish economic independence without formal banking access."
        },
        {
          title: "Empowering Rural Farmers in Kenya",
          content: "Agricultural workers who previously had no banking access now use Bitcoin wallets to receive payments for crops, store value, and make purchases, bypassing the need to travel hours to the nearest bank branch."
        }
      ]
    },
    reflectionQuestion: "How does Bitcoin's permission-less nature address the barriers to financial inclusion that traditional systems create? Which excluded group might benefit most from Bitcoin adoption in your opinion?"
  },

  // Mission 5: Central Control Consequences Quiz
  {
    id: 205,
    title: "Centralized Control Scenarios",
    subtitle: "Consequences of Economic Authoritarianism",
    description: "Test your understanding of how centralized monetary control can impact individuals and societies through real-world case studies and hypothetical scenarios.",
    objectives: [
      "Identify how monetary policy decisions affect different population segments",
      "Recognize the potential for coercion in centralized financial systems",
      "Understand historical examples of monetary control abuse",
      "Evaluate how decentralized alternatives modify these power dynamics"
    ],
    simulationType: "quiz",
    simulationData: {
      questions: [
        {
          id: 1,
          text: "In 2016, India suddenly demonetized 86% of its currency in circulation (500 and 1000 rupee notes). What was the primary impact on ordinary citizens?",
          answers: [
            {
              id: 1,
              text: "Most citizens saw their black market assets appreciate in value",
              isCorrect: false,
              explanation: "Black market assets did not generally appreciate; instead, many people lost substantial value as they struggled to exchange old notes within the tight deadlines."
            },
            {
              id: 2,
              text: "Long lines at banks, cash shortages, and significant economic disruption for everyday transactions",
              isCorrect: true,
              explanation: "The sudden demonetization caused severe cash shortages. People stood in lines for hours or days to exchange old notes, and many small businesses that operated primarily in cash were devastated."
            },
            {
              id: 3,
              text: "Most citizens received direct digital payments as compensation",
              isCorrect: false,
              explanation: "No widespread compensation was provided; citizens were simply expected to exchange their old notes for new ones within a limited timeframe."
            },
            {
              id: 4,
              text: "The policy only affected wealthy citizens with large cash holdings",
              isCorrect: false,
              explanation: "While targeting black money held by wealthy individuals was one stated goal, the policy disproportionately affected ordinary citizens, particularly the poor and those in rural areas with limited banking access."
            }
          ],
          explanation: "India's demonetization experiment shows how centralized monetary decisions can create widespread disruption. The policy was announced with just hours of notice, giving citizens no time to prepare. While intended to fight corruption and tax evasion, it primarily impacted ordinary citizens conducting everyday business in cash."
        },
        {
          id: 2,
          text: "During hyperinflation in Zimbabwe (2007-2009), what happened to citizens' savings held in Zimbabwean dollars?",
          answers: [
            {
              id: 1,
              text: "Savings were protected by government insurance programs",
              isCorrect: false,
              explanation: "No effective insurance programs existed to protect savings from the hyperinflation, which reached billions of percent."
            },
            {
              id: 2,
              text: "Savings were automatically converted to US dollars at favorable rates",
              isCorrect: false,
              explanation: "No automatic conversion occurred. People who couldn't convert to foreign currencies or hard assets saw their savings essentially evaporate."
            },
            {
              id: 3,
              text: "The value of savings was effectively reduced to zero as inflation destroyed purchasing power",
              isCorrect: true,
              explanation: "With inflation reaching 79.6 billion percent at its peak, savings held in Zimbabwean dollars became essentially worthless. A trillion Zimbabwean dollars might not buy a loaf of bread."
            },
            {
              id: 4,
              text: "Savings earned high interest rates that offset inflation",
              isCorrect: false,
              explanation: "While banks did raise interest rates, they couldn't possibly keep pace with hyperinflation rates of millions or billions of percent."
            }
          ],
          explanation: "Zimbabwe's hyperinflation demonstrates the ultimate consequence of centralized money printing. The government's ability to create unlimited money led to one of history's worst hyperinflations, wiping out savings, pensions, and wages. Citizens who couldn't access foreign currencies lost everything."
        },
        {
          id: 3,
          text: "When Cyprus experienced a banking crisis in 2013, what action did the government take regarding depositors' funds?",
          answers: [
            {
              id: 1,
              text: "All bank deposits were fully guaranteed by the European Central Bank",
              isCorrect: false,
              explanation: "The European Central Bank did not provide full guarantees for deposits. Instead, a 'bail-in' approach was used."
            },
            {
              id: 2,
              text: "Bank holidays were declared while the government printed more money",
              isCorrect: false,
              explanation: "While bank holidays were declared, Cyprus couldn't print money as it uses the Euro, which is controlled by the European Central Bank."
            },
            {
              id: 3,
              text: "A one-time wealth tax was imposed on all citizens equally",
              isCorrect: false,
              explanation: "The levy was not equal across all citizens but specifically targeted bank depositors above certain thresholds."
            },
            {
              id: 4,
              text: "A significant percentage of deposits above €100,000 was confiscated to recapitalize banks",
              isCorrect: true,
              explanation: "The Cypriot government imposed a 'bail-in,' confiscating up to 47.5% of bank deposits exceeding €100,000 to recapitalize failing banks, demonstrating how quickly funds in centralized banks can be appropriated."
            }
          ],
          explanation: "The Cyprus bail-in showed that money in banks isn't always secure from government appropriation. Depositors who thought their money was safe suddenly found a substantial portion confiscated. This event triggered interest in Bitcoin as people realized the risks of keeping wealth in systems controlled by centralized authorities."
        },
        {
          id: 4,
          text: "During Canada's Freedom Convoy protests in 2022, what unprecedented financial measure did the government take?",
          answers: [
            {
              id: 1,
              text: "Required explicit consent before any donations could be processed",
              isCorrect: false,
              explanation: "The government did not implement a consent-based system but rather took direct action to freeze accounts."
            },
            {
              id: 2,
              text: "Froze bank accounts of protesters and donors without requiring court orders",
              isCorrect: true,
              explanation: "The Canadian government invoked the Emergencies Act to freeze bank accounts of not only protest organizers but also donors and supporters, without requiring standard judicial processes or court orders."
            },
            {
              id: 3,
              text: "Nationalized all major Canadian banks temporarily",
              isCorrect: false,
              explanation: "No nationalization of banks occurred. The government worked through existing financial institutions to implement account freezes."
            },
            {
              id: 4,
              text: "Restricted international wire transfers for all Canadian citizens",
              isCorrect: false,
              explanation: "While some financial restrictions were implemented, the government did not block all international transfers for all citizens."
            }
          ],
          explanation: "The Canadian government's response demonstrated how centralized financial systems can be weaponized for political purposes. Bank accounts were frozen without court orders, and financial institutions were required to monitor for protest-supporting transactions. This case highlighted the political risks of systems where a central authority can easily deny financial access."
        },
        {
          id: 5,
          text: "What happens to an individual's financial assets when they are 'de-banked' (have all their banking relationships terminated)?",
          answers: [
            {
              id: 1,
              text: "Assets are typically held in escrow until the individual can find a new bank",
              isCorrect: false,
              explanation: "There is no standard escrow system. Individuals often struggle to recover funds or transfer them when de-banked."
            },
            {
              id: 2,
              text: "The individual typically receives their balance in cash immediately",
              isCorrect: false,
              explanation: "De-banked individuals often face significant challenges and delays in accessing their funds, rarely receiving immediate cash payouts."
            },
            {
              id: 3,
              text: "They lose the ability to participate in the formal economy, receive payments, or store funds securely",
              isCorrect: true,
              explanation: "Without bank accounts, individuals cannot receive direct deposits, make electronic payments, get loans, or participate fully in the modern economy. Even basic functions like receiving a salary become challenging."
            },
            {
              id: 4,
              text: "They must use cryptocurrency exclusively for all future transactions",
              isCorrect: false,
              explanation: "While cryptocurrency can provide an alternative, de-banked individuals are not required to use it and may find other workarounds like prepaid cards or informal financial networks."
            }
          ],
          explanation: "Banking access has become essential for modern economic participation. When someone is de-banked, they effectively become financial outcasts, unable to receive direct deposits, make electronic payments, get loans, or store money securely. De-banking can occur for political reasons, suspected (but not proven) illegal activity, or simply being in a high-risk category."
        },
        {
          id: 6,
          text: "What capability will Central Bank Digital Currencies (CBDCs) potentially give to governments that they don't fully have with current financial systems?",
          answers: [
            {
              id: 1,
              text: "The ability to implement negative interest rates directly on all holdings",
              isCorrect: false,
              explanation: "While this is one possible feature of CBDCs, it's not the most significant new capability compared to current systems."
            },
            {
              id: 2,
              text: "Programmable money with expiration dates, usage restrictions, and complete transaction surveillance",
              isCorrect: true,
              explanation: "CBDCs enable unprecedented control: money that expires if not spent, can only be used for approved purchases, moves only to permitted recipients, and provides complete visibility into all transactions without the limitations of current banking surveillance."
            },
            {
              id: 3,
              text: "The ability to print unlimited currency",
              isCorrect: false,
              explanation: "Governments with sovereign currencies already have this ability with traditional fiat currencies."
            },
            {
              id: 4,
              text: "Direct person-to-person transactions without intermediaries",
              isCorrect: false,
              explanation: "While some CBDC designs might allow for this, most proposed CBDCs actually enhance government visibility and control rather than enabling truly peer-to-peer transactions."
            }
          ],
          explanation: "CBDCs represent the ultimate form of centralized monetary control, giving authorities powers that current systems only partially provide. With programmable digital currency, governments could implement social credit systems, enforce spending on approved items only, activate automatic taxation, implement capital controls, and monitor every transaction in real-time."
        }
      ]
    },
    reflectionQuestion: "Based on these historical examples, what concerns might arise from increasing centralization of financial control? How might Bitcoin's decentralized design address some of these concerns?"
  },

  // Mission 6: Global Money Web
  {
    id: 206,
    title: "The Global Money Web",
    subtitle: "Reserve Currencies and Power",
    description: "Map the intricate connections between global currencies and understand how reserve currency status grants economic and political power. Then, experience how the 1971 Nixon Shock fundamentally changed the global monetary landscape.",
    objectives: [
      "Visualize the hierarchy of the global monetary system",
      "Understand how the US dollar gained and maintains reserve status",
      "Discover the advantages and consequences of issuing the world's reserve currency",
      "Analyze how the 1971 Nixon Shock transformed money worldwide"
    ],
    simulationType: "globalflow",
    simulationData: {
      globalFlow: {
        nodes: [
          {
            id: "usd",
            label: "US Dollar",
            description: "World's primary reserve currency, used in 88% of international transactions",
            position: { x: 50, y: 20 },
            size: "large",
            connections: ["euro", "jpy", "gbp", "cad", "aud", "cny"]
          },
          {
            id: "euro",
            label: "Euro",
            description: "Second largest reserve currency, used primarily in European trade",
            position: { x: 30, y: 40 },
            size: "medium",
            connections: ["pln", "sek", "dkk"]
          },
          {
            id: "jpy",
            label: "Japanese Yen",
            description: "Third largest reserve currency, dominant in Asian markets",
            position: { x: 70, y: 40 },
            size: "medium",
            connections: ["krw", "twd"]
          },
          {
            id: "gbp",
            label: "British Pound",
            description: "Fourth largest reserve currency",
            position: { x: 20, y: 60 },
            size: "medium",
            connections: []
          },
          {
            id: "cny",
            label: "Chinese Yuan",
            description: "Growing reserve currency, tightly controlled by Chinese government",
            position: { x: 80, y: 60 },
            size: "medium",
            connections: ["thb", "myr"]
          },
          {
            id: "cad",
            label: "Canadian Dollar",
            description: "Commodity-based currency with moderate reserve status",
            position: { x: 40, y: 60 },
            size: "small",
            connections: []
          },
          {
            id: "aud",
            label: "Australian Dollar",
            description: "Commodity-based currency with moderate reserve status",
            position: { x: 60, y: 60 },
            size: "small",
            connections: ["nzd"]
          },
          {
            id: "pln",
            label: "Polish Zloty",
            description: "Eastern European currency dependent on Euro stability",
            position: { x: 25, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "sek",
            label: "Swedish Krona",
            description: "Nordic currency closely tied to Euro performance",
            position: { x: 30, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "dkk",
            label: "Danish Krone",
            description: "Pegged to the Euro",
            position: { x: 35, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "krw",
            label: "Korean Won",
            description: "Heavily influenced by Japanese and US monetary policy",
            position: { x: 65, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "twd",
            label: "Taiwan Dollar",
            description: "Closely follows Japanese Yen and US Dollar trends",
            position: { x: 70, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "thb",
            label: "Thai Baht",
            description: "Southeast Asian currency increasingly influenced by the Yuan",
            position: { x: 75, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "myr",
            label: "Malaysian Ringgit",
            description: "Increasingly aligned with Chinese economic influence",
            position: { x: 80, y: 80 },
            size: "tiny",
            connections: []
          },
          {
            id: "nzd",
            label: "New Zealand Dollar",
            description: "Closely follows Australian Dollar movements",
            position: { x: 60, y: 80 },
            size: "tiny",
            connections: []
          }
        ],
        correctConnections: [
          { source: "usd", target: "euro", type: "dominance" },
          { source: "usd", target: "jpy", type: "dominance" },
          { source: "usd", target: "gbp", type: "dominance" },
          { source: "usd", target: "cad", type: "dominance" },
          { source: "usd", target: "aud", type: "dominance" },
          { source: "usd", target: "cny", type: "contested" },
          { source: "euro", target: "pln", type: "dominance" },
          { source: "euro", target: "sek", type: "dominance" },
          { source: "euro", target: "dkk", type: "dominance" },
          { source: "jpy", target: "krw", type: "dominance" },
          { source: "jpy", target: "twd", type: "dominance" },
          { source: "cny", target: "thb", type: "influence" },
          { source: "cny", target: "myr", type: "influence" },
          { source: "aud", target: "nzd", type: "dominance" }
        ]
      },
      dollarShock: {
        initialYear: 1971,
        events: [
          {
            year: 1944,
            title: "Bretton Woods Agreement",
            description: "44 countries agree to fix their currencies to the US dollar, while the US fixes the dollar to gold at $35 per ounce.",
            effects: [
              "US dollar becomes world's reserve currency",
              "Other nations hold dollars as backing for their own currencies",
              "Global monetary stability is tied to US fiscal discipline"
            ]
          },
          {
            year: 1960,
            title: "Growing US Deficits",
            description: "The US begins running larger deficits to fund the Vietnam War and social programs, printing more dollars.",
            effects: [
              "More dollars circulate globally than US has gold to back",
              "Foreign nations become concerned about dollar's gold backing",
              "European countries begin redeeming dollars for gold"
            ]
          },
          {
            year: 1971,
            title: "Nixon Shock",
            description: "President Nixon unilaterally ends dollar convertibility to gold, effectively ending the Bretton Woods system.",
            effects: [
              "Dollar becomes a pure fiat currency with no commodity backing",
              "Other currencies lose their indirect link to gold",
              "Global monetary system enters uncharted territory of floating exchange rates"
            ],
            pivotalEvent: true
          },
          {
            year: 1973,
            title: "Oil Crisis and Petrodollar",
            description: "US makes agreement with Saudi Arabia for oil to be priced and sold exclusively in US dollars, creating 'petrodollar' system.",
            effects: [
              "Countries must hold dollars to purchase oil",
              "US gains ability to export inflation globally",
              "Dollar maintains reserve status despite lack of gold backing"
            ]
          },
          {
            year: 1980,
            title: "Volcker Shock",
            description: "Federal Reserve under Paul Volcker raises interest rates dramatically to combat inflation.",
            effects: [
              "Developing countries with dollar-denominated debt face crisis",
              "US demonstrates power to affect global economy through monetary policy",
              "Dollar strengthens significantly against other currencies"
            ]
          },
          {
            year: 2008,
            title: "Global Financial Crisis",
            description: "US begins quantitative easing, dramatically expanding the dollar supply.",
            effects: [
              "Dollar paradoxically strengthens as global 'safe haven'",
              "US exports inflation to developing economies",
              "Bitcoin is created partly in response to banking failures and money printing"
            ]
          },
          {
            year: 2020,
            title: "Pandemic Response",
            description: "US creates trillions of new dollars in response to COVID-19 pandemic.",
            effects: [
              "Global dollar supply increases by over 40% in two years",
              "Inflation rises globally, affecting both US and dollar-dependent economies",
              "Countries begin exploring alternatives to dollar dependence"
            ]
          }
        ]
      }
    },
    reflectionQuestion: "How has the structure of the global monetary system concentrated power, and what might a more decentralized alternative like Bitcoin mean for the distribution of economic influence?"
  },

  // Mission 7: Escape Surveillance Game
  {
    id: 207,
    title: "Escape the Surveillance State",
    subtitle: "Financial Freedom in a Controlled System",
    description: "In this simulation, you must navigate a dystopian financial system where surveillance is pervasive. Make strategic choices to maintain your privacy and financial autonomy while learning how Bitcoin provides an alternative to financial control.",
    objectives: [
      "Experience the challenges of financial surveillance firsthand",
      "Learn practical strategies for maintaining financial privacy",
      "Understand the trade-offs between convenience, compliance, and autonomy",
      "Discover how Bitcoin enables personal financial sovereignty"
    ],
    simulationType: "escape",
    simulationData: {
      playerStartFunds: 1000,
      routes: {
        "start": {
          options: [
            {
              id: "traditional_bank",
              label: "Use Traditional Banking System",
              risk: 70,
              outcome: {
                funds: -200,
                privacy: -60,
                nextRoute: "bank_account",
                message: "Your account activity is closely monitored. The bank flags your transactions as 'unusual' and freezes your account for review, charging you a $200 fee to reinstate it."
              }
            },
            {
              id: "cash_only",
              label: "Operate in Cash Only",
              risk: 40,
              outcome: {
                funds: -150,
                privacy: 20,
                nextRoute: "cash_economy",
                message: "You avoid surveillance but face challenges. You pay higher fees for money orders and check cashing services, costing you $150."
              }
            },
            {
              id: "p2p_bitcoin",
              label: "Acquire Bitcoin Peer-to-Peer",
              risk: 20,
              outcome: {
                funds: -50,
                privacy: 60,
                nextRoute: "bitcoin_options",
                message: "You successfully purchase Bitcoin from a local peer, paying a small premium of $50 over market rate, but maintaining your privacy."
              }
            }
          ]
        },
        "bank_account": {
          options: [
            {
              id: "comply_restrictions",
              label: "Comply with All Restrictions",
              risk: 50,
              outcome: {
                funds: -100,
                privacy: -40,
                nextRoute: "limited_options",
                message: "You maintain your account but face increasing scrutiny. Transaction limits and fees cost you $100, and your financial activities are fully tracked."
              }
            },
            {
              id: "structured_transactions",
              label: "Try to Work Around Monitoring",
              risk: 80,
              outcome: {
                funds: -400,
                privacy: -80,
                nextRoute: "investigation",
                message: "Your attempts to structure transactions below reporting thresholds trigger automated flags. Your account is closed, and you're placed on a banking blacklist. You lose $400 in frozen funds."
              }
            },
            {
              id: "close_account_bitcoin",
              label: "Close Account and Switch to Bitcoin",
              risk: 30,
              outcome: {
                funds: -75,
                privacy: 40,
                nextRoute: "bitcoin_options",
                message: "You close your account and exit the traditional system, paying $75 in closing fees but regaining financial privacy."
              }
            }
          ]
        },
        "cash_economy": {
          options: [
            {
              id: "stay_full_cash",
              label: "Continue Cash-Only Lifestyle",
              risk: 45,
              outcome: {
                funds: -250,
                privacy: 0,
                nextRoute: "limited_options",
                message: "You maintain privacy but face significant limitations. Unable to make online purchases or investments, you lose $250 in potential opportunities."
              }
            },
            {
              id: "prepaid_cards",
              label: "Use Prepaid Cards for Online Needs",
              risk: 60,
              outcome: {
                funds: -150,
                privacy: -30,
                nextRoute: "limited_options",
                message: "You gain some digital capability but with high fees and increasing ID requirements for prepaid cards. You spend $150 on fees and your privacy is somewhat compromised."
              }
            },
            {
              id: "bitcoin_cash_meetups",
              label: "Buy Bitcoin at Cash Meetups",
              risk: 25,
              outcome: {
                funds: -25,
                privacy: 50,
                nextRoute: "bitcoin_options",
                message: "You successfully transition to Bitcoin while maintaining privacy, paying only a small premium of $25 for the convenience of in-person trading."
              }
            }
          ]
        },
        "bitcoin_options": {
          options: [
            {
              id: "custodial_wallet",
              label: "Use Exchange/Custodial Wallet",
              risk: 65,
              outcome: {
                funds: 0,
                privacy: -50,
                nextRoute: "limited_options",
                message: "You gain convenience but sacrifice privacy. The exchange requires KYC verification and monitors all transactions, reporting to authorities."
              }
            },
            {
              id: "self_custody_basics",
              label: "Basic Self-Custody Setup",
              risk: 35,
              outcome: {
                funds: 100,
                privacy: 30,
                nextRoute: "enhanced_freedom",
                message: "You maintain control of your own keys using a mobile wallet. You save $100 in fees and maintain reasonable privacy, though your transactions are still visible on the blockchain."
              }
            },
            {
              id: "privacy_best_practices",
              label: "Advanced Privacy Techniques",
              risk: 15,
              outcome: {
                funds: 200,
                privacy: 70,
                nextRoute: "financial_freedom",
                message: "You implement coinjoin transactions, avoid address reuse, and maintain proper wallet hygiene. Your financial privacy is strongly enhanced, and you save $200 in various fees and costs."
              }
            }
          ]
        },
        "investigation": {
          options: [
            {
              id: "legal_battle",
              label: "Fight the System Legally",
              risk: 90,
              outcome: {
                funds: -800,
                privacy: -90,
                nextRoute: "game_over",
                message: "You spend $800 on legal fees but fail to clear your name from financial blacklists. Every aspect of your financial life is now under scrutiny."
              }
            },
            {
              id: "family_friends_accounts",
              label: "Use Accounts of Family/Friends",
              risk: 75,
              outcome: {
                funds: -300,
                privacy: -60,
                nextRoute: "limited_options",
                message: "You temporarily regain banking access but put others at risk. Relationship strains and inconvenience cost you approximately $300."
              }
            },
            {
              id: "full_bitcoin_transition",
              label: "Fully Transition to Bitcoin",
              risk: 30,
              outcome: {
                funds: -100,
                privacy: 60,
                nextRoute: "bitcoin_options",
                message: "You accept the initial challenge of being unbanked and build a new financial life with Bitcoin, paying a one-time transition cost of $100."
              }
            }
          ]
        },
        "limited_options": {
          options: [
            {
              id: "accept_surveillance",
              label: "Accept the Surveillance Reality",
              risk: 60,
              outcome: {
                funds: -200,
                privacy: -70,
                nextRoute: "game_over",
                message: "You surrender financial privacy for convenience. Your data is sold to marketers, and your purchasing power gradually decreases through hidden fees and targeted pricing, costing you $200."
              }
            },
            {
              id: "try_foreign_banks",
              label: "Open Foreign Bank Accounts",
              risk: 85,
              outcome: {
                funds: -600,
                privacy: -50,
                nextRoute: "game_over",
                message: "Increased international regulatory cooperation means your attempt fails. You lose $600 in travel costs and fees, and are now flagged in multiple financial systems."
              }
            },
            {
              id: "bitcoin_community",
              label: "Join Local Bitcoin Community",
              risk: 25,
              outcome: {
                funds: 0,
                privacy: 40,
                nextRoute: "bitcoin_options",
                message: "You connect with others using Bitcoin for daily needs, learning how to maintain privacy while gaining practical knowledge of living on Bitcoin."
              }
            }
          ]
        },
        "enhanced_freedom": {
          options: [
            {
              id: "maintain_status",
              label: "Maintain Current Setup",
              risk: 30,
              outcome: {
                funds: 200,
                privacy: 20,
                nextRoute: "financial_freedom",
                message: "You continue using self-custodied Bitcoin for most financial activities, saving $200 in banking fees and maintaining reasonable privacy."
              }
            },
            {
              id: "community_education",
              label: "Learn from Privacy Experts",
              risk: 15,
              outcome: {
                funds: 300,
                privacy: 60,
                nextRoute: "financial_freedom",
                message: "You learn advanced techniques from community experts, significantly enhancing your privacy practices and saving approximately $300 through more efficient Bitcoin usage."
              }
            },
            {
              id: "contribute_ecosystem",
              label: "Contribute to Bitcoin Ecosystem",
              risk: 10,
              outcome: {
                funds: 500,
                privacy: 80,
                nextRoute: "victory",
                message: "You run a node, contribute to open source projects, and help build local Bitcoin circular economies. Your efforts strengthen both your own sovereignty and the network, while saving $500 in traditional financial costs."
              }
            }
          ]
        },
        "financial_freedom": {
          options: [
            {
              id: "satellite_node",
              label: "Setup Satellite Bitcoin Node",
              risk: 10,
              outcome: {
                funds: 400,
                privacy: 80,
                nextRoute: "victory",
                message: "You achieve censorship-resistant Bitcoin usage through satellite connectivity, completely detached from surveillance systems. Your financial sovereignty saves you $400 in avoided fees and economic opportunities."
              }
            },
            {
              id: "circular_economy",
              label: "Build Circular Bitcoin Economy",
              risk: 15,
              outcome: {
                funds: 600,
                privacy: 70,
                nextRoute: "victory",
                message: "You help local businesses accept Bitcoin and create a community where Bitcoin circulates without needing conversion to fiat. Your community saves approximately $600 in collective financial costs."
              }
            },
            {
              id: "privacy_developer",
              label: "Become a Privacy Developer",
              risk: 5,
              outcome: {
                funds: 1000,
                privacy: 90,
                nextRoute: "ultimate_victory",
                message: "You contribute to Bitcoin privacy tools and help others achieve financial sovereignty. Your expertise both enhances your own privacy and creates income opportunities worth $1000."
              }
            }
          ]
        },
        "game_over": {
          options: [
            {
              id: "restart",
              label: "Learn From Mistakes (Restart)",
              risk: 0,
              outcome: {
                restart: true,
                message: "You've experienced the challenges of navigating a financial surveillance system. Now you can try again with new knowledge."
              }
            }
          ]
        },
        "victory": {
          options: [
            {
              id: "complete",
              label: "Enjoy Financial Freedom",
              risk: 0,
              outcome: {
                complete: true,
                message: "Congratulations! You've successfully escaped financial surveillance and achieved personal sovereignty using Bitcoin."
              }
            }
          ]
        },
        "ultimate_victory": {
          options: [
            {
              id: "complete_mastery",
              label: "Complete Mastery Achieved",
              risk: 0,
              outcome: {
                complete: true,
                message: "Extraordinary achievement! You've not only secured your own financial freedom but are helping build tools for others to achieve sovereignty as well."
              }
            }
          ]
        }
      },
      resistanceNetworks: [
        {
          name: "Open Source Developers",
          description: "Programmers creating privacy-enhancing tools and self-custody solutions that reduce dependence on surveillance-based financial systems."
        },
        {
          name: "Bitcoin Educators",
          description: "People teaching others about financial sovereignty, privacy practices, and how to use Bitcoin as an alternative to surveillance money."
        },
        {
          name: "Node Operators",
          description: "Individuals running Bitcoin nodes that strengthen the network while reducing reliance on trusted third parties for transaction verification."
        },
        {
          name: "Local Trading Networks",
          description: "Communities facilitating in-person Bitcoin exchange, creating pathways to obtain Bitcoin without KYC requirements."
        },
        {
          name: "Bitcoin Circular Economies",
          description: "Local business networks accepting and recirculating Bitcoin, reducing the need to convert back to surveillance-heavy fiat currencies."
        }
      ]
    },
    reflectionQuestion: "In this simulation, what were the most effective strategies for maintaining financial privacy and sovereignty? How could these approaches apply to your own financial life?"
  }
];