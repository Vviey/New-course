import { useRef, useState, useEffect } from 'react';
import { BACKPACK_ITEMS } from '@/lib/constants';

interface BackpackMenuProps {
  className?: string;
}

export function BackpackMenu({ className = '' }: BackpackMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <button 
        ref={buttonRef}
        className="p-2 text-secondary hover:text-primary transition-colors"
        onClick={toggleMenu}
        aria-label="Open backpack menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div 
          ref={menuRef}
          className="backpack-menu absolute right-0 mt-2 w-64 bg-darkBg border border-secondary/20 rounded-md shadow-lg z-50 overflow-hidden"
        >
          <div className="p-3 border-b border-secondary/10 bg-darkBg/80">
            <h3 className="font-montserrat font-semibold text-secondary">Your Backpack</h3>
          </div>
          <ul>
            {BACKPACK_ITEMS.map((item) => (
              <li key={item.id} className="border-b border-secondary/5 last:border-0">
                <a 
                  href={item.href} 
                  className="block px-4 py-3 text-sm text-lightText hover:bg-secondary/10 transition-colors flex items-center"
                >
                  <span className="w-8 h-8 mr-3 rounded-full bg-primary/10 flex items-center justify-center text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.id === 'wallet' && (
                        <>
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="2" y1="10" x2="22" y2="10" />
                        </>
                      )}
                      {item.id === 'glossary' && (
                        <>
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                          <line x1="12" y1="6" x2="16" y2="6"></line>
                          <line x1="12" y1="10" x2="16" y2="10"></line>
                          <line x1="12" y1="14" x2="16" y2="14"></line>
                        </>
                      )}
                      {item.id === 'bookmarks' && (
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      )}
                      {item.id === 'settings' && (
                        <>
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </>
                      )}
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <p className="text-xs text-lightText/60 mt-0.5">
                      {item.id === 'wallet' && 'Your Bitcoin and tokens'}
                      {item.id === 'glossary' && 'Bitcoin terms and concepts'}
                      {item.id === 'bookmarks' && 'Saved sections and notes'}
                      {item.id === 'settings' && 'Account preferences'}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
