import { useState, useEffect } from 'react';

// African pattern background component inspired by the authentic patterns
const AfricanBackground = ({ patternType = "kente" }) => {
  const patterns = {
    kente: (
      <svg width="100%" height="100%" className="absolute inset-0 opacity-10 pointer-events-none">
        <pattern id="kentePattern" patternUnits="userSpaceOnUse" width="60" height="60">
          <rect width="60" height="60" fill="#2D3D29" />
          <rect x="0" y="0" width="30" height="30" fill="#EE720B" />
          <rect x="30" y="30" width="30" height="30" fill="#EE720B" />
          <rect x="10" y="10" width="10" height="10" fill="#FFC567" />
          <rect x="40" y="40" width="10" height="10" fill="#FFC567" />
          <rect x="10" y="40" width="10" height="10" fill="#2D8F4E" />
          <rect x="40" y="10" width="10" height="10" fill="#2D8F4E" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#kentePattern)" />
      </svg>
    ),
    adinkra: (
      <svg width="100%" height="100%" className="absolute inset-0 opacity-10 pointer-events-none">
        <pattern id="adinkraPattern" patternUnits="userSpaceOnUse" width="80" height="80">
          <rect width="80" height="80" fill="#2D3D29" />
          <circle cx="40" cy="40" r="20" fill="none" stroke="#EE720B" strokeWidth="3" />
          <path d="M20 40 L60 40 M40 20 L40 60" stroke="#FFC567" strokeWidth="3" />
          <circle cx="40" cy="40" r="10" fill="none" stroke="#2D8F4E" strokeWidth="2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#adinkraPattern)" />
      </svg>
    ),
    mudcloth: (
      <svg width="100%" height="100%" className="absolute inset-0 opacity-10 pointer-events-none">
        <pattern id="mudclothPattern" patternUnits="userSpaceOnUse" width="40" height="40">
          <rect width="40" height="40" fill="#EE720B" />
          <rect x="5" y="5" width="30" height="2" fill="#2D3D29" />
          <rect x="5" y="13" width="30" height="2" fill="#2D3D29" />
          <rect x="5" y="21" width="30" height="2" fill="#2D3D29" />
          <rect x="5" y="29" width="30" height="2" fill="#2D3D29" />
          <rect x="5" y="5" width="2" height="30" fill="#2D3D29" />
          <rect x="13" y="5" width="2" height="30" fill="#2D3D29" />
          <rect x="21" y="5" width="2" height="30" fill="#2D3D29" />
          <rect x="29" y="5" width="2" height="30" fill="#2D3D29" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#mudclothPattern)" />
      </svg>
    ),
    fans: (
      <svg width="100%" height="100%" className="absolute inset-0 opacity-10 pointer-events-none">
        <pattern id="fansPattern" patternUnits="userSpaceOnUse" width="60" height="30">
          <rect width="60" height="30" fill="#FBF4D2" />
          <path d="M0 30 Q30 0 60 30" stroke="#EE720B" strokeWidth="2" fill="none" />
          <path d="M0 30 Q30 10 60 30" stroke="#FFC567" strokeWidth="2" fill="none" />
          <path d="M0 30 Q30 20 60 30" stroke="#2D8F4E" strokeWidth="2" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#fansPattern)" />
      </svg>
    )
  };

  return patterns[patternType] || patterns.kente;
};

// Decorative header with African pattern
const AfricanHeader = ({ title }) => {
  return (
    <div className="relative bg-orange-500 text-white py-3 px-4 rounded-t-lg overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="headerPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
          <rect width="20" height="20" fill="#EE720B" />
          <rect x="10" y="0" width="10" height="10" fill="#D15600" />
          <rect x="0" y="10" width="10" height="10" fill="#D15600" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#headerPattern)" />
      </svg>
      <h3 className="text-xl font-serif relative z-10">{title}</h3>
    </div>
  );
};

const CurrencyValueSimulator = () => {
  const [currencies, setCurrencies] = useState([
    { 
      id: 1, 
      name: "Cowrie Shells",
      value: 100,
      trust: 80,
      availability: 70,
      durability: 60,
      transportability: 90,
      icon: "🐚",
      description: "Natural seashells used as currency throughout Africa and Asia",
      background: "kente"
    },
    { 
      id: 2, 
      name: "Salt Bars",
      value: 150,
      trust: 85,
      availability: 50,
      durability: 30,
      transportability: 60,
      icon: "🧂",
      description: "Compressed salt blocks used as currency in the Sahara region",
      background: "adinkra"
    },
    { 
      id: 3, 
      name: "Gold Dust",
      value: 300,
      trust: 95,
      availability: 30,
      durability: 90,
      transportability: 80,
      icon: "✨",
      description: "Small amounts of gold dust measured in trade",
      background: "mudcloth"
    },
    { 
      id: 4, 
      name: "Copper Rings",
      value: 120,
      trust: 75,
      availability: 60,
      durability: 85,
      transportability: 75,
      icon: "⭕",
      description: "Metal rings worn and used as currency in Central Africa",
      background: "fans"
    },
  ]);
  
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [marketEvents, setMarketEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [round, setRound] = useState(1);
  const [gameComplete, setGameComplete] = useState(false);
  const [message, setMessage] = useState("");
  
  // Market events that affect currency values
  useEffect(() => {
    const events = [
      {
        id: 1,
        title: "New Trade Route",
        description: "A new trade route has opened to distant lands.",
        effects: {
          transportability: +15,
          availability: +10
        }
      },
      {
        id: 2,
        title: "Counterfeit Crisis",
        description: "Fake currency is circulating in the markets.",
        effects: {
          trust: -20
        }
      },
      {
        id: 3,
        title: "Resource Discovery",
        description: "New sources of materials have been discovered.",
        effects: {
          availability: +20,
          value: -10
        }
      },
      {
        id: 4,
        title: "Royal Endorsement",
        description: "The ruler has officially endorsed currency use.",
        effects: {
          trust: +15,
          value: +10
        }
      },
      {
        id: 5,
        title: "Environmental Change",
        description: "Changes in climate affect currency materials.",
        effects: {
          durability: -15,
          availability: -10
        }
      },
      {
        id: 6,
        title: "Foreign Merchants",
        description: "Foreign traders bring new currencies and ideas.",
        effects: {
          trust: -5,
          transportability: +10
        }
      },
      {
        id: 7,
        title: "Cultural Shift",
        description: "People's preferences for currency are changing.",
        effects: {
          value: -15,
          trust: +5
        }
      }
    ];
    
    // Shuffle events
    const shuffledEvents = [...events].sort(() => Math.random() - 0.5);
    setMarketEvents(shuffledEvents);
    
    // Set first event
    setCurrentEvent(shuffledEvents[0]);
  }, []);
  
  const handleCurrencySelect = (currencyId) => {
    setSelectedCurrency(currencyId);
  };
  
  const applyEventEffects = () => {
    if (!selectedCurrency || !currentEvent) return;
    
    // Apply effects to the selected currency
    setCurrencies(prevCurrencies => 
      prevCurrencies.map(currency => {
        if (currency.id === selectedCurrency) {
          const updatedCurrency = { ...currency };
          
          // Apply each effect
          for (const [attribute, change] of Object.entries(currentEvent.effects)) {
            updatedCurrency[attribute] = Math.max(0, Math.min(100, updatedCurrency[attribute] + change));
          }
          
          // Update overall value based on attributes
          const valueChange = calculateValueChange(currency, currentEvent.effects);
          updatedCurrency.value = Math.max(0, update