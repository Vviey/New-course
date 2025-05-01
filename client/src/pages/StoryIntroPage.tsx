import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { originTheme } from '@/lib/realm-themes';
import { OriginsBackground } from '@/components/ui/origins-background';
import { useAuth } from '@/hooks/use-auth';

export default function StoryIntroPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = originTheme;
  
  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      setLocation('/auth');
    }
  }, [user, setLocation]);
  
  // Story intro slides content
  const slides = [
    {
      title: "The Beginning of a Journey",
      content: `In a small village nestled between rolling hills and sparse forests, a young 
      woman named Asha stares at the stars, wondering about her place in the world.
      
      Her grandmother's stories of ancient trade routes and bustling marketplaces had 
      always fascinated her, but tonight a shooting star ignites a new curiosity.`,
      image: "https://bitcoiners.africa/wp-content/uploads/2025/04/intro-1.jpg"
    },
    {
      title: "The Mysterious Box",
      content: `The next morning, Asha discovers an ornate wooden box at her doorstep. 
      Inside, she finds an ancient map and a peculiar coin unlike any she's seen before.
      
      The map shows six distinct realms, each containing knowledge about money that 
      has been lost or forgotten by many. A note reads: "To understand tomorrow, 
      you must first understand yesterday."`,
      image: "https://bitcoiners.africa/wp-content/uploads/2025/04/intro-2.jpg"
    },
    {
      title: "The First Step",
      content: `As Asha traces her fingers over the map, the first realm begins to glow - 
      The Realm of Origins. This is where her journey begins, in the ancient marketplaces 
      where humans first developed the concept of trade and value.
      
      Here, she will learn how the earliest forms of money emerged from necessity and invention,
      setting the stage for a journey that will bridge the past, present, and future of value.`,
      image: "https://bitcoiners.africa/wp-content/uploads/2025/04/intro-3.jpg"
    }
  ];
  
  const handleContinue = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to the first realm when story is complete
      setLocation('/realms/1');
    }
  };
  
  const handleSkip = () => {
    setLocation('/realms/1');
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.backgroundLight }}>
      <OriginsBackground 
        patternType="adinkra" 
        opacity={0.05} 
        withGradient={false} 
        roundedCorners={false}
        className="min-h-screen py-12 px-4 flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              {slides[currentSlide].image ? (
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                  <div className="origins-pattern opacity-20 absolute inset-0"></div>
                  <span className="text-amber-800 font-lora text-xl">Asha's Journey Begins</span>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="md:w-1/2 p-8">
              <div className="mb-2 flex justify-between items-center">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentSlide ? 'bg-amber-600' : 'bg-amber-200'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleSkip}
                  className="text-amber-600 text-sm hover:text-amber-800"
                >
                  Skip Story
                </button>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 font-lora text-amber-800">
                {slides[currentSlide].title}
              </h2>
              
              <div className="prose prose-amber mb-8 whitespace-pre-line">
                {slides[currentSlide].content}
              </div>
              
              <button
                onClick={handleContinue}
                className="btn-origins w-full"
              >
                {currentSlide < slides.length - 1 ? "Continue" : "Begin Your Journey"}
              </button>
            </div>
          </div>
        </div>
      </OriginsBackground>
    </div>
  );
}