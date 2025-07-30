import { app_config } from '@/config/config';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import PrimaryButton from '../button/button';
import { useRouter } from 'next/router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const router = useRouter();

  return (
    <header className="fixed top-0 w-full bg-white lg:h-auto lg:bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-medium">RP</span>
            </div>
            <span className="text-xl font-medium">{app_config.appName}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => router.push('/')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => router.push('/services')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => router.push('/properties')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Rent Properties
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <PrimaryButton variant="outlined"> Sign In</PrimaryButton>
            <PrimaryButton> Get Started</PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => router.push('/')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => router.push('/services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => router.push('/properties')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Properties
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <PrimaryButton variant="outlined"> Sign In</PrimaryButton>
                <PrimaryButton> Get Started</PrimaryButton>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
