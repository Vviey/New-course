import { Link } from 'wouter';
import { ThemeContainer, ThemeHeading, GradientButton, OutlineButton } from '@/components/ui/theme';

export default function StoryIntroPage() {

  return (
    <ThemeContainer className="bg-darkBg">
      <div className="min-h-screen flex flex-col">
        {/* Header with logo */}
        <header className="py-4 px-6 flex justify-center items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/asha-icon.svg" 
              alt="Asha's Journey Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-cinzel font-bold text-secondary">Asha's Journey</h1>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-6 flex flex-col items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-10">
              <img 
                src="/asha-portrait.svg" 
                alt="Asha portrait" 
                className="w-40 h-40 rounded-full object-contain border-2 border-secondary shadow-lg"
              />
            </div>

            <ThemeHeading level={1} className="mb-8 text-3xl md:text-4xl">
              Asha's Journey Through the Realms of Money
            </ThemeHeading>

            <div className="story-text space-y-6 text-left mb-12 bg-darkBg/70 p-6 rounded-lg border border-secondary/10 shadow-lg">
              <p className="text-lg text-lightText/90 leading-relaxed">
                In a town where tradition and technology live side by side, a young woman named Asha 
                noticed small changes when her country began shifting from cash to digital systems.
              </p>
              
              <p className="text-lg text-lightText/90 leading-relaxed">
                <span className="font-cinzel text-secondary">❝</span> I don't understand,<span className="font-cinzel text-secondary">❞</span> Asha whispered to herself as she stared at the 'Cash Not Accepted' 
                sign in a shop window. <span className="font-cinzel text-secondary">❝</span>How can they refuse the money our country has used for generations?<span className="font-cinzel text-secondary">❞</span>
              </p>
              
              <p className="text-lg text-lightText/90 leading-relaxed">
                Questions began to form in her curious mind: <em className="text-secondary/90">Who controls our money? What do we give up 
                when everything becomes digital? Is there another way?</em>
              </p>
              
              <p className="text-lg text-lightText/90 leading-relaxed">
                It was then that Asha met Odu, an elder whose eyes sparkled with wisdom. <span className="font-cinzel text-secondary">❝</span>You seek 
                to understand money?<span className="font-cinzel text-secondary">❞</span> Odu asked. <span className="font-cinzel text-secondary">❝</span>Then you must journey through the six realms of 
                understanding.<span className="font-cinzel text-secondary">❞</span>
              </p>
              
              <p className="text-lg text-lightText/90 leading-relaxed">
                Odu didn't give Asha answers—but helped her find them herself as she traveled 
                through each realm, uncovering the truth about money's past, present, and possible futures.
              </p>
            </div>

            <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center mb-6">
              <Link to="/signup">
                <GradientButton className="px-10 py-4 text-lg">
                  Begin Your Journey
                </GradientButton>
              </Link>
              <Link to="/login">
                <OutlineButton className="px-10 py-4 text-lg">
                  Continue Your Journey
                </OutlineButton>
              </Link>
            </div>

            <div className="mt-8 text-sm text-lightText/70 max-w-md mx-auto p-4 border border-dashed border-secondary/20 rounded-lg">
              <p>
                <strong className="text-secondary">No personal data required.</strong> Your progress will be tied to a unique ID that you can save to continue your journey.
              </p>
            </div>
          </div>
        </main>
      </div>
    </ThemeContainer>
  );
}