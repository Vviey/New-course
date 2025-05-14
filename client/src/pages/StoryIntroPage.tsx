import { useState } from 'react';
import { useLocation } from 'wouter';
import { originTheme } from '@/lib/realm-themes';
import { OriginsBackground } from '@/components/ui/origins-background';
import { getRealmName } from '@/lib/realm-utils';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

export default function StoryIntroPage() {
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = originTheme;
  const { username } = useAuth();
  
  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  // Story intro slides content
  const slides = [
    {
      title: "Asha and the Whisper of Coins",
      content: `In a thriving African town where tradition and technology live side by side, 
      Asha looks up at the stars and wonders about her place in this rapidly changing world.
      
      Her country has begun shifting from cash-based finance to fully digital systems, 
      and she's starting to notice small changes—quiet, subtle—but they raise big questions.
      
      Who controls our money? What do we give up when everything becomes digital? Is there another way?`,
      image: "/assets/realms/intro-1.png"
    },
    {
      title: "Meeting Odu",
      content: `One day at the market, Asha meets a mysterious elder named Odu. 
      Instead of giving straight answers about the changes happening around them, 
      Odu presents Asha with an ancient coin and a modern digital wallet.
      
      "Both hold value," says Odu, "but in very different ways. To understand which path to choose,
      you must first understand where money came from, how it evolved, and what it truly means."
      
      Odu doesn't give Asha answers—but helps her find them herself.`,
      image: "/assets/realms/intro-2.png"
    },
    {
      title: "Your Journey Begins",
      content: `Just like Asha, you're not here to be told what to think. You're here to discover truths for yourself.
      
      Through seven distinct realms of knowledge, you'll explore the foundations of money, 
      government control of monetary systems, Bitcoin's birth and development, mining and network consensus,
      governance and protocol changes, practical applications in Africa, and finally test your comprehensive understanding.
      
      Each mission in this course is a chapter in Asha's journey to understanding money, and now it becomes your journey too.`,
      image: "/assets/realms/intro-3.png"
    }
  ];
  
  const handleContinue = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to the auth page when story is complete
      setLocation('/auth');
    }
  };
  
  const handleSkip = () => {
    setLocation('/auth');
  };
  
  return (
    <div className="min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#1E1814' }}>
      <OriginsBackground 
        patternType="adinkra" 
        opacity={0.08} 
        withGradient={true} 
        roundedCorners={false}
        className="min-h-screen py-12 px-4 flex items-center justify-center"
      >
        <motion.div 
          className="max-w-5xl w-full mx-auto bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl overflow-hidden shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Progress necklace - visible on all screens */}
          <div className="w-full flex justify-center -mb-2 mt-4">
            <div className="flex items-center">
              {slides.map((_, index) => (
                <div key={index} className="relative mx-1">
                  <div 
                    className={`w-4 h-4 rounded-full border-2 ${
                      index === currentSlide 
                        ? 'border-amber-600 bg-amber-500 shadow-lg shadow-amber-300/50' 
                        : index < currentSlide 
                          ? 'border-amber-600 bg-amber-400' 
                          : 'border-amber-400 bg-amber-100'
                    }`}
                  />
                  {index < slides.length - 1 && (
                    <div className={`h-0.5 w-10 absolute top-2 left-4 -z-10 ${
                      index < currentSlide ? 'bg-amber-400' : 'bg-amber-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/2 relative h-72 md:h-auto">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                key={currentSlide}
                className="h-full"
              >
                {slides[currentSlide].image ? (
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <div className="origins-pattern opacity-20 absolute inset-0"></div>
                    <span className="text-amber-800 font-serif text-xl">Asha's Journey Begins</span>
                  </div>
                )}
              </motion.div>
              
              {/* African pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Content section */}
            <div className="md:w-1/2 p-8 relative">
              {/* Skip button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleSkip}
                  className="text-amber-800 text-sm hover:text-amber-950 underline decoration-dotted underline-offset-4"
                >
                  Skip Intro
                </button>
              </div>
              
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <h2 className="text-3xl font-bold mb-4 font-serif text-amber-900 border-b-2 border-amber-200 pb-2">
                  {slides[currentSlide].title}
                </h2>
                
                <div className="prose prose-amber prose-lg mb-8 whitespace-pre-line text-amber-950">
                  {slides[currentSlide].content}
                </div>
              </motion.div>
              
              <motion.button
                onClick={handleContinue}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 
                  text-white font-bold shadow-lg shadow-amber-700/30 hover:shadow-amber-700/50 
                  hover:from-amber-700 hover:to-amber-800 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentSlide < slides.length - 1 ? "Continue Story" : "Begin Your Journey"}
              </motion.button>
              
              {/* African symbol decoration */}
              <div className="absolute bottom-4 left-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#8B4513" strokeWidth="2" />
                  <path d="M2 17L12 22L22 17" stroke="#8B4513" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="#8B4513" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Backpack icon (for wallet, glossary) */}
          <div className="p-4 border-t border-amber-200 flex justify-between items-center bg-amber-50/50">
            <div className="flex items-center text-amber-800 text-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Your progress will be saved automatically</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"></path>
                </svg>
              </div>
              <span className="text-amber-900 font-medium">Welcome, {username || 'Explorer'}</span>
            </div>
          </div>
        </motion.div>
      </OriginsBackground>
    </div>
  );
}