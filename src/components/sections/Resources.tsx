import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, BookOpen, Download, ArrowRight, Sparkles } from 'lucide-react';

interface ResourcesProps {
  colors: {
    primary: string;
    secondary: string;
  };
}

// Materiais disponíveis para download
const resources = [
  {
    id: 1,
    title: "Cuidando da Saúde Mental",
    description: "Guia completo sobre saúde mental no trabalho, equilíbrio e qualidade de vida.",
    link: "https://drive.google.com/file/d/13KFq-otT-WxNSI5CNyrbk300bqY6lWAl/view",
  },
  {
    id: 2,
    title: "Diário de Bordo para Idosos",
    description: "Fornece orientações sobre direitos, saúde e bem-estar para pessoas com mais de 60 anos e seus cuidadores.",
    link: "https://drive.google.com/file/d/1t99SrFnejwt1wLXGBETl1DkpimFQoAmf/view",
  },
  {
    id: 3,
    title: "Tonteira, Vertigem e Labirintite",
    description: "Informações e orientações sobre esses sintomas que afetam a qualidade de vida.",
    link: "https://drive.google.com/file/d/1GsjHNUxEdhySFmQPA2qeIlyyfkUa2bRW/view",
  },
  {
    id: 4,
    title: "Contenção de Crises na Educação Infantil",
    description: "Manejo de crises emocionais, ansiedade e agressividade para professoras.",
    link: "https://drive.google.com/file/d/1B1Z8WGNUC9EiSn-5MYb_7zsD5iRV5LqQ/view",
  }
];

const Resources = ({ colors }: ResourcesProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resources" className="py-20 md:py-28 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho com destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: colors.secondary }} />
            <span 
              className="text-sm font-medium tracking-wider uppercase"
              style={{ color: colors.secondary }}
            >
              Downloads Gratuitos
            </span>
            <Sparkles className="w-5 h-5" style={{ color: colors.secondary }} />
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Materiais Exclusivos
          </h2>
          <p className="text-gray-600">
            Recursos desenvolvidos com cuidado para apoiar sua jornada de autoconhecimento
          </p>
        </motion.div>

        {/* Grid de materiais - 2 colunas para mais destaque */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {resources.map((resource, index) => (
            <motion.a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Elemento decorativo de fundo */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: colors.primary }}
              />
              
              <div className="relative z-10 flex items-start gap-5">
                {/* Ícone circular com gradiente e brilho */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    boxShadow: `0 8px 20px ${colors.primary}40`
                  }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 
                    className="text-lg font-bold mb-2 group-hover:text-[#A1A491] transition-colors"
                    style={{ color: colors.primary }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  {/* Botão de download com efeito */}
                  <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 group-hover:gap-3" style={{ background: `${colors.primary}10`, color: colors.primary }}>
                    <Download className="w-4 h-4" />
                    <span>Baixar PDF</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Livro - Card em destaque horizontal */}
        <motion.a
          href="https://i.imgur.com/etF32hd.jpeg"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -4 }}
          className="group block max-w-5xl mx-auto mt-8"
        >
          <div 
            className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}08 0%, ${colors.secondary}08 100%)`,
              border: `1px solid ${colors.secondary}30`
            }}
          >
            {/* Elemento decorativo */}
            <div 
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ background: colors.secondary }}
            />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
              {/* Ícone do livro destacado */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                  boxShadow: `0 8px 20px ${colors.secondary}40`
                }}
              >
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold mb-1" style={{ color: colors.primary }}>
                  Estudos Atuais em Psicologia e Sociedade - Volume 2
                </h3>
                <p className="text-gray-600 text-sm">
                  Poliana Rangel Mattar escreveu um dos capítulos desta obra
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 group-hover:gap-3" style={{ background: `${colors.primary}15`, color: colors.primary }}>
                <span>Visualizar capa</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Frase final com destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block relative">
            <div 
              className="absolute -left-4 -top-4 w-8 h-8 rounded-full opacity-30"
              style={{ background: colors.secondary }}
            />
            <p className="text-xl md:text-2xl italic font-light text-gray-700 max-w-2xl mx-auto relative z-10">
              "A  arte não reproduz o invisível, em vez disso, torna visível"
            </p>
            <div 
              className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full opacity-30"
              style={{ background: colors.primary }}
            />
          </div>
          <p className="text-gray-500 text-sm mt-4">— Paul Klee</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;