import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface WelcomeProps {
  name: string;
  photoUrl: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

const Welcome = ({ name, photoUrl, colors }: WelcomeProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="welcome" className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Coluna do Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span style={{ color: colors.primary }}>Boas</span>
                  <span style={{ color: colors.secondary }}>-vindas</span>
                </h2>
              </div>

              {/* Texto com tipografia mais moderna e leitura fluida */}
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                
                <p className="text-xl font-medium text-gray-800">
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
                  <span className="font-semibold" style={{ color: colors.secondary }}>Com experiência em psicoterapia clínica</span>, já ajudei inúmeras pessoas, no Brasil e no exterior, a transformarem suas histórias. Em um espaço seguro e acolhedor, desenvolvemos juntos habilidades para lidar com emoções intensas e encontrar mais clareza e equilíbrio.
                </p>

              </div>

              {/* Assinatura discreta e minimalista */}
              <div className="mt-10 pt-6 flex items-center gap-3 border-t border-gray-50">
                <div className="w-8 h-0.5 opacity-50" style={{ backgroundColor: colors.secondary }} />
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

            {/* Coluna da Foto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 opacity-20" 
                     style={{ borderColor: colors.primary }} />
                
                <div className="relative z-10">
                  <img 
                    src={photoUrl}
                    alt={`Dra. ${name}`}
                    className="w-full h-auto relative z-10 rounded-2xl shadow-2xl"
                    style={{
                      filter: `drop-shadow(0 20px 30px ${colors.primary}30)`
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/10 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl -z-10"
                     style={{ background: colors.secondary }} />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20 blur-2xl -z-10"
                     style={{ background: colors.primary }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;