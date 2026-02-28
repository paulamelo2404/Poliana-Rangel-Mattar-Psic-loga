import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Welcome from './components/sections/Welcome'

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
        {/* Hero Section com carrossel de frases */}
        <Hero 
          name={psychologistData.name}
          title={psychologistData.title}
          crp={psychologistData.crp}
          phone={psychologistData.phone}
          photoUrl={psychologistData.heroPhoto}
          colors={psychologistData.colors}
        />
        
        {/* Seção de Boas-vindas */}
        <Welcome 
          name={psychologistData.name}
          photoUrl={psychologistData.welcomePhoto}
          colors={psychologistData.colors}
        />
        
        {/* Aqui vão as próximas seções:
            - Serviços
            - FAQ
            - Contato 
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