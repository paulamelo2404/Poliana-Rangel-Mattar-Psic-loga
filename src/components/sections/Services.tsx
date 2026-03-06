import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      description: "Acolhimento para ansiedade, estresse e sobrecarga emocional com abordagem em TCC."
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
      description: "Pré-bariátrica, laqueadura e vasectomia conforme protocolos médicos."
    },
    {
      id: 8,
      title: "Palestras e Treinamentos",
      description: "Saúde mental no trabalho, gestão de pessoas e riscos psicossociais (NR-1)."
    },
    {
      id: 9,
      title: "Atendimento para Brasileiras no Exterior",
      description: "Apoio emocional online para adaptação cultural, saudade e sobrecarga na maternidade."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden"
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
            Como posso ajudar
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
                  className="text-sm font-black opacity-20 text-5xl leading-none"
                  style={{ color: colors.primary }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div 
                  className="w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${colors.secondary}40` }}
                />
              </div>
              
              {/* Título - verde escuro */}
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

        {/* Botão WhatsApp - Verde oficial */}
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
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
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