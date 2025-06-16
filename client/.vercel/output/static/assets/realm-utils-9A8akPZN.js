import{r as u}from"./realm1-missions-Cl9-J3R6.js";import{r as g}from"./realm2-missions-Npvvnli7.js";import{r as h}from"./realm3-missions--hao_c43.js";import{b as e}from"./react-Q3K9tvtn.js";const a=n=>e.createElement(e.Fragment,null,...n),y=[{id:1,title:"The Power of Proof-of-Work",subtitle:"Understanding Bitcoin's Consensus Mechanism",simulationType:"mining",content:a([e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-4-The-Power-of-Proof-Of-Work.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",{className:"mb-4",key:"intro"},"Welcome to The Mountain Forge, where the elemental power of mining transforms energy into digital security. Here, in this realm, you'll discover how Bitcoin's proof-of-work system secures the network through computational effort."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"what-is-mining"},"What is Mining?"),e.createElement("p",{className:"mb-4",key:"mining-desc"},"Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain. Miners use specialized computers to solve complex mathematical puzzles, competing to find a valid solution faster than others."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"why-mining"},"Why Mining Matters"),e.createElement("p",{className:"mb-4",key:"mining-matters"},"Mining serves several crucial functions:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"mining-functions"},[e.createElement("li",{key:"function1"},"It secures the network by making it computationally expensive to attack"),e.createElement("li",{key:"function2"},"It processes and validates transactions"),e.createElement("li",{key:"function3"},"It distributes new bitcoins according to a predictable, predetermined schedule"),e.createElement("li",{key:"function4"},"It achieves consensus without requiring trust in any central authority")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"process"},"The Mining Process"),e.createElement("p",{className:"mb-4",key:"process-intro"},"At its core, mining involves:"),e.createElement("ol",{className:"list-decimal ml-6 mb-4 space-y-2",key:"process-steps"},[e.createElement("li",{key:"step1"},"Collecting pending transactions from the mempool"),e.createElement("li",{key:"step2"},"Assembling these transactions into a block"),e.createElement("li",{key:"step3"},"Creating a cryptographic puzzle based on this block"),e.createElement("li",{key:"step4"},"Solving the puzzle by finding a value (nonce) that produces a hash with specific characteristics"),e.createElement("li",{key:"step5"},"Broadcasting the solution to the network")]),e.createElement("p",{className:"mb-4",key:"pow-explain"},'This "proof-of-work" is difficult to produce but easy to verify, creating an unforgeable record of transaction history.'),e.createElement("div",{className:"bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4 cursor-pointer",key:"challenge-box",onClick:()=>{window.location.href="/realm4/mining-simulator"}},[e.createElement("h4",{className:"text-lg font-semibold mb-2 text-orange-400",key:"challenge-title"},"Ready for the Challenge?"),e.createElement("p",{key:"challenge-desc"},"In the following simulation, you'll experience the mining process firsthand. You'll adjust mining parameters, find valid blocks, and understand how difficulty adjustments maintain Bitcoin's steady heartbeat of one block approximately every 10 minutes.")])]),completionMessage:"Congratulations! You've successfully experienced the mining process and understand how proof-of-work secures the Bitcoin network."},{id:2,title:"Securing the Chain",subtitle:"How Miners Achieve Consensus",simulationType:"consensus",content:a([e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-4-Securing-the-Chain.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",{className:"mb-4",key:"intro"},"The Mountain Forge's fire burns brightest when many miners work together. In this mission, you'll discover how Bitcoin nodes reach agreement on which transactions are valid and prevent double-spending attacks."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"double-spend"},"The Double-Spending Problem"),e.createElement("p",{className:"mb-4",key:"double-spend-desc"},'Digital information is easily copied. Before Bitcoin, this created a fundamental problem for digital money: how do you prevent someone from spending the same digital coins multiple times? This is known as the "double-spending problem."'),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"consensus"},"Distributed Consensus"),e.createElement("p",{className:"mb-4",key:"consensus-desc"},"Bitcoin solves this through distributed consensus—a system where thousands of independent nodes around the world agree on the order and validity of transactions without requiring a central authority."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"how-consensus"},"How Consensus Works"),e.createElement("ol",{className:"list-decimal ml-6 mb-4 space-y-2",key:"consensus-steps"},[e.createElement("li",{key:"step1"},"Each node independently validates transactions according to Bitcoin's rules"),e.createElement("li",{key:"step2"},"When a miner successfully mines a block, they broadcast it to all nodes"),e.createElement("li",{key:"step3"},"Each node verifies that all transactions in the block are valid"),e.createElement("li",{key:"step4"},"Nodes accept the block if it's valid and add it to their copy of the blockchain"),e.createElement("li",{key:"step5"},"Miners then begin working on the next block, building on top of the longest valid chain")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"security"},"Network Security"),e.createElement("p",{className:"mb-4",key:"security-intro"},"This system makes Bitcoin extremely resistant to attacks:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"security-points"},[e.createElement("li",{key:"point1"},"To alter a transaction, an attacker would need to redo the proof-of-work for that block and all subsequent blocks"),e.createElement("li",{key:"point2"},"As the chain grows longer, it becomes exponentially more difficult to modify previous transactions"),e.createElement("li",{key:"point3"},"With honest nodes controlling the majority of mining power, the honest chain will always outpace any attacker")]),e.createElement("div",{className:"bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4",key:"challenge-box",onClick:()=>{window.location.href="/realm4/consensus-simulator"}},[e.createElement("h4",{className:"text-lg font-semibold mb-2 text-orange-400",key:"challenge-title"},"Your Challenge"),e.createElement("p",{key:"challenge-desc"},"In the following simulation, you'll observe how Bitcoin nodes reach consensus and prevent double-spending. You'll be able to interact with nodes, identify valid and invalid transactions, and see how the network responds to potential attacks.")])]),completionMessage:"Excellent work! You now understand how Bitcoin achieves consensus across a distributed network and prevents double-spending."},{id:3,title:"Mining and Energy",subtitle:"The Relationship Between Bitcoin and Power Consumption",simulationType:"energy",content:a([e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-4-Mining-and-Energy.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",{className:"mb-4",key:"intro"},"In the Mountain Forge, energy transforms into security. This mission explores the relationship between Bitcoin mining and energy consumption, including the growing trend toward renewable energy sources."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"energy-security"},"Energy and Security"),e.createElement("p",{className:"mb-4",key:"energy-security-desc"},"Bitcoin's security comes from the energy invested in mining. This is not a bug but a feature—by requiring real-world resources (energy) to validate transactions, Bitcoin creates a system that can't be easily attacked or corrupted."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"economics"},"Mining Economics"),e.createElement("p",{className:"mb-4",key:"economics-intro"},"Miners are incentivized to find the cheapest energy sources to maximize profits. This has several important consequences:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"economics-points"},[e.createElement("li",{key:"point1"},"Miners often utilize energy that would otherwise be wasted (stranded energy)"),e.createElement("li",{key:"point2"},"They gravitate toward regions with excess energy capacity"),e.createElement("li",{key:"point3"},"Increasingly, miners are using renewable energy sources due to their falling costs"),e.createElement("li",{key:"point4"},"Mining can stabilize power grids by providing flexible demand")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"renewable"},"The Renewable Shift"),e.createElement("p",{className:"mb-4",key:"renewable-intro"},"While Bitcoin mining does consume energy, the industry is rapidly shifting toward renewable sources:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"renewable-points"},[e.createElement("li",{key:"point1"},"Hydroelectric power is ideal for mining due to its low cost and reliability"),e.createElement("li",{key:"point2"},"Solar and wind energy, when available, provide zero marginal cost electricity"),e.createElement("li",{key:"point3"},"Excess renewable energy that would otherwise be curtailed can be monetized through mining")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"grid"},"Grid Stability"),e.createElement("p",{className:"mb-4",key:"grid-intro"},"Bitcoin miners can actually help stabilize power grids:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"grid-points"},[e.createElement("li",{key:"point1"},"They can quickly reduce consumption during peak demand periods"),e.createElement("li",{key:"point2"},"They can increase consumption during periods of excess supply"),e.createElement("li",{key:"point3"},"This flexibility helps balance the intermittent nature of many renewable energy sources")]),e.createElement("div",{className:"bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4",key:"challenge-box",onClick:()=>{window.location.href="/realm4/energy-simulator"}},[e.createElement("h4",{className:"text-lg font-semibold mb-2 text-orange-400",key:"challenge-title"},"Your Challenge"),e.createElement("p",{key:"challenge-desc"},"In this simulation, you'll manage a Bitcoin mining operation and make decisions about energy sources. You'll balance profitability with environmental considerations and discover how different energy sources affect your operation's economics.")])]),completionMessage:"Great job! You've gained insights into the complex relationship between Bitcoin mining and energy consumption."},{id:4,title:"Mining in Africa",subtitle:"Economic Opportunities Through Bitcoin",simulationType:"africa",content:a([e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-4-Mining-in-Africa.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",{className:"mb-4",key:"intro"},"As we continue our journey through the Mountain Forge, we'll explore how Bitcoin mining creates new economic opportunities, particularly in regions with abundant energy resources but limited infrastructure, like many parts of Africa."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"potential"},"Africa's Energy Potential"),e.createElement("p",{className:"mb-4",key:"potential-intro"},"Africa has enormous untapped energy resources:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"potential-points"},[e.createElement("li",{key:"point1"},"Over 40% of global solar potential"),e.createElement("li",{key:"point2"},"Vast hydroelectric capacity, much of it undeveloped"),e.createElement("li",{key:"point3"},"Significant natural gas reserves, often flared rather than utilized"),e.createElement("li",{key:"point4"},"Geothermal resources in East African countries")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"challenges"},"The Development Challenge"),e.createElement("p",{className:"mb-4",key:"challenges-intro"},"Despite this potential, many African countries face challenges in energy development:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"challenges-points"},[e.createElement("li",{key:"point1"},"Limited capital for large infrastructure projects"),e.createElement("li",{key:"point2"},"Insufficient demand in remote areas to justify grid extension"),e.createElement("li",{key:"point3"},"Difficulties attracting foreign investment"),e.createElement("li",{key:"point4"},"Challenges in monetizing energy resources")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"driver"},"Mining as an Economic Driver"),e.createElement("p",{className:"mb-4",key:"driver-intro"},"Bitcoin mining offers unique advantages for African energy development:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"driver-points"},[e.createElement("li",{key:"point1"},"It provides immediate, location-independent demand for electricity"),e.createElement("li",{key:"point2"},"It can generate revenue from otherwise stranded or underutilized energy resources"),e.createElement("li",{key:"point3"},"Mining revenue can fund infrastructure development that benefits local communities"),e.createElement("li",{key:"point4"},"It creates jobs and skills training in both direct operations and supporting services")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"examples"},"Real-World Examples"),e.createElement("p",{className:"mb-4",key:"examples-intro"},"Several African countries are beginning to explore Bitcoin mining:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"examples-points"},[e.createElement("li",{key:"point1"},"Kenya is using geothermal energy for Bitcoin mining"),e.createElement("li",{key:"point2"},"Malawi has mining operations powered by hydroelectric sources"),e.createElement("li",{key:"point3"},"Nigeria and Ghana are exploring using flared natural gas for mining"),e.createElement("li",{key:"point4"},"Morocco and Egypt are developing solar-powered mining operations")]),e.createElement("div",{className:"bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4",key:"challenge-box",onClick:()=>{window.location.href="/realm4/africa-simulator"}},[e.createElement("h4",{className:"text-lg font-semibold mb-2 text-orange-400",key:"challenge-title"},"Your Challenge"),e.createElement("p",{key:"challenge-desc"},"In this simulation, you'll analyze different African countries and their energy potentials, then develop a Bitcoin mining strategy that maximizes both economic benefits and local development. Consider factors like energy sources, infrastructure, regulatory environment, and community impact.")])]),completionMessage:"Wonderful! You've discovered how Bitcoin mining can help develop Africa's abundant energy resources and create economic opportunities."},{id:5,title:"The Bitcoin Halving",subtitle:"Monetary Policy Set in Code",simulationType:"halving",content:a([e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-4-The-Bitcoin-Halving.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",{className:"mb-4",key:"intro"},"The Mountain Forge's fire burns steadily, but every four years, a remarkable event occurs: the Bitcoin halving. This mission explores how Bitcoin's supply schedule works and why it's crucial to Bitcoin's monetary policy."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"what-is"},"What is the Halving?"),e.createElement("p",{className:"mb-4",key:"what-is-desc"},`Approximately every four years (or every 210,000 blocks), the reward that miners receive for successfully mining a block is cut in half. This event is known as "the halving" and is coded directly into Bitcoin's protocol.`),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"supply"},"Bitcoin's Supply Schedule"),e.createElement("p",{className:"mb-4",key:"supply-intro"},"Bitcoin was designed with a finite supply and a predictable issuance schedule:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"supply-points"},[e.createElement("li",{key:"point1"},"The initial block reward was 50 bitcoins per block"),e.createElement("li",{key:"point2"},"This reward halves approximately every four years"),e.createElement("li",{key:"point3"},"The last halving occured in May 2024"),e.createElement("li",{key:"point3"},"The current block reward is 3.125  bitcoins (as of 2025)"),e.createElement("li",{key:"point4"},"The next halving will reduce this to 1.5625 bitcoins per block"),e.createElement("li",{key:"point5"},"This process continues until all 21 million bitcoins are mined (around the year 2140)")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"economics"},"Economic Implications"),e.createElement("p",{className:"mb-4",key:"economics-intro"},"The halving has significant economic implications:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"economics-points"},[e.createElement("li",{key:"point1"},"It creates a predictable, decreasing rate of new supply"),e.createElement("li",{key:"point2"},"It leads to Bitcoin's disinflationary nature, with inflation dropping over time"),e.createElement("li",{key:"point3"},"It contrasts sharply with fiat currencies, which typically have unlimited and unpredictable issuance"),e.createElement("li",{key:"point4"},"It may contribute to price appreciation if demand remains constant or increases while supply growth slows")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"impact"},"Impact on Miners"),e.createElement("p",{className:"mb-4",key:"impact-intro"},"For miners, the halving creates challenges and opportunities:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"impact-points"},[e.createElement("li",{key:"point1"},"Mining revenue from new coins is cut in half overnight"),e.createElement("li",{key:"point2"},"Less efficient miners may become unprofitable and shut down"),e.createElement("li",{key:"point3"},"Historically, Bitcoin's price has increased significantly in the 12-18 months following each halving"),e.createElement("li",{key:"point4"},"Transaction fees become increasingly important as block rewards diminish")]),e.createElement("div",{className:"bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4",key:"challenge-box",onClick:()=>{window.location.href="/realm4/halving-simulator"}},[e.createElement("h4",{className:"text-lg font-semibold mb-2 text-orange-400",key:"challenge-title"},"Your Challenge"),e.createElement("p",{key:"challenge-desc"},"In this simulation, you'll experience the impact of Bitcoin halvings on mining economics and the broader market. You'll develop strategies to adapt to changing reward structures and observe how halvings affect Bitcoin's supply and potential value.")])]),completionMessage:"Excellent! You now understand how Bitcoin's halving mechanism creates a predictable monetary policy and affects mining economics."},{id:6,title:"Mastering Mining Concepts",subtitle:"Test Your Knowledge",simulationType:"knowledge",content:a([e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-4-Mastering-Mining-Concepts.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",{className:"mb-4",key:"intro"},"You've journeyed through the Mountain Forge and learned about Bitcoin mining from multiple perspectives. Now it's time to test your knowledge and prove your mastery of these concepts."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"ecosystem"},"The Mining Ecosystem"),e.createElement("p",{className:"mb-4",key:"ecosystem-intro"},"Bitcoin mining is a complex ecosystem that combines:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"ecosystem-points"},[e.createElement("li",{key:"point1"},"Technical elements: hashing, proof-of-work, difficulty adjustments"),e.createElement("li",{key:"point2"},"Economic principles: game theory, incentives, supply and demand"),e.createElement("li",{key:"point3"},"Energy considerations: consumption, sources, grid effects"),e.createElement("li",{key:"point4"},"Security mechanisms: distributed consensus, attack resistance"),e.createElement("li",{key:"point5"},"Global impacts: economic development, financial inclusion, monetary policy")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"principles"},"Key Principles"),e.createElement("p",{className:"mb-4",key:"principles-intro"},"As you prepare for your knowledge challenge, remember these key principles:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"principles-points"},[e.createElement("li",{key:"point1"},"Mining transforms physical energy into digital security"),e.createElement("li",{key:"point2"},"The difficulty adjustment maintains Bitcoin's steady block time"),e.createElement("li",{key:"point3"},"The halving schedule creates a predictable monetary policy"),e.createElement("li",{key:"point4"},"Miners are incentivized to seek the cheapest energy sources"),e.createElement("li",{key:"point5"},"Mining enables consensus without requiring trust in any central authority")]),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-orange-400",key:"significance"},"Real-World Significance"),e.createElement("p",{className:"mb-4",key:"significance-intro"},"Understanding mining helps you grasp why Bitcoin represents a fundamental innovation:"),e.createElement("ul",{className:"list-disc ml-6 mb-4 space-y-2",key:"significance-points"},[e.createElement("li",{key:"point1"},"It solves the double-spending problem without requiring trust"),e.createElement("li",{key:"point2"},"It creates digital scarcity through proof-of-work"),e.createElement("li",{key:"point3"},"It establishes a monetary system with predictable issuance and fixed supply"),e.createElement("li",{key:"point4"},"It provides economic opportunity and energy monetization globally")]),e.createElement("div",{className:"bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4",key:"challenge-box",onClick:()=>{window.location.href="/realm4/knowledge-simulator"}},[e.createElement("h4",{className:"text-lg font-semibold mb-2 text-orange-400",key:"challenge-title"},"Your Challenge"),e.createElement("p",{key:"challenge-desc"},"In this final challenge, you'll answer a series of questions about Bitcoin mining, its economic implications, energy considerations, and technical aspects. Demonstrate your understanding of how mining secures the network, distributes new bitcoins, and creates a trustless consensus system.")])]),completionMessage:"Congratulations! You've proven your knowledge of Bitcoin mining concepts and completed your journey through the Mountain Forge."}],b=[{id:1,title:"The Proposal Path",subtitle:"Understanding Bitcoin Improvement Proposals (BIPs)",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-5-The-Proposal-Path.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Welcome to the heart of Bitcoin's evolution process. In this comprehensive mission, you'll master the Bitcoin Improvement Proposal (BIP) system - the formal process through which Bitcoin's protocol evolves."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"BIP Fundamentals"),e.createElement("p",null,"A Bitcoin Improvement Proposal (BIP) is a design document providing information to the Bitcoin community, or describing a new feature for Bitcoin or its processes. The BIP process is the primary mechanism for proposing major new features, collecting community input on an issue, and documenting design decisions."),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl my-4"},e.createElement("h4",{className:"font-semibold mb-2"},"BIP Categories:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"Standards Track BIPs: Changes requiring network consensus"),e.createElement("li",null,"Informational BIPs: Design guidelines or information"),e.createElement("li",null,"Process BIPs: Changes to Bitcoin processes"))),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"The BIP Lifecycle"),e.createElement("div",{className:"space-y-2"},e.createElement("p",null,"Every BIP goes through specific stages:"),e.createElement("ol",{className:"list-decimal pl-5 space-y-2"},e.createElement("li",null,"Draft: Initial proposal documentation"),e.createElement("li",null,"Proposed: Formal submission for peer review"),e.createElement("li",null,"Final/Active: Accepted and implemented"),e.createElement("li",null,"Deferred/Withdrawn/Rejected: Other possible outcomes"))),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl my-4"},e.createElement("h4",{className:"font-semibold mb-2"},"Key Historical BIPs:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"BIP39: Mnemonic code for generating deterministic keys"),e.createElement("li",null,"BIP141: Segregated Witness (SegWit)"),e.createElement("li",null,"BIP340: Schnorr Signatures"),e.createElement("li",null,"BIP341: Taproot: SegWit version 1 spending rules")))),simulationType:"bip",unlocked:!0,completed:!1},{id:2,title:"Path of the Fork",subtitle:"Understanding Protocol Upgrade Mechanisms",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-5-Path-of-the-Fork.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Explore the critical concept of forks in Bitcoin's evolution. This mission delves deep into how Bitcoin can be upgraded while maintaining decentralization and consensus."),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"Types of Forks"),e.createElement("div",{className:"grid md:grid-cols-2 gap-4 mb-4"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Soft Forks"),e.createElement("p",null,"Backward-compatible protocol upgrades:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Old nodes continue to operate"),e.createElement("li",null,"Only miners need to upgrade"),e.createElement("li",null,"Gradual adoption possible"),e.createElement("li",null,"Example: SegWit, P2SH, CLTV"))),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Hard Forks"),e.createElement("p",null,"Non-backward-compatible changes:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Creates a permanent chain split"),e.createElement("li",null,"All nodes must upgrade"),e.createElement("li",null,"Requires complete coordination"),e.createElement("li",null,"Example: Bitcoin Cash fork")))),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"Fork Activation Methods"),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Activation Mechanisms:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,e.createElement("strong",null,"BIP9 (Version Bits):")," Miners signal readiness through block version"),e.createElement("li",null,e.createElement("strong",null,"BIP148 (UASF):")," User-activated soft fork - nodes enforce rules"),e.createElement("li",null,e.createElement("strong",null,"BIP91:")," Reduced threshold activation mechanism"),e.createElement("li",null,e.createElement("strong",null,"Speedy Trial:")," Time-bounded miner signaling period"))))),simulationType:"fork",unlocked:!0,completed:!1},{id:3,title:"Historic Forks: Bitcoin's Evolution",subtitle:"Learning from Bitcoin's Major Protocol Changes",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-5-History-Forks.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Journey through Bitcoin's most significant protocol changes and learn how they shaped the network we know today."),e.createElement("div",{className:"space-y-6"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"SegWit (2017)"),e.createElement("p",null,"A pivotal soft fork that revolutionized Bitcoin's transaction structure:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Fixed transaction malleability"),e.createElement("li",null,"Enabled Lightning Network development"),e.createElement("li",null,"Increased block capacity"),e.createElement("li",null,"Complex activation through UASF pressure"))),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Taproot (2021)"),e.createElement("p",null,"A sophisticated upgrade enhancing Bitcoin's smart contract capabilities:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Improved multisig efficiency"),e.createElement("li",null,"Enhanced privacy for complex scripts"),e.createElement("li",null,"Introduced Schnorr signatures"),e.createElement("li",null,"Successful Speedy Trial activation")))),e.createElement("h3",{className:"text-xl font-semibold mb-2 mt-4 text-purple-400"},"Technical Deep Dive"),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"SegWit Implementation Details:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"Witness data segregation"),e.createElement("li",null,"New transaction format"),e.createElement("li",null,"Backward compatibility mechanism"),e.createElement("li",null,"Weight units vs. bytes")))),simulationType:"historicalForks",unlocked:!0,completed:!1},{id:4,title:"The Governance Council",subtitle:"Bitcoin's Decentralized Decision-Making",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-5-The-Gouvernance-Council.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Master the intricacies of Bitcoin's governance model and understand how decisions are made in a truly decentralized network."),e.createElement("div",{className:"grid md:grid-cols-2 gap-4 mb-4"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Key Stakeholders"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Core Developers"),e.createElement("li",null,"Miners & Mining Pools"),e.createElement("li",null,"Full Node Operators"),e.createElement("li",null,"Users & Businesses"),e.createElement("li",null,"Hardware Manufacturers"))),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Power Distribution"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Checks and balances"),e.createElement("li",null,"Economic incentives"),e.createElement("li",null,"Technical merit"),e.createElement("li",null,"Social consensus"),e.createElement("li",null,"Market forces")))),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"Governance Mechanisms"),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Decision-Making Processes:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"BIP Process & Review"),e.createElement("li",null,"GitHub Pull Requests"),e.createElement("li",null,"Developer Meetings"),e.createElement("li",null,"Mailing List Discussions"),e.createElement("li",null,"Conference Presentations"))))),simulationType:"governance",unlocked:!0,completed:!1},{id:5,title:"Governance in Action",subtitle:"Practical Decision-Making Scenarios",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-5-Gouvernance-in-Action.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Apply your knowledge through realistic governance scenarios and decision-making challenges."),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl mb-4"},e.createElement("h4",{className:"font-semibold mb-2"},"Interactive Scenarios:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"Protocol Upgrade Proposals"),e.createElement("li",null,"Consensus Building"),e.createElement("li",null,"Stakeholder Coordination"),e.createElement("li",null,"Emergency Response"))),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"Practical Exercises"),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Hands-on Activities:"),e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"Draft a BIP proposal"),e.createElement("li",null,"Analyze stakeholder interests"),e.createElement("li",null,"Navigate technical debates"),e.createElement("li",null,"Build consensus strategies"))))),simulationType:"knowledge",unlocked:!0,completed:!1},{id:6,title:"Learning from Failures",subtitle:"Historical Fork Case Studies",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-5-Learning-from-failures.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("h3",{className:"text-xl font-semibold mb-2 text-purple-400"},"Failed Fork Analysis"),e.createElement("div",{className:"space-y-6"},e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"SegWit2x (2017)"),e.createElement("p",null,"A controversial scaling proposal that ultimately failed:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"New York Agreement context"),e.createElement("li",null,"Technical challenges"),e.createElement("li",null,"Community resistance"),e.createElement("li",null,"Lessons in consensus building"))),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("h4",{className:"font-semibold mb-2"},"Bitcoin XT & Bitcoin Classic"),e.createElement("p",null,"Early attempts at protocol changes:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Block size increase proposals"),e.createElement("li",null,"Development approach issues"),e.createElement("li",null,"Community division impact"),e.createElement("li",null,"Governance lessons")))),e.createElement("h3",{className:"text-xl font-semibold mb-2 mt-4 text-purple-400"},"Key Lessons"),e.createElement("div",{className:"bg-purple-900/30 p-4 rounded-xl"},e.createElement("ul",{className:"list-disc pl-5 space-y-2"},e.createElement("li",null,"Importance of technical consensus"),e.createElement("li",null,"Role of social consensus"),e.createElement("li",null,"Impact of rushed changes"),e.createElement("li",null,"Value of conservative approach")))),simulationType:"failedForks",unlocked:!0,completed:!1}],f=[{id:1,title:"Real Use Cases in Africa",subtitle:"Everyday Bitcoiners",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-Everyday-Bitcoin-Tools.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Bitcoin is transforming lives across Africa. This mission explores how Bitcoin is used in various countries, highlighting real-world applications beyond price speculation."),e.createElement("p",null,"You'll discover how Bitcoin is being used for remittances, business payments, savings, education funding, and by farming co-ops in different regions of Africa."),e.createElement("div",{className:"bg-rose-900/30 p-4 rounded-xl my-4 border border-rose-600/30"},e.createElement("h3",{className:"text-lg font-semibold mb-3 text-rose-300"},"Bitcoin Applications Across Africa"),e.createElement("div",{className:"grid md:grid-cols-2 gap-4"},e.createElement("div",{className:"bg-rose-800/20 p-4 rounded-lg border-l-4 border-rose-500",image:new URL("https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-Everyday-Bitcoin-Tools.png")},e.createElement("h4",{className:"font-medium text-rose-300 mb-2"},"Remittances: Nigeria"),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement("div",{className:"text-xs mb-1"},"Traditional Fee: 7-10%"),e.createElement("div",{className:"text-xs mb-1"},"Bitcoin Fee: <1%"),e.createElement("div",{className:"text-xs"},"Annual Flow: $17B+")),e.createElement("div",{className:"w-12 h-12 rounded-full bg-rose-700/40 flex items-center justify-center"},"🔄"))),e.createElement("div",{className:"bg-rose-800/20 p-4 rounded-lg border-l-4 border-rose-500"},e.createElement("h4",{className:"font-medium text-rose-300 mb-2"},"Business: Kenya"),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement("div",{className:"text-xs mb-1"},"Instant settlements"),e.createElement("div",{className:"text-xs mb-1"},"No chargebacks"),e.createElement("div",{className:"text-xs"},"QR code payments")),e.createElement("div",{className:"w-12 h-12 rounded-full bg-rose-700/40 flex items-center justify-center"},"💼"))),e.createElement("div",{className:"bg-rose-800/20 p-4 rounded-lg border-l-4 border-rose-500"},e.createElement("h4",{className:"font-medium text-rose-300 mb-2"},"Savings: Zambia"),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement("div",{className:"text-xs mb-1"},"Inflation hedge"),e.createElement("div",{className:"text-xs mb-1"},"Community savings pools"),e.createElement("div",{className:"text-xs"},"Value preservation")),e.createElement("div",{className:"w-12 h-12 rounded-full bg-rose-700/40 flex items-center justify-center"},"💰"))),e.createElement("div",{className:"bg-rose-800/20 p-4 rounded-lg border-l-4 border-rose-500"},e.createElement("h4",{className:"font-medium text-rose-300 mb-2"},"Education: South Africa"),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",null,e.createElement("div",{className:"text-xs mb-1"},"Scholarship funding"),e.createElement("div",{className:"text-xs mb-1"},"Learn-to-earn programs"),e.createElement("div",{className:"text-xs"},"Tuition payments")),e.createElement("div",{className:"w-12 h-12 rounded-full bg-rose-700/40 flex items-center justify-center"},"🎓")))),e.createElement("div",{className:"mt-4 p-3 rounded-lg bg-rose-900/20 text-center text-sm"},"Bitcoin adoption is growing across the continent with different use cases emerging in each region")),e.createElement("div",{className:"my-5"},e.createElement("h4",{className:"text-base font-medium text-rose-300 mb-2"},"Implementation Challenges"),e.createElement("div",{className:"flex flex-wrap gap-2"},e.createElement("span",{className:"px-3 py-1 bg-rose-900/40 rounded-full text-xs"},"Internet Access"),e.createElement("span",{className:"px-3 py-1 bg-rose-900/40 rounded-full text-xs"},"Technical Education"),e.createElement("span",{className:"px-3 py-1 bg-rose-900/40 rounded-full text-xs"},"Regulatory Uncertainty"),e.createElement("span",{className:"px-3 py-1 bg-rose-900/40 rounded-full text-xs"},"Price Volatility"),e.createElement("span",{className:"px-3 py-1 bg-rose-900/40 rounded-full text-xs"},"Access to Exchange"),e.createElement("span",{className:"px-3 py-1 bg-rose-900/40 rounded-full text-xs"},"Mobile Phone Availability"))),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"Key Use Cases You'll Explore:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Remittances: Low-cost and rapid international money transfers"),e.createElement("li",null,"Business Payments: Secure and efficient transactions for merchants"),e.createElement("li",null,"Savings: Protection against inflation and currency devaluation"),e.createElement("li",null,"Education Funding: Community pools for student support"),e.createElement("li",null,"Farming Co-ops: Collaboration and investment in agricultural communities")),e.createElement("p",{className:"mt-4"},"Through interactive challenges and quizzes, you'll understand the real-world impact of Bitcoin in African communities and how it exemplifies the spirit of Ubuntu—the belief in a universal bond of sharing that connects all humanity.")),simulationType:"bitcoin",simulationPath:"/bitcoin-in-africa",quizPath:"/africa-quiz",content:`
      <div style="background-color: rgba(225, 29, 72, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #e11d48; margin-top: 0; text-align: center;">Bitcoin in Africa: Real-world Applications</h2>
        
        <p style="margin-bottom: 16px;">Across the African continent, Bitcoin is being adopted for practical, everyday use. Far from being just a speculative asset, Bitcoin is providing real solutions to long-standing financial challenges facing millions of Africans.</p>
        
        <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; margin: 16px 0; text-align: center;">
          <p style="font-size: 18px; font-weight: bold; margin: 0; color: #fb7185;">Bitcoin is addressing real financial needs in Africa through practical applications that improve lives</p>
        </div>
      </div>
      
      <div style="background-color: rgba(225, 29, 72, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #e11d48; margin-top: 0;">Remittances: Connecting Families</h2>
        
        <p style="margin-bottom: 16px;">Africa receives over $90 billion in remittances annually, with traditional services charging 7-10% in fees. Bitcoin is dramatically changing this landscape:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #e11d48;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">Nigeria Case Study</h3>
            <p style="margin-bottom: 8px;">Nigeria receives over $17 billion in annual remittances from its diaspora. Many Nigerians now use Bitcoin to:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Send money home with fees under 1%</li>
              <li>Avoid currency controls and restrictions</li>
              <li>Complete transfers in minutes instead of days</li>
              <li>Reach family members without bank accounts</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #e11d48;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">How It Works</h3>
            <p style="margin-bottom: 0;">A typical Bitcoin remittance flow:</p>
            <ol style="margin-bottom: 0; padding-left: 20px;">
              <li>Sender buys Bitcoin using their local currency</li>
              <li>Bitcoin is transferred directly to recipient's wallet</li>
              <li>Recipient can keep the Bitcoin or exchange for local currency</li>
              <li>The entire process often takes less than an hour</li>
            </ol>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px;">
          <p style="margin: 0; font-style: italic;">Did you know? If all African remittances switched to Bitcoin, the continent would save approximately $9 billion annually in fees alone.</p>
        </div>
      </div>
      
      <div style="background-color: rgba(225, 29, 72, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #e11d48; margin-top: 0;">Business Applications</h2>
        
        <p style="margin-bottom: 16px;">African businesses face numerous challenges with traditional payment systems, including high fees, long settlement times, and limited access to global markets. Bitcoin is providing solutions:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">⚡</div>
            <h3 style="color: #fb7185; margin: 0 0 8px 0;">Instant Settlement</h3>
            <p style="margin: 0; font-size: 14px;">No waiting days for payments to clear; transactions confirm in minutes</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🔒</div>
            <h3 style="color: #fb7185; margin: 0 0 8px 0;">No Chargebacks</h3>
            <p style="margin: 0; font-size: 14px;">Once confirmed, Bitcoin transactions cannot be reversed, protecting merchants</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🌐</div>
            <h3 style="color: #fb7185; margin: 0 0 8px 0;">Global Reach</h3>
            <p style="margin: 0; font-size: 14px;">Accept payments from anywhere in the world without currency conversion issues</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">📱</div>
            <h3 style="color: #fb7185; margin: 0 0 8px 0;">Mobile Integration</h3>
            <p style="margin: 0; font-size: 14px;">Works seamlessly with Africa's high mobile penetration rates</p>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(225, 29, 72, 0.05); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #e11d48; margin-top: 0;">Savings and Wealth Preservation</h2>
        
        <p style="margin-bottom: 16px;">Many African currencies suffer from high inflation and devaluation. Bitcoin offers an alternative store of value:</p>
        
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
          <div style="flex: 1; min-width: 250px; background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">Inflation Protection</h3>
            <p style="margin-bottom: 0;">Annual inflation rates in some African countries:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Zimbabwe: Experienced hyperinflation multiple times</li>
              <li>Sudan: Over 300% in recent years</li>
              <li>Nigeria: Consistently above 15%</li>
              <li>Ghana: Often exceeding 20%</li>
            </ul>
            <p style="margin-top: 8px; margin-bottom: 0;">Bitcoin's fixed supply of 21 million provides protection against currency devaluation.</p>
          </div>
          
          <div style="flex: 1; min-width: 250px; background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">Banking the Unbanked</h3>
            <p style="margin-bottom: 8px;">With over 60% of sub-Saharan Africa unbanked but 80%+ having mobile phones, Bitcoin provides:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Financial services without requiring bank accounts</li>
              <li>Ability to save small amounts (micropayments)</li>
              <li>Control over funds without third-party permissions</li>
              <li>Accessibility through simple feature phones in some cases</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(225, 29, 72, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <h2 style="color: #e11d48; margin-top: 0; text-align: center;">Community Success Stories</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #e11d48;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">Bitsacco and the Cooperative Model:</h3>
            <p style="margin-bottom: 0;">Bitsacco is a template for Savings and Credit Cooperative Organizations (SACCOs) in Africa, built on Bitcoin.  Key Components & Features:</p>
            <p style="margin-bottom: 0;">Key Components & Features:</p>

            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>SACCO Integration: It leverages the existing SACCO model, a familiar community-based financial institution in Kenya and other African countries.</li>
              <li>Fedimint Protocol: Bitsacco utilizes Fedimint, an open-source protocol for custodying and transacting Bitcoin in a community context. [4][5] This aligns with the trust assumptions already present in SACCOs.</li>
              <li>Find out more about this fro our website</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #e11d48;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">Educational Initiatives</h3>
            <p style="margin-bottom: 0;">Trezor Academy: Trezor Academy is an educational initiative by Trezor focused on promoting Bitcoin adoption and understanding, particularly in developing regions. </p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Bitcoin Adoption: Trezor Academy aims to accelerate Bitcoin adoption worldwide by providing accessible and localized education.</li>
              <li>Focus on Underserved Regions: It focuses on communities in developing regions, particularly in the Global South, including Africa, South America, Mexico, and the Caribbean.</li>
             
              <li>Financial Literacy: The academy equips individuals with financial literacy and the knowledge to navigate the digital economy securely.</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px; border-left: 4px solid #e11d48;">
            <h3 style="color: #fb7185; margin-top: 0; font-size: 18px;">Entrepreneurship</h3>
            <p style="margin-bottom: 0;">Bitcoin is fostering entrepreneurship by:</p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Enabling African developers to receive international payments</li>
              <li>Creating local Bitcoin exchanges and services</li>
              <li>Building Bitcoin education businesses</li>
              <li>Developing Africa-specific Bitcoin wallet solutions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(225, 29, 72, 0.07); border-radius: 8px; padding: 20px;">
        <h2 style="color: #e11d48; margin-top: 0;">Challenges and Solutions</h2>
        
        <p style="margin-bottom: 16px;">Despite its benefits, Bitcoin adoption in Africa faces several challenges:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px;">
            <h3 style="color: #fb7185; margin-top: 0;">Infrastructure Limitations</h3>
            <p style="margin-bottom: 8px;"><strong>Challenge:</strong> Unreliable internet access and electricity in many regions.</p>
            <p style="margin-bottom: 0;"><strong>Solutions:</strong></p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Offline transaction solutions using SMS</li>
              <li>Solar-powered Bitcoin nodes</li>
              <li>Mesh networks for connectivity in remote areas</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px;">
            <h3 style="color: #fb7185; margin-top: 0;">Regulatory Uncertainty</h3>
            <p style="margin-bottom: 8px;"><strong>Challenge:</strong> Inconsistent or restrictive regulations across different countries.</p>
            <p style="margin-bottom: 0;"><strong>Solutions:</strong></p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Industry associations educating policymakers</li>
              <li>Peer-to-peer trading models avoiding regulatory obstacles</li>
              <li>Focus on countries with progressive regulatory stances</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 16px;">
            <h3 style="color: #fb7185; margin-top: 0;">Education Gap</h3>
            <p style="margin-bottom: 8px;"><strong>Challenge:</strong> Limited understanding of Bitcoin and how to use it securely.</p>
            <p style="margin-bottom: 0;"><strong>Solutions:</strong></p>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Community-led education initiatives</li>
              <li>Simplified, localized wallet interfaces</li>
              <li>Bitcoin educational content in local languages</li>
              <li>Hands-on training through Bitcoin meetups</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; margin-top: 16px; text-align: center;">
          <p style="margin: 0; font-style: italic;">Bitcoin's impact in Africa demonstrates how technology designed for freedom and inclusion can transform lives when applied to real-world challenges.</p>
        </div>
      </div>
    `,contentType:"realUseCase",unlocked:!0,completed:!1},{id:2,title:"Sending Value Without Borders",subtitle:"Lightning Network Power",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-Sending-Value-without-Borders.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"The Lightning Network is revolutionizing how Africans send and receive money, enabling near-instant, low-cost transactions across borders. This mission explores how this second-layer solution makes Bitcoin practical for everyday use."),e.createElement("p",null,"Unlike traditional mobile money systems, which are often limited by national boundaries, Lightning Network connections transcend borders, creating a seamless payment network throughout Africa and beyond."),e.createElement("p",null,"You'll learn how Lightning is being used for cross-country payments, supporting content creators through microtips, purchasing mobile airtime, and other practical applications."),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"Key Lightning Concepts:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Speed and Cost: Near-instant transactions with minimal fees"),e.createElement("li",null,"Payment Channels: How Lightning maintains Bitcoin's security while scaling"),e.createElement("li",null,"Routing: How payments find their way across the network"),e.createElement("li",null,"Use Cases: Real examples from across Africa"),e.createElement("li",null,"Mobile Integration: How Lightning works on basic smartphones")),e.createElement("p",{className:"mt-4"},"Through interactive challenges, you'll experience the power of Lightning first-hand and understand why it's especially valuable in regions with fragmented payment systems and cross-border needs.")),contentType:"lightningNetwork",unlocked:!0,completed:!1},{id:3,title:"Building With Bitcoin",subtitle:"Builders, Coders, Creators",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-Building-with-Bitcoin.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"Africa is home to a growing community of innovators and builders who are creating impactful Bitcoin solutions. This mission highlights their work and inspires you to see yourself as a potential contributor to the ecosystem. One such community is Btrust which is emerging as a prominent force in the Bitcoin ecosystem, distinguished by its unwavering commitment to decentralizing Bitcoin software development and fostering talent within the Global South."),e.createElement("p",null,"Btrust Builders Program: Btrust Builders is a program specifically designed to educate African software developers about Bitcoin and Lightning development. The program offers clear learning pathways, mentorship, and community support to help developers become open-source Bitcoin contributors. Btrust Builders aims to create a pipeline of African developers who can contribute to Bitcoin's growth and innovation."),e.createElement("p",null,"This mission will introduce you to these builders and their projects, showing the diverse ways people contribute to the Bitcoin ecosystem in Africa."),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"African Bitcoin Initiatives:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Educational Content: Podcasts and resources that spread knowledge"),e.createElement("li",null,"Renewable Mining: Sustainable approaches to Bitcoin mining"),e.createElement("li",null,"Developer Hubs: Communities fostering technical skills"),e.createElement("li",null,"Entrepreneur Networks: Support systems for Bitcoin startups"),e.createElement("li",null,"Open Source Projects: African contributions to Bitcoin software")),e.createElement("p",{className:"mt-4"},"By learning about these initiatives, you'll be inspired to think about how you might contribute to the Bitcoin ecosystem, regardless of your background or skill set.")),contentType:"builders",unlocked:!0,completed:!1},{id:4,title:"Everyday Bitcoin Tools",subtitle:"Apps and Wallets That Work",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-Real-use-cases-in-Africa.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"This mission explores the practical tools that Africans are using to engage with Bitcoin effectively in their daily lives. You'll learn about various wallet options and how to choose the right one for different needs."),e.createElement("p",null,"From convenient mobile wallets like Phoenix, Muun, and Wallet of Satoshi to services like Bitnob that offer local currency options and Machankura's innovative SMS-based solution for users without internet access, you'll discover tools designed for African contexts."),e.createElement("p",null,"Understanding the difference between custodial wallets (where a company holds your Bitcoin) and non-custodial wallets (where you control your own keys) is crucial for making informed choices about security and convenience."),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"Key Wallet Types:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Mobile Wallets: Convenient solutions for smartphones"),e.createElement("li",null,"Lightning Wallets: Specialized for fast, low-cost transactions"),e.createElement("li",null,"Feature Phone Solutions: Options for basic phones"),e.createElement("li",null,"Hybrid Wallets: Offering both Bitcoin and local currency features"),e.createElement("li",null,"Educational Resources: Tools that help users learn while using")),e.createElement("p",{className:"mt-4"},"Through practical exercises, you'll learn to match different wallet types to various real-world scenarios, building confidence in using Bitcoin tools effectively.")),contentType:"tools",unlocked:!0,completed:!1},{id:5,title:"Knowledge Test",subtitle:"Africa Rising",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-Knowledge-Test.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"This mission will test your understanding of Bitcoin's practical applications in Africa, the Lightning Network's benefits, and the tools available for everyday use."),e.createElement("p",null,"Through a comprehensive quiz and interactive map challenge, you'll reinforce your knowledge of key concepts and envision how Bitcoin adoption might continue to spread across the continent."),e.createElement("p",null,"By plotting your own Bitcoin adoption journey across Africa, you'll develop a sense of agency and possibility, identifying projects and initiatives you might want to join or create."),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"Key Topics Covered:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Bitcoin use cases across different African countries"),e.createElement("li",null,"Lightning Network functionality and benefits"),e.createElement("li",null,"Wallet options and their appropriate use cases"),e.createElement("li",null,"Ways to contribute to the Bitcoin ecosystem"),e.createElement("li",null,"The Ubuntu philosophy in the context of Bitcoin adoption")),e.createElement("p",{className:"mt-4"},"This mission serves as a comprehensive review of the realm, preparing you for the final bonus mission where you'll apply your knowledge creatively.")),contentType:"knowledge",unlocked:!0,completed:!1},{id:6,title:"The Seed of Tomorrow",subtitle:"Bonus Mission",description:e.createElement("div",{className:"space-y-4"},e.createElement("img",{src:"https://bitcoiners.africa/wp-content/uploads/2025/06/Realm-6-The-Seed-Of-Tomorrow.png",alt:"Everyday Bitcoin Tools",className:"w-full h-48 object-cover rounded-lg mb-4"}),e.createElement("p",null,"In this final mission, you'll help Asha develop a Bitcoin project for her village, applying everything you've learned about Bitcoin's practical applications in Africa."),e.createElement("p",null,"You can choose from various focus areas: education workshops, farming co-ops, local payment systems, or platforms for creative work. Each option explores different ways Bitcoin can address community needs."),e.createElement("p",null,'This mission embodies the spirit of Ubuntu—"I thrive because we build together"—encouraging you to think about how Bitcoin enables collective empowerment and community growth.'),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"Project Areas:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"Education: Workshops and resources to teach Bitcoin basics"),e.createElement("li",null,"Farming: Co-ops that use Bitcoin for transactions and investment"),e.createElement("li",null,"Commerce: Local payment systems for markets and businesses"),e.createElement("li",null,"Creative Economy: Platforms for artists to receive Bitcoin for their work"),e.createElement("li",null,"Community Savings: Bitcoin-based group saving initiatives")),e.createElement("p",{className:"mt-4"},"By creating a project pitch and assembling a team with diverse skills, you'll gain practical insights into how Bitcoin projects come to life and how they can benefit entire communities.")),contentType:"bonus",unlocked:!0,completed:!1}],x=[{id:1,title:"Comprehensive Review",subtitle:"Your Bitcoin Journey So Far",description:e.createElement("div",{className:"space-y-4"},e.createElement("p",null,"Your journey through Bitcoin's realms has equipped you with diverse knowledge. Now, solidify your understanding through comprehensive review and practical application."),e.createElement("h3",{className:"text-lg font-semibold mt-6 mb-2"},"You'll Review:"),e.createElement("ul",{className:"list-disc pl-5 space-y-1"},e.createElement("li",null,"The evolution of money and Bitcoin's role"),e.createElement("li",null,"Privacy, security, and financial sovereignty"),e.createElement("li",null,"Cryptographic foundations"),e.createElement("li",null,"Mining and consensus mechanisms"),e.createElement("li",null,"Protocol governance and upgrades"),e.createElement("li",null,"Real-world applications in Africa"))),quizData:{questions:[{question:"What are the three core functions of money?",options:["Medium of exchange, store of value, unit of account","Spending, saving, borrowing","Gold, silver, copper","Mining, trading, holding"],correctAnswer:0},{question:"Which cryptographic primitive enables Bitcoin transaction signatures?",options:["SHA-256","ECDSA","AES","RSA"],correctAnswer:1}]},content:`
      <div style="width: 100%; padding: 0; margin: 0; min-height: 100vh;">
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; text-align: center; font-size: 28px;">Your Complete Bitcoin Journey</h2>
          
          <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.6;">Congratulations on reaching the Summit of Knowledge! This comprehensive review will help consolidate your understanding of Bitcoin's foundational concepts, technical aspects, and real-world implications that you've explored throughout your journey.</p>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
            <p style="font-size: 18px; font-weight: bold; margin: 0; color: #67e8f9;">Bitcoin is a revolutionary technology that combines cryptography, distributed systems, economics, and game theory to create a secure, censorship-resistant monetary network</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; font-size: 24px;">Realm 1: The Origins of Money</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>The evolution from barter to commodity and fiat money</li>
                <li>Money's essential functions: medium of exchange, store of value, unit of account</li>
                <li>The properties of sound money: durability, portability, divisibility, fungibility, scarcity</li>
                <li>Historical examples of money from different African cultures</li>
                <li>How hyperinflation destroys value and undermines financial systems</li>
              </ul>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Bitcoin's Relevance</h3>
              <p style="margin-bottom: 12px;">Bitcoin addresses the historical challenges of money by providing:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Digital scarcity through a fixed supply of 21 million</li>
                <li>Perfect divisibility down to 1/100,000,000 (one satoshi)</li>
                <li>Borderless transferability without permission</li>
                <li>Resistance to censorship and confiscation</li>
                <li>Protection against arbitrary inflation and debasement</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px;">
            <p style="margin: 0; font-style: italic; text-align: center;">Bitcoin represents the first successful implementation of digital scarcity without requiring trust in a central authority, solving the "double-spending problem" that prevented previous digital money systems from working.</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; font-size: 24px;">Realm 2: The Central Citadel</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Centralized vs. decentralized financial systems</li>
                <li>Privacy concerns in traditional financial infrastructure</li>
                <li>How surveillance capitalism commoditizes personal data</li>
                <li>Central Bank Digital Currencies (CBDCs) and their implications</li>
                <li>The balance between convenience and sovereignty</li>
              </ul>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Bitcoin's Relevance</h3>
              <p style="margin-bottom: 12px;">Bitcoin offers an alternative to centralized control through:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Permissionless participation in a global network</li>
                <li>Pseudonymous transactions that increase privacy</li>
                <li>Self-custody options that eliminate counterparty risk</li>
                <li>Resistance to arbitrary rules and restrictions</li>
                <li>Protection against financial censorship and monitoring</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px;">
            <p style="margin: 0; font-style: italic; text-align: center;">The importance of Bitcoin's decentralization cannot be overstated - it creates a financial system where rules are enforced by mathematics and consensus rather than by corruptible institutions.</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; font-size: 24px;">Realm 3: The Forest of Sparks</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Bitcoin's origin with Satoshi Nakamoto's 2008 whitepaper</li>
                <li>The cypherpunk movement and digital privacy advocates</li>
                <li>Previous digital currency attempts (DigiCash, e-gold, etc.)</li>
                <li>Cryptographic primitives: hash functions and digital signatures</li>
                <li>The blockchain as a chronological, immutable ledger</li>
              </ul>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Technical Foundation</h3>
              <p style="margin-bottom: 12px;">Bitcoin's technical innovation combines:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>SHA-256 hash functions to create unique digital fingerprints</li>
                <li>Public-key cryptography for secure ownership verification</li>
                <li>Digital signatures to prove transaction authorization</li>
                <li>Distributed ledger technology for transparent record-keeping</li>
                <li>Peer-to-peer network architecture for direct value transfer</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px;">
            <p style="margin: 0; font-style: italic; text-align: center;">Bitcoin represents the synthesis of decades of cryptographic research and experimentation - it didn't emerge from nowhere but built upon a foundation of prior work in digital currency and distributed systems.</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; font-size: 24px;">Realm 4: The Mountain Forge</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Mining as the process of transaction validation and block creation</li>
                <li>Proof-of-Work (PoW) as Bitcoin's consensus mechanism</li>
                <li>The halving schedule and controlled supply issuance</li>
                <li>Difficulty adjustment to maintain consistent block times</li>
                <li>Energy consumption and incentive alignment</li>
              </ul>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Security Model</h3>
              <p style="margin-bottom: 12px;">Bitcoin's security derives from:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Economic incentives that make honesty more profitable than cheating</li>
                <li>Computational work that makes attacking the network prohibitively expensive</li>
                <li>Decentralized validation by thousands of independent nodes</li>
                <li>The difficulty adjustment mechanism that maintains security regardless of hash rate</li>
                <li>Game theory that aligns miners' profit motives with network security</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px;">
            <p style="margin: 0; font-style: italic; text-align: center;">Mining transforms electricity into security, creating an immutable history that becomes exponentially more difficult to change as time passes - this is Bitcoin's key innovation for establishing trust without authorities.</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; font-size: 24px;">Realm 5: The Council of Forks</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Bitcoin's governance model through distributed consensus</li>
                <li>Soft forks vs. hard forks as mechanism for protocol upgrades</li>
                <li>Bitcoin Improvement Proposals (BIPs) process</li>
                <li>The balance of power between developers, miners, users, and businesses</li>
                <li>Historical upgrades and the conservative approach to changes</li>
              </ul>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Governance in Practice</h3>
              <p style="margin-bottom: 12px;">Bitcoin's resilience comes from:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>The requirement for broad consensus before implementing changes</li>
                <li>The ability for users to reject unwanted changes by not upgrading</li>
                <li>The focus on backward compatibility to prevent network fragmentation</li>
                <li>Open development processes with multiple independent reviewers</li>
                <li>The principle of "rough consensus" requiring substantial agreement</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px;">
            <p style="margin: 0; font-style: italic; text-align: center;">Bitcoin's governance might seem slow and conservative, but this resistance to change is a feature, not a bug - it ensures that only thoroughly vetted improvements with broad support are implemented.</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h2 style="color: #22d3ee; margin-top: 0; font-size: 24px;">Realm 6: The Ubuntu Village</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Key Concepts</h3>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Real-world Bitcoin applications across Africa</li>
                <li>Bitcoin's role in facilitating low-cost remittances</li>
                <li>Protection against currency devaluation and inflation</li>
                <li>Financial inclusion for the unbanked and underbanked</li>
                <li>The Lightning Network for fast, low-fee transactions</li>
              </ul>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; border-left: 4px solid #22d3ee;">
              <h3 style="color: #67e8f9; margin-top: 0; font-size: 18px;">Impact in Africa</h3>
              <p style="margin-bottom: 12px;">Bitcoin is making a difference through:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Enabling cross-border payments without traditional banking infrastructure</li>
                <li>Providing an alternative to unstable local currencies</li>
                <li>Creating entrepreneurial opportunities in Bitcoin services</li>
                <li>Facilitating direct international trade without intermediaries</li>
                <li>Supporting community projects and educational initiatives</li>
              </ul>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px;">
            <p style="margin: 0; font-style: italic; text-align: center;">The principles of Ubuntu - "I am because we are" - align with Bitcoin's network effects, where the system becomes stronger and more valuable as more people participate in it.</p>
          </div>
        </div>
        
        <div style="background-color: rgba(34, 211, 238, 0.07); border-radius: 12px; padding: 32px;">
          <h2 style="color: #22d3ee; margin-top: 0; text-align: center; font-size: 24px;">Bringing It All Together</h2>
          
          <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.6;">Bitcoin represents a synthesis of multiple disciplines and addresses challenges that have persisted throughout monetary history. Its lasting impact comes from combining:</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; text-align: center;">
              <div style="font-size: 32px; margin-bottom: 12px;">📜</div>
              <h3 style="color: #67e8f9; margin: 0 0 12px 0;">Historical Context</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.5;">Bitcoin addresses the shortcomings of previous monetary systems, from commodity money to fiat currencies</p>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; text-align: center;">
              <div style="font-size: 32px; margin-bottom: 12px;">🔐</div>
              <h3 style="color: #67e8f9; margin: 0 0 12px 0;">Technical Innovation</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.5;">A revolutionary combination of cryptography, distributed systems, and economic incentives</p>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; text-align: center;">
              <div style="font-size: 32px; margin-bottom: 12px;">⚖️</div>
              <h3 style="color: #67e8f9; margin: 0 0 12px 0;">Governance Innovation</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.5;">A new model for reaching consensus without central authorities or formal governance structures</p>
            </div>
            
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; text-align: center;">
              <div style="font-size: 32px; margin-bottom: 12px;">🌍</div>
              <h3 style="color: #67e8f9; margin: 0 0 12px 0;">Global Impact</h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.5;">Practical solutions to real-world problems of financial access, sovereignty, and inclusion</p>
            </div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 16px; margin-top: 20px; text-align: center;">
            <p style="margin: 0; font-style: italic;">Understanding Bitcoin holistically requires appreciating both its technological foundation and its economic, social, and political implications. No single perspective captures its full significance.</p>
          </div>
        </div>
      </div>
    `,contentType:"comprehensive",unlocked:!0,completed:!1},{id:2,title:"Practical Challenges",subtitle:"Apply Your Knowledge",description:e.createElement("div",{className:"space-y-4"},e.createElement("p",null,"Put your knowledge into action through real-world scenarios and practical problem-solving.")),quizData:{questions:[{question:"When setting up a Bitcoin node, which network port should be open?",options:["8333","3000","80","443"],correctAnswer:0}]},content:`
      <div style="width: 100%; padding: 0; margin: 0; min-height: 100vh;">
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">Challenge 1: Wallet Security Setup</h3>
          <p style="margin-bottom: 16px; font-size: 16px;">Scenario: You're advising a small business in Ghana about accepting Bitcoin payments.</p>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Required Tasks:</h4>
            <ol style="padding-left: 20px; line-height: 1.6;">
              <li>Choose appropriate wallet types for different amounts</li>
              <li>Design backup procedures</li>
              <li>Create security protocols</li>
            </ol>
          </div>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Solution Framework:</h4>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>Hot wallet for daily transactions (<$1000)</li>
              <li>Cold storage for larger amounts</li>
              <li>Multisig setup for business funds</li>
            </ul>
          </div>
        </div>

        <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px;">
          <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">Challenge 2: Mining Operation Analysis</h3>
          <p style="margin-bottom: 16px; font-size: 16px;">Scenario: Evaluate the viability of a small mining operation using hydroelectric power in Uganda.</p>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Required Calculations:</h4>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>Power costs: $0.04/kWh</li>
              <li>Available power: 1 MW</li>
              <li>Current Bitcoin price: $40,000</li>
              <li>Network hashrate: 400 EH/s</li>
            </ul>
          </div>
        </div>
      </div>
    `,contentType:"practical",unlocked:!0,completed:!1},{id:3,title:"Technical Mastery",subtitle:"Diving Deeper",description:e.createElement("div",{className:"space-y-4"},e.createElement("p",null,"Master the technical intricacies of Bitcoin's protocol and network architecture.")),quizData:{questions:[{question:"What is the maximum size of Bitcoin's witness data in a block?",options:["1 MB","2 MB","4 MB","8 MB"],correctAnswer:2}]},content:`
      <div style="width: 100%; padding: 0; margin: 0; min-height: 100vh;">
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">Bitcoin Protocol Deep Dive</h3>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Transaction Structure</h4>
            <pre style="background-color: rgba(0, 0, 0, 0.3); padding: 16px; border-radius: 6px; overflow-x: auto; font-size: 14px; color: #fff;">
Transaction {
  version: 2,
  inputs: [Input],
  outputs: [Output],
  locktime: 0
}</pre>
            <p style="margin-top: 12px;">Each transaction must satisfy these conditions:</p>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>All inputs must be unspent (UTXO model)</li>
              <li>Total input value ≥ total output value</li>
              <li>All input scripts must evaluate to true</li>
            </ul>
          </div>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Script Language</h4>
            <p style="margin-bottom: 12px;">Bitcoin's script is a stack-based language with operations like:</p>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>OP_CHECKSIG: Validates transaction signatures</li>
              <li>OP_HASH160: Performs RIPEMD160(SHA256(x))</li>
              <li>OP_EQUAL: Compares top two stack items</li>
            </ul>
          </div>
        </div>

        <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px;">
          <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">Network Architecture</h3>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Node Types</h4>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>Full nodes: Validate all transactions and blocks</li>
              <li>Light nodes: Verify headers only (SPV)</li>
              <li>Mining nodes: Create new blocks</li>
            </ul>
          </div>
        </div>
      </div>
    `,contentType:"technical",unlocked:!0,completed:!1},{id:4,title:"The Final Challenge",subtitle:"Putting It All Together",description:e.createElement("div",{className:"space-y-4"},e.createElement("p",null,"Face a comprehensive challenge that tests your complete Bitcoin knowledge.")),content:`
    <div style="width: 100%; padding: 0; margin: 0; min-height: 100vh;">
      <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
        <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">The Ultimate Bitcoin Challenge</h3>
        <p style="margin-bottom: 16px; font-size: 16px;">You are tasked with designing a Bitcoin-based financial system for a community of 10,000 people in rural Tanzania.</p>

        <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
          <h4 style="color: #67e8f9; margin-bottom: 12px;">System Requirements:</h4>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>Accessible to users without smartphones</li>
            <li>Functional with intermittent internet</li>
            <li>Secure against common threats</li>
            <li>Scalable to neighboring communities</li>
          </ul>
        </div>
      </div>

      <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
        <h4 style="color: #67e8f9; margin-bottom: 16px; font-size: 20px;">Design Components:</h4>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
            <h5 style="color: #22d3ee; margin-bottom: 12px;">Infrastructure</h5>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>Mesh network setup</li>
              <li>Local full nodes</li>
              <li>Backup power systems</li>
            </ul>
          </div>

          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
            <h5 style="color: #22d3ee; margin-bottom: 12px;">User Interface</h5>
            <ul style="padding-left: 20px; line-height: 1.6;">
              <li>USSD integration</li>
              <li>Paper wallet system</li>
              <li>Community training program</li>
            </ul>
          </div>
        </div>
      </div>

      <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px;">
        <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">🧠 Interactive Bitcoin Mastery Quiz</h3>
        <p style="margin-bottom: 20px; font-size: 16px;">Test your knowledge with these interactive questions. Click on your answer to see if you're correct!</p>

        <div id="quiz-container">
          <div class="quiz-question" style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Question 1: What are the three core functions of money?</h4>
            <div class="quiz-options">
              <button onclick="selectAnswer(this, true)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                a) Medium of exchange, store of value, unit of account
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                b) Spending, saving, borrowing
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                c) Gold, silver, copper
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                d) Mining, trading, holding
              </button>
            </div>
            <div class="feedback" style="margin-top: 12px; padding: 12px; border-radius: 6px; display: none;"></div>
          </div>

          <div class="quiz-question" style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Question 2: Which cryptographic primitive enables Bitcoin transaction signatures?</h4>
            <div class="quiz-options">
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                a) SHA-256
              </button>
              <button onclick="selectAnswer(this, true)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                b) ECDSA
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                c) AES
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                d) RSA
              </button>
            </div>
            <div class="feedback" style="margin-top: 12px; padding: 12px; border-radius: 6px; display: none;"></div>
          </div>

          <div class="quiz-question" style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #67e8f9; margin-bottom: 12px;">Question 3: What is the maximum number of Bitcoins that can ever exist?</h4>
            <div class="quiz-options">
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                a) 100 million
              </button>
              <button onclick="selectAnswer(this, true)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                b) 21 million
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                c) 1 billion
              </button>
              <button onclick="selectAnswer(this, false)" style="display: block; width: 100%; padding: 12px; margin: 8px 0; background-color: rgba(34, 211, 238, 0.1); border: 1px solid #22d3ee; border-radius: 6px; color: white; cursor: pointer; text-align: left;">
                d) No limit
              </button>
            </div>
            <div class="feedback" style="margin-top: 12px; padding: 12px; border-radius: 6px; display: none;"></div>
          </div>
        </div>

        <script>
          function selectAnswer(button, isCorrect) {
            // Get the question container
            const questionDiv = button.closest('.quiz-question');
            const options = questionDiv.querySelectorAll('button');
            const feedback = questionDiv.querySelector('.feedback');
            
            // Disable all buttons in this question
            options.forEach(btn => {
              btn.style.pointerEvents = 'none';
              btn.style.opacity = '0.7';
            });
            
            // Style the selected button
            if (isCorrect) {
              button.style.backgroundColor = 'rgba(34, 197, 94, 0.3)';
              button.style.borderColor = '#22c55e';
              feedback.innerHTML = '✅ Correct! Great job!';
              feedback.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
              feedback.style.color = '#22c55e';
            } else {
              button.style.backgroundColor = 'rgba(239, 68, 68, 0.3)';
              button.style.borderColor = '#ef4444';
              feedback.innerHTML = '❌ Incorrect. Try reviewing the material again.';
              feedback.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
              feedback.style.color = '#ef4444';
              
              // Highlight the correct answer
              options.forEach(btn => {
                if (btn.onclick.toString().includes('true')) {
                  btn.style.backgroundColor = 'rgba(34, 197, 94, 0.3)';
                  btn.style.borderColor = '#22c55e';
                }
              });
            }
            
            feedback.style.display = 'block';
          }
        <\/script>
      </div>
    </div>
  `,contentType:"final",unlocked:!0,completed:!1},{id:5,title:"Journey's End",subtitle:"Your Bitcoin Certification",description:e.createElement("div",{className:"space-y-4"},e.createElement("p",null,"Receive your certification and reflect on your Bitcoin journey.")),content:`
      <div style="width: 100%; padding: 0; margin: 0; min-height: 100vh;">
        <div style="background-color: rgba(34, 211, 238, 0.1); border-radius: 12px; padding: 32px; margin-bottom: 40px;">
          <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">Your Bitcoin Journey Achievement</h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
              <h4 style="color: #67e8f9; margin-bottom: 12px;">Knowledge Mastery</h4>
              <ul style="padding-left: 20px; line-height: 1.6;">
                <li>Monetary history and principles</li>
                <li>Technical protocol understanding</li>
                <li>Security and privacy concepts</li>
              </ul>
            </div>

            <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px;">
              <h4 style="color: #67e8f9; margin-bottom: 12px;">Practical Skills</h4>
              <ul style="padding-left: 20px; line-height: 1.6;">
                <li>Wallet management</li>
                <li>Network participation</li>
                <li>Community education</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(34, 211, 238, 0.05); border-radius: 12px; padding: 32px;">
          <h3 style="color: #22d3ee; font-size: 24px; margin-bottom: 16px;">Certification Details</h3>
          <p style="margin-bottom: 12px;">This certification validates your comprehensive understanding of:</p>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>Bitcoin's technical architecture</li>
            <li>Economic principles and implications</li>
            <li>Real-world applications and impact</li>
            <li>Security best practices</li>
            <li>Future development potential</li>
          </ul>
        </div>
      </div>
    `,contentType:"certificate",unlocked:!0,completed:!1}];function B(n){switch(n){case 1:return"Realm of Origins";case 2:return"The Central Citadel";case 3:return"The Forest of Sparks";case 4:return"The Mountain Forge";case 5:return"The Council of Forks";case 6:return"The Ubuntu Village";case 7:return"The Summit of Knowledge";default:return"Unknown Realm"}}function p(n){switch(n){case 1:return u.length;case 2:return g.length;case 3:return h.length;case 4:return y.length;case 5:return b.length;case 6:return f.length;case 7:return x.length;default:return 0}}function N(n,t){switch(n){case 1:const l=u.find(i=>i.id===100+t);return(l==null?void 0:l.title)||`Mission ${t}`;case 2:const o=g.find(i=>i.id===t);return(o==null?void 0:o.title)||`Mission ${t}`;case 3:const r=h.find(i=>i.id===t);return(r==null?void 0:r.title)||`Mission ${t}`;case 4:const s=y.find(i=>i.id===t);return(s==null?void 0:s.title)||`Mission ${t}`;case 5:const c=b.find(i=>i.id===t);return(c==null?void 0:c.title)||`Mission ${t}`;case 6:const d=f.find(i=>i.id===t);return(d==null?void 0:d.title)||`Mission ${t}`;case 7:const m=x.find(i=>i.id===t);return(m==null?void 0:m.title)||`Mission ${t}`;default:return`Mission ${t}`}}function T(n,t){const l=p(n);if(t>=l){const o=n+1;if(p(o)>0)return{hasNextRealm:!0,nextRealmId:o,nextMissionId:1}}return{hasNextRealm:!1}}function C(n){switch(n){case 1:return"Foundations of Money";case 2:return"Governance & Central Banking";case 3:return"Bitcoin's Birth";case 4:return"Mining & Consensus";case 5:return"Bitcoin Governance";case 6:return"Bitcoin in Africa";case 7:return"Comprehensive Assessment";default:return"Unknown Focus"}}export{f as a,b,y as c,C as d,p as e,N as f,B as g,T as h,x as r};
