import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  photoUrl: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const About = ({ photoUrl, colors }: AboutProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Dados de formação
  const formacaoData = {
    graduacoes: ["Psicologia", "Licenciatura em Desenho e Plástica", "Ciências Contábeis"],
    mestrado: ["Segurança Pública com foco em Direitos Humanos"]
  };

  // Onde já atuei (removido Internacional)
  const atuacoes = [
    "Saúde - CAPSIJ (atendimento infantil e adolescente)",
    "Saúde Mental - Clínica particular (psicoterapia e avaliações)",
    "Assistência Social - CREAS e CRAS",
    "Educação - Rede municipal de educação (3 anos)",
    "Instituições - APAE (atendimento a neurodivergentes)"
  ];

  // Especializações
  const especializacoes = [
    "Neuropsicologia", 
    "Psicopedagogia", 
    "Neuropsicopedagogia",
    "Terapia Cognitivo-Comportamental (TCC)", 
    "Arteterapia", 
    "Psicomotricidade",
    "Método Denver (Prevenção Precoce)", 
    "Avaliação Psicológica",
  
  ];

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden bg-white relative">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24">
            
            {/* Coluna da Foto - sem sombreado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start"
            >
              <div className="relative w-72 md:w-80 lg:w-full max-w-md mx-auto">
                <div className="relative z-10 rounded-3xl overflow-hidden">
                  <img 
                    src={photoUrl}
                    alt="Dra. Poliana Rangel Mattar"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-8 left-0 w-full text-center lg:text-left text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                  Foto: Chris Gama | Mira Creatives
                </div>
              </div>
            </motion.div>

            {/* Coluna da Introdução */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: colors.secondary }} />
                <span className="text-sm font-bold tracking-widest uppercase" style={{ color: colors.secondary }}>
                  SOBRE MIM
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#626d65]">
                Dra. Poliana Rangel Mattar
              </h2>
              
             <div className="mb-8">
  <p className="text-lg font-medium" style={{ color: colors.primary }}>
    Psicóloga • Neuropsicóloga • Neuropsicopedagoga • Práticas Integrativas
  </p>
  <p 
    className="text-sm font-medium mt-2 px-3 py-1 rounded-full inline-block w-fit"
    style={{ 
      background: `${colors.primary}10`,
      color: colors.primary,
      border: `1px solid ${colors.secondary}30`
    }}
  >
    CRP 16ª/6821
  </p>
</div>
              
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p className="text-gray-800 font-medium text-justify">
                  Acredito na importância de um espaço de escuta acolhedor, respeitoso e livre de julgamentos, onde cada pessoa possa entrar em contato com suas emoções e encontrar caminhos para lidar com os desafios da vida.
                </p>
                <p className="text-justify">
                  Meu trabalho é voltado para o cuidado com a saúde emocional, buscando oferecer um acompanhamento que respeite a singularidade de cada pessoa, seu tempo, suas vivências e seu processo.
                </p>
                <p className="text-justify">
                  A psicoterapia é um espaço de construção, autoconhecimento e transformação. Ao longo do processo terapêutico, é possível compreender melhor sentimentos, pensamentos e padrões que fazem parte da própria história, favorecendo o desenvolvimento de novos recursos internos e formas mais saudáveis de se relacionar consigo mesmo e com o mundo.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Grid de Formação e Atuação */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            
            {/* Card: Formação Acadêmica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: colors.primary }} />
              <h4 className="text-2xl font-bold mb-8 text-[#626d65]">
                Formação Acadêmica
              </h4>
              
              <div className="space-y-8">
                <div>
                  <h5 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">Graduações</h5>
                  <ul className="space-y-3">
                    {formacaoData.graduacoes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: colors.secondary }} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">Mestrado</h5>
                  <ul className="space-y-3">
                    {formacaoData.mestrado.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150" style={{ backgroundColor: colors.secondary }} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card: Onde já atuei */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: colors.secondary }} />
              <h4 className="text-2xl font-bold mb-8 text-[#626d65]">
                Onde já atuei
              </h4>
              <ul className="space-y-5">
                {atuacoes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.primary}15` }}>
                      <svg className="w-3.5 h-3.5" style={{ color: colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Especializações (Estilo Moderno com Alto Contraste) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-10">
              Áreas de Especialização
            </h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto">
              {especializacoes.map((item, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-3.5 rounded-2xl text-base font-extrabold shadow-md transition-all hover:scale-105"
                  style={{ 
                    color: '#FFFFFF',
                    backgroundColor: colors.primary,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;