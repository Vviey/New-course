import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { ChevronRightIcon } from 'lucide-react';


type AfricanPattern = 'mudcloth' | 'kente' | 'adinkra';

const africanPatterns: Record<AfricanPattern, React.CSSProperties> = {
  mudcloth: {
    backgroundImage: `
      linear-gradient(45deg, #8e44ad 25%, transparent 25%), 
      linear-gradient(-45deg, #8e44ad 25%, transparent 25%), 
      linear-gradient(45deg, transparent 75%, #8e44ad 75%), 
      linear-gradient(-45deg, transparent 75%, #8e44ad 75%)
    `,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    opacity: 0.15
  },
  kente: {
    backgroundImage: `
      linear-gradient(90deg, #6c3483 25%, transparent 25%),
      linear-gradient(0deg, #bb8fce 25%, transparent 25%)
    `,
    backgroundSize: '40px 40px',
    opacity: 0.08
  },
  adinkra: {
    backgroundImage: `
      radial-gradient(circle, #5b2c6f 2px, transparent 2px)
    `,
    backgroundSize: '30px 30px',
    opacity: 0.1
  }
};

interface StoryPage {
  title: string;
  content: string;
  pattern: AfricanPattern;
  symbol: string;
}

const storyPages: StoryPage[] = [
  {
    title: 'The Murmur of Eyes',
    content: `When Asha opened her eyes, the warm hues of the Realm of Origins had vanished.

She now stood at the base of a towering structure made of dark stone and gleaming glass. The sky above was clouded and gray, casting long shadows across the metallic roads. Giant screens blinked with endless numbers, eyes, and commands. Her grandmother’s voice echoed around her—not from beside her, but from within.

"This," Mama Nia’s voice whispered, "is the Central Citadel."

Asha took a hesitant step forward. She could feel the weight of a hundred invisible gazes tracking her every move. Her palm still held the pouch, but it felt heavier here—its contents no longer just relics, but proof that something had been forgotten.

"This realm," Mama Nia continued, "was built on control. After our trade systems were disrupted, those in power offered new money—easy to use, but easy to watch. Slowly, we traded freedom for convenience, and surveillance became law."`,
    pattern: 'mudcloth',
    symbol: '🎥'
  },
  {
    title: 'The Mask of Convenience',
    content: `A sleek, silver drone hovered silently overhead. It projected a message into the air: *“For your safety, all transactions are monitored.”*

Asha recoiled. “Why does money need to be watched?”

From a nearby kiosk, a faceless attendant replied without moving its lips: “To keep the system safe. To protect you from harm. To ensure order.”

"But who watches the watchers?" Asha murmured.

A neon sign blinked above: *“Trust the System. Obey for Peace.”*

"This is how it began," Mama Nia's voice returned, softer now. "Paper money replaced shells and weights. Then came plastic cards, then numbers on a screen. Then came the watchers. Always watching. Always listening."

Asha looked around—every vendor, every voice, every coin exchanged left a trail. She felt her own trail forming like smoke behind her, unable to vanish.`,
    pattern: 'kente',
    symbol: '👁️'
  },
  {
    title: 'The Hidden Ledger',
    content: `Behind the central tower, Asha noticed a group of figures moving against the current. They wore masks made of old copper and cloth, faces hidden but eyes alert.

One stepped forward and handed her a folded note. Inside, a single phrase was written: *"Not all value is visible. Not all money is theirs."*

As she read, the air shimmered. Mama Nia’s voice returned, firmer this time.

"You will be tested here, Asha. In this realm, they’ll offer you tools that shine and promise ease. But ease has a price. Freedom does not beg for comfort—it fights for truth."

Asha held the note to her heart.

She closed her eyes once more, ready to uncover the secrets of the Citadel—and to choose whether she would walk its bright halls or seek the shadows where freedom still whispered.`,
    pattern: 'adinkra',
    symbol: '🗝️'
  }
];

export default function StoryIntro() {
  const [, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useState(0);

  const currentStory = storyPages[currentPage];
  const handleNextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setLocation('/realm/2/home');
    }
  };

  const buttonText = currentPage < storyPages.length - 1 ? 'Continue' : 'Enter Citadel';
  const pagePatternStyle = africanPatterns[currentStory.pattern];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundColor: '#1a102b',
        color: '#e0d9f5'
      }}
    >
      <div className="absolute inset-0 z-0" style={pagePatternStyle} />
      <div className="max-w-3xl w-full bg-purple-900/80 backdrop-blur-sm p-8 rounded-xl shadow-xl z-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-300 text-center">
          {currentStory.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-full md:w-3/5">
            <div className="prose prose-lg prose-invert max-w-none">
              {currentStory.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-purple-100">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center relative"
              style={{
                background: 'radial-gradient(circle, #5B2C6F 0%, #A569BD 100%)',
                boxShadow: '0 0 30px rgba(91, 44, 111, 0.5)'
              }}
            >
              <div className="text-center text-white z-10 p-4">
                <div className="text-6xl mb-2">{currentStory.symbol}</div>
                <p className="font-semibold text-lg">Central Citadel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {storyPages.map((_, idx) => (
              <div key={idx} className="relative">
                <div
                  className={`w-4 h-4 transform rotate-45 ${
                    idx === currentPage ? 'bg-purple-300' : 'bg-purple-800'
                  }`}
                />
                {idx === currentPage && (
                  <div
                    className="absolute inset-0 w-4 h-4 transform rotate-45 bg-purple-300 animate-pulse"
                    style={{ opacity: 0.5 }}
                  />
                )}
              </div>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-colors flex items-center group"
          >
            {buttonText}
            <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
