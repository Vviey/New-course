
import { useState } from 'react';
import { MissionLayout } from '@/components/ui/mission-layout';
import { BarterChallenge } from '@/components/ui/barter-challenge';

const barterTrades = [
  {
    from: "Mama Nia",
    has: "Basket of Yams",
    to: "Uncle Kofi",
    wants: "Cooking Pot"
  },
  {
    from: "Uncle Kofi",
    has: "Cooking Pot",
    to: "Ayo the Herder",
    wants: "Goat Milk"
  },
  {
    from: "Ayo the Herder",
    has: "Goat Milk",
    to: "Nana Ama",
    wants: "Herbal Medicine"
  },
  {
    from: "Nana Ama",
    has: "Herbal Medicine",
    to: "Mama Nia",
    wants: "Basket of Yams"
  }
];

export default function Mission1() {
  const [isStoryComplete, setStoryComplete] = useState(false);
  const [isChallengeComplete, setChallengeComplete] = useState(false);

  return (
    <MissionLayout 
      title="The First Exchange — Barter Systems"
      missionNumber={1}
      realmName="Realm of Origins"
    >
      {/* Story Section */}
      <div className="mb-12 bg-amber-900/10 p-6 rounded-lg backdrop-blur-sm">
        <div className="flex items-start space-x-4">
          <img 
            src="/asha-portrait.svg" 
            alt="Asha" 
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-amber-200 mb-4">
              Walking through the crowded festival with her grandmother, Asha observes 
              the vibrant exchanges happening around her. A salt trader attempts to 
              trade with a banana seller, but faces an unexpected challenge...
            </p>
            <div className="flex space-x-4">
              <div className="flex-1 bg-amber-900/20 p-4 rounded-lg">
                <p className="text-amber-300 italic">
                  "Why do we use paper to buy things now? Didn't people trade without it before?"
                </p>
                <span className="text-amber-400 text-sm">- Asha</span>
              </div>
              <div className="flex-1 bg-amber-800/20 p-4 rounded-lg">
                <p className="text-amber-300 italic">
                  "Before coins clinked and notes crumpled, stories were the ledger. 
                  Walk the path of what came before... and you'll know what was lost."
                </p>
                <span className="text-amber-400 text-sm">- Odu</span>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          className="mt-6 px-4 py-2 bg-amber-600 rounded-lg text-amber-100 hover:bg-amber-500 transition-colors"
          onClick={() => setStoryComplete(true)}
        >
          Continue
        </button>
      </div>

      {/* Challenge Section */}
      {isStoryComplete && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-300 mb-6">Barter Web Challenge</h2>
          <p className="text-amber-200 mb-6">
            Help Asha understand how barter trade works by connecting the right traders 
            together. Each successful trade will light up her bracelet!
          </p>
          
          <BarterChallenge 
            trades={barterTrades}
            onComplete={() => setChallengeComplete(true)}
          />
        </div>
      )}

      {/* Reflection Section */}
      {isChallengeComplete && (
        <div className="bg-amber-900/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">Reflection</h2>
          <p className="text-amber-200 mb-4">
            "If your village had no money, how would you trade for something rare — like medicine?"
          </p>
          <textarea 
            className="w-full bg-amber-900/20 border-2 border-amber-800 rounded-lg p-4 text-amber-100 placeholder-amber-700"
            rows={4}
            placeholder="Share your thoughts..."
          />
        </div>
      )}
    </MissionLayout>
  );
}
