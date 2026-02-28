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
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* Coluna do Texto - Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Título com estilo */}
            <div className="mb-6">
              <span 
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: colors.secondary }}
              >
                Seja bem-vindo(a)!
              </span>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
                style={{ color: colors.primary }}
              >
                Boas-vindas
              </h2>
            </div>

            {/* Texto com formatação especial */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg sm:text-xl font-light italic relative pl-6 border-l-4" 
                 style={{ borderColor: colors.secondary }}>
                É provável que você tenha chegado até aqui carregando um peso que, 
                muitas vezes, ninguém mais vê.
              </p>

              <p>
                Lidar diariamente com a ansiedade constante, a exaustão da rotina 
                ou o desafio avassalador de educar os filhos e gerenciar conflitos 
                familiares pode nos deixar paralisados. Essas batalhas internas 
                frequentes costumam trazer uma profunda sensação de solidão e 
                desespero, nos deixando sem saber por onde começar a buscar alívio.
              </p>

              <p className="font-medium" style={{ color: colors.primary }}>
                Se você se reconhece nessas dores, quero te dizer algo muito 
                importante: você não precisa enfrentar tudo isso em silêncio.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <p className="text-base sm:text-lg">
                  <span className="font-semibold" style={{ color: colors.secondary }}>
                    Sou a Dra. {name}
                  </span> 
                  . Com mais de 11 anos de experiência em psicoterapia clínica, 
                  meu propósito é caminhar ao seu lado para encontrar as respostas 
                  que você procura. Já ajudei inúmeras pessoas, no Brasil e no 
                  exterior, a transformarem suas histórias e superarem desafios 
                  que pareciam intransponíveis.
                </p>
              </div>

              <p>
                Em um espaço seguro e totalmente acolhedor, te ofereço abordagens 
                comprovadas para desenvolvermos, juntos, habilidades reais para 
                lidar com emoções intensas e pensamentos negativos. A mudança é 
                possível, e meu compromisso é guiar você rumo a uma vida com mais 
                clareza, resiliência e conexões familiares verdadeiramente saudáveis.
              </p>
            </div>

            {/* Elemento decorativo */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-1 w-24 mt-8"
              style={{ background: colors.primary }}
            />
          </motion.div>

          {/* Coluna da Foto - Lado Direito */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Elementos decorativos */}
              <div 
                className="absolute -top-6 -right-6 w-48 h-48 rounded-full opacity-20 blur-3xl"
                style={{ background: colors.secondary }}
              />
              <div 
                className="absolute -bottom-6 -left-6 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ background: colors.primary }}
              />

              {/* Moldura da foto */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={photoUrl}
                    alt={`Dra. ${name}`}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay sutil com gradiente */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` 
                    }}
                  />
                </div>

                {/* Borda decorativa */}
                <div 
                  className="absolute -inset-4 -z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-2 opacity-30"
                  style={{ borderColor: colors.secondary }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;