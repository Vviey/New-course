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
      >
        <i className="fas fa-backpack text-xl"></i>
      </button>
      
      <div 
        ref={menuRef}
        className={`backpack-menu absolute right-0 mt-2 w-56 bg-darkBg border border-secondary/20 rounded-md shadow-lg z-50 ${isOpen ? 'active' : ''}`}
      >
        <div className="p-3 border-b border-secondary/10">
          <h3 className="font-montserrat font-semibold text-secondary">Your Backpack</h3>
        </div>
        <ul>
          {BACKPACK_ITEMS.map((item) => (
            <li key={item.id} className="hover:bg-secondary/10">
              <a href={item.href} className="block px-4 py-2 text-sm">
                <i className={`fas ${item.icon} mr-2`}></i> {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
