import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function StoryIntroPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900/90 to-amber-950 text-amber-100 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/african-pattern.svg')] opacity-5 bg-repeat"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-300 mb-4">
            Asha and the Whisper of Coins
          </h1>
          <p className="text-xl md:text-2xl text-amber-200/80">Journey Through the Realms of Money</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-amber-950/50 backdrop-blur-sm border border-amber-800/30 rounded-lg p-6 md:p-8 shadow-xl mb-10"
          >
            <h2 className="text-2xl font-semibold text-amber-300 mb-4">Story Overview for Learners</h2>
            <p className="mb-6 leading-relaxed">
              As you begin this course, you'll walk alongside Asha, a curious young girl living in a thriving 
              African town where tradition and technology live side by side.
            </p>
            <p className="mb-6 leading-relaxed">
              When her country begins shifting from cash-based finance to fully digital systems, Asha starts to 
              notice small changes—quiet, subtle—but they raise big questions:
            </p>
            
            <div className="space-y-6 my-8">
              <div className="p-4 bg-amber-900/30 border-l-4 border-amber-400 rounded">
                <p className="text-lg font-medium">Who controls our money?</p>
              </div>
              
              <div className="p-4 bg-amber-900/30 border-l-4 border-amber-400 rounded">
                <p className="text-lg font-medium">What do we give up when everything becomes digital?</p>
              </div>
              
              <div className="p-4 bg-amber-900/30 border-l-4 border-amber-400 rounded">
                <p className="text-lg font-medium">Is there another way?</p>
              </div>
            </div>
            
            <p className="mb-6 leading-relaxed">
              Each mission in this course is a chapter in Asha's journey to understanding money, guided by 
              a mysterious elder named Odu, who doesn't give her answers—but helps her find them herself.
            </p>
            <p className="mb-6 leading-relaxed">
              Just like Asha, you're not here to be told what to think. You're here to discover truths for yourself.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-amber-950/50 backdrop-blur-sm border border-amber-800/30 rounded-lg p-6 md:p-8 shadow-xl mb-10"
          >
            <h2 className="text-2xl font-semibold text-amber-300 mb-4">Your Journey Features</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mr-2 mt-1 bg-amber-400 rounded-full"></span>
                <span>Progress bar (as a glowing necklace or bracelet that lights up with each completed theme)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mr-2 mt-1 bg-amber-400 rounded-full"></span>
                <span>Backpack icon for wallet, glossary, bookmarks</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 mr-2 mt-1 bg-amber-400 rounded-full"></span>
                <span>Quest Map (shows progress, unlocked paths, upcoming rewards)</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <Button 
              onClick={() => setLocation('/signup')} 
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-6 text-lg rounded-lg"
            >
              Begin Your Journey
            </Button>
            <Button 
              onClick={() => setLocation('/login')} 
              variant="outline" 
              className="border-amber-600 text-amber-300 hover:bg-amber-900/50 px-8 py-6 text-lg rounded-lg"
            >
              Return to Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}