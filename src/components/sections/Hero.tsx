import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  name: string;
  title: string;
  crp: string;
  phone: string;
  photoUrl: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

// 15 frases sobre terapia e saúde mental
const phrases = [
  {
    text: "Cuidar da mente é o primeiro passo para uma vida mais leve",
    author: "— Carl Jung"
  },
  {
    text: "A terapia é um espaço de acolhimento para suas emoções",
    author: ""
  },
  {
    text: "Autoconhecimento é a chave para relações mais saudáveis",
    author: ""
  },
  {
    text: "Não existe saúde sem saúde mental",
    author: "— OMS"
  },
  {
    text: "Seus sentimentos são válidos e merecem ser ouvidos",
    author: ""
  },
  {
    text: "Acalmar a mente é o caminho para encontrar respostas",
    author: ""
  },
  {
    text: "Pequenas pausas podem transformar seu dia",
    author: ""
  },
  {
    text: "Você não precisa enfrentar tudo sozinho",
    author: ""
  },
  {
    text: "O autocuidado não é egoísmo, é necessidade",
    author: ""
  },
  {
    text: "Suas emoções são mensageiras, não inimigas",
    author: ""
  },
  {
    text: "Cicatrizes emocionais também merecem cuidado",
    author: ""
  },
  {
    text: "Respire. Isso também vai passar",
    author: ""
  },
  {
    text: "A jornada de cura começa com um único passo",
    author: ""
  },
  {
    text: "Permita-se sentir sem julgamentos",
    author: ""
  },
  {
    text: "Sua história importa e merece ser ouvida",
    author: ""
  }
];

const Hero = ({ 
  name, 
  title, 
  crp, 
  phone, 
  photoUrl,
  colors 
}: HeroProps) => {
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile para ajustes finos
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Formata o número para o WhatsApp
  const formattedPhone = phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=Olá! Vi seu site e gostaria de agendar uma consulta.`;

  // Rotação das frases
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      {/* Background com gradiente usando as cores da marca */}
      <div 
        className="absolute inset-0 opacity-5 md:opacity-10"
        style={{
          background: `radial-gradient(circle at 0% 50%, ${colors.primary} 0%, transparent 50%),
                      radial-gradient(circle at 100% 50%, ${colors.secondary} 0%, transparent 50%)`
        }}
      />

      {/* Elementos decorativos apenas com as cores da marca */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-10 md:opacity-20"
          style={{ background: colors.primary }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full opacity-10 md:opacity-20"
          style={{ background: colors.secondary }}
        />
        {/* Detalhes com as duas cores */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-5"
          style={{ background: colors.primary }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full opacity-5"
          style={{ background: colors.secondary }}
        />
      </div>

      {/* Container principal */}
      <div className="container relative min-h-screen flex items-center py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left px-4 sm:px-6 lg:px-0 order-2 lg:order-1"
          >
            {/* Nome - Dra. com secondary, nome com primary */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 lg:mb-4">
              <span style={{ color: colors.secondary }}>Dra.</span>{' '}
              <span style={{ color: colors.primary }}>{name}</span>
            </h1>
            
            {/* Título e CRP */}
            <p className="text-lg sm:text-xl text-gray-600 mb-1">{title}</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 lg:mb-8">{crp}</p>

            {/* Área de frases animadas */}
            <div className="mb-8 lg:mb-10 min-h-35 sm:min-h-40 lg:min-h-45">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Aspas com a cor secondary */}
                  <div 
                    className="absolute -left-2 sm:-left-4 top-0 text-4xl sm:text-6xl opacity-20"
                    style={{ color: colors.secondary }}
                  >
                    "
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 italic font-light pl-6 sm:pl-8 pr-4">
                    {phrases[currentPhrase].text}
                  </p>
                  {phrases[currentPhrase].author && (
                    <p 
                      className="text-right text-sm sm:text-base mt-2 pr-4 sm:pr-8"
                      style={{ color: colors.primary }}
                    >
                      {phrases[currentPhrase].author}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Botão WhatsApp com gradiente das duas cores */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
              </svg>
              Marcar uma Consulta
              <span className="text-xs sm:text-sm opacity-80 hidden sm:inline">{phone}</span>
            </motion.a>

            {/* Número visível apenas no mobile */}
            <p className="text-sm text-gray-500 mt-2 sm:hidden">{phone}</p>

            {/* Indicadores de confiança com a cor primary */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6 mt-8 lg:mt-12"
            >
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>CRP Ativo</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.secondary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Sigilo Profissional</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>10+ anos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna da Foto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0 px-4 sm:px-12 md:px-20 lg:px-0"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Elementos decorativos com as cores da marca */}
              <div 
                className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-20 blur-2xl sm:blur-3xl"
                style={{ background: colors.primary }}
              />
              <div 
                className="absolute -bottom-5 sm:-bottom-10 -right-5 sm:-right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-20 blur-2xl sm:blur-3xl"
                style={{ background: colors.secondary }}
              />
              
              {/* Foto com molde orgânico */}
              <div className="relative z-10">
                <img 
                  src={photoUrl}
                  alt={`Dra. ${name}`}
                  className="relative z-10 w-full h-auto max-h-125 lg:max-h-none object-contain drop-shadow-2xl"
                  style={{
                    filter: `drop-shadow(0 10px 20px ${colors.primary}40)`
                  }}
                />
                
                {/* Borda decorativa com a cor secondary */}
                <div 
                  className="absolute inset-0 -m-2 sm:-m-4 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border border-opacity-30 sm:border-2"
                  style={{ borderColor: colors.secondary }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator com a cor primary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <a href="#sobre" className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 hover:text-gray-600 transition-colors">
          <span className="text-xs sm:text-sm">Descubra mais</span>
          <div className="w-4 h-6 sm:w-5 sm:h-8 border border-gray-300 sm:border-2 rounded-full flex justify-center">
            <div 
              className="w-0.5 sm:w-1 h-1 sm:h-2 rounded-full mt-1 sm:mt-2 animate-bounce"
              style={{ background: colors.primary }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;