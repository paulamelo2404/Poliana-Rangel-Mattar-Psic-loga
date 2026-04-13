import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flower2, Palette } from 'lucide-react';

interface IntegrativePracticesProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const IntegrativePractices = ({ colors }: IntegrativePracticesProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Lista original de imagens
  const galleryImages = [
    { url: "https://i.imgur.com/llobrZU.jpeg", alt: "Mulher pintando" },
    { url: "https://i.imgur.com/B9cYfN6.jpeg", alt: "Homem fazendo cerâmica" },
    { url: "https://i.imgur.com/8mutXQU.jpeg", alt: "Pessoas pintando em cavaletes" },
    { url: "https://i.imgur.com/KBcC36E.jpeg", alt: "Mãos dadas" },
    { url: "https://i.imgur.com/DSoGf4z.jpeg", alt: "Pincéis na cabeça" },
    { url: "https://i.imgur.com/Y3iblht.jpeg", alt: "Pincel na tela" },
    { url: "https://i.imgur.com/KmDu8V6.jpeg", alt: "Mulher fazendo escultura" },
    { url: "https://i.imgur.com/8cC2YeY.jpeg", alt: "Mãos sujas de tinta" }
  ];

  // Duplicamos as imagens para o loop infinito funcionar perfeitamente
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="praticas" className="py-16 md:py-24 bg-white">
      <div ref={ref} className="container px-4 mx-auto max-w-7xl">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span 
            className="text-sm font-medium tracking-wider uppercase inline-block mb-3 px-4 py-1 rounded-full"
            style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
          >
            Cuidado Integral
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Práticas Integrativas
          </h2>
          <div className="w-20 h-0.5 mx-auto mb-6" style={{ background: colors.secondary }} />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Além do atendimento psicológico, também trabalho com práticas integrativas que 
            podem contribuir para o processo de autoconhecimento, expressão emocional e 
            promoção do bem-estar.
          </p>
        </motion.div>

        {/* Citação e Foto principal do Sorolla - CORRIGIDA PARA O PC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          {/* Citação acima da foto */}
          <div className="text-center mb-10 px-4">
            <blockquote 
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug mb-4"
              style={{ color: '#47493A' }}
            >
              "A arte é a forma que o homem tem de resgatar sua própria grandeza oculta."
            </blockquote>
            <p className="text-gray-500 font-medium text-lg">— André Malraux</p>
          </div>

          {/* Imagem principal com responsividade ajustada (Corta no celular, inteira no PC) */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50 flex justify-center">
            <img 
              src="https://i.imgur.com/7xujiDj.jpeg"
              alt="Passeio à beira-mar - Joaquín Sorolla"
              className="w-full h-full aspect-4/3 object-cover md:aspect-auto md:max-h-[75vh] md:object-contain"
            />
            {/* Legenda flutuante estilo galeria de arte */}
            <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs text-gray-600 rounded-tl-xl font-medium shadow-sm">
              Passeio à beira-mar — Joaquín Sorolla
            </div>
          </div>
        </motion.div>

        {/* Texto introdutório */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gray-700 leading-relaxed">
            Essas práticas não substituem o acompanhamento psicológico ou médico, mas podem 
            atuar como recursos complementares no cuidado com a saúde emocional, respeitando 
            sempre a singularidade e o momento de cada pessoa.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            As abordagens utilizadas por mim são <span className="font-bold" style={{ color: '#626d65' }}>Florais de Bach</span> e{' '}
            <span className="font-bold" style={{ color: '#626d65' }}>Terapia Artística Antroposófica</span>, 
            que podem favorecer processos de equilibrio interno e ampliação da consciência emocional.
          </p>
        </motion.div>

        {/* Grid: Florais de Bach e Terapia Artística */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Florais de Bach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <Flower2 className="w-6 h-6" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>
                Florais de Bach
              </h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Os Florais de Bach são essências naturais desenvolvidas pelo médico inglês Dr. Edward Bach, 
              que têm como objetivo auxiliar no equilíbrio dos estados emocionais. São 38 Florais de Bach, 
              cada um para um estado mental ou emocional específico.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Os Florais estão divididos em 7 grupos, representando os conflitos fundamentais que nos 
              impedem de sermos verdadeiros para nós mesmos:
            </p>
            
            <div className="grid grid-cols-2 gap-2 mb-6">
              {["Medo", "Incerteza", "Falta de interesse", "Solidão", "Hipersensibilidade", "Desespero", "Preocupação excessiva"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.secondary }} />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
              <p className="text-gray-700 italic text-sm">
                "A saúde é nossa herança, nosso direito. É a completa e total união entre alma, mente e corpo."
              </p>
              <p className="text-xs text-gray-500 mt-2">— Dr. Edward Bach, 1930</p>
            </div>
            
            {/* Foto dos florais */}
            <div className="mt-6 rounded-xl overflow-hidden bg-white shadow-inner flex justify-center items-center h-48">
              <img 
                src="https://i.imgur.com/j5hEavY.jpeg"
                alt="Florais de Bach"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Terapia Artística Antroposófica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20` }}>
                <Palette className="w-6 h-6" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>
                Terapia Artística Antroposófica
              </h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              A Terapia Artística Antroposófica é uma prática terapêutica que utiliza atividades artísticas, 
              como desenho, pintura e modelagem, como caminhos de expressão e cuidado.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Inspirada nos princípios da Medicina Antroposófica, desenvolvida pelo filósofo austríaco 
              Rudolf Steiner, essa abordagem busca favorecer o equilibrio entre corpo, emoções e vida interior.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Por meio da vivência artística, é possível entrar em contato com sentimentos, ampliar a 
              percepção de si mesmo e favorecer processos de autoconhecimento.
            </p>
            
            {/* Foto da Terapia Artística */}
            <div className="mt-6 rounded-xl overflow-hidden bg-white shadow-inner flex justify-center items-center h-88">
              <img 
                src="https://static.wixstatic.com/media/4cbf56_ba1777f8244d4b87894981c3c7911e3e~mv2.jpg/v1/crop/x_24,y_0,w_564,h_800/fill/w_413,h_590,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/355187_orig.jpg"
                alt="Terapia Artística Antroposófica"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Galeria de Imagens - Carrossel Infinito Automático */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 w-full"
        >
          <h3 className="text-xl md:text-2xl italic font-medium text-center mb-8 text-gray-700">
            "A arte não reproduz o invisível, em vez disso, torna visível"<br/>
            <span className="text-sm font-bold text-gray-500 mt-2 block">— Paul Klee</span>
          </h3>
          
          <div className="relative overflow-hidden">
            {/* Gradientes nas laterais para suavizar as bordas */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Container animado com Framer Motion */}
            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 80 
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-none w-64 sm:w-80 rounded-xl overflow-hidden shadow-md"
                >
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-48 sm:h-56 object-cover"
                    draggable="false"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Botão WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <a
            href="https://wa.me/5527995797867?text=Olá! Gostaria de saber mais sobre as Práticas Integrativas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: `${colors.primary}15`,
              color: colors.primary,
              border: `1px solid ${colors.secondary}40`
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
            </svg>
            <span className="text-sm font-medium">Quero saber mais sobre as Práticas Integrativas</span>
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Tire suas dúvidas sobre Florais de Bach e Terapia Artística
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrativePractices;