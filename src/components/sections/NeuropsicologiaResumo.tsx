import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface NeuropsicologiaResumoProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const NeuropsicologiaResumo = ({ colors }: NeuropsicologiaResumoProps) => {
  const texto = "Avaliação Neuropsicológica com rigor técnico e olhar humanizado. Compreender como a pessoa pensa, aprende, lembra, organiza suas ações e lida com as emoções é o primeiro passo para construir intervenções mais precisas e promover melhor qualidade de vida."

  return (
    <>
      <section className="py-12 md:py-20 overflow-hidden" style={{ backgroundColor: '#55753C' }}>
        <div className="container px-4 mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            
            {/* Imagem lateral esquerda - TAMANHO CONTROLADO NO MOBILE */}
            <div className="w-48 sm:w-56 md:w-2/5 lg:w-1/3 shrink-0">
              <img 
                src="https://i.imgur.com/hfevsH4.png"
                alt="Neuropsicologia"
                className="w-full h-auto"
              />
            </div>
            
            {/* Conteúdo direito */}
            <div className="flex-1 text-center md:text-left">
              
              {/* Título */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#FFFFFF' }}
              >
                Neuropsicologia
              </h2>
              
              {/* Divisória decorativa */}
              <div className="w-16 h-0.5 mx-auto md:mx-0 mb-6" style={{ background: colors.secondary }} />
              
              {/* Texto */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {texto}
              </p>
              
              {/* Botão Saiba Mais - PISCANDO */}
              <div className="mt-8">
                <Link
                  to="/neuropsicologia"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-pulse"
                  style={{ 
                    backgroundColor: colors.secondary,
                    color: '#55753C',
                    boxShadow: `0 0 20px ${colors.secondary}60`
                  }}
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha separadora */}
      <div className="w-full h-px" style={{ background: `linear-gradient(to right, transparent, ${colors.secondary}, transparent)` }} />
    </>
  );
};

export default NeuropsicologiaResumo;