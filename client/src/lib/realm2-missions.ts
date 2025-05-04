// Data for Realm 2 missions

export interface Realm2MissionData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  simulationType: 'surveillance' | 'privacy' | 'cbdc' | 'bitcoin' | 'lightning' | 'selfcustody';
  simulationData?: any;
  content: string;
}

export const realm2Missions: Realm2MissionData[] = [
  {
    id: 200,
    title: "Financial Surveillance: The Digital Lens",
    subtitle: "Introduction to financial surveillance and privacy concerns",
    description: "Learn the fundamentals of financial surveillance, its real-world applications, and why privacy matters.",
    simulationType: 'surveillance',
    content: `
      ## What is Financial Surveillance?

      Financial surveillance is the monitoring and tracking of financial transactions and activities. It occurs when 
      governments, corporations, or other entities collect, analyze, and potentially share information about:
      
      - Who you send money to
      - Who you receive money from
      - How much money you have
      - What you purchase
      - When and where you make transactions
      
      ## Real-World Example: M-Pesa in Kenya
      
      M-Pesa, launched in 2007 by Safaricom in Kenya, revolutionized financial access for millions who previously had 
      no banking services. Through a simple mobile phone, Kenyans can now deposit, withdraw, and transfer money, pay bills, 
      and access micro-loans.
      
      ### The Benefits:
      - Financial inclusion for the unbanked
      - Reduced cash crime and corruption
      - Economic growth and entrepreneurship opportunities
      - Convenient remittances for families
      
      ### The Privacy Concerns:
      - Every transaction is logged with time, amount, location, and participants
      - Usage patterns can reveal sensitive personal information (medical visits, religious donations, etc.)
      - Government can access complete financial histories
      - Potential for social control through financial access restrictions
      
      In 2017, during a contested election, Kenyan authorities could theoretically have tracked political donations 
      through M-Pesa, highlighting the dual nature of such systems: they provide essential services while creating 
      potential surveillance mechanisms.
      
      ## Why Financial Privacy Matters
      
      Financial privacy isn't about hiding illegal activity—it's about:
      
      - **Personal autonomy**: Making economic choices without judgment or interference
      - **Protection from discrimination**: Preventing unfair treatment based on spending patterns
      - **Safety**: Shielding yourself from targeted theft or extortion
      - **Business confidentiality**: Protecting sensitive business operations and competitive strategies
      - **Avoiding manipulation**: Preventing targeted exploitation based on your financial behavior
      
      ## The Global Perspective
      
      Across Africa and worldwide, digital payment systems are creating unprecedented financial inclusion while 
      simultaneously establishing the most comprehensive financial surveillance infrastructure in history.
      
      This tension - between convenience and privacy, between access and autonomy - forms the central challenge 
      of our modern monetary systems.
    `
  },
  {
    id: 201,
    title: "The Citadel's Shadows",
    subtitle: "Understanding financial surveillance",
    description: "Learn how centralized monetary systems enable surveillance and financial control.",
    simulationType: 'surveillance',
    content: `
      As Asha walks through the central plaza of the Citadel, large screens display citizens' financial status and spending habits. 
      The authorities know exactly who has money, how much, and how they spend it.

      When citizens make purchases, their entire financial history becomes available to merchants. The state controls who can 
      and cannot participate in the economy based on their "citizen score."

      ## The Privacy Challenge

      As Asha explores further, she notices subtle resistance within the city. Some citizens are finding ways to conduct 
      transactions outside the watchful eyes of the Citadel's financial surveillance system.

      ### Key Concepts
      - Financial surveillance as a tool for social control
      - Privacy as a fundamental right rather than suspicious activity
      - How traditional financial systems track and monitor transactions
      - The balance between transparency and privacy in financial systems

      In the Citadel, citizens must seek permission to make large purchases, and their spending habits directly 
      affect their access to services and opportunities.

      This mission introduces the concept of financial privacy and why it matters in a digital world. As we 
      move toward more digitized money, the question of who can see your transactions becomes increasingly important.
      
      <div class="mt-6">
        <button id="next-button" class="px-6 py-2 bg-gradient-to-r from-ochre-light to-ochre-dark text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
          Continue to Next Mission
        </button>
      </div>
    `
  },
  {
    id: 202,
    title: "Privacy vs Control",
    subtitle: "Balancing transparency and personal privacy",
    description: "Explore the balance between financial transparency and personal privacy.",
    simulationType: 'privacy',
    content: `
      In the Citadel's central district, Asha meets a researcher named Malik who explains how the city's surveillance system works.
      Every transaction is logged, analyzed, and scored according to the city's values and priorities.

      "The authorities claim complete financial transparency is necessary for security and preventing financial crimes," 
      Malik explains. "But in reality, it creates a system where the state has unprecedented power over individuals."

      ## Understanding Financial Privacy

      Financial privacy refers to your ability to conduct economic transactions without unwanted third-party surveillance. 
      Throughout history, financial privacy has been a fundamental aspect of commerce and personal freedom.

      ### Traditional Privacy Mechanisms
      
      In physical cash transactions, only the buyer and seller know the details of their exchange. Third parties don't 
      automatically learn:
      
      - What was purchased
      - For how much
      - By whom
      - When and where the transaction occurred
      
      In traditional African marketplaces, traders could conduct business without authorities tracking every sale. A person 
      could save money under their mattress, and no one would know their wealth without physical inspection.

      ### The Digital Shift
      
      With electronic payments becoming the norm, every transaction potentially creates a permanent record accessible to:
      
      - Payment processors and banks
      - Governments
      - Marketing companies
      - Data brokers
      - Hackers
      
      In Rwanda, for example, the push toward cashless payments through mobile money and cards means nearly all economic 
      activity is now potentially trackable. This creates an unprecedented financial surveillance capability that never 
      existed in cash-based economies.

      ## The Balancing Act

      Asha learns that any financial system must balance:

      ### Transparency
      Allowing verification of transactions and preventing fraud

      ### Privacy
      Protecting individuals' financial information from unnecessary scrutiny

      ## The Privacy Spectrum
      
      Financial systems exist on a privacy spectrum:
      
      **Complete Transparency**
      - All transactions visible to everyone
      - All personal financial details public
      - No financial secrets
      
      **Reasonable Privacy**
      - Transaction details known only to participants
      - Verification possible without revealing details
      - Oversight for legitimate law enforcement with due process
      
      **Absolute Privacy**
      - No transaction trail
      - Completely anonymous exchanges
      - No possible oversight

      Through interactive simulations, Asha experiences how different levels of financial privacy affect citizens' 
      lives, from complete surveillance to total privacy, with the ideal system balancing legitimate oversight with personal privacy.

      ### Key Questions
      - Who should have access to your transaction history?
      - Should financial privacy be a right or a privilege?
      - How can a system prevent financial crimes while respecting privacy?
      - What information should be required for different types of transactions?
    `
  },
  {
    id: 203,
    title: "CBDCs and Privacy",
    subtitle: "The future of government-issued digital money",
    description: "Understand how Central Bank Digital Currencies might affect financial privacy.",
    simulationType: 'cbdc',
    content: `
      Asha visits the Citadel's central bank, where officials are developing the next generation of the city's 
      digital currency system. Here she learns about Central Bank Digital Currencies (CBDCs) and their implications for privacy.

      ## What Are CBDCs?

      CBDCs (Central Bank Digital Currencies) are digital versions of national currencies, issued and regulated by a nation's central bank. 
      
      ### In Everyday Terms:
      
      Imagine if your country's paper money (like dollars, naira, or shillings) became completely digital, but unlike private 
      cryptocurrencies like Bitcoin:
      
      - It's created and controlled by your government's central bank
      - It has the same value as the physical currency
      - It's designed to work within the existing financial system
      - It can be programmed with specific rules and conditions
      
      ### Real-Life Examples:
      
      - **Nigeria's eNaira** - Africa's first CBDC, launched in 2021, allows citizens to make digital payments directly through the central bank
      - **China's Digital Yuan** - Being tested in major cities, allowing payment via mobile apps and even without internet connection
      - **Ghana's e-Cedi** - In development to improve financial inclusion and reduce the costs of cash
      
      ## How CBDCs Would Affect Your Daily Life
      
      If your country adopted a CBDC, your daily financial activities might change in these ways:
      
      ### Shopping and Payments
      - Pay for groceries directly from your government digital wallet
      - No need for cash or private payment apps
      - Instant settlements with no transaction fees (potentially)
      - Merchants receive payment immediately
      
      ### Receiving Money
      - Government benefits deposited directly to your CBDC wallet
      - Paycheck instantly available without a bank
      - Family remittances arriving instantly with minimal fees
      - Automatic tax adjustments on income
      
      ### Financial Management
      - All transactions automatically recorded and categorized
      - Digital trail of all purchases and income
      - Simplified tax filing as the system tracks everything
      - Potential spending limits or restrictions on certain items
      
      ## What Makes CBDCs Different From Current Digital Money
      
      CBDCs aren't just mobile money or banking apps. They represent a fundamental change in how money works:
      
      | Current Digital Money | Central Bank Digital Currency |
      |-----------------------|-------------------------------|
      | Run by private companies | Created and controlled by government |
      | Uses commercial bank money | Direct claim on the central bank |
      | Limited programmability | Can be fully programmable |
      | Separate systems that don't always connect | Single unified system |
      | Usually requires bank account | Could work without banks |
      | Transactions can take days to settle | Instant settlement possible |
      
      ## Potential CBDC Features
      - **Programmability**: Money with conditions (can only be spent on food or expires after 3 months)
      - **Automation**: Automatic tax collection, welfare distribution, or fine payment
      - **Direct control**: Monetary policy applied instantly to all citizens
      - **Offline functionality**: Works even without internet access
      - **Detailed tracking**: Complete visibility of all financial activity
      - **Targeted distribution**: Send money only to specific regions or demographics
      - **Remote control**: Ability to freeze funds or reverse transactions
      
      ## Privacy Implications
      
      Through simulation exercises, Asha explores how CBDCs could be designed with different privacy features, 
      from completely transparent to partially private transactions.
      
      ### Benefits in Daily Life:
      - Reduced transaction costs for everyday purchases
      - No more carrying cash or worrying about theft
      - Simplified receiving of payments and government benefits
      - Easier record-keeping for personal finances
      - Protection from counterfeit money
      
      ### Privacy Concerns in Daily Life:
      - Government could see every purchase you make
      - Your spending habits could affect your "social score"
      - Funds could be frozen if you're accused of wrongdoing
      - Money could be programmed to expire or restricted to certain uses
      - Complete financial visibility to authorities
      
      ## The African Context
      
      For African nations considering CBDCs, the implications are particularly significant:
      
      - **Financial inclusion**: Bringing banking to millions of unbanked citizens
      - **Reduced corruption**: Transparent tracking of government spending
      - **Lower remittance costs**: Cheaper way to receive money from relatives abroad
      - **Currency stability**: Potential protection against inflation
      - **Sovereignty concerns**: Independence from foreign payment systems
      
      However, without strong legal protections, these systems could also enable unprecedented 
      financial surveillance and control in countries with authoritarian tendencies.
      
      ## Privacy Trade-offs

      In the simulation, Asha must balance competing concerns:

      ### Benefits
      - Reduced crime and tax evasion
      - Efficient payments and reduced costs
      - Financial inclusion for the unbanked

      ### Risks
      - Complete financial surveillance
      - Political control through financial censorship
      - Loss of private economic activity
    `
  },
  {
    id: 204,
    title: "Bitcoin's Transparency",
    subtitle: "Balancing public ledgers with pseudonymity",
    description: "Discover how Bitcoin balances transparency with pseudonymity.",
    simulationType: 'bitcoin',
    content: `
      In a hidden library beneath the Citadel, Asha meets a cryptographer who explains how Bitcoin's approach 
      to transparency and privacy differs from surveillance currencies.

      ## Transparent Yet Private?

      The cryptographer explains that Bitcoin's blockchain is completely transparent - anyone can view every transaction 
      ever made. However, these transactions are tied to pseudonymous addresses rather than personal identities.

      ### Bitcoin's Privacy Model
      - All transactions are public and verifiable by anyone
      - Addresses are pseudonymous (not directly tied to identities)
      - Users can generate new addresses for each transaction
      - No built-in surveillance or identity verification
      - Privacy is possible but requires careful practices

      Through an interactive demonstration, Asha explores the Bitcoin blockchain, examining real transactions 
      while learning about the challenges of maintaining privacy when using Bitcoin.

      ## Privacy Challenges

      The cryptographer demonstrates various ways Bitcoin addresses can be linked to real identities:

      - Exchange KYC (Know Your Customer) requirements
      - Address reuse and transaction patterns
      - Blockchain analysis and clustering techniques
      - Correlation attacks using timing and amounts

      Despite these challenges, Asha learns that Bitcoin represents a fundamental shift in the privacy model: 
      instead of authority-granted privacy that can be revoked, Bitcoin offers a base layer of pseudonymity 
      that users can enhance with proper techniques.
    `
  },
  {
    id: 205,
    title: "Lightning Network",
    subtitle: "Enhanced privacy through Layer 2 solutions",
    description: "Learn how Bitcoin's Layer 2 solutions enhance privacy and transaction efficiency.",
    simulationType: 'lightning',
    content: `
      In a bustling underground market, Asha discovers merchants using an advanced payment system built on top of Bitcoin. 
      This is her introduction to the Lightning Network - Bitcoin's Layer 2 scaling solution.

      ## Beyond the Base Layer

      A merchant explains that while Bitcoin's base layer provides transparent, censorship-resistant transactions, 
      the Lightning Network adds speed, lower fees, and enhanced privacy.

      ### Lightning Network Properties
      - Near-instant settlement of payments
      - Extremely low transaction fees
      - Improved privacy - only channel open/close transactions are recorded on the blockchain
      - Individual payments within channels aren't publicly visible
      - Enables micropayments and new economic possibilities

      Through an interactive demonstration, Asha opens a Lightning channel and makes several payments, experiencing 
      how payments can be routed through multiple channels without revealing transaction details on the public blockchain.

      ## Privacy Innovations

      The merchant introduces Asha to additional privacy innovations being developed for Bitcoin and Lightning:

      - Payment channels that mask transaction details
      - Onion routing for payment paths
      - Atomic swaps for cross-chain privacy
      - Evolving standards to protect user privacy

      Asha learns that layers of technology built on sound money foundations can create systems that are both efficient and privacy-preserving.
    `
  },
  {
    id: 206,
    title: "Self-Custody",
    subtitle: "Taking control of your financial sovereignty",
    description: "Explore why \"not your keys, not your coins\" matters for financial sovereignty.",
    simulationType: 'selfcustody',
    content: `
      At the edge of the Citadel, Asha meets a group of citizens who have rejected the city's surveillance system. 
      They teach her about self-custody - the practice of holding your own private keys rather than trusting third parties.

      ## Not Your Keys, Not Your Coins

      The group demonstrates how citizens in the Citadel who keep their money in banks or centralized services 
      are completely subject to the whims of authorities - accounts can be frozen, funds can be seized, and transactions can be blocked.

      ### Self-Custody Principles
      - Full control of your own private keys
      - No third party can access or freeze your funds
      - Independence from centralized financial surveillance
      - Personal responsibility for security
      - True financial sovereignty

      Through a practical workshop, Asha learns the basics of key management, seed phrases, hardware wallets, 
      and best practices for securing one's own bitcoin.

      ## The Sovereignty Trade-off

      Self-custody comes with both benefits and responsibilities:

      ### Benefits
      - Complete ownership of your money
      - Immunity from account freezes or censorship
      - Privacy from financial surveillance
      - Protection against third-party risk

      ### Responsibilities
      - Secure key management
      - Backup and recovery procedures
      - Protection against theft or loss
      - No "customer service" to help if mistakes are made

      Asha realizes that true financial privacy and freedom require taking personal responsibility for one's finances 
      - a concept almost forgotten in the Citadel's system of controlled convenience.
    `
  }
];