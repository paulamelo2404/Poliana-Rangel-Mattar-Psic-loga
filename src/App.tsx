import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Welcome from './components/sections/Welcome'
import Services from './components/sections/Services'
import About from './components/sections/About'
import TherapyImportance from './components/sections/TherapyImportance'

function App() {
  // Dados da Psicóloga
  const psychologistData = {
    name: "Poliana Mattar",
    title: "Psicóloga Clínica",
    crp: "CRP 16ª / 6821",
    phone: "(27) 99579-7867",
    // Links das fotos
    heroPhoto: "https://i.imgur.com/A3QMDFX.png",
    welcomePhoto: "https://i.imgur.com/ydQZNXx.jpeg",
    aboutPhoto: "https://i.imgur.com/ppZ4p4x.png",
    // Cores da marca (sem roxo)
    colors: {
      primary: "#A1A491",
      secondary: "#CEBABF"
    }
  };

  return (
    <>
      <Navbar name={psychologistData.name} />
      
      <main>
        {/* 1️⃣ Hero Section com frases animadas */}
        <Hero 
          name={psychologistData.name}
          title={psychologistData.title}
          crp={psychologistData.crp}
          phone={psychologistData.phone}
          photoUrl={psychologistData.heroPhoto}
          colors={psychologistData.colors}
        />
        
        {/* 2️⃣ Seção de Boas-vindas */}
        <Welcome 
          name={psychologistData.name}
          photoUrl={psychologistData.welcomePhoto}
          colors={psychologistData.colors}
        />
        
        {/* 3️⃣ Seção de Serviços */}
        <Services colors={psychologistData.colors} />
        
        {/* 4️⃣ Seção Sobre Mim */}
        <About 
          name={psychologistData.name}
          photoUrl={psychologistData.aboutPhoto}
          colors={psychologistData.colors}
        />
        
        {/* 5️⃣ Seção Importância da Terapia (POR ÚLTIMO) */}
        <TherapyImportance colors={psychologistData.colors} />
        
        {/* Próximas seções a serem criadas:
            - FAQ (Perguntas Frequentes)
            - Contato / Localização
        */}
      </main>
      
      <Footer 
        name={psychologistData.name}
        crp={psychologistData.crp}
      />
    </>
  )
}

export default App