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