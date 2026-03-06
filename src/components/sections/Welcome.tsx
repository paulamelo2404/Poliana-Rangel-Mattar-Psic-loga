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
    <section className="py-20 md:py-28 lg:py-36 overflow-hidden bg-white relative">
      {/* Elemento decorativo de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: colors.primary }}
        />
        <div 
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: colors.secondary }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          
          {/* Badge de entrada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span 
              className="inline-block px-4 py-2 text-sm font-medium rounded-full"
              style={{ 
                background: colors.secondary + '20',
                color: colors.primary,
                border: `1px solid ${colors.secondary}40`
              }}
            >
              ✦ Acolhimento Profissional ✦
            </span>
          </motion.div>

          {/* Layout alternado: imagem e texto em camadas */}
          <div className="relative">
            {/* Bloco principal com fundo suave */}
            <div 
              className="relative rounded-3xl p-8 md:p-12 lg:p-16"
              style={{ 
                background: `linear-gradient(145deg, ${colors.primary}08 0%, ${colors.secondary}08 100%)`,
                border: `1px solid ${colors.secondary}20`
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Coluna do Texto - Esquerda */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="order-2 lg:order-1"
                >
                  {/* Título com destaque */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    <span style={{ color: colors.primary }}>Boas</span>
                    <span style={{ color: colors.secondary }}>-vindas</span>
                  </h2>

                  {/* Texto com formatação especial */}
                  <div className="space-y-5 text-gray-700">
                    <p className="text-xl font-light italic border-l-4 pl-4" style={{ borderColor: colors.secondary }}>
                      É provável que você tenha chegado até aqui carregando um peso que, 
                      muitas vezes, ninguém mais vê.
                    </p>

                    <p>
                      Lidar diariamente com a ansiedade constante, a exaustão da rotina 
                      ou os desafios da maternidade e da vida em família pode nos deixar 
                      paralisados. Essas batalhas internas trazem uma profunda sensação 
                      de solidão.
                    </p>

                    {/* Destaque com as cores da marca */}
                    <div className="relative py-4 px-6 my-6 rounded-xl" style={{ background: colors.primary + '08' }}>
                      <p className="font-medium text-lg" style={{ color: colors.primary }}>
                        "Você não precisa enfrentar tudo isso em silêncio."
                      </p>
                    </div>

                    <p>
                      <span className="font-semibold" style={{ color: colors.secondary }}>
                        Com mais de 11 anos de experiência
                      </span>{" "}
                      em psicoterapia clínica, já ajudei inúmeras pessoas, no Brasil e no 
                      exterior, a transformarem suas histórias.
                    </p>

                    <p>
                      Em um espaço seguro e acolhedor, desenvolvemos juntos habilidades 
                      para lidar com emoções intensas e encontrar mais clareza e equilíbrio.
                    </p>
                  </div>

                  {/* Assinatura simbólica */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="w-12 h-px" style={{ background: colors.secondary }} />
                    <span className="text-sm font-medium" style={{ color: colors.primary }}>
                      Dra. {name}
                    </span>
                  </div>
                </motion.div>

                {/* Coluna da Foto - Direita (com moldura diferenciada) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative order-1 lg:order-2"
                >
                  <div className="relative">
                    
                    {/* Moldura decorativa */}
                    <div className="absolute -inset-4 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 opacity-20" 
                         style={{ borderColor: colors.primary }} />
                    
                    {/* Foto com tratamento especial */}
                    <div className="relative z-10">
                      <img 
                        src={photoUrl}
                        alt={`Dra. ${name}`}
                        className="w-full h-auto relative z-10 rounded-2xl shadow-2xl"
                        style={{
                          filter: `drop-shadow(0 20px 30px ${colors.primary}30)`
                        }}
                      />
                      
                      {/* Overlay sutil */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    {/* Elementos flutuantes decorativos */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl -z-10"
                         style={{ background: colors.secondary }} />
                    <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20 blur-2xl -z-10"
                         style={{ background: colors.primary }} />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Números/estatísticas (opcional) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { numero: "11+", label: "anos de experiência" },
                { numero: "4", label: "anos na Alemanha" },
                { numero: "CRP", label: "16/6B21" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: colors.primary }}>{item.numero}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;