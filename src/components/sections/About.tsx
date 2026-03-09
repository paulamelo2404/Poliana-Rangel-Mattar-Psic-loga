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

  // Dados da seção sobre
  const aboutData = {
    fullName: "Poliana Rangel Mattar",
    titles: "Psicóloga • Mestre em Segurança Pública • Artista Plástica",
    crp: "CRP 16/6B21",
    quote: "Minha escuta não é apenas clínica. Ela é humana, técnica e sensível.",
    
    formacao: [
      { area: "Psicologia", tipo: "Graduação" },
      { area: "Licenciatura em Desenho e Plástica", tipo: "Graduação" },
      { area: "Ciências Contábeis", tipo: "Graduação" },
      { area: "Segurança Pública com foco em Direitos Humanos", tipo: "Mestrado" }
    ],
    
    especializacoes: [
      "Neuropsicologia", "Psicopedagogia", "Neuropsicopedagogia",
      "Terapia Cognitivo-Comportamental (TCC)", "Arteterapia", "Psicomotricidade",
      "Método Denver (Prevenção Precoce do Autismo)", "Avaliação Psicológica",
      "Orientação Parental", "Orientação Vocacional", "Avaliação para Bariátrica",
      "Avaliação para Laqueadura e Vasectomia"
    ],
    
    atuacoes: [
      "Saúde - CAPSIJ (atendimento infantil e adolescente)",
      "Saúde Mental - Clínica particular (psicoterapia e avaliações)",
      "Assistência Social - CREAS e CRAS",
      "Educação - Rede municipal de educação (3 anos)",
      "Instituições - APAE (atendimento a neurodivergentes)",
      "Internacional - Alemanha (4 anos vivendo e atuando)"
    ],
    
    contato: {
      whatsapp: "(27) 99579-7867",
      email: "psipolianamattar@gmail.com",
      instagram: "@psipolimatt"
    }
  };

  return (
   <section id="about" className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          
          {/* Cabeçalho da seção */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span 
              className="text-sm font-medium tracking-wider uppercase inline-block mb-3"
              style={{ color: colors.secondary }}
            >
              Conheça minha história
            </span>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ color: colors.primary }}
            >
              Sobre Mim
            </h2>
          </motion.div>

          {/* Grid principal: Foto + Introdução */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            
            {/* Coluna da Foto - Esquerda (tamanho médio) - SEM MOLDE ORGÂNICO ADICIONAL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center lg:justify-start"
            >
              <div className="relative w-64 md:w-72 lg:w-80">
                {/* Elementos decorativos de fundo - APENAS ATRÁS */}
                <div 
                  className="absolute -top-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-2xl"
                  style={{ background: colors.secondary }}
                />
                <div 
                  className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full opacity-20 blur-2xl"
                  style={{ background: colors.primary }}
                />
                
                {/* Foto - SEM MOLDE, pois o PNG já tem */}
                <div className="relative z-10">
                  <img 
                    src={photoUrl}
                    alt={aboutData.fullName}
                    className="w-full h-auto relative z-10"
                  />
                  
                  {/* Apenas um sombreado suave, sem borda orgânica adicional */}
                  <div className="absolute inset-0 shadow-inner pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* Coluna da Introdução - Direita */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8 flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.primary }}>
                {aboutData.fullName}
              </h3>
              <p className="text-lg text-gray-600 mb-2">{aboutData.titles}</p>
              <p className="text-sm text-gray-500 mb-6">{aboutData.crp}</p>
              
              {/* Frase de destaque */}
              <div className="relative mb-8">
                <div className="absolute -left-2 -top-2 text-4xl opacity-20" style={{ color: colors.secondary }}>"</div>
                <p className="text-xl md:text-2xl italic font-light pl-6" style={{ color: colors.primary }}>
                  {aboutData.quote}
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold" style={{ color: colors.secondary }}>A arte e a ciência no cuidado com o outro.</span>{" "}
                Sou psicóloga e artista plástica de formação, e construo minha trajetória no entrelaçamento entre ciência, artes, saúde mental e direitos humanos. Acredito em um cuidado que acolhe o sujeito em sua totalidade — onde cognição, emoção, corpo, história e contexto social se entrecruzam como dimensões vivas da existência.
              </p>
            </motion.div>
          </div>

          {/* Experiência Internacional em destaque - SEM EMOJI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 p-8 rounded-2xl"
            style={{ background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.secondary}10 100%)` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ background: colors.primary, color: 'white', fontSize: '18px' }}>🌍</div>
              <div>
                <h4 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>Vivência Internacional</h4>
                <p className="text-gray-700">
                  <span className="font-semibold" style={{ color: colors.secondary }}>4 anos na Alemanha</span> - Vivi a maternidade longe da família e da minha rede de apoio. Conheço na prática os desafios de viver fora do país e o quanto essa fase pode ser emocionalmente exigente.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Grid de Formação e Atuação */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Formação Acadêmica - SEM EMOJI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: colors.primary }}>
                Formação Acadêmica
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Graduações</h5>
                  <ul className="space-y-2">
                    {aboutData.formacao.filter(f => f.tipo === "Graduação").map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sm mt-1" style={{ color: colors.secondary }}>●</span>
                        <span className="text-gray-700">{item.area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Mestrado</h5>
                  <ul className="space-y-2">
                    {aboutData.formacao.filter(f => f.tipo === "Mestrado").map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sm mt-1" style={{ color: colors.secondary }}>●</span>
                        <span className="text-gray-700">{item.area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Onde já atuei - SEM EMOJI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: colors.primary }}>
                Onde já atuei
              </h4>
              <ul className="space-y-3">
                {aboutData.atuacoes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-lg" style={{ color: colors.secondary }}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Especializações - SEM EMOJI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: colors.primary }}>
              Especializações
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {aboutData.especializacoes.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700 text-sm hover:shadow-md transition-shadow"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Avaliações - SEM EMOJI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16 p-8 rounded-2xl border"
            style={{ borderColor: `${colors.primary}30` }}
          >
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
              Avaliações que realizo
            </h4>
            <p className="text-gray-700 mb-4">
              Realizo avaliações neuropsicológicas com elaboração de laudos técnicos completos, estruturados com:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                "Descrição detalhada dos instrumentos utilizados",
                "Interpretação individualizada de cada teste e subteste",
                "Integração clínica entre os resultados",
                "Análise qualitativa e quantitativa",
                "Construção de hipótese diagnóstica fundamentada",
                "Orientações específicas para família",
                "Relatório direcionado à escola"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 italic text-sm">
              "Prezo por uma escrita técnica, porém acessível, que favoreça a compreensão por parte da família e da equipe escolar, sem abrir mão do rigor científico."
            </p>
          </motion.div>

          {/* Contato e Frase Final - SEM EMOJI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-6" style={{ color: colors.primary }}>
              Onde me encontrar
            </h4>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a 
                href={`https://wa.me/${aboutData.contato.whatsapp.replace(/\D/g, '')}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-green-500 text-xl">📱</span>
                <span className="text-gray-700">{aboutData.contato.whatsapp}</span>
              </a>
              
              <a 
                href={`mailto:${aboutData.contato.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">📧</span>
                <span className="text-gray-700">{aboutData.contato.email}</span>
              </a>
              
              <a 
                href={`https://instagram.com/${aboutData.contato.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">📷</span>
                <span className="text-gray-700">{aboutData.contato.instagram}</span>
              </a>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-xl italic mb-4" style={{ color: colors.primary }}>
                "Você não precisa passar por isso sozinha. Seja no Brasil ou no exterior, estou aqui para te acolher."
              </p>
              <p className="text-gray-600">
                Atendimento com olhar integral
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;