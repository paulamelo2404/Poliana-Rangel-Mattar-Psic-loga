import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TherapyImportanceProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const TherapyImportance = ({ colors }: TherapyImportanceProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      title: "Autoconhecimento",
      description: "Entender seus padrões de comportamento, emoções e pensamentos para fazer escolhas mais conscientes."
    },
    {
      title: "Saúde emocional",
      description: "Aprender a lidar com ansiedade, estresse, tristeza e outros sentimentos que afetam seu dia a dia."
    },
    {
      title: "Relacionamentos",
      description: "Melhorar a forma como você se relaciona consigo mesmo e com as pessoas ao seu redor."
    },
    {
      title: "Qualidade de vida",
      description: "Desenvolver ferramentas para enfrentar desafios e viver com mais leveza e propósito."
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span 
            className="text-sm font-bold tracking-wider uppercase inline-block mb-3 px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: `${colors.accent}CC` }}
          >
            Cuidado que transforma
          </span>
          <h2 
            className="text-4xl md:text-5xl font-black mb-6 text-white"
          >
            Por que fazer terapia?
          </h2>
          <p className="text-white text-xl opacity-90">
            Um espaço para você se reconectar consigo mesmo e encontrar equilíbrio emocional.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div ref={ref} className="space-y-16">
          
          {/* Linha 1: Vídeo + Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                poster="https://i.imgur.com/aWJjtfM.mp4"
              >
                <source src="https://i.imgur.com/aWJjtfM.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Card com verde mais escuro */}
            <div 
              className="p-8 rounded-3xl text-white"
              style={{ backgroundColor: '#1B4D3E' }}
            >
              <h3 className="text-2xl font-black mb-4">Um lugar seguro para ser você</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                A terapia é um espaço acolhedor, sem julgamentos, onde você pode falar abertamente sobre 
                seus medos, angústias, sonhos e desafios. É um processo de autodescoberta que te ajuda a 
                compreender suas emoções e encontrar caminhos para uma vida mais leve e significativa.
              </p>
              <p className="text-white/90 leading-relaxed">
                Não importa o que você esteja enfrentando - ansiedade, conflitos nos relacionamentos, 
                insatisfação profissional ou apenas aquela sensação de que algo não vai bem - a terapia 
                oferece ferramentas para você se fortalecer e seguir em frente.
              </p>
            </div>
          </motion.div>

          {/* Linha 2: Ilustração guarda-chuva + Benefícios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-black mb-6 text-white">O que a terapia pode fazer por você</h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all"
                  >
                    <h4 className="font-black mb-2" style={{ color: colors.accent }}>{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.imgur.com/s4ITLz9.jpeg" 
                  alt="Terapeuta acolhendo paciente com guarda-chuva"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <p className="text-white/80 text-sm mt-3 text-center italic">
                "Na terapia, você encontra acolhimento para enfrentar qualquer tempestade"
              </p>
            </div>
          </motion.div>

          {/* Linha 3: Logo redonda + Texto de impacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          >
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-50"
                  style={{ backgroundColor: colors.secondary }}
                />
                <img 
                  src="https://i.imgur.com/C3uUjIX.png" 
                  alt="Logo Poliana Rangel Mattar"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              {/* Card com verde mais escuro */}
              <div 
                className="p-8 rounded-3xl text-white"
                style={{ backgroundColor: '#1B4D3E' }}
              >
                <p className="text-xl leading-relaxed font-light">
                  "A terapia não é para quem está fraco. É para quem quer se fortalecer. 
                  É para quem entende que cuidar da mente é tão importante quanto cuidar do corpo. 
                  É para quem sabe que, às vezes, a gente precisa de alguém do lado para enxergar 
                  caminhos que sozinho não consegue ver."
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-white/20" />
                  <div>
                    <p className="font-bold">Poliana Rangel Mattar</p>
                    <p className="text-sm text-white/70">Psicóloga • CRP 16/6B21</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Linha 4: CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-block p-1 rounded-full bg-white/20">
              <div className="bg-white rounded-full px-10 py-4 shadow-xl">
                <p className="text-xl font-bold" style={{ color: colors.accent }}>
                  Cuide de você. Comece sua terapia.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="https://wa.me/5527995797867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
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
            </div>
            
            <p className="text-white/80 text-sm mt-4">
              Atendimento online e presencial • Marechal Floriano-ES
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TherapyImportance;