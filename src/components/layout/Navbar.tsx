import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  name: string;
  logoUrl: string; // URL da foto para a logo (agora obrigatório)
}

const Navbar = ({ name, logoUrl }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para ajustar opacidade/altura
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Boas-vindas', href: '#welcome' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Cartilhas', href: '#resources' },
    { label: 'Importância', href: '#importance' },
    
  ];

  // Número do WhatsApp (formatado)
  const phoneNumber = "5527995797867"; // (27) 99579-7867
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
          
          {/* Logo com nome e foto redonda */}
          <a 
            href="/" 
            className="flex items-center gap-3 group"
          >
            {/* Foto redonda pequena - AGORA OBRIGATÓRIA */}
            <div className="relative">
              <div 
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 transition-all duration-300 group-hover:scale-105 group-hover:border-white/60"
                style={{
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}
              >
                <img 
                  src={logoUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Brilho sutil no hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity bg-white" />
            </div>
            
            {/* Nome (visível apenas em desktop) */}
            <span className="hidden md:block font-medium text-white text-lg">
              {name}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-all hover:scale-105"
              >
                {item.label}
              </a>
            ))}
            
            {/* Botão WhatsApp Desktop - Destacado */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  onClick={() => setIsOpen(false)}
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