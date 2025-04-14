import { useAuth } from '@/context/AuthContext';
import { Link } from 'wouter';
import { BackpackMenu } from './backpack-menu';
import { DEFAULT_AVATAR } from '@/lib/constants';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className = '' }: NavBarProps) {
  const { user, logout } = useAuth();
  
  const userInitial = user?.username ? user.username.charAt(0).toUpperCase() : DEFAULT_AVATAR;
  
  return (
    <header className={`bg-darkBg/80 backdrop-blur-sm border-b border-secondary/10 sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1602928309809-655cb7b55f7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80" 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl font-cinzel font-bold text-secondary hidden sm:block">Asha's Journey</h1>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <BackpackMenu />
          
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-secondary font-medium"
              title={user?.username || 'Guest'}
            >
              {userInitial}
            </div>
            <span className="text-sm hidden sm:block">{user?.username || 'Guest'}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
