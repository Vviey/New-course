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

      ## The Balancing Act

      Asha learns that any financial system must balance:

      ### Transparency
      Allowing verification of transactions and preventing fraud

      ### Privacy
      Protecting individuals' financial information from unnecessary scrutiny

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

      CBDCs are digital versions of national currencies, issued and regulated by a nation's central bank. 
      Unlike decentralized cryptocurrencies, CBDCs are centralized and give authorities significant control over the monetary system.

      ### Potential CBDC Features
      - Programmability - Money with conditions or expiration dates
      - Direct monetary policy implementation
      - Detailed tracking of all financial activity
      - Potential for instant taxation or financial "rewards"
      - Ability to instantly freeze or seize funds

      Through simulation exercises, Asha explores how CBDCs could be designed with different privacy features, 
      from completely transparent to partially private transactions.

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