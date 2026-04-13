import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface WelcomeProps {
  name: string;
  photoUrl: string;
  logoUrl: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

const Welcome = ({ name, photoUrl, logoUrl, colors }: WelcomeProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="welcome" className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Coluna do Texto (esquerda) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span style={{ color: colors.primary }}>Boas</span>
                  <span style={{ color: colors.secondary }}>-vindas</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                
                <p className="text-xl font-medium text-gray-500">
                  É provável que você tenha chegado até aqui carregando um peso que, muitas vezes, ninguém mais vê.
                </p>

                <p>
                  Lidar diariamente com a ansiedade constante, a exaustão da rotina ou os desafios da maternidade e da vida em família pode nos deixar paralisados. Essas batalhas internas trazem uma profunda sensação de solidão.
                </p>

                <blockquote 
                  className="py-5 px-6 border-l-4 rounded-r-2xl bg-gray-50"
                  style={{ borderLeftColor: colors.primary }}
                >
                  <p className="font-medium text-xl italic" style={{ color: colors.primary }}>
                    "Você não precisa enfrentar tudo isso em silêncio."
                  </p>
                </blockquote>

                <p>
                  Com experiência em psicoterapia clínica, já ajudei inúmeras pessoas, no Brasil e no exterior, a transformarem suas histórias. Em um espaço seguro e acolhedor, desenvolvemos juntos habilidades para lidar com emoções intensas e encontrar mais clareza e equilíbrio.
                </p>

              </div>

              {/* Assinatura com a foto maior em moldura quadrada com borda redonda */}
              <div className="mt-10 pt-6 flex items-center gap-4 border-t border-gray-100">
                <div className="relative">
                  <div 
                    className="absolute -inset-1 rounded-xl opacity-30 blur-md"
                    style={{ background: colors.primary }}
                  />
                  <div 
                    className="relative w-20 h-20 rounded-xl overflow-hidden border-2"
                    style={{ borderColor: colors.secondary }}
                  >
                    <img 
                      src={photoUrl}
                      alt={`Dra. ${name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Dra. {name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Psicóloga Clínica
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Coluna da Logo GRANDE (direita) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                {/* Elementos decorativos ao redor da logo */}
                <div 
                  className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                  style={{ background: colors.primary }}
                />
                <div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                  style={{ background: colors.secondary }}
                />
                <div 
                  className="absolute inset-0 rounded-full opacity-30 blur-2xl"
                  style={{ background: colors.primary }}
                />
                
                {/* Logo grande */}
                <div 
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4"
                  style={{ borderColor: colors.secondary }}
                >
                  <img 
                    src={logoUrl}
                    alt={`Logo Dra. ${name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Anel decorativo */}
                <div 
                  className="absolute -inset-4 rounded-full border-2 opacity-30 animate-pulse"
                  style={{ borderColor: colors.primary }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;