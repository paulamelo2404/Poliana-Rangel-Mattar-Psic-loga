import { motion } from 'framer-motion';

interface FooterProps {
  name: string;
  crp: string;
  logoUrl: string;
  phone?: string;
  email?: string;
  instagram?: string;
  colors?: {
    primary: string;
    secondary: string;
  };
}

const Footer = ({ 
  name, 
  phone = "(27) 99579-7867", 
  email = "psipolianamattar@gmail.com", 
  instagram = "@psipolimatt",
  colors = { primary: "#A1A491", secondary: "#CEBABF" }
}: FooterProps) => {

  const currentYear = new Date().getFullYear();
  
  // Links das redes sociais
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=Olá! Vi seu site e gostaria de mais informações.`;
  const instagramUrl = `https://instagram.com/${instagram.replace('@', '')}`;
  const emailUrl = `mailto:${email}`;

  // Menu rápido
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Boas-vindas', href: '#welcome' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Importância', href: '#importance' },
    { label: 'Cartilhas', href: '#resources' },
  ];

  // Serviços resumidos
  const services = [
    'Psicoterapia para Adultos',
    'Atendimento Infantil',
    'Avaliação Neuropsicológica',
    'Orientação Parental',
    'Atendimento no Exterior',
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#3f562b' }}>
      
      {/* Elementos decorativos de fundo mais suaves para essa cor */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ background: colors.primary }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ background: colors.secondary }}
        />
      </div>

      {/* Linha decorativa superior com as cores originais para contraste */}
      <div 
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)` }}
      />

      <div className="container px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        
        {/* Grid principal do footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Coluna 1: Logo Horizontal e Sobre (4 colunas) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              {/* Logo horizontal branca */}
              <div className="mb-6">
                <img 
                  src="https://i.imgur.com/poKY6qD.png"
                  alt={name}
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <p className="text-gray-200 text-sm leading-relaxed max-w-sm text-center md:text-left">
                Cuidando da saúde mental com acolhimento, ética e compromisso. 
                Atendimento online e presencial para pacientes no Brasil e no exterior.
              </p>
              
              {/* Selos de confiança */}
              <div className="flex gap-3 mt-6 justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <span className="text-xs text-white/80">CRP Ativo</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  <span className="text-xs text-white/80">Vasta Experiência</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna 2: Links Rápidos (2 colunas) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 
                className="font-semibold text-lg mb-4"
                style={{ color: colors.secondary }}
              >
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 justify-center md:justify-start"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Coluna 3: Serviços (3 colunas) */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 
                className="font-semibold text-lg mb-4"
                style={{ color: colors.secondary }}
              >
                Serviços
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services"
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 justify-center md:justify-start"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Coluna 4: Contato (3 colunas) */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 
                className="font-semibold text-lg mb-4"
                style={{ color: colors.secondary }}
              >
                Contato
              </h4>
              
              <div className="space-y-4">
                {/* WhatsApp */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-green-400 transition-colors group justify-center md:justify-start"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
                    </svg>
                  </div>
                  <span className="text-sm">{phone}</span>
                </a>

                {/* Email */}
                <a 
                  href={emailUrl}
                  className="flex items-center gap-3 text-white hover:text-white transition-colors group justify-center md:justify-start"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:opacity-80 transition-colors"
                    style={{ background: `${colors.primary}30` }}
                  >
                    <svg className="w-4 h-4" style={{ color: colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">{email}</span>
                </a>

                {/* Instagram */}
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-pink-400 transition-colors group justify-center md:justify-start"
                >
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                    <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </div>
                  <span className="text-sm">{instagram}</span>
                </a>
              </div>

              {/* Botão WhatsApp direto */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all hover:scale-105 text-sm font-medium shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright e créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© {currentYear} {name}. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido por <a href="mailto:paulamelo2404@gmail.com" className="text-white hover:text-white transition-colors">paulamelo2404@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;