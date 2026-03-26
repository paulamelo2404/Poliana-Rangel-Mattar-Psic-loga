import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

interface ServicesProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

interface Service {
  id: number;
  title: string;
  description: string;
}

const Services = ({ colors }: ServicesProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      title: "Psicoterapia para Adultos",
      description: "Abordagem pela Terapia Cognitivo Comportamental - TCC."
    },
    {
      id: 2,
      title: "Avaliação Psicológica e Neuropsicológica",
      description: "Avaliação completa com laudo técnico detalhado e orientações personalizadas."
    },
    {
      id: 3,
      title: "Avaliação Psicopedagógica",
      description: "Investigação das dificuldades de aprendizagem nos aspectos cognitivos e pedagógicos."
    },
    {
      id: 4,
      title: "Atendimento Infantil e Adolescentes",
      description: "Acompanhamento para crianças e adolescentes neurodivergentes (TEA, TDAH)."
    },
    {
      id: 5,
      title: "Orientação Parental",
      description: "Estratégias para pais que buscam fortalecer vínculos e enfrentar desafios na criação."
    },
    {
      id: 6,
      title: "Orientação Vocacional",
      description: "Autoconhecimento para escolhas profissionais alinhadas com seus interesses e valores."
    },
    {
      id: 7,
      title: "Avaliações Específicas",
      description: "Avaliações psicológicas para procedimentos cirúrgicos e processos seletivos."
    },
    {
      id: 8,
      title: "Palestras e Treinamentos",
      description: "Saúde mental no trabalho, gestão de pessoas e riscos psicossociais (NR-1)."
    },
    {
      id: 9,
      title: "Atendimento para Brasileiras no Exterior",
      description: "Apoio emocional online para adaptação cultural, saudade e acolhimento."
    }
  ];

  // Checklist de Avaliações - Específicas e detalhadas
  const avaliacoesChecklist = [
    "Avaliação Neuropsicológica (com laudo detalhado)",
    "Avaliação Psicopedagógica (dificuldades de aprendizagem)",
    "Avaliação Neuropsicopedagógica",
    "Avaliação Psicológica para Bariátrica",
    "Avaliação Psicológica para Laqueadura e Vasectomia",
    "Avaliação Psicológica para processos seletivos",
    "Avaliação de Perfil Profissional"
  ];

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
      {/* Elementos decorativos */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: colors.secondary }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: colors.accent }}
      />
      
      <div className="container px-5 mx-auto max-w-7xl relative z-10">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span 
            className="text-sm font-bold tracking-wider uppercase inline-block mb-3 px-4 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
          >
            Meus serviços
          </span>
          <h2 
            className="text-4xl md:text-5xl font-black mb-4 text-white"
          >
            Pra quem é esse atendimento?
          </h2>
          <p className="text-white text-lg opacity-90">
            Cuidado psicológico com técnica, sensibilidade e um olhar que enxerga você por completo.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -8,
                rotateX: 2,
                boxShadow: '0 25px 40px -15px rgba(0,0,0,0.3)'
              }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Elemento decorativo interno */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"
                style={{ backgroundColor: colors.primary }}
              />
              
              {/* Número decorativo */}
              <div className="flex items-start justify-between mb-4">
                <span 
                  className="font-black opacity-20 text-5xl leading-none"
                  style={{ color: colors.primary }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div 
                  className="w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${colors.secondary}40` }}
                />
              </div>
              
              {/* Título */}
              <h3 
                className="text-xl font-black mb-3"
                style={{ color: '#1e3a3a' }}
              >
                {service.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Linha animada */}
              <div 
                className="w-12 h-1 rounded-full group-hover:w-20 transition-all duration-300"
                style={{ backgroundColor: colors.secondary }}
              />
            </motion.div>
          ))}
        </div>

        {/* Checklist de Avaliações - Card com cor #47493A */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div 
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#47493A' }}
          >
            <div className="text-center mb-8">
              <h3 
                className="text-2xl font-bold mb-2 text-white"
              >
                Avaliações Especializadas
              </h3>
              <div 
                className="w-16 h-0.5 mx-auto mb-4"
                style={{ background: colors.secondary }}
              />
              <p className="text-white/90 text-sm">
                Avaliações completas com laudos técnicos detalhados e análise aprofundada
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {avaliacoesChecklist.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" style={{ color: colors.secondary }} />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Botão WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://wa.me/5527995797867"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            style={{ 
              backgroundColor: '#25D366',
              color: '#FFFFFF'
            }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
            </svg>
            (27) 99579-7867
          </a>
        </motion.div>

        {/* Texto complementar */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-white text-sm mt-6 opacity-80"
        >
          Clique e agende sua consulta - Atendimento online e presencial.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;