import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  logoHorizontalUrl: string;
}

const Navbar = ({ logoHorizontalUrl }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para navegar para o topo (Hero)
  const navigateToHome = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    }
  };

  // Função para navegar para a home e fazer scroll até a seção
  const navigateToHomeSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  // Função para navegar para páginas específicas
  const navigateToPage = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Se for "Início" (href = '/')
    if (href === '/') {
      navigateToHome();
      return;
    }

    // Se for link para página (começa com / e não é o Início)
    if (href.startsWith('/')) {
      navigateToPage(href);
      return;
    }

    // Se for âncora (#) - extrai o ID sem o #
    const sectionId = href.replace('#', '');
    navigateToHomeSection(sectionId);
  };

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Boas-vindas', href: '#welcome' },
    { label: 'Serviços', href: '#services' },
    { label: 'Neuropsicologia', href: '/neuropsicologia' },
    { label: 'Sobre', href: '#about' },
    { label: 'Práticas', href: '#praticas' },
    { label: 'Importância', href: '#importance' },
    { label: 'Cartilhas', href: '#resources' },
  ];

  const phoneNumber = "5527995797867";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Olá! Vi seu site e gostaria de mais informações.`;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300`}
      style={{ 
        backgroundColor: '#A1A491',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}>
          
          {/* Logo horizontal */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToHome();
            }}
            className="flex items-center group cursor-pointer"
          >
            <div className="relative">
              <img 
                src={logoHorizontalUrl}
                alt="Poliana Rangel Mattar Psicóloga"
                className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:opacity-90"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-white rounded" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/90 hover:text-white text-sm font-medium transition-all hover:scale-105 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            
            {/* Botão WhatsApp Desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all hover:scale-105 text-sm font-medium shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - CORRIGIDO */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    
                    // Se for "Início"
                    if (item.href === '/') {
                      navigateToHome();
                      return;
                    }

                    // Se for link para página
                    if (item.href.startsWith('/')) {
                      navigateToPage(item.href);
                      return;
                    }

                    // Se for âncora
                    const sectionId = item.href.replace('#', '');
                    navigateToHomeSection(sectionId);
                  }}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Botão WhatsApp Mobile */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 m-4 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;