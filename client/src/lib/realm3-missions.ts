import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChallengeBox() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/realm3/consensus-simulator'); 
  };
}

// Types for Quiz Challenge
export interface Question {
  id: number;
  text: string;
  answers: {
    id: number;
    text: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
  explanation?: string;
}

export interface MissionContent {
  id: number;
  title: string;
  subtitle?: string;
  imagePath?: string;
  simulationType: 'cryptography' | 'consensus' | 'hashing' | 'merkletree';
  content: React.ReactNode;
  completionMessage?: string;
}

// Helper function to create content more easily
const createContent = (elements: React.ReactNode[]): React.ReactNode => {
  return React.createElement(React.Fragment, null, ...elements);
};

export const realm3Missions: MissionContent[] = [
  {
    id: 1,
    title: "What Makes Bitcoin Work",
    subtitle: "The Trustless Revolution",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/1534e4562b8d81db405fd9b725fee9e0067de01b1e0903dd13434988beafa612?w=530&h=260",
    simulationType: "cryptography",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Welcome to the Technical Heart of Bitcoin. Here you'll discover the revolutionary concepts that make Bitcoin " +
        "work without banks, governments, or any central authority. Every transaction, every transfer of value, " +
        "happens through pure mathematics and cryptography."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "trustless" }, "What is Trustlessness?"),
      React.createElement('p', { className: "mb-4", key: "trustless-desc" },
        "In traditional systems, you must trust banks to hold your money, payment processors to transfer it, and " +
        "governments to maintain the currency. Bitcoin eliminates this need for trust by using mathematical proof " +
        "instead of institutional promises."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "example-box" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "example-title" }, "Real-World Example"),
        React.createElement('p', { key: "example-text" },
          "When Alice sends Bitcoin to Bob, she doesn't need to trust any bank or institution. The network " +
          "mathematically verifies that Alice owns the Bitcoin and that she hasn't already spent it elsewhere. " +
          "No intermediary can stop, reverse, or manipulate this transaction."
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "crypto-role" }, "The Role of Cryptography"),
      React.createElement('p', { className: "mb-4", key: "crypto-desc" },
        "Cryptography in Bitcoin serves as digital ownership proof. When you 'own' Bitcoin, you actually own " +
        "a cryptographic private key that can unlock and spend specific Bitcoin. This key is like a digital " +
        "signature that only you can create, but anyone can verify."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "blockchain-intro" }, "What is a Blockchain?"),
      React.createElement('p', { className: "mb-4", key: "blockchain-desc" },
        "Think of blockchain as a digital ledger book, but instead of pages, it has 'blocks' of transactions. " +
        "Each block is mathematically linked to the previous one, creating an unbreakable chain of transaction history."
      ),
      React.createElement('ul', { className: "list-disc ml-6 mb-4 space-y-2", key: "blockchain-features" }, [
        React.createElement('li', { key: "feature1" }, "Every transaction is recorded permanently and publicly"),
        React.createElement('li', { key: "feature2" }, "Once written, transactions cannot be altered or deleted"),
        React.createElement('li', { key: "feature3" }, "Anyone can verify the entire history from the beginning"),
        React.createElement('li', { key: "feature4" }, "No single entity controls or can manipulate the ledger")
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "immutability" }, "Immutable Ledgers and Timestamping"),
      React.createElement('p', { className: "mb-4", key: "immutable-desc" },
        "Each Bitcoin transaction is timestamped and locked into the blockchain forever. This creates an immutable " +
        "record that proves when each transaction occurred and prevents anyone from later claiming it happened " +
        "differently. The mathematical linking between blocks ensures that changing any past transaction would " +
        "require recalculating all subsequent blocks—a computationally impossible task."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "vs-traditional" }, "Bitcoin vs Traditional Ledgers"),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "comparison" }, [
        React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4", key: "traditional" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "trad-title" }, "Traditional Ledgers"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "trad-list" }, [
            React.createElement('li', { key: "trad1" }, "Controlled by single entity"),
            React.createElement('li', { key: "trad2" }, "Can be modified or censored"),
            React.createElement('li', { key: "trad3" }, "Requires trust in institution"),
            React.createElement('li', { key: "trad4" }, "Limited transparency"),
            React.createElement('li', { key: "trad5" }, "Single point of failure")
          ])
        ]),
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "bitcoin" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "btc-title" }, "Bitcoin Ledger"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "btc-list" }, [
            React.createElement('li', { key: "btc1" }, "Distributed across thousands of nodes"),
            React.createElement('li', { key: "btc2" }, "Mathematically immutable"),
            React.createElement('li', { key: "btc3" }, "Trustless verification"),
            React.createElement('li', { key: "btc4" }, "Completely transparent"),
            React.createElement('li', { key: "btc5" }, "Resilient to attacks or failures")
          ])
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/trustless-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "🔓 Interactive Challenge: Experience Trustlessness"),
        React.createElement('p', { key: "challenge-desc" },
          "In this simulation, you'll create and verify Bitcoin transactions without any trusted intermediary. " +
          "See how cryptographic proofs replace the need for banks or governments."
        )
      ])
    ]),
    completionMessage: "Excellent! You now understand the foundational principles that make Bitcoin a trustless, decentralized system."
  },

  {
    id: 2,
    title: "Private Keys, Public Keys & Addresses",
    subtitle: "Your Digital Identity in Bitcoin",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/769917eddc6ee5ee6bf70d4b3468bc2d3751f70a7fbc84c9ccf43c5a46bcb068?w=530&h=260",
    simulationType: "cryptography",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Your Bitcoin ownership comes down to cryptographic keys—mathematical secrets that prove you control " +
        "specific Bitcoin. Understanding how these keys work is fundamental to understanding Bitcoin security."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "private-key" }, "What is a Private Key?"),
      React.createElement('p', { className: "mb-4", key: "private-desc" },
        "A private key is a randomly generated 256-bit number—so large that it's essentially impossible to guess. " +
        "This number is your ultimate proof of Bitcoin ownership. Anyone who knows your private key can spend your Bitcoin."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "private-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "private-example-title" }, "Private Key Example"),
        React.createElement('code', { className: "text-sm text-green-400 break-all", key: "private-hex" },
          "Private Key (Hex): 18E14A7B6A307F426A94F8114701E7C8E774E7F9A47E2C2035DB29A206321725"
        ),
        React.createElement('br', { key: "break1" }),
        React.createElement('code', { className: "text-sm text-blue-300 break-all", key: "private-wif" },
          "Private Key (WIF): L1aW4aubDFB7yfras2S1mN3bqg9nwySY8nkoLmJebSLD5BWv3ENZ"
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "public-key" }, "What is a Public Key?"),
      React.createElement('p', { className: "mb-4", key: "public-desc" },
        "From your private key, mathematical operations generate a corresponding public key. The public key can " +
        "verify signatures created by the private key, but it's computationally impossible to derive the private key " +
        "from the public key. This is the foundation of asymmetric cryptography."
      ),
      React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-4", key: "asymmetric-box" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "asymmetric-title" }, "Asymmetric Encryption in Simple Terms"),
        React.createElement('p', { className: "mb-2", key: "asymmetric-desc" },
          "Think of it like a magic lock and key system:"
        ),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "asymmetric-list" }, [
          React.createElement('li', { key: "asym1" }, "Private Key = Secret key that can lock AND unlock"),
          React.createElement('li', { key: "asym2" }, "Public Key = Public lock that anyone can use to verify, but cannot unlock"),
          React.createElement('li', { key: "asym3" }, "Anyone can verify a signature came from the private key holder"),
          React.createElement('li', { key: "asym4" }, "But only the private key holder can create valid signatures")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "addresses" }, "How Bitcoin Addresses Are Derived"),
      React.createElement('p', { className: "mb-4", key: "address-desc" },
        "Bitcoin addresses are shortened, encoded versions of public keys that make them easier to use and share. " +
        "The derivation process adds error-checking and formatting to make addresses user-friendly."
      ),
      React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 mb-4", key: "derivation-flow" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "flow-title" }, "Address Derivation Flow"),
        React.createElement('div', { className: "space-y-2 text-sm", key: "flow-steps" }, [
          React.createElement('div', { key: "step1" }, "1. Private Key → Public Key (using Elliptic Curve Cryptography)"),
          React.createElement('div', { key: "step2" }, "2. Public Key → Public Key Hash (using SHA256 + RIPEMD160)"),
          React.createElement('div', { key: "step3" }, "3. Public Key Hash → Address (using Base58Check encoding)"),
          React.createElement('div', { className: "text-purple-300 mt-2", key: "example-addr" },
            "Result: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
          )
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "formats" }, "Key Formats: WIF, Hex, and Base58Check"),
      React.createElement('p', { className: "mb-4", key: "formats-desc" },
        "Bitcoin keys and addresses can be represented in different formats for different purposes:"
      ),
      React.createElement('ul', { className: "list-disc ml-6 mb-4 space-y-2", key: "formats-list" }, [
        React.createElement('li', { key: "format1" }, 
          React.createElement('strong', null, "Hexadecimal: "), 
          "Raw format using 0-9 and A-F characters. Used internally by software."
        ),
        React.createElement('li', { key: "format2" }, 
          React.createElement('strong', null, "WIF (Wallet Import Format): "), 
          "User-friendly format starting with 'L' or 'K' for private keys. Includes error checking."
        ),
        React.createElement('li', { key: "format3" }, 
          React.createElement('strong', null, "Base58Check: "), 
          "Encoding for addresses that excludes confusing characters (0, O, I, l) and includes checksum."
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "not-your-keys" }, "\"Not Your Keys, Not Your Coins\""),
      React.createElement('p', { className: "mb-4", key: "keys-importance" },
        "This famous Bitcoin phrase captures a crucial truth: whoever controls the private keys controls the Bitcoin. " +
        "When you use an exchange or custodial wallet, they hold your private keys, meaning they actually control your Bitcoin."
      ),
      React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4", key: "custody-warning" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "warning-title" }, "⚠️ Custody Implications"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "warning-list" }, [
          React.createElement('li', { key: "warn1" }, "Exchanges can freeze your account or go bankrupt"),
          React.createElement('li', { key: "warn2" }, "Governments can force exchanges to confiscate funds"),
          React.createElement('li', { key: "warn3" }, "You're dependent on the exchange's security practices"),
          React.createElement('li', { key: "warn4" }, "You can't truly verify your Bitcoin balance without the keys")
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/keys-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "🔑 Interactive Challenge: Generate Your Own Keys"),
        React.createElement('p', { key: "challenge-desc" },
          "Generate private keys, derive public keys and addresses, and understand the mathematical relationships " +
          "between them. Practice with different formats and see how digital signatures work."
        )
      ])
    ]),
    completionMessage: "Perfect! You now understand the cryptographic foundation of Bitcoin ownership and the importance of controlling your own keys."
  },

  {
    id: 3,
    title: "Bitcoin Transactions",
    subtitle: "Anatomy & Flow of Digital Value Transfer",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/c2b62867b49bdb1cf9109cc3e99fae057b70ba0ab65f7334ef518d3427665c5e?w=530&h=260",
    simulationType: "hashing",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin transactions are not like traditional payments. There are no account balances—only unspent transaction " +
        "outputs (UTXOs) that can be unlocked with the right cryptographic keys. Understanding this unique model is " +
        "crucial to mastering Bitcoin."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "utxo-model" }, "The UTXO Model: Digital Cash"),
      React.createElement('p', { className: "mb-4", key: "utxo-desc" },
        "Bitcoin works like digital cash. Just as you might have several bills and coins in your wallet, your Bitcoin " +
        "\"balance\" consists of various UTXOs (Unspent Transaction Outputs) of different amounts that you can spend."
      ),
      React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-4", key: "utxo-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "utxo-example-title" }, "UTXO Example"),
        React.createElement('p', { className: "mb-2", key: "utxo-example-desc" }, "Alice's wallet shows 1.5 BTC, but actually contains:"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "utxo-list" }, [
          React.createElement('li', { key: "utxo1" }, "UTXO #1: 0.8 BTC (from payment from Bob)"),
          React.createElement('li', { key: "utxo2" }, "UTXO #2: 0.5 BTC (from payment from Carol)"),
          React.createElement('li', { key: "utxo3" }, "UTXO #3: 0.2 BTC (change from previous transaction)")
        ]),
        React.createElement('p', { className: "mt-2 text-sm text-gray-300", key: "utxo-note" },
          "To spend 1.0 BTC, Alice must use UTXO #1 (0.8 BTC) + UTXO #2 (0.5 BTC) = 1.3 BTC input, " +
          "then receive 0.3 BTC back as change."
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "anatomy" }, "Transaction Anatomy: Inputs and Outputs"),
      React.createElement('p', { className: "mb-4", key: "anatomy-desc" },
        "Every Bitcoin transaction consists of inputs (UTXOs being spent) and outputs (new UTXOs being created). " +
        "The sum of inputs must equal or exceed the sum of outputs, with any difference becoming the miner fee."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "transaction-structure" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "structure-title" }, "Transaction Structure"),
        React.createElement('div', { className: "space-y-3", key: "structure-content" }, [
          React.createElement('div', { key: "inputs-section" }, [
            React.createElement('h5', { className: "font-semibold text-yellow-300", key: "inputs-title" }, "Inputs (What you're spending):"),
            React.createElement('ul', { className: "list-disc ml-4 text-sm", key: "inputs-list" }, [
              React.createElement('li', { key: "input1" }, "Reference to previous transaction output"),
              React.createElement('li', { key: "input2" }, "Unlocking script (signature proving ownership)"),
              React.createElement('li', { key: "input3" }, "Sequence number (for advanced features)")
            ])
          ]),
          React.createElement('div', { key: "outputs-section" }, [
            React.createElement('h5', { className: "font-semibold text-green-300", key: "outputs-title" }, "Outputs (Where Bitcoin is going):"),
            React.createElement('ul', { className: "list-disc ml-4 text-sm", key: "outputs-list" }, [
              React.createElement('li', { key: "output1" }, "Amount of Bitcoin (in satoshis)"),
              React.createElement('li', { key: "output2" }, "Locking script (conditions for spending)"),
              React.createElement('li', { key: "output3" }, "Usually contains recipient's address")
            ])
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "scripts" }, "Scripts: Locking and Unlocking Bitcoin"),
      React.createElement('p', { className: "mb-4", key: "scripts-desc" },
        "Bitcoin uses a simple programming language called Script to define spending conditions. When you send Bitcoin " +
        "to an address, you're creating a locking script that specifies who can spend it and how."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "scripts-comparison" }, [
        React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4", key: "locking-script" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "locking-title" }, "Locking Script (scriptPubKey)"),
          React.createElement('p', { className: "text-sm mb-2", key: "locking-desc" }, "Created when receiving Bitcoin:"),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block", key: "locking-code" },
            "OP_DUP OP_HASH160 <PubKeyHash> OP_EQUALVERIFY OP_CHECKSIG"
          ),
          React.createElement('p', { className: "text-xs mt-2 text-gray-400", key: "locking-meaning" },
            "Means: \"To spend this Bitcoin, provide a signature and public key that hashes to this address\""
          )
        ]),
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "unlocking-script" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "unlocking-title" }, "Unlocking Script (scriptSig)"),
          React.createElement('p', { className: "text-sm mb-2", key: "unlocking-desc" }, "Created when spending Bitcoin:"),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block", key: "unlocking-code" },
            "<Signature> <PublicKey>"
          ),
          React.createElement('p', { className: "text-xs mt-2 text-gray-400", key: "unlocking-meaning" },
            "Provides the signature and public key that satisfy the locking script's conditions"
          )
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "lifecycle" }, "Transaction Lifecycle"),
      React.createElement('p', { className: "mb-4", key: "lifecycle-desc" },
        "A Bitcoin transaction goes through several stages from creation to final confirmation:"
      ),
      React.createElement('ol', { className: "list-decimal ml-6 mb-4 space-y-2", key: "lifecycle-steps" }, [
        React.createElement('li', { key: "step1" }, 
          React.createElement('strong', null, "Creation: "), 
          "Wallet constructs transaction with inputs, outputs, and signs with private keys"
        ),
        React.createElement('li', { key: "step2" }, 
          React.createElement('strong', null, "Broadcast: "), 
          "Transaction is sent to the Bitcoin network and propagates to nodes"
        ),
        React.createElement('li', { key: "step3" }, 
          React.createElement('strong', null, "Mempool: "), 
          "Nodes validate the transaction and add it to their memory pool"
        ),
        React.createElement('li', { key: "step4" }, 
          React.createElement('strong', null, "Mining: "), 
          "Miners select the transaction for inclusion in a block"
        ),
        React.createElement('li', { key: "step5" }, 
          React.createElement('strong', null, "Confirmation: "), 
          "Transaction is included in a block and confirmed by the network"
        ),
        React.createElement('li', { key: "step6" }, 
          React.createElement('strong', null, "Finality: "), 
          "After several confirmations, transaction is considered irreversible"
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "fees-change" }, "Transaction Fees and Change"),
      React.createElement('p', { className: "mb-4", key: "fees-desc" },
        "Since UTXOs must be spent entirely, you often need to send change back to yourself. The difference between " +
        "total inputs and total outputs becomes the transaction fee paid to miners."
      ),
      React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 mb-4", key: "fee-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "fee-example-title" }, "Fee Calculation Example"),
        React.createElement('div', { className: "space-y-1 text-sm", key: "fee-calc" }, [
          React.createElement('div', { key: "input-amount" }, "Input: 1.0 BTC"),
          React.createElement('div', { key: "output-recipient" }, "Output to recipient: 0.3 BTC"),
          React.createElement('div', { key: "output-change" }, "Output as change: 0.699 BTC"),
          React.createElement('div', { className: "border-t border-purple-700 pt-1 mt-2 font-semibold text-purple-300", key: "fee-amount" },
            "Transaction fee: 0.001 BTC (1.0 - 0.3 - 0.699)"
          )
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "advanced" }, "Advanced Features: Dust, RBF, and SegWit"),
      React.createElement('ul', { className: "list-disc ml-6 mb-4 space-y-2", key: "advanced-features" }, [
        React.createElement('li', { key: "dust" }, 
          React.createElement('strong', null, "Dust: "), 
          "UTXOs so small that they cost more in fees to spend than they're worth. Most nodes reject dust outputs."
        ),
        React.createElement('li', { key: "rbf" }, 
          React.createElement('strong', null, "RBF (Replace-By-Fee): "), 
          "Allows replacing an unconfirmed transaction with a higher-fee version to speed up confirmation."
        ),
        React.createElement('li', { key: "segwit" }, 
          React.createElement('strong', null, "SegWit: "), 
          "Separates signature data from transaction data, reducing transaction size and enabling new features."
        )
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/transaction-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "📝 Interactive Challenge: Build Your Transaction"),
        React.createElement('p', { key: "challenge-desc" },
          "Create transactions using the UTXO model. Select inputs, define outputs, calculate fees, and see how " +
          "scripts lock and unlock Bitcoin. Experience the full transaction lifecycle."
        )
      ])
    ]),
    completionMessage: "Outstanding! You now understand how Bitcoin transactions work at a deep technical level and can reason about UTXOs, scripts, and fees."
  },

  {
    id: 4,
    title: "Bitcoin Script",
    subtitle: "Bitcoin's Programming Language",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/bb335542e432a300e466ac9097a60f6846416a65736bf3293241432555cba028?w=530&h=260",
    simulationType: "merkletree",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin Script is a simple, stack-based programming language that defines the conditions under which Bitcoin " +
        "can be spent. While often called 'simple,' Script enables sophisticated financial contracts and is the foundation " +
        "for Bitcoin's programmable money capabilities."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "script-basics" }, "Script Fundamentals"),
      React.createElement('p', { className: "mb-4", key: "script-desc" },
        "Bitcoin Script is intentionally limited and deterministic. It uses a stack-based execution model where operations " +
        "manipulate data on a stack. Scripts are designed to either succeed (returning true) or fail (returning false)."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "script-properties" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "properties-title" }, "Script Properties"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "properties-list" }, [
          React.createElement('li', { key: "prop1" }, "Stack-based: Operations work with data on a stack"),
          React.createElement('li', { key: "prop2" }, "Deterministic: Same input always produces same output"),
          React.createElement('li', { key: "prop3" }, "Non-Turing complete: No loops to prevent infinite execution"),
          React.createElement('li', { key: "prop4" }, "Stateless: Each script execution is independent")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "opcodes" }, "OP Codes: Script's Building Blocks"),
      React.createElement('p', { className: "mb-4", key: "opcodes-desc" },
        "Scripts are composed of OP codes—specific operations that manipulate the stack. Here are the most important ones:"
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "opcodes-grid" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "basic-ops" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "basic-title" }, "Basic Operations"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "basic-list" }, [
            React.createElement('li', { key: "op1" }, React.createElement('code', null, "OP_DUP"), ": Duplicate top stack item"),
            React.createElement('li', { key: "op2" }, React.createElement('code', null, "OP_HASH160"), ": Hash top item with SHA256+RIPEMD160"),
            React.createElement('li', { key: "op3" }, React.createElement('code', null, "OP_EQUAL"), ": Check if top two items are equal"),
            React.createElement('li', { key: "op4" }, React.createElement('code', null, "OP_VERIFY"), ": Fail if top item is false")
          ])
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "crypto-ops" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "crypto-title" }, "Cryptographic Operations"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "crypto-list" }, [
            React.createElement('li', { key: "op5" }, React.createElement('code', null, "OP_CHECKSIG"), ": Verify digital signature"),
            React.createElement('li', { key: "op6" }, React.createElement('code', null, "OP_CHECKMULTISIG"), ": Verify multiple signatures"),
            React.createElement('li', { key: "op7" }, React.createElement('code', null, "OP_SHA256"), ": SHA256 hash function"),
            React.createElement('li', { key: "op8" }, React.createElement('code', null, "OP_RIPEMD160"), ": RIPEMD160 hash function")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "standard-scripts" }, "Standard Script Types"),
      React.createElement('p', { className: "mb-4", key: "standard-desc" },
        "While Script can theoretically create many types of conditions, Bitcoin networks typically only relay " +
        "and mine transactions using standard script templates:"
      ),
      React.createElement('div', { className: "space-y-4 mb-4", key: "script-types" }, [
        React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4", key: "p2pkh" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "p2pkh-title" }, "P2PKH (Pay to Public Key Hash)"),
          React.createElement('p', { className: "text-sm mb-2", key: "p2pkh-desc" }, "The most common script type, used for regular Bitcoin addresses."),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block mb-2", key: "p2pkh-code" },
            "OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG"
          ),
          React.createElement('p', { className: "text-xs text-gray-400", key: "p2pkh-meaning" },
            "Requires a signature and public key that hashes to the specified address."
          )
        ]),
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "p2sh" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "p2sh-title" }, "P2SH (Pay to Script Hash)"),
          React.createElement('p', { className: "text-sm mb-2", key: "p2sh-desc" }, "Allows complex scripts by referencing their hash."),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block mb-2", key: "p2sh-code" },
            "OP_HASH160 <scriptHash> OP_EQUAL"
          ),
          React.createElement('p', { className: "text-xs text-gray-400", key: "p2sh-meaning" },
            "Requires providing a script that hashes to the specified value, plus data to satisfy that script."
          )
        ]),
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "p2wpkh" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "p2wpkh-title" }, "P2WPKH (Pay to Witness Public Key Hash)"),
          React.createElement('p', { className: "text-sm mb-2", key: "p2wpkh-desc" }, "SegWit version of P2PKH with separate witness data."),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block mb-2", key: "p2wpkh-code" },
            "OP_0 <pubKeyHash>"
          ),
          React.createElement('p', { className: "text-xs text-gray-400", key: "p2wpkh-meaning" },
            "More efficient than P2PKH, with signature data stored separately."
          )
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "timelocks" }, "Time-locks and Advanced Features"),
      React.createElement('p', { className: "mb-4", key: "timelocks-desc" },
        "Script supports time-based conditions, allowing Bitcoin to be locked until specific times or block heights:"
      ),
      React.createElement('ul', { className: "list-disc ml-6 mb-4 space-y-2", key: "timelock-list" }, [
        React.createElement('li', { key: "timelock1" }, 
          React.createElement('strong', null, "OP_CHECKLOCKTIMEVERIFY (CLTV): "), 
          "Prevents spending until a specific time or block height"
        ),
        React.createElement('li', { key: "timelock2" }, 
          React.createElement('strong', null, "OP_CHECKSEQUENCEVERIFY (CSV): "), 
          "Requires a relative time delay from when the UTXO was created"
        ),
        React.createElement('li', { key: "timelock3" }, 
          React.createElement('strong', null, "nLockTime field: "), 
          "Makes entire transaction invalid until specified time"
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "multisig" }, "Multisig Transactions"),
      React.createElement('p', { className: "mb-4", key: "multisig-desc" },
        "Multisig scripts require multiple signatures to spend Bitcoin, enabling shared control and enhanced security:"
      ),
      React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4", key: "multisig-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "multisig-title" }, "2-of-3 Multisig Example"),
        React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block mb-2", key: "multisig-code" },
          "OP_2 <pubkey1> <pubkey2> <pubkey3> OP_3 OP_CHECKMULTISIG"
        ),
        React.createElement('p', { className: "text-xs text-gray-400", key: "multisig-meaning" },
          "Requires any 2 out of 3 specified public keys to sign the transaction."
        ),
        React.createElement('div', { className: "mt-2 text-sm", key: "multisig-uses" }, [
          React.createElement('p', { className: "font-semibold mb-1", key: "uses-title" }, "Common uses:"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "uses-list" }, [
            React.createElement('li', { key: "use1" }, "Corporate treasury management"),
            React.createElement('li', { key: "use2" }, "Escrow services"),
            React.createElement('li', { key: "use3" }, "Enhanced personal security")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "smart-contracts" }, "Bitcoin Smart Contracts"),
      React.createElement('p', { className: "mb-4", key: "contracts-desc" },
        "While limited compared to other platforms, Bitcoin Script enables sophisticated smart contracts:"
      ),
      React.createElement('ul', { className: "list-disc ml-6 mb-4 space-y-2", key: "contracts-list" }, [
        React.createElement('li', { key: "contract1" }, "Hash Time-Locked Contracts (HTLCs) for payment channels"),
        React.createElement('li', { key: "contract2" }, "Atomic swaps for cross-chain trading"),
        React.createElement('li', { key: "contract3" }, "Payment channels and Lightning Network"),
        React.createElement('li', { key: "contract4" }, "Discreet Log Contracts for financial derivatives")
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/script-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "⚡ Interactive Challenge: Program with Script"),
        React.createElement('p', { key: "challenge-desc" },
          "Build and execute Bitcoin scripts step by step. Create multisig conditions, time-locks, and custom spending " +
          "requirements. Watch the stack operations in real-time and understand how Script validates transactions."
        )
      ])
    ]),
    completionMessage: "Fantastic! You now understand Bitcoin Script and how it enables programmable money through carefully designed constraints."
  },

  {
    id: 5,
    title: "Bitcoin Wallets",
    subtitle: "Behind the Interface",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/1534e4562b8d81db405fd9b725fee9e0067de01b1e0903dd13434988beafa612?w=530&h=260",
    simulationType: "cryptography",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin wallets are much more than simple storage containers. They're sophisticated key management systems " +
        "that generate, store, and use cryptographic keys to control your Bitcoin. Understanding how wallets work " +
        "is essential for Bitcoin security and privacy."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "wallet-types" }, "Types of Bitcoin Wallets"),
      React.createElement('p', { className: "mb-4", key: "types-desc" },
        "Wallets can be categorized by their security model, key storage, and network connectivity:"
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "wallet-categories" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "custody-types" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "custody-title" }, "By Custody"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "custody-list" }, [
            React.createElement('li', { key: "custody1" }, React.createElement('strong', null, "Custodial: "), "Third party controls your keys"),
            React.createElement('li', { key: "custody2" }, React.createElement('strong', null, "Non-custodial: "), "You control your private keys"),
            React.createElement('li', { key: "custody3" }, React.createElement('strong', null, "Multi-sig: "), "Shared control with multiple parties")
          ])
        ]),
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "storage-types" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "storage-title" }, "By Storage"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "storage-list" }, [
            React.createElement('li', { key: "storage1" }, React.createElement('strong', null, "Software: "), "Keys stored on computer/phone"),
            React.createElement('li', { key: "storage2" }, React.createElement('strong', null, "Hardware: "), "Keys stored on dedicated device"),
            React.createElement('li', { key: "storage3" }, React.createElement('strong', null, "Paper: "), "Keys printed or written down")
          ])
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "connectivity-types" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "connectivity-title" }, "By Connectivity"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "connectivity-list" }, [
            React.createElement('li', { key: "conn1" }, React.createElement('strong', null, "Hot: "), "Connected to internet"),
            React.createElement('li', { key: "conn2" }, React.createElement('strong', null, "Cold: "), "Offline, air-gapped"),
            React.createElement('li', { key: "conn3" }, React.createElement('strong', null, "Watch-only: "), "Can view but not spend")
          ])
        ]),
        React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4", key: "node-types" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "node-title" }, "By Node Type"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "node-list" }, [
            React.createElement('li', { key: "node1" }, React.createElement('strong', null, "Full node: "), "Validates all transactions"),
            React.createElement('li', { key: "node2" }, React.createElement('strong', null, "SPV: "), "Simplified payment verification"),
            React.createElement('li', { key: "node3" }, React.createElement('strong', null, "Server-based: "), "Relies on third-party servers")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "hd-wallets" }, "Hierarchical Deterministic (HD) Wallets"),
      React.createElement('p', { className: "mb-4", key: "hd-desc" },
        "Modern wallets use HD wallet technology to generate unlimited addresses from a single seed. This provides " +
        "better privacy, organization, and backup simplicity compared to random key generation."
      ),
      React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-4", key: "hd-advantages" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "hd-adv-title" }, "HD Wallet Advantages"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "hd-adv-list" }, [
          React.createElement('li', { key: "adv1" }, "Single backup (seed phrase) protects unlimited keys"),
          React.createElement('li', { key: "adv2" }, "Deterministic address generation"),
          React.createElement('li', { key: "adv3" }, "Hierarchical organization of accounts and addresses"),
          React.createElement('li', { key: "adv4" }, "Extended public keys allow watch-only wallets"),
          React.createElement('li', { key: "adv5" }, "Better privacy through address reuse avoidance")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "bip-standards" }, "BIP Standards: The Wallet Blueprint"),
      React.createElement('p', { className: "mb-4", key: "bip-desc" },
        "Bitcoin Improvement Proposals (BIPs) define standards that ensure wallet compatibility and security:"
      ),
      React.createElement('div', { className: "space-y-4 mb-4", key: "bip-standards" }, [
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "bip32" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "bip32-title" }, "BIP32: Hierarchical Deterministic Wallets"),
          React.createElement('p', { className: "text-sm mb-2", key: "bip32-desc" }, 
            "Defines how to derive unlimited keys from a master key using mathematical relationships."
          ),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block", key: "bip32-code" },
            "Master Key → Child Keys → Grandchild Keys → ..."
          )
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "bip39" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "bip39-title" }, "BIP39: Mnemonic Seed Phrases"),
          React.createElement('p', { className: "text-sm mb-2", key: "bip39-desc" }, 
            "Converts random entropy into human-readable word lists for wallet backup and recovery."
          ),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block", key: "bip39-code" },
            "abandon ability able about above absent absorb abstract absurd abuse access accident"
          )
        ]),
        React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4", key: "bip44" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "bip44-title" }, "BIP44: Multi-Account Hierarchy"),
          React.createElement('p', { className: "text-sm mb-2", key: "bip44-desc" }, 
            "Defines a standard structure for organizing accounts and addresses within HD wallets."
          ),
          React.createElement('code', { className: "text-xs bg-gray-800 p-2 rounded block", key: "bip44-code" },
            "m / purpose' / coin_type' / account' / change / address_index"
          )
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "seed-entropy" }, "Seed Phrases and Entropy"),
      React.createElement('p', { className: "mb-4", key: "entropy-desc" },
        "Your wallet's security depends entirely on the randomness (entropy) used to generate your seed phrase. " +
        "Understanding this process is crucial for maintaining security."
      ),
      React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4", key: "entropy-process" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "entropy-title" }, "Seed Generation Process"),
        React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "entropy-steps" }, [
          React.createElement('li', { key: "step1" }, "Generate 128-256 bits of cryptographic randomness"),
          React.createElement('li', { key: "step2" }, "Add checksum bits for error detection"),
          React.createElement('li', { key: "step3" }, "Divide into groups representing word indices"),
          React.createElement('li', { key: "step4" }, "Map indices to words from standardized word list"),
          React.createElement('li', { key: "step5" }, "Result: 12-24 word mnemonic phrase")
        ])
      ]),
      React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 mb-4", key: "entropy-warning" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "warning-title" }, "⚠️ Entropy Security Warning"),
        React.createElement('p', { className: "text-sm", key: "warning-text" },
          "Never use human-generated phrases or weak randomness sources. Poor entropy has led to theft of millions " +
          "of dollars worth of Bitcoin. Always use properly implemented wallet software that sources entropy from " +
          "cryptographically secure random number generators."
        )
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "address-generation" }, "Address Generation Paths"),
      React.createElement('p', { className: "mb-4", key: "path-desc" },
        "HD wallets use derivation paths to organize and generate addresses systematically:"
      ),
      React.createElement('div', { className: "bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4", key: "path-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-gray-300", key: "path-title" }, "Standard Derivation Paths"),
        React.createElement('div', { className: "space-y-2 text-sm font-mono", key: "path-examples" }, [
          React.createElement('div', { key: "path1" }, 
            React.createElement('span', { className: "text-blue-400" }, "m/44'/0'/0'/0/0"), 
            " - First receiving address (BIP44)"
          ),
          React.createElement('div', { key: "path2" }, 
            React.createElement('span', { className: "text-green-400" }, "m/44'/0'/0'/1/0"), 
            " - First change address (BIP44)"
          ),
          React.createElement('div', { key: "path3" }, 
            React.createElement('span', { className: "text-purple-400" }, "m/84'/0'/0'/0/0"), 
            " - First SegWit address (BIP84)"
          ),
          React.createElement('div', { key: "path4" }, 
            React.createElement('span', { className: "text-orange-400" }, "m/86'/0'/0'/0/0"), 
            " - First Taproot address (BIP86)"
          )
        ])
      ]),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "path-breakdown" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "breakdown-title" }, "Path Component Breakdown"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "breakdown-list" }, [
          React.createElement('li', { key: "comp1" }, React.createElement('strong', null, "Purpose (44'): "), "BIP44 standard"),
          React.createElement('li', { key: "comp2" }, React.createElement('strong', null, "Coin type (0'): "), "Bitcoin (other coins use different numbers)"),
          React.createElement('li', { key: "comp3" }, React.createElement('strong', null, "Account (0'): "), "Logical account separation"),
          React.createElement('li', { key: "comp4" }, React.createElement('strong', null, "Change (0/1): "), "0 = receiving, 1 = change addresses"),
          React.createElement('li', { key: "comp5" }, React.createElement('strong', null, "Index (0,1,2...): "), "Sequential address number")
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/wallet-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "💼 Interactive Challenge: Build Your Wallet"),
        React.createElement('p', { key: "challenge-desc" },
          "Generate seed phrases, derive keys using BIP standards, and create different types of addresses. " +
          "Understand the relationship between entropy, seeds, keys, and addresses in a working wallet implementation."
        )
      ])
    ]),
    completionMessage: "Excellent! You now understand the sophisticated key management systems that make Bitcoin wallets secure and user-friendly."
  },

  {
    id: 6,
    title: "The Mempool",
    subtitle: "Bitcoin's Waiting Room",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/769917eddc6ee5ee6bf70d4b3468bc2d3751f70a7fbc84c9ccf43c5a46bcb068?w=530&h=260",
    simulationType: "hashing",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "The mempool (memory pool) is where Bitcoin transactions wait before being included in a block. Understanding " +
        "the mempool is crucial for fee estimation, transaction timing, and comprehending Bitcoin's transaction lifecycle."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "what-is-mempool" }, "What is the Mempool?"),
      React.createElement('p', { className: "mb-4", key: "mempool-desc" },
        "The mempool is a temporary storage area where each Bitcoin node keeps valid but unconfirmed transactions. " +
        "When you broadcast a transaction, it first enters mempools across the network before miners select it for inclusion in a block."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "mempool-facts" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "facts-title" }, "Key Mempool Facts"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "facts-list" }, [
          React.createElement('li', { key: "fact1" }, "Each node maintains its own mempool independently"),
          React.createElement('li', { key: "fact2" }, "Mempools can differ between nodes due to propagation timing"),
          React.createElement('li', { key: "fact3" }, "Transactions are removed when included in a block or evicted"),
          React.createElement('li', { key: "fact4" }, "Mempool size fluctuates based on network activity"),
          React.createElement('li', { key: "fact5" }, "Higher fee transactions get priority for mining")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "fee-estimation" }, "Fee Estimation and Market Dynamics"),
      React.createElement('p', { className: "mb-4", key: "fee-desc" },
        "The mempool functions as a fee market where users compete for limited block space. Understanding this " +
        "dynamic helps you set appropriate fees for timely transaction confirmation."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "fee-grid" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "fee-factors" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "factors-title" }, "Fee Influencing Factors"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "factors-list" }, [
            React.createElement('li', { key: "factor1" }, "Network congestion level"),
            React.createElement('li', { key: "factor2" }, "Transaction size (in bytes)"),
            React.createElement('li', { key: "factor3" }, "Desired confirmation time"),
            React.createElement('li', { key: "factor4" }, "Mempool composition"),
            React.createElement('li', { key: "factor5" }, "Recent block patterns")
          ])
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "fee-strategies" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "strategies-title" }, "Fee Strategies"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "strategies-list" }, [
            React.createElement('li', { key: "strategy1" }, "Conservative: High fee, fast confirmation"),
            React.createElement('li', { key: "strategy2" }, "Standard: Medium fee, reasonable time"),
            React.createElement('li', { key: "strategy3" }, "Economy: Low fee, longer wait"),
            React.createElement('li', { key: "strategy4" }, "Custom: Manual fee calculation")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "double-spend" }, "Double-Spends and Replace-by-Fee (RBF)"),
      React.createElement('p', { className: "mb-4", key: "double-spend-desc" },
        "Unconfirmed transactions in the mempool can potentially be double-spent or replaced. Understanding these " +
        "concepts is important for merchant security and transaction management."
      ),
      React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4", key: "double-spend-box" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "double-spend-title" }, "Double-Spending Scenarios"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "double-spend-list" }, [
          React.createElement('li', { key: "scenario1" }, React.createElement('strong', null, "Accidental: "), "Wallet broadcasts conflicting transactions due to bugs"),
          React.createElement('li', { key: "scenario2" }, React.createElement('strong', null, "Malicious: "), "Intentional attempt to spend same UTXO twice"),
          React.createElement('li', { key: "scenario3" }, React.createElement('strong', null, "RBF: "), "Legitimate replacement with higher fee"),
          React.createElement('li', { key: "scenario4" }, React.createElement('strong', null, "CPFP: "), "Child-pays-for-parent fee bumping")
        ])
      ]),
      React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 mb-4", key: "rbf-box" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "rbf-title" }, "Replace-by-Fee (RBF) Mechanism"),
        React.createElement('p', { className: "text-sm mb-2", key: "rbf-desc" },
          "RBF allows users to increase transaction fees by replacing unconfirmed transactions:"
        ),
        React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "rbf-steps" }, [
          React.createElement('li', { key: "rbf1" }, "Original transaction signals RBF capability"),
          React.createElement('li', { key: "rbf2" }, "Create new transaction spending same inputs"),
          React.createElement('li', { key: "rbf3" }, "Increase fee to meet replacement requirements"),
          React.createElement('li', { key: "rbf4" }, "Broadcast replacement transaction"),
          React.createElement('li', { key: "rbf5" }, "Nodes replace original with higher-fee version")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "malleability" }, "Transaction Malleability"),
      React.createElement('p', { className: "mb-4", key: "malleability-desc" },
        "Transaction malleability refers to the ability to change a transaction's ID while keeping its effects the same. " +
        "This was a significant issue before SegWit activation."
      ),
      React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4", key: "malleability-box" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "malleability-title" }, "Malleability Issues and Solutions"),
        React.createElement('div', { className: "grid md:grid-cols-2 gap-4", key: "malleability-grid" }, [
          React.createElement('div', { key: "problems" }, [
            React.createElement('h5', { className: "font-semibold mb-1 text-red-300", key: "problems-title" }, "Pre-SegWit Problems:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "problems-list" }, [
              React.createElement('li', { key: "prob1" }, "Third parties could change transaction IDs"),
              React.createElement('li', { key: "prob2" }, "Complicated Lightning Network development"),
              React.createElement('li', { key: "prob3" }, "Made certain smart contracts difficult")
            ])
          ]),
          React.createElement('div', { key: "solutions" }, [
            React.createElement('h5', { className: "font-semibold mb-1 text-green-300", key: "solutions-title" }, "SegWit Solutions:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "solutions-list" }, [
              React.createElement('li', { key: "sol1" }, "Signature data moved to witness section"),
              React.createElement('li', { key: "sol2" }, "Transaction ID no longer includes signatures"),
              React.createElement('li', { key: "sol3" }, "Enabled advanced payment channels")
            ])
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "policies" }, "Mempool Policies and Node Differences"),
      React.createElement('p', { className: "mb-4", key: "policies-desc" },
        "While Bitcoin has consensus rules that all nodes must follow, mempool policies can vary between node implementations " +
        "and configurations, affecting which transactions are accepted and propagated."
      ),
      React.createElement('div', { className: "space-y-3 mb-4", key: "policy-examples" }, [
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-3", key: "policy1" }, [
          React.createElement('h5', { className: "font-semibold mb-1 text-blue-300", key: "policy1-title" }, "Minimum Fee Rates"),
          React.createElement('p', { className: "text-sm text-gray-300", key: "policy1-desc" },
            "Nodes may reject transactions below certain fee thresholds to prevent spam."
          )
        ]),
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-3", key: "policy2" }, [
          React.createElement('h5', { className: "font-semibold mb-1 text-green-300", key: "policy2-title" }, "Standard Script Types"),
          React.createElement('p', { className: "text-sm text-gray-300", key: "policy2-desc" },
            "Some nodes only relay 'standard' transaction types, filtering out unusual scripts."
          )
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-3", key: "policy3" }, [
          React.createElement('h5', { className: "font-semibold mb-1 text-purple-300", key: "policy3-title" }, "Dust Limits"),
          React.createElement('p', { className: "text-sm text-gray-300", key: "policy3-desc" },
            "Outputs below the dust threshold may be rejected to prevent UTXO set bloat."
          )
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/mempool-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "🏊 Interactive Challenge: Navigate the Mempool"),
        React.createElement('p', { key: "challenge-desc" },
          "Explore mempool dynamics by adjusting fees, observing transaction propagation, and experimenting with RBF. " +
          "See how network congestion affects confirmation times and learn optimal fee strategies."
        )
      ])
    ]),
    completionMessage: "Great work! You now understand how the mempool operates and can make informed decisions about transaction fees and timing."
  },

  {
    id: 7,
    title: "Bitcoin Consensus Mechanism",
    subtitle: "Agreement Without Authority",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/c2b62867b49bdb1cf9109cc3e99fae057b70ba0ab65f7334ef518d3427665c5e?w=530&h=260",
    simulationType: "consensus",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin's consensus mechanism allows thousands of independent nodes to agree on transaction validity and " +
        "blockchain state without any central authority. This distributed agreement is what makes Bitcoin truly decentralized."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "what-is-consensus" }, "What is Consensus?"),
      React.createElement('p', { className: "mb-4", key: "consensus-desc" },
        "Consensus in Bitcoin means agreement among network participants about which transactions are valid and " +
        "what the current state of the blockchain is. This agreement is achieved through a combination of " +
        "cryptographic proof, economic incentives, and network effects."
      ),
      React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-4", key: "consensus-elements" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "elements-title" }, "Elements of Bitcoin Consensus"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1", key: "elements-list" }, [
          React.createElement('li', { key: "element1" }, React.createElement('strong', null, "Cryptographic Rules: "), "Mathematical validation of signatures and hashes"),
          React.createElement('li', { key: "element2" }, React.createElement('strong', null, "Economic Rules: "), "Valid monetary policy and supply limits"),
          React.createElement('li', { key: "element3" }, React.createElement('strong', null, "Technical Rules: "), "Block size, transaction format requirements"),
          React.createElement('li', { key: "element4" }, React.createElement('strong', null, "Social Rules: "), "Community agreement on protocol changes")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "longest-chain" }, "The Longest Chain Rule"),
      React.createElement('p', { className: "mb-4", key: "longest-desc" },
        "When multiple valid blocks are found simultaneously, nodes follow the 'longest chain rule' (more accurately, " +
        "the chain with the most accumulated proof-of-work). This ensures the network converges on a single history."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "longest-chain-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "example-title" }, "Chain Selection Example"),
        React.createElement('div', { className: "space-y-2 text-sm font-mono", key: "chain-example" }, [
          React.createElement('div', { key: "chain1" }, "Chain A: Block 1 → Block 2 → Block 3 → Block 4"),
          React.createElement('div', { key: "chain2" }, "Chain B: Block 1 → Block 2 → Block 3'"),
          React.createElement('div', { className: "text-green-400 mt-2", key: "winner" }, 
            "✓ Chain A wins (longer chain with more accumulated work)"
          ),
          React.createElement('div', { className: "text-red-400", key: "loser" }, 
            "✗ Chain B becomes orphaned"
          )
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "validation-rules" }, "Block Validation Rules"),
      React.createElement('p', { className: "mb-4", key: "validation-desc" },
        "Every Bitcoin node independently validates blocks against the same set of consensus rules. A block is only " +
        "accepted if it passes all validation checks."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "validation-grid" }, [
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "block-rules" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "block-rules-title" }, "Block-Level Rules"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "block-rules-list" }, [
            React.createElement('li', { key: "rule1" }, "Valid proof-of-work (meets difficulty target)"),
            React.createElement('li', { key: "rule2" }, "Block size within limits"),
            React.createElement('li', { key: "rule3" }, "Valid Merkle root"),
            React.createElement('li', { key: "rule4" }, "Proper timestamp"),
            React.createElement('li', { key: "rule5" }, "Builds on previous valid block")
          ])
        ]),
        React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4", key: "tx-rules" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "tx-rules-title" }, "Transaction-Level Rules"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "tx-rules-list" }, [
            React.createElement('li', { key: "txrule1" }, "Valid digital signatures"),
            React.createElement('li', { key: "txrule2" }, "Inputs reference existing UTXOs"),
            React.createElement('li', { key: "txrule3" }, "Input sum ≥ output sum"),
            React.createElement('li', { key: "txrule4" }, "No double-spending"),
            React.createElement('li', { key: "txrule5" }, "Scripts execute successfully")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "orphaned-blocks" }, "Orphaned and Stale Blocks"),
      React.createElement('p', { className: "mb-4", key: "orphaned-desc" },
        "Sometimes miners find valid blocks simultaneously, creating temporary forks. Blocks that end up on the shorter " +
        "fork become orphaned and are not part of the main chain."
      ),
      React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 mb-4", key: "orphaned-process" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "orphaned-title" }, "Orphaned Block Process"),
        React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "orphaned-steps" }, [
          React.createElement('li', { key: "step1" }, "Two miners find valid blocks at nearly the same time"),
          React.createElement('li', { key: "step2" }, "Different parts of network initially accept different blocks"),
          React.createElement('li', { key: "step3" }, "Miners continue building on the block they received first"),
          React.createElement('li', { key: "step4" }, "One chain becomes longer due to next block discovery"),
          React.createElement('li', { key: "step5" }, "All nodes switch to the longer chain"),
          React.createElement('li', { key: "step6" }, "Shorter chain's blocks become orphaned")
        ])
      ]),
      React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4", key: "orphaned-impact" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "impact-title" }, "Impact of Orphaned Blocks"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "impact-list" }, [
          React.createElement('li', { key: "impact1" }, "Miners lose block rewards from orphaned blocks"),
          React.createElement('li', { key: "impact2" }, "Transactions in orphaned blocks return to mempool"),
          React.createElement('li', { key: "impact3" }, "Network security temporarily reduced during fork"),
          React.createElement('li', { key: "impact4" }, "Demonstrates importance of mining on latest block")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "network-latency" }, "Network Latency and Block Propagation"),
      React.createElement('p', { className: "mb-4", key: "latency-desc" },
        "The time it takes for blocks to propagate across the global network affects consensus dynamics and the " +
        "frequency of orphaned blocks. Faster propagation leads to better network health."
      ),
      React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-4", key: "propagation-factors" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "factors-title" }, "Propagation Factors"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "factors-list" }, [
          React.createElement('li', { key: "factor1" }, React.createElement('strong', null, "Block Size: "), "Larger blocks take longer to transmit"),
          React.createElement('li', { key: "factor2" }, React.createElement('strong', null, "Network Topology: "), "Better connected nodes propagate faster"),
          React.createElement('li', { key: "factor3" }, React.createElement('strong', null, "Geographic Distance: "), "Physical distance affects latency"),
          React.createElement('li', { key: "factor4" }, React.createElement('strong', null, "Compact Blocks: "), "Optimization reduces propagation time"),
          React.createElement('li', { key: "factor5" }, React.createElement('strong', null, "Internet Infrastructure: "), "Backbone capacity matters")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "consensus-changes" }, "Consensus Rule Changes"),
      React.createElement('p', { className: "mb-4", key: "changes-desc" },
        "Changing Bitcoin's consensus rules requires careful coordination to maintain network unity. There are " +
        "different mechanisms for implementing changes with varying levels of backward compatibility."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "changes-grid" }, [
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "soft-fork" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "soft-title" }, "Soft Forks"),
          React.createElement('p', { className: "text-sm mb-2", key: "soft-desc" }, "Backward-compatible rule changes:"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "soft-list" }, [
            React.createElement('li', { key: "soft1" }, "Tighten existing rules"),
            React.createElement('li', { key: "soft2" }, "Old nodes remain compatible"),
            React.createElement('li', { key: "soft3" }, "Example: SegWit, Taproot")
          ])
        ]),
        React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4", key: "hard-fork" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "hard-title" }, "Hard Forks"),
          React.createElement('p', { className: "text-sm mb-2", key: "hard-desc" }, "Non-backward-compatible changes:"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "hard-list" }, [
            React.createElement('li', { key: "hard1" }, "Loosen or change existing rules"),
            React.createElement('li', { key: "hard2" }, "All nodes must upgrade"),
            React.createElement('li', { key: "hard3" }, "Risk of chain split")
          ])
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/consensus-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "🤝 Interactive Challenge: Achieve Network Consensus"),
        React.createElement('p', { key: "challenge-desc" },
          "Simulate network consensus scenarios with competing blocks, orphaned chains, and rule validation. " +
          "Experience how the network converges on agreement despite temporary disagreements."
        )
      ])
    ]),
    completionMessage: "Impressive! You now understand how Bitcoin achieves global consensus without central authority through cryptographic proofs and economic incentives."
  },

  {
    id: 8,
    title: "Bitcoin Nodes",
    subtitle: "The Backbone of the Network",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/bb335542e432a300e466ac9097a60f6846416a65736bf3293241432555cba028?w=530&h=260",
    simulationType: "merkletree",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin nodes are the individual computers that collectively form the Bitcoin network. Each node validates " +
        "transactions, stores blockchain data, and helps propagate information across the network. Understanding " +
        "different node types and their roles is crucial to understanding Bitcoin's decentralization."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "node-types" }, "Types of Bitcoin Nodes"),
      React.createElement('p', { className: "mb-4", key: "types-desc" },
        "Different types of nodes serve different functions in the Bitcoin ecosystem, each with varying levels of " +
        "validation, storage, and resource requirements."
      ),
      React.createElement('div', { className: "space-y-4 mb-4", key: "node-types-details" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "full-node" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "full-title" }, "Full Nodes"),
          React.createElement('p', { className: "text-sm mb-2", key: "full-desc" },
            "Download, validate, and store the complete blockchain with all transaction history."
          ),
          React.createElement('div', { className: "grid md:grid-cols-2 gap-3", key: "full-grid" }, [
            React.createElement('div', { key: "full-features" }, [
              React.createElement('h5', { className: "font-semibold text-green-200 mb-1", key: "full-features-title" }, "Features:"),
              React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "full-features-list" }, [
                React.createElement('li', { key: "feature1" }, "Complete transaction validation"),
                React.createElement('li', { key: "feature2" }, "Independent verification"),
                React.createElement('li', { key: "feature3" }, "Full network participation"),
                React.createElement('li', { key: "feature4" }, "Maximum security and privacy")
              ])
            ]),
            React.createElement('div', { key: "full-requirements" }, [
              React.createElement('h5', { className: "font-semibold text-red-200 mb-1", key: "full-req-title" }, "Requirements:"),
              React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "full-req-list" }, [
                React.createElement('li', { key: "req1" }, "~500GB+ storage space"),
                React.createElement('li', { key: "req2" }, "Reliable internet connection"),
                React.createElement('li', { key: "req3" }, "Several days initial sync"),
                React.createElement('li', { key: "req4" }, "Ongoing bandwidth usage")
              ])
            ])
          ])
        ]),
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "pruned-node" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "pruned-title" }, "Pruned Nodes"),
          React.createElement('p', { className: "text-sm mb-2", key: "pruned-desc" },
            "Full validation but only store recent blockchain data to save storage space."
          ),
          React.createElement('div', { className: "text-xs text-gray-300", key: "pruned-note" },
            "Validates all transactions but deletes old block data after verification. Still contributes to network security."
          )
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "spv-node" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "spv-title" }, "SPV (Simplified Payment Verification) Nodes"),
          React.createElement('p', { className: "text-sm mb-2", key: "spv-desc" },
            "Lightweight clients that download block headers and verify transactions using Merkle proofs."
          ),
          React.createElement('div', { className: "grid md:grid-cols-2 gap-3", key: "spv-grid" }, [
            React.createElement('div', { key: "spv-pros" }, [
              React.createElement('h5', { className: "font-semibold text-green-200 mb-1", key: "spv-pros-title" }, "Advantages:"),
              React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "spv-pros-list" }, [
                React.createElement('li', { key: "pro1" }, "Low storage requirements"),
                React.createElement('li', { key: "pro2" }, "Fast synchronization"),
                React.createElement('li', { key: "pro3" }, "Mobile-friendly"),
                React.createElement('li', { key: "pro4" }, "Lower bandwidth usage")
              ])
            ]),
            React.createElement('div', { key: "spv-cons" }, [
              React.createElement('h5', { className: "font-semibold text-red-200 mb-1", key: "spv-cons-title" }, "Limitations:"),
              React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "spv-cons-list" }, [
                React.createElement('li', { key: "con1" }, "Relies on other nodes"),
                React.createElement('li', { key: "con2" }, "Reduced privacy"),
                React.createElement('li', { key: "con3" }, "Cannot validate all rules"),
                React.createElement('li', { key: "con4" }, "Vulnerable to some attacks")
              ])
            ])
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "validation" }, "How Nodes Verify Transactions and Blocks"),
      React.createElement('p', { className: "mb-4", key: "validation-desc" },
        "When a node receives a new transaction or block, it performs extensive validation to ensure compliance " +
        "with Bitcoin's consensus rules before accepting or relaying it."
      ),
      React.createElement('div', { className: "bg-gray-900/50 border border-gray-700 rounded-lg p-4 mb-4", key: "validation-process" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-gray-300", key: "validation-title" }, "Transaction Validation Process"),
        React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "validation-steps" }, [
          React.createElement('li', { key: "val1" }, "Check transaction format and structure"),
          React.createElement('li', { key: "val2" }, "Verify digital signatures using public keys"),
          React.createElement('li', { key: "val3" }, "Confirm all inputs reference existing UTXOs"),
          React.createElement('li', { key: "val4" }, "Ensure inputs haven't been spent elsewhere"),
          React.createElement('li', { key: "val5" }, "Validate that input amounts ≥ output amounts"),
          React.createElement('li', { key: "val6" }, "Execute and verify all scripts"),
          React.createElement('li', { key: "val7" }, "Check transaction against policy rules"),
          React.createElement('li', { key: "val8" }, "Add to mempool if valid, reject if invalid")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "bitcoin-core" }, "Bitcoin Core: The Reference Implementation"),
      React.createElement('p', { className: "mb-4", key: "core-desc" },
        "Bitcoin Core is the most widely used Bitcoin node software, serving as the reference implementation " +
        "that defines Bitcoin's consensus rules. Understanding its role and features is important for the ecosystem."
      ),
      React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4", key: "core-features" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "core-features-title" }, "Bitcoin Core Features"),
        React.createElement('div', { className: "grid md:grid-cols-2 gap-4", key: "core-grid" }, [
          React.createElement('div', { key: "core-node" }, [
            React.createElement('h5', { className: "font-semibold mb-1 text-orange-200", key: "node-title" }, "Node Functions:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "node-functions" }, [
              React.createElement('li', { key: "func1" }, "Full blockchain validation"),
              React.createElement('li', { key: "func2" }, "Transaction relay"),
              React.createElement('li', { key: "func3" }, "Block propagation"),
              React.createElement('li', { key: "func4" }, "Network peer discovery")
            ])
          ]),
          React.createElement('div', { key: "core-wallet" }, [
            React.createElement('h5', { className: "font-semibold mb-1 text-orange-200", key: "wallet-title" }, "Wallet Functions:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "wallet-functions" }, [
              React.createElement('li', { key: "wfunc1" }, "Key management"),
              React.createElement('li', { key: "wfunc2" }, "Transaction creation"),
              React.createElement('li', { key: "wfunc3" }, "Balance calculation"),
              React.createElement('li', { key: "wfunc4" }, "Address generation")
            ])
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "running-node" }, "Running Your Own Node"),
      React.createElement('p', { className: "mb-4", key: "running-desc" },
        "Operating your own Bitcoin node provides maximum security, privacy, and independence. It also contributes " +
        "to the network's decentralization and resilience."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "running-grid" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "benefits" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "benefits-title" }, "Benefits of Running a Node"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "benefits-list" }, [
            React.createElement('li', { key: "benefit1" }, "Verify transactions independently"),
            React.createElement('li', { key: "benefit2" }, "No need to trust third parties"),
            React.createElement('li', { key: "benefit3" }, "Enhanced privacy"),
            React.createElement('li', { key: "benefit4" }, "Support network decentralization"),
            React.createElement('li', { key: "benefit5" }, "Direct access to blockchain data")
          ])
        ]),
        React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4", key: "considerations" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "considerations-title" }, "Setup Considerations"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "considerations-list" }, [
            React.createElement('li', { key: "consider1" }, "Initial blockchain download (~400GB)"),
            React.createElement('li', { key: "consider2" }, "Ongoing bandwidth usage"),
            React.createElement('li', { key: "consider3" }, "Hardware requirements"),
            React.createElement('li', { key: "consider4" }, "24/7 operation preferred"),
            React.createElement('li', { key: "consider5" }, "Regular software updates")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "p2p-protocols" }, "P2P Network Protocols"),
      React.createElement('p', { className: "mb-4", key: "p2p-desc" },
        "Bitcoin nodes communicate using a peer-to-peer protocol that enables decentralized information sharing " +
        "without relying on central servers."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "p2p-messages" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "messages-title" }, "Key P2P Messages"),
        React.createElement('div', { className: "grid md:grid-cols-2 gap-4", key: "messages-grid" }, [
          React.createElement('div', { key: "connection-msgs" }, [
            React.createElement('h5', { className: "font-semibold mb-1 text-blue-200", key: "conn-title" }, "Connection:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "conn-list" }, [
              React.createElement('li', { key: "conn1" }, React.createElement('code', null, "version"), " - Node capabilities"),
              React.createElement('li', { key: "conn2" }, React.createElement('code', null, "verack"), " - Version acknowledgment"),
              React.createElement('li', { key: "conn3" }, React.createElement('code', null, "ping/pong"), " - Keep connection alive")
            ])
          ]),
          React.createElement('div', { key: "data-msgs" }, [
            React.createElement('h5', { className: "font-semibold mb-1 text-blue-200", key: "data-title" }, "Data Sharing:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "data-list" }, [
              React.createElement('li', { key: "data1" }, React.createElement('code', null, "inv"), " - Inventory of available data"),
              React.createElement('li', { key: "data2" }, React.createElement('code', null, "getdata"), " - Request specific data"),
              React.createElement('li', { key: "data3" }, React.createElement('code', null, "tx/block"), " - Transaction/block data")
            ])
          ])
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/node-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "🖥️ Interactive Challenge: Operate Your Virtual Node"),
        React.createElement('p', { key: "challenge-desc" },
          "Set up and operate different types of Bitcoin nodes. Experience transaction validation, block propagation, " +
          "and peer-to-peer networking. Compare the capabilities and resource requirements of various node types."
        )
      ])
    ]),
    completionMessage: "Excellent! You now understand how Bitcoin nodes form the decentralized backbone that validates and secures the entire network."
  },

  {
    id: 9,
    title: "Bitcoin Forks",
    subtitle: "When the Network Splits",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/1534e4562b8d81db405fd9b725fee9e0067de01b1e0903dd13434988beafa612?w=530&h=260",
    simulationType: "consensus",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin forks represent changes to the network's consensus rules. Understanding the different types of forks " +
        "and their implications is crucial for grasping how Bitcoin evolves while maintaining network integrity."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "soft-vs-hard" }, "Soft Forks vs Hard Forks"),
      React.createElement('p', { className: "mb-4", key: "fork-types-desc" },
        "The key difference between soft and hard forks lies in backward compatibility and how they affect the " +
        "existing network."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "fork-comparison" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "soft-forks" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "soft-title" }, "Soft Forks"),
          React.createElement('p', { className: "text-sm mb-2", key: "soft-desc" }, "Backward-compatible rule changes that make consensus rules more restrictive."),
          React.createElement('div', { className: "space-y-2", key: "soft-details" }, [
            React.createElement('h5', { className: "font-semibold text-green-200", key: "soft-char-title" }, "Characteristics:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "soft-char-list" }, [
              React.createElement('li', { key: "soft1" }, "Old nodes remain compatible"),
              React.createElement('li', { key: "soft2" }, "New rules are subset of old rules"),
              React.createElement('li', { key: "soft3" }, "Only requires majority miner support"),
              React.createElement('li', { key: "soft4" }, "Network remains unified")
            ]),
            React.createElement('h5', { className: "font-semibold text-green-200 mt-2", key: "soft-ex-title" }, "Examples:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "soft-ex-list" }, [
              React.createElement('li', { key: "ex1" }, "SegWit (2017)"),
              React.createElement('li', { key: "ex2" }, "Taproot (2021)"),
              React.createElement('li', { key: "ex3" }, "BIP66 (DER signatures)")
            ])
          ])
        ]),
        React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4", key: "hard-forks" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "hard-title" }, "Hard Forks"),
          React.createElement('p', { className: "text-sm mb-2", key: "hard-desc" }, "Non-backward-compatible changes that loosen or change existing rules."),
          React.createElement('div', { className: "space-y-2", key: "hard-details" }, [
            React.createElement('h5', { className: "font-semibold text-red-200", key: "hard-char-title" }, "Characteristics:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "hard-char-list" }, [
              React.createElement('li', { key: "hard1" }, "All nodes must upgrade"),
              React.createElement('li', { key: "hard2" }, "Creates incompatible chains"),
              React.createElement('li', { key: "hard3" }, "Risk of permanent network split"),
              React.createElement('li', { key: "hard4" }, "Requires broad consensus")
            ]),
            React.createElement('h5', { className: "font-semibold text-red-200 mt-2", key: "hard-ex-title" }, "Examples:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "hard-ex-list" }, [
              React.createElement('li', { key: "hex1" }, "Bitcoin Cash (2017)"),
              React.createElement('li', { key: "hex2" }, "Bitcoin SV (2018)"),
              React.createElement('li', { key: "hex3" }, "Hypothetical block size increase")
            ])
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "backward-compat" }, "Backward Compatibility"),
      React.createElement('p', { className: "mb-4", key: "compat-desc" },
        "Backward compatibility determines whether older versions of node software can continue operating " +
        "after a protocol change."
      ),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "compat-example" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "compat-title" }, "Compatibility in Practice"),
        React.createElement('div', { className: "space-y-2 text-sm", key: "compat-scenarios" }, [
          React.createElement('div', { key: "scenario1" }, [
            React.createElement('strong', { className: "text-green-400", key: "soft-scenario" }, "Soft Fork Scenario: "),
            "Old nodes see new SegWit transactions as valid 'anyone-can-spend' transactions, maintaining compatibility."
          ]),
          React.createElement('div', { key: "scenario2" }, [
            React.createElement('strong', { className: "text-red-400", key: "hard-scenario" }, "Hard Fork Scenario: "),
            "Old nodes reject larger blocks as invalid, creating two incompatible networks."
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "segwit-case" }, "Case Study: SegWit Activation"),
      React.createElement('p', { className: "mb-4", key: "segwit-desc" },
        "Segregated Witness (SegWit) demonstrates how a soft fork can introduce significant improvements while " +
        "maintaining network compatibility."
      ),
      React.createElement('div', { className: "space-y-4 mb-4", key: "segwit-details" }, [
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "segwit-what" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "segwit-what-title" }, "What SegWit Changed"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "segwit-changes" }, [
            React.createElement('li', { key: "change1" }, "Moved signature data to separate witness section"),
            React.createElement('li', { key: "change2" }, "Increased effective block size to ~1.7MB"),
            React.createElement('li', { key: "change3" }, "Fixed transaction malleability"),
            React.createElement('li', { key: "change4" }, "Enabled Lightning Network development"),
            React.createElement('li', { key: "change5" }, "Introduced new address formats (bech32)")
          ])
        ]),
        React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4", key: "segwit-activation" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "segwit-activation-title" }, "Activation Process"),
          React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "activation-steps" }, [
            React.createElement('li', { key: "activ1" }, "BIP9 signaling: Miners signal readiness in block version"),
            React.createElement('li', { key: "activ2" }, "95% threshold required over 2016-block period"),
            React.createElement('li', { key: "activ3" }, "BIP148 User Activated Soft Fork (UASF) pressure"),
            React.createElement('li', { key: "activ4" }, "New York Agreement and SegWit2x proposal"),
            React.createElement('li', { key: "activ5" }, "Final activation on August 24, 2017")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "taproot-case" }, "Case Study: Taproot Upgrade"),
      React.createElement('p', { className: "mb-4", key: "taproot-desc" },
        "Taproot represents Bitcoin's most significant upgrade since SegWit, demonstrating how soft forks can " +
        "add sophisticated functionality."
      ),
      React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4 mb-4", key: "taproot-features" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "taproot-features-title" }, "Taproot Improvements"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "taproot-improvements" }, [
          React.createElement('li', { key: "improve1" }, React.createElement('strong', null, "Schnorr Signatures: "), "More efficient and private signature scheme"),
          React.createElement('li', { key: "improve2" }, React.createElement('strong', null, "Tapscript: "), "Enhanced scripting capabilities"),
          React.createElement('li', { key: "improve3" }, React.createElement('strong', null, "MAST: "), "Merklized Abstract Syntax Trees for complex contracts"),
          React.createElement('li', { key: "improve4" }, React.createElement('strong', null, "Key Aggregation: "), "Multiple signatures appear as single signature"),
          React.createElement('li', { key: "improve5" }, React.createElement('strong', null, "Privacy: "), "Complex transactions look like simple ones")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "replay-protection" }, "Replay Protection"),
      React.createElement('p', { className: "mb-4", key: "replay-desc" },
        "When hard forks create separate networks, replay protection prevents transactions from being valid " +
        "on both chains simultaneously."
      ),
      React.createElement('div', { className: "bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4 mb-4", key: "replay-box" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-yellow-300", key: "replay-title" }, "Replay Attack Scenario"),
        React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "replay-scenario" }, [
          React.createElement('li', { key: "replay1" }, "Alice sends Bitcoin on Chain A"),
          React.createElement('li', { key: "replay2" }, "Attacker copies the transaction"),
          React.createElement('li', { key: "replay3" }, "Broadcasts identical transaction on Chain B"),
          React.createElement('li', { key: "replay4" }, "Alice loses coins on both chains"),
          React.createElement('li', { key: "replay5" }, "Replay protection prevents this by making transactions chain-specific")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "controversial-forks" }, "Controversial Forks: BCH and BSV"),
      React.createElement('p', { className: "mb-4", key: "controversial-desc" },
        "Some hard forks create permanent network splits due to fundamental disagreements about Bitcoin's direction."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "controversial-grid" }, [
        React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4", key: "bch" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "bch-title" }, "Bitcoin Cash (BCH) - 2017"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "bch-list" }, [
            React.createElement('li', { key: "bch1" }, "Increased block size to 8MB"),
            React.createElement('li', { key: "bch2" }, "Removed SegWit"),
            React.createElement('li', { key: "bch3" }, "Emphasized on-chain scaling"),
            React.createElement('li', { key: "bch4" }, "Added replay protection")
          ])
        ]),
        React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4", key: "bsv" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "bsv-title" }, "Bitcoin SV (BSV) - 2018"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "bsv-list" }, [
            React.createElement('li', { key: "bsv1" }, "Fork of Bitcoin Cash"),
            React.createElement('li', { key: "bsv2" }, "Massive block size increases"),
            React.createElement('li', { key: "bsv3" }, "Attempted to restore original opcodes"),
            React.createElement('li', { key: "bsv4" }, "Controversial leadership and claims")
          ])
        ])
      ]),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "network-effects" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "effects-title" }, "Network Effects and Market Dynamics"),
        React.createElement('p', { className: "text-sm mb-2", key: "effects-desc" },
          "Fork success depends on multiple factors beyond technical merit:"
        ),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "effects-list" }, [
          React.createElement('li', { key: "effect1" }, "Miner support and hash rate"),
          React.createElement('li', { key: "effect2" }, "Exchange and wallet adoption"),
          React.createElement('li', { key: "effect3" }, "Developer community backing"),
          React.createElement('li', { key: "effect4" }, "User and merchant acceptance"),
          React.createElement('li', { key: "effect5" }, "Market valuation and liquidity")
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/forks-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "🔀 Interactive Challenge: Navigate Network Forks"),
        React.createElement('p', { key: "challenge-desc" },
          "Simulate different fork scenarios and their outcomes. Experience how soft forks maintain compatibility " +
          "while hard forks can split networks. Understand the governance challenges of protocol upgrades."
        )
      ])
    ]),
    completionMessage: "Outstanding! You now understand how Bitcoin evolves through forks while balancing innovation with network stability."
  },

  {
    id: 10,
    title: "Scaling Bitcoin",
    subtitle: "Challenges and Solutions",
    imagePath: "https://pfst.cf2.poecdn.net/base/image/769917eddc6ee5ee6bf70d4b3468bc2d3751f70a7fbc84c9ccf43c5a46bcb068?w=530&h=260",
    simulationType: "hashing",
    content: createContent([
      React.createElement('p', { className: "mb-4", key: "intro" },
        "Bitcoin's limited transaction throughput has sparked intense debate and innovation around scaling solutions. " +
        "Understanding these challenges and the various proposed solutions is crucial for grasping Bitcoin's evolution " +
        "and future potential."
      ),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "scaling-challenge" }, "Why Bitcoin Doesn't Scale Easily"),
      React.createElement('p', { className: "mb-4", key: "challenge-desc" },
        "Bitcoin's design prioritizes security and decentralization over transaction throughput, creating inherent " +
        "scaling limitations that require careful engineering to overcome."
      ),
      React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4", key: "limitations" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "limitations-title" }, "Technical Limitations"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "limitations-list" }, [
          React.createElement('li', { key: "limit1" }, React.createElement('strong', null, "Block Size: "), "~1MB limit restricts transactions per block"),
          React.createElement('li', { key: "limit2" }, React.createElement('strong', null, "Block Time: "), "10-minute average creates confirmation delays"),
          React.createElement('li', { key: "limit3" }, React.createElement('strong', null, "Throughput: "), "~7 transactions per second maximum"),
          React.createElement('li', { key: "limit4" }, React.createElement('strong', null, "Verification: "), "Every node must validate every transaction"),
          React.createElement('li', { key: "limit5" }, React.createElement('strong', null, "Storage: "), "Full nodes store complete transaction history")
        ])
      ]),
      React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4", key: "tradeoffs" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "tradeoffs-title" }, "The Scaling Trilemma"),
        React.createElement('p', { className: "text-sm mb-2", key: "trilemma-desc" },
          "Bitcoin must balance three competing properties:"
        ),
        React.createElement('div', { className: "grid md:grid-cols-3 gap-3", key: "trilemma-grid" }, [
          React.createElement('div', { className: "text-center p-2 bg-green-900/30 rounded", key: "security" }, [
            React.createElement('h5', { className: "font-semibold text-green-300", key: "security-title" }, "Security"),
            React.createElement('p', { className: "text-xs text-gray-300", key: "security-desc" }, "Resistance to attacks")
          ]),
          React.createElement('div', { className: "text-center p-2 bg-blue-900/30 rounded", key: "decentralization" }, [
            React.createElement('h5', { className: "font-semibold text-blue-300", key: "decent-title" }, "Decentralization"),
            React.createElement('p', { className: "text-xs text-gray-300", key: "decent-desc" }, "No central control")
          ]),
          React.createElement('div', { className: "text-center p-2 bg-purple-900/30 rounded", key: "scalability" }, [
            React.createElement('h5', { className: "font-semibold text-purple-300", key: "scale-title" }, "Scalability"),
            React.createElement('p', { className: "text-xs text-gray-300", key: "scale-desc" }, "High throughput")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "scaling-approaches" }, "On-chain vs Off-chain Scaling"),
      React.createElement('p', { className: "mb-4", key: "approaches-desc" },
        "Scaling solutions fall into two main categories: increasing the blockchain's direct capacity or moving " +
        "transactions to secondary layers."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "scaling-grid" }, [
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "onchain" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "onchain-title" }, "On-chain Scaling"),
          React.createElement('p', { className: "text-sm mb-2", key: "onchain-desc" }, "Increase blockchain's direct transaction capacity"),
          React.createElement('div', { className: "space-y-2", key: "onchain-methods" }, [
            React.createElement('h5', { className: "font-semibold text-green-200", key: "onchain-methods-title" }, "Methods:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "onchain-list" }, [
              React.createElement('li', { key: "on1" }, "Increase block size"),
              React.createElement('li', { key: "on2" }, "Reduce block time"),
              React.createElement('li', { key: "on3" }, "Optimize transaction format"),
              React.createElement('li', { key: "on4" }, "Signature aggregation")
            ]),
            React.createElement('h5', { className: "font-semibold text-red-200 mt-2", key: "onchain-tradeoffs-title" }, "Tradeoffs:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "onchain-tradeoffs" }, [
              React.createElement('li', { key: "trade1" }, "Increased node requirements"),
              React.createElement('li', { key: "trade2" }, "Reduced decentralization"),
              React.createElement('li', { key: "trade3" }, "Network consensus needed")
            ])
          ])
        ]),
        React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4", key: "offchain" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "offchain-title" }, "Off-chain Scaling"),
          React.createElement('p', { className: "text-sm mb-2", key: "offchain-desc" }, "Move transactions to secondary layers"),
          React.createElement('div', { className: "space-y-2", key: "offchain-methods" }, [
            React.createElement('h5', { className: "font-semibold text-purple-200", key: "offchain-methods-title" }, "Methods:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "offchain-list" }, [
              React.createElement('li', { key: "off1" }, "Payment channels"),
              React.createElement('li', { key: "off2" }, "State channels"),
              React.createElement('li', { key: "off3" }, "Sidechains"),
              React.createElement('li', { key: "off4" }, "Rollups")
            ]),
            React.createElement('h5', { className: "font-semibold text-green-200 mt-2", key: "offchain-benefits-title" }, "Benefits:"),
            React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-xs", key: "offchain-benefits" }, [
              React.createElement('li', { key: "benefit1" }, "Preserve base layer"),
              React.createElement('li', { key: "benefit2" }, "Instant settlements"),
              React.createElement('li', { key: "benefit3" }, "Lower fees"),
              React.createElement('li', { key: "benefit4" }, "Unlimited scalability")
            ])
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "segwit-scaling" }, "SegWit: Bitcoin's Scaling Breakthrough"),
      React.createElement('p', { className: "mb-4", key: "segwit-scaling-desc" },
        "Segregated Witness cleverly increased Bitcoin's transaction capacity while maintaining backward compatibility " +
        "and enabling further scaling innovations."
      ),
      React.createElement('div', { className: "bg-orange-900/20 border border-orange-800/30 rounded-lg p-4 mb-4", key: "segwit-benefits" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-orange-300", key: "segwit-benefits-title" }, "SegWit Scaling Benefits"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "segwit-benefits-list" }, [
          React.createElement('li', { key: "seg1" }, React.createElement('strong', null, "Capacity Increase: "), "Effective block size up to ~1.7MB"),
          React.createElement('li', { key: "seg2" }, React.createElement('strong', null, "Fee Reduction: "), "Lower transaction costs for SegWit users"),
          React.createElement('li', { key: "seg3" }, React.createElement('strong', null, "Malleability Fix: "), "Enabled Lightning Network development"),
          React.createElement('li', { key: "seg4" }, React.createElement('strong', null, "Script Versioning: "), "Easier future upgrades"),
          React.createElement('li', { key: "seg5" }, React.createElement('strong', null, "Quadratic Hashing: "), "Fixed performance attack vector")
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "lightning" }, "Lightning Network: Payment Channels"),
      React.createElement('p', { className: "mb-4", key: "lightning-desc" },
        "The Lightning Network creates a layer-2 payment system that enables instant, low-cost transactions while " +
        "maintaining Bitcoin's security guarantees."
      ),
      React.createElement('div', { className: "space-y-4 mb-4", key: "lightning-details" }, [
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "how-lightning" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "how-title" }, "How Lightning Works"),
          React.createElement('ol', { className: "list-decimal ml-4 space-y-1 text-sm", key: "lightning-steps" }, [
            React.createElement('li', { key: "ln1" }, "Two parties lock Bitcoin in a multi-signature address"),
            React.createElement('li', { key: "ln2" }, "They can make unlimited off-chain transactions"),
            React.createElement('li', { key: "ln3" }, "Transactions are instant and nearly free"),
            React.createElement('li', { key: "ln4" }, "Either party can close the channel on-chain"),
            React.createElement('li', { key: "ln5" }, "Final balances are settled on the Bitcoin blockchain")
          ])
        ]),
        React.createElement('div', { className: "bg-green-900/20 border border-green-800/30 rounded-lg p-4", key: "lightning-features" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-green-300", key: "features-title" }, "Lightning Features"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "lightning-features-list" }, [
            React.createElement('li', { key: "feat1" }, "Routing through interconnected channels"),
            React.createElement('li', { key: "feat2" }, "Atomic payments via Hash Time-Locked Contracts"),
            React.createElement('li', { key: "feat3" }, "Micropayments down to 1 satoshi"),
            React.createElement('li', { key: "feat4" }, "Privacy through onion routing"),
            React.createElement('li', { key: "feat5" }, "Watchtower services for security")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "block-size-debate" }, "The Block Size Debate"),
      React.createElement('p', { className: "mb-4", key: "debate-desc" },
        "The debate over increasing Bitcoin's block size highlighted fundamental disagreements about scaling " +
        "approaches and network governance."
      ),
      React.createElement('div', { className: "grid md:grid-cols-2 gap-4 mb-4", key: "debate-positions" }, [
        React.createElement('div', { className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4", key: "small-blocks" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-blue-300", key: "small-title" }, "Small Block Position"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "small-args" }, [
            React.createElement('li', { key: "small1" }, "Preserve decentralization"),
            React.createElement('li', { key: "small2" }, "Keep node operation accessible"),
            React.createElement('li', { key: "small3" }, "Layer-2 solutions for scaling"),
            React.createElement('li', { key: "small4" }, "Gradual, conservative changes")
          ])
        ]),
        React.createElement('div', { className: "bg-red-900/20 border border-red-800/30 rounded-lg p-4", key: "big-blocks" }, [
          React.createElement('h4', { className: "font-semibold mb-2 text-red-300", key: "big-title" }, "Big Block Position"),
          React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "big-args" }, [
            React.createElement('li', { key: "big1" }, "Immediate capacity increase"),
            React.createElement('li', { key: "big2" }, "Lower transaction fees"),
            React.createElement('li', { key: "big3" }, "On-chain scaling priority"),
            React.createElement('li', { key: "big4" }, "User adoption focus")
          ])
        ])
      ]),
      React.createElement('h3', { className: "text-xl font-semibold mb-2 text-blue-400", key: "schnorr-taproot" }, "Schnorr Signatures & Taproot"),
      React.createElement('p', { className: "mb-4", key: "schnorr-desc" },
        "These advanced cryptographic techniques improve Bitcoin's efficiency, privacy, and enable more sophisticated " +
        "smart contracts while maintaining the security model."
      ),
      React.createElement('div', { className: "bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 mb-4", key: "schnorr-benefits" }, [
        React.createElement('h4', { className: "font-semibold mb-2 text-purple-300", key: "schnorr-title" }, "Schnorr & Taproot Benefits"),
        React.createElement('ul', { className: "list-disc ml-4 space-y-1 text-sm", key: "schnorr-list" }, [
          React.createElement('li', { key: "sch1" }, React.createElement('strong', null, "Signature Aggregation: "), "Multiple signatures combine into one"),
          React.createElement('li', { key: "sch2" }, React.createElement('strong', null, "Space Efficiency: "), "Reduced transaction size"),
          React.createElement('li', { key: "sch3" }, React.createElement('strong', null, "Privacy: "), "Complex scripts look like simple payments"),
          React.createElement('li', { key: "sch4" }, React.createElement('strong', null, "Smart Contracts: "), "MAST enables complex conditions"),
          React.createElement('li', { key: "sch5" }, React.createElement('strong', null, "Batch Verification: "), "Faster validation of multiple signatures")
        ])
      ]),
      React.createElement('div', { 
        className: "bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-4 cursor-pointer hover:bg-blue-900/30 transition-colors", 
        key: "challenge-box",
        onClick: () => { window.location.href = '/realm3/scaling-simulator'; }
      }, [
        React.createElement('h4', { className: "text-lg font-semibold mb-2 text-blue-400", key: "challenge-title" }, "⚡ Interactive Challenge: Scale the Network"),
        React.createElement('p', { key: "challenge-desc" },
          "Experiment with different scaling approaches and their tradeoffs. Compare on-chain and off-chain solutions, " +
          "experience Lightning Network channels, and understand the engineering challenges of scaling Bitcoin."
        )
      ])
    ]),
    completionMessage: "Exceptional work! You now understand Bitcoin's scaling challenges and the innovative solutions being developed to address them."
  }
];