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

const phrases = [
  { text: "Cuidar da mente é o primeiro passo para uma vida mais leve", author: "— Carl Jung" },
  { text: "A terapia é um espaço de acolhimento para suas emoções", author: "" },
  { text: "Autoconhecimento é a chave para relações mais saudáveis", author: "" },
  { text: "Não existe saúde sem saúde mental", author: "— OMS" },
  { text: "Seus sentimentos são válidos e merecem ser ouvidos", author: "" },
  { text: "Acalmar a mente é o caminho para encontrar respostas", author: "" },
  { text: "Pequenas pausas podem transformar seu dia", author: "" },
  { text: "Você não precisa enfrentar tudo sozinho", author: "" },
  { text: "O autocuidado não é egoísmo, é necessidade", author: "" },
  { text: "Suas emoções são mensageiras, não inimigas", author: "" },
  { text: "Cicatrizes emocionais também merecem cuidado", author: "" },
  { text: "Respire. Isso também vai passar", author: "" },
  { text: "A jornada de cura começa com um único passo", author: "" },
  { text: "Permita-se sentir sem julgamentos", author: "" },
  { text: "Sua história importa e merece ser ouvida", author: "" }
];

const Hero = ({ name, title, crp, phone, photoUrl, colors }: HeroProps) => {
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const formattedPhone = phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=Olá! Vi seu site e gostaria de agendar uma consulta.`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-dvh w-full overflow-hidden bg-white pt-24 lg:pt-28"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5 md:opacity-10"
        style={{
          background: `radial-gradient(circle at 0% 50%, ${colors.primary} 0%, transparent 50%),
                      radial-gradient(circle at 100% 50%, ${colors.secondary} 0%, transparent 50%)`
        }}
      />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-10 md:opacity-20" style={{ background: colors.primary }} />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full opacity-10 md:opacity-20" style={{ background: colors.secondary }} />
      </div>

      {/* Container principal - Ajustado para flex-col no mobile e grid no desktop */}
      <div className="container relative h-full flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center justify-center pb-8 lg:pb-0">
        
        {/* Coluna da Foto (Mobile: First / Desktop: Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-2 w-full flex items-center justify-center flex-1 min-h-0"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Brilhos atrás da foto */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20 blur-3xl" style={{ background: colors.primary }} />
            
            <img 
              src={photoUrl}
              alt={`Dra. ${name}`}
              /* AQUI ESTÁ O SEGREDO: max-h-[35vh] no mobile para caber junto com o texto, 
                 e max-h-[70vh] no desktop para não vazar a tela */
              className="relative z-10 w-auto h-auto max-h-[35vh] sm:max-h-[40vh] lg:max-h-[75vh] object-contain drop-shadow-2xl mt-4 lg:mt-0"
              style={{
                filter: `drop-shadow(0 10px 20px ${colors.primary}40)`
              }}
            />
          </div>
        </motion.div>

        {/* Coluna do Texto (Mobile: Second / Desktop: Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left px-4 sm:px-6 lg:px-0 order-2 lg:order-1 w-full flex-1 flex flex-col justify-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 lg:mb-4 leading-tight">
            <span style={{ color: colors.primary }}>Dra. {name}</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-1">{title}</p>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 lg:mb-8">{crp}</p>

          {/* Frases animadas */}
          <div className="mb-6 lg:mb-10 min-h-20 lg:min-h-30 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhrase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full"
              >
                <div className="absolute -left-2 sm:-left-4 top-0 text-4xl sm:text-6xl opacity-20" style={{ color: colors.secondary }}>"</div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic font-light pl-6 sm:pl-8 pr-4">
                  {phrases[currentPhrase].text}
                </p>
                {phrases[currentPhrase].author && (
                  <p className="text-right text-xs sm:text-sm lg:text-base mt-1 lg:mt-2 pr-4 sm:pr-8" style={{ color: colors.primary }}>
                    {phrases[currentPhrase].author}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botão WhatsApp */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-white font-semibold text-sm lg:text-base shadow-xl transition-all"
              style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
              </svg>
              Marcar Consulta
            </motion.a>
          </motion.div>

          {/* Indicadores de confiança */}
          <motion.div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6 mt-6 lg:mt-10">
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-600">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>CRP Ativo</span>
            </div>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-600">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: colors.secondary }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              <span>Sigilo Profissional</span>
            </div>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-600">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
              <span>Vasta Experiência</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;