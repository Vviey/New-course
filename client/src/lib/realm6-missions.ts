import React from 'react';

interface Mission {
  id: number;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  contentType: 'realUseCase' | 'lightningNetwork' | 'builders' | 'tools' | 'knowledge' | 'bonus';
  unlocked: boolean;
  completed: boolean;
}

export const realm6Missions: Mission[] = [
  {
    id: 1,
    title: "Real Use Cases in Africa",
    subtitle: "Everyday Bitcoiners",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "Bitcoin is transforming lives across Africa. This mission shares inspiring stories from various countries, highlighting how people use Bitcoin in their daily lives."
      ),
      React.createElement("p", null, 
        "You'll discover how Bitcoin is being used for remittances in Nigeria, business payments in Kenya, savings in Zambia, education funding in South Africa, and by farming co-ops in rural areas."
      ),
      React.createElement("p", null, 
        "These real-world examples demonstrate Bitcoin's practical value beyond price speculation, showing how it empowers individuals and communities to overcome financial challenges."
      ),
      
      React.createElement("h3", { className: "text-xl font-semibold mt-6 mb-3 text-rose-400" }, "Bitcoin in African Communities: Real Stories"),
      
      React.createElement("h4", { className: "text-lg font-medium mt-5 mb-2 text-rose-300" }, "Remittances: The Nigerian Experience"),
      React.createElement("p", null, 
        "In Nigeria, where over $17 billion in remittances flows annually, traditional money transfer services charge fees averaging 7-10%. These costs significantly reduce the value received by families."
      ),
      React.createElement("p", null, 
        "Oluwasegun, a software developer working in Europe, uses Bitcoin to send money to his family in Lagos. 'Before Bitcoin, I would lose nearly €40 from every €400 I sent home,' he explains. 'Now, using Lightning Network payments, the fees are less than €1, and the money arrives in minutes instead of days.'"
      ),
      React.createElement("p", null, 
        "Mobile money services integrated with Bitcoin have become popular throughout Nigeria. Companies like Bitnob and Yellow Card allow recipients to convert Bitcoin to Naira instantly, even in areas with limited banking infrastructure."
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-5 mb-2 text-rose-300" }, "Business Payments: Kenyan Merchants"),
      React.createElement("p", null, 
        "In Kenya's vibrant tech hub of Nairobi, small businesses face challenges with traditional payment systems, including high processing fees and chargebacks. Bitcoin offers an alternative that's particularly valuable in the digital economy."
      ),
      React.createElement("p", null, 
        "Akinyi runs a web design business serving clients globally. 'With international card payments, I would wait 7-14 days to receive funds, and sometimes face unexpected chargebacks months later,' she says. 'Bitcoin payments are final within an hour, and I can convert to local currency when needed or keep savings in Bitcoin.'"
      ),
      React.createElement("p", null, 
        "For physical shops, Bitcoin point-of-sale solutions have emerged. Using simple QR code systems, merchants can accept payments without expensive hardware. The Lightning Network has made these transactions nearly instantaneous, addressing earlier concerns about confirmation times."
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-5 mb-2 text-rose-300" }, "Savings: Hedging Against Inflation in Zambia"),
      React.createElement("p", null, 
        "Zambia, like many African nations, has experienced periods of high inflation, with rates reaching 24.6% in recent years. This monetary instability erodes savings held in local currency, pushing citizens to seek alternatives."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-rose-500 pl-4 italic my-4" },
        "'I watched my parents' retirement savings lose 70% of its value in just two years,' explains Mutinta, a teacher in Lusaka. 'That experience taught me to diversify. I now keep a portion of my monthly salary in Bitcoin as a hedge against inflation.'"
      ),
      React.createElement("p", null, 
        "Savings circles, a traditional African community practice known as 'chilimba' in Zambia, have begun incorporating Bitcoin. Members contribute regularly to a shared fund, with each person receiving the total in rotation. Using Bitcoin preserves the value between contribution cycles."
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-5 mb-2 text-rose-300" }, "Education Funding: South African Initiatives"),
      React.createElement("p", null, 
        "In South Africa, Bitcoin is powering innovative education funding models. Several universities now accept Bitcoin for tuition payments, but the impact goes deeper through community-based scholarship programs."
      ),
      React.createElement("p", null, 
        "The Ubuntu Pathways program in Port Elizabeth uses Bitcoin donations to fund STEM education for students from disadvantaged backgrounds. International donors can contribute without the significant fees of traditional cross-border giving."
      ),
      React.createElement("p", null, 
        "Micropayments through Lightning Network also enable 'learn-to-earn' platforms where students receive small Bitcoin rewards for completing educational modules, creating a sustainable incentive system for ongoing learning."
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-5 mb-2 text-rose-300" }, "Farming Co-ops: Rural Empowerment"),
      React.createElement("p", null, 
        "Agricultural cooperatives across rural Africa have begun leveraging Bitcoin to improve economic outcomes for farmers. These co-ops face challenges in accessing fair markets and securing pre-harvest financing."
      ),
      React.createElement("p", null, 
        "In Tanzania, the Kilimanjaro Native Cooperative Union uses a Bitcoin-based system to provide transparent market access for coffee growers. Farmers receive payments directly to their mobile wallets, eliminating intermediaries who previously captured much of the value."
      ),
      React.createElement("p", null, 
        "Smart contracts built on Bitcoin sidechains enable pre-funding of harvests through decentralized lending pools. Investors globally can fund farming operations and share in the harvest proceeds, creating new capital flows to agricultural communities."
      ),
      
      React.createElement("h4", { className: "text-lg font-medium mt-5 mb-2 text-rose-300" }, "Challenges and Considerations"),
      React.createElement("p", null, 
        "While these success stories demonstrate Bitcoin's potential in Africa, important challenges remain:"
      ),
      React.createElement("ul", { className: "list-disc pl-5 space-y-2 my-3" },
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-rose-200" }, "Internet Access: "), "Reliable connectivity remains a barrier, though SMS-based Bitcoin services are emerging to address this."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-rose-200" }, "Education: "), "Technical knowledge gaps require continued investment in accessible learning resources."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-rose-200" }, "Regulatory Uncertainty: "), "Different countries take varying approaches to cryptocurrency regulation, creating operational complexities."),
        React.createElement("li", null, React.createElement("span", { className: "font-medium text-rose-200" }, "Volatility: "), "Bitcoin's price fluctuations present risks that must be managed, particularly for essential funds.")
      ),
      
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Use Cases You'll Explore:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Remittances: Low-cost and rapid international money transfers"),
        React.createElement("li", null, "Business Payments: Secure and efficient transactions for merchants"),
        React.createElement("li", null, "Savings: Protection against inflation and currency devaluation"),
        React.createElement("li", null, "Education Funding: Community pools for student support"),
        React.createElement("li", null, "Farming Co-ops: Collaboration and investment in agricultural communities")
      ),
      React.createElement("p", { className: "mt-4" },
        "Through interactive challenges and quizzes, you'll understand the real-world impact of Bitcoin in African communities and how it exemplifies the spirit of Ubuntu—the belief in a universal bond of sharing that connects all humanity."
      )
    ),
    contentType: 'realUseCase',
    unlocked: true,
    completed: false
  },
  {
    id: 2,
    title: "Sending Value Without Borders",
    subtitle: "Lightning Network Power",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "The Lightning Network is revolutionizing how Africans send and receive money, enabling near-instant, low-cost transactions across borders. This mission explores how this second-layer solution makes Bitcoin practical for everyday use."
      ),
      React.createElement("p", null, 
        "Unlike traditional mobile money systems, which are often limited by national boundaries, Lightning Network connections transcend borders, creating a seamless payment network throughout Africa and beyond."
      ),
      React.createElement("p", null, 
        "You'll learn how Lightning is being used for cross-country payments, supporting content creators through microtips, purchasing mobile airtime, and other practical applications."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Lightning Concepts:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Speed and Cost: Near-instant transactions with minimal fees"),
        React.createElement("li", null, "Payment Channels: How Lightning maintains Bitcoin's security while scaling"),
        React.createElement("li", null, "Routing: How payments find their way across the network"),
        React.createElement("li", null, "Use Cases: Real examples from across Africa"),
        React.createElement("li", null, "Mobile Integration: How Lightning works on basic smartphones")
      ),
      React.createElement("p", { className: "mt-4" },
        "Through interactive challenges, you'll experience the power of Lightning first-hand and understand why it's especially valuable in regions with fragmented payment systems and cross-border needs."
      )
    ),
    contentType: 'lightningNetwork',
    unlocked: true,
    completed: false
  },
  {
    id: 3,
    title: "Building With Bitcoin",
    subtitle: "Builders, Coders, Creators",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "Africa is home to a growing community of innovators and builders who are creating impactful Bitcoin solutions. This mission highlights their work and inspires you to see yourself as a potential contributor to the ecosystem."
      ),
      React.createElement("p", null, 
        "From educational podcasts in Zambia to sustainable mining operations using hydroelectric power in Congo, and blockchain education hubs in Ghana and Nigeria, Africans are not just using Bitcoin—they're actively shaping its future."
      ),
      React.createElement("p", null, 
        "This mission will introduce you to these builders and their projects, showing the diverse ways people contribute to the Bitcoin ecosystem in Africa."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "African Bitcoin Initiatives:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Educational Content: Podcasts and resources that spread knowledge"),
        React.createElement("li", null, "Renewable Mining: Sustainable approaches to Bitcoin mining"),
        React.createElement("li", null, "Developer Hubs: Communities fostering technical skills"),
        React.createElement("li", null, "Entrepreneur Networks: Support systems for Bitcoin startups"),
        React.createElement("li", null, "Open Source Projects: African contributions to Bitcoin software")
      ),
      React.createElement("p", { className: "mt-4" },
        "By learning about these initiatives, you'll be inspired to think about how you might contribute to the Bitcoin ecosystem, regardless of your background or skill set."
      )
    ),
    contentType: 'builders',
    unlocked: true,
    completed: false
  },
  {
    id: 4,
    title: "Everyday Bitcoin Tools",
    subtitle: "Apps and Wallets That Work",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "This mission explores the practical tools that Africans are using to engage with Bitcoin effectively in their daily lives. You'll learn about various wallet options and how to choose the right one for different needs."
      ),
      React.createElement("p", null, 
        "From convenient mobile wallets like Phoenix, Muun, and Wallet of Satoshi to services like Bitnob that offer local currency options and Machankura's innovative SMS-based solution for users without internet access, you'll discover tools designed for African contexts."
      ),
      React.createElement("p", null, 
        "Understanding the difference between custodial wallets (where a company holds your Bitcoin) and non-custodial wallets (where you control your own keys) is crucial for making informed choices about security and convenience."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Wallet Types:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Mobile Wallets: Convenient solutions for smartphones"),
        React.createElement("li", null, "Lightning Wallets: Specialized for fast, low-cost transactions"),
        React.createElement("li", null, "Feature Phone Solutions: Options for basic phones"),
        React.createElement("li", null, "Hybrid Wallets: Offering both Bitcoin and local currency features"),
        React.createElement("li", null, "Educational Resources: Tools that help users learn while using")
      ),
      React.createElement("p", { className: "mt-4" },
        "Through practical exercises, you'll learn to match different wallet types to various real-world scenarios, building confidence in using Bitcoin tools effectively."
      )
    ),
    contentType: 'tools',
    unlocked: true,
    completed: false
  },
  {
    id: 5,
    title: "Knowledge Test",
    subtitle: "Africa Rising",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "This mission will test your understanding of Bitcoin's practical applications in Africa, the Lightning Network's benefits, and the tools available for everyday use."
      ),
      React.createElement("p", null, 
        "Through a comprehensive quiz and interactive map challenge, you'll reinforce your knowledge of key concepts and envision how Bitcoin adoption might continue to spread across the continent."
      ),
      React.createElement("p", null, 
        "By plotting your own Bitcoin adoption journey across Africa, you'll develop a sense of agency and possibility, identifying projects and initiatives you might want to join or create."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Key Topics Covered:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Bitcoin use cases across different African countries"),
        React.createElement("li", null, "Lightning Network functionality and benefits"),
        React.createElement("li", null, "Wallet options and their appropriate use cases"),
        React.createElement("li", null, "Ways to contribute to the Bitcoin ecosystem"),
        React.createElement("li", null, "The Ubuntu philosophy in the context of Bitcoin adoption")
      ),
      React.createElement("p", { className: "mt-4" },
        "This mission serves as a comprehensive review of the realm, preparing you for the final bonus mission where you'll apply your knowledge creatively."
      )
    ),
    contentType: 'knowledge',
    unlocked: true,
    completed: false
  },
  {
    id: 6,
    title: "The Seed of Tomorrow",
    subtitle: "Bonus Mission",
    description: React.createElement("div", { className: "space-y-4" },
      React.createElement("p", null, 
        "In this final mission, you'll help Asha develop a Bitcoin project for her village, applying everything you've learned about Bitcoin's practical applications in Africa."
      ),
      React.createElement("p", null, 
        "You can choose from various focus areas: education workshops, farming co-ops, local payment systems, or platforms for creative work. Each option explores different ways Bitcoin can address community needs."
      ),
      React.createElement("p", null, 
        "This mission embodies the spirit of Ubuntu—\"I thrive because we build together\"—encouraging you to think about how Bitcoin enables collective empowerment and community growth."
      ),
      React.createElement("h3", { className: "text-lg font-semibold mt-6 mb-2" }, "Project Areas:"),
      React.createElement("ul", { className: "list-disc pl-5 space-y-1" },
        React.createElement("li", null, "Education: Workshops and resources to teach Bitcoin basics"),
        React.createElement("li", null, "Farming: Co-ops that use Bitcoin for transactions and investment"),
        React.createElement("li", null, "Commerce: Local payment systems for markets and businesses"),
        React.createElement("li", null, "Creative Economy: Platforms for artists to receive Bitcoin for their work"),
        React.createElement("li", null, "Community Savings: Bitcoin-based group saving initiatives")
      ),
      React.createElement("p", { className: "mt-4" },
        "By creating a project pitch and assembling a team with diverse skills, you'll gain practical insights into how Bitcoin projects come to life and how they can benefit entire communities."
      )
    ),
    contentType: 'bonus',
    unlocked: true,
    completed: false
  }
];