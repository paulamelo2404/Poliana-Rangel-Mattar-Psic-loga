import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface NeuropsicologiaProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const Neuropsicologia = ({ colors }: NeuropsicologiaProps) => {
  const phoneNumber = "5527995797867";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Olá! Gostaria de agendar uma Avaliação Neuropsicológica.`;

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl py-6 md:py-12">
          
          {/* Botão Voltar */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-6 hover:opacity-70 transition-opacity"
            style={{ color: colors.primary }}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 order-1 md:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://i.imgur.com/73cosKG.jpeg"
                  alt="Neuropsicologia"
                  className="w-full h-auto max-h-75 md:max-h-112.5 object-cover"
                />
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 order-2 md:order-2 text-center md:text-left"
            >
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
                style={{ color: colors.primary }}
              >
                Neuropsicologia
              </h1>
              <div className="w-16 h-0.5 mx-auto md:mx-0 mb-4 md:mb-5" style={{ background: colors.secondary }} />
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 md:mb-6">
                A Neuropsicologia é uma área da Psicologia dedicada à compreensão da relação entre o funcionamento do cérebro, a cognição, as emoções e o comportamento. Seu objetivo é identificar como diferentes habilidades cognitivas influenciam o desempenho nas atividades do dia a dia, auxiliando no diagnóstico, no planejamento terapêutico e na promoção da qualidade de vida.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ 
                  backgroundColor: colors.primary,
                  color: '#FFFFFF'
                }}
              >
                Agende uma Avaliação
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. O QUE É AVALIADO */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: colors.primary }}
            >
              O que a Avaliação Neuropsicológica investiga?
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: colors.secondary }} />
            <p className="text-base text-gray-600 mb-8">
              Nosso processo investiga funções essenciais que podem interferir no funcionamento cognitivo, tais como:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Atenção e Memória",
              "Linguagem e Raciocínio",
              "Inteligência e Percepção",
              "Aprendizagem e Habilidades Visuoespaciais",
              "Aspectos Emocionais",
              "Funções Executivas (planejamento, organização, controle dos impulsos e tomada de decisões)"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-5 h-5 shrink-0" style={{ color: colors.primary }} />
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PÚBLICO E INDICAÇÕES */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <h2 
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: colors.primary }}
          >
            Para quem é indicado?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            
            {/* Esquerda - Parte 1 do texto + Imagem 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                Esse processo é indicado para crianças, adolescentes, adultos e idosos que apresentam dificuldades de aprendizagem, problemas de atenção e memória, suspeita de Transtorno do Déficit de Atenção/Hiperatividade (TDAH), Transtorno do Espectro Autista (TEA), Altas Habilidades/Superdotação, deficiência intelectual, transtornos específicos de aprendizagem, sequelas de lesões neurológicas...
              </p>
              <div className="rounded-xl overflow-hidden shadow-md max-w-sm mx-auto md:mx-0">
                <img 
                  src="https://i.imgur.com/QHmKMod.jpeg"
                  alt="Criança aprendendo"
                  className="w-full h-40 object-cover"
                />
              </div>
            </motion.div>

            {/* Direita - Imagem 2 + Parte 2 do texto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md max-w-sm mx-auto md:mx-0 mb-4">
                <img 
                  src="https://i.imgur.com/rNJaz3n.jpeg"
                  alt="Adulto em consulta"
                  className="w-full h-40 object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                ...acidentes vasculares cerebrais, traumatismos cranianos, epilepsia, doenças neurodegenerativas, além de alterações cognitivas relacionadas ao envelhecimento. Além disso, a avaliação é plenamente adequada para qualquer pessoa que busque autoconhecimento e deseje compreender de forma clara o seu próprio funcionamento cognitivo e emocional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA */}
      <section className="py-12 md:py-16" style={{ backgroundColor: `${colors.primary}08` }}>
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Como o processo é realizado?
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: colors.secondary }} />
            
            <div className="rounded-xl overflow-hidden shadow-lg mb-6 max-w-2xl mx-auto">
              <img 
                src="https://i.imgur.com/XUnRwaO.jpeg"
                alt="Avaliação Neuropsicológica"
                className="w-full h-auto"
              />
            </div>

            <p className="text-base text-gray-700 leading-relaxed text-left max-w-3xl mx-auto">
              Durante a avaliação são utilizados entrevista clínica, observação comportamental e instrumentos psicológicos e neuropsicológicos validados cientificamente, permitindo uma análise ampla e individualizada do funcionamento cognitivo e emocional. Ao final do processo, é elaborado um laudo detalhado, com os resultados obtidos, hipóteses diagnósticas quando pertinentes e recomendações direcionadas ao paciente, à família, à escola, aos profissionais de saúde e a outros contextos envolvidos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. ABORDAGEM E PROPÓSITO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Logo redonda */}
            <div className="flex justify-center mb-6">
              <div className="w-50 h-50 md:w-40 md:h-40 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4" style={{ borderColor: colors.primary }}>
                <img 
                  src="https://i.imgur.com/C3uUjIX.png"
                  alt="Dra. Poliana Rangel Mattar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Um olhar humano e integral
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: colors.secondary }} />

            <div className="space-y-4 text-gray-700 leading-relaxed text-left">
              <p>
                Como neuropsicóloga, realizo avaliações completas com rigor técnico, ética e um olhar humanizado, respeitando a singularidade de cada pessoa. Meu trabalho busca compreender não apenas as dificuldades apresentadas, mas também identificar potencialidades, preservando uma visão integral do indivíduo.
              </p>
              <p>
                As avaliações seguem as diretrizes do Conselho Federal de Psicologia, utilizando instrumentos atualizados para proporcionar informações fundamentais para diagnóstico, reabilitação e acompanhamento clínico.
              </p>
              <p>
                Cada avaliação é um processo de investigação cuidadoso, com o propósito de oferecer respostas fundamentadas e contribuir para que você ou seu familiar alcance melhor desenvolvimento, autonomia e qualidade de vida.
              </p>
            </div>

            {/* Botão de agendamento no final */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backgroundColor: '#25D366',
                  color: '#FFFFFF'
                }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
                </svg>
                Agendar uma Consulta
              </a>
              <p className="text-xs sm:text-sm text-gray-400 mt-3">
                Atendimento online e presencial
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Neuropsicologia;