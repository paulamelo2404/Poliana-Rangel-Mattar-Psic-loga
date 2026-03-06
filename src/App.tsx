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
    email: "psipolianamattar@gmail.com",
    instagram: "@psipolimatt",
    // Links das fotos
    heroPhoto: "https://i.imgur.com/A3QMDFX.png",
    welcomePhoto: "https://i.imgur.com/ydQZNXx.jpeg",
    aboutPhoto: "https://i.imgur.com/ppZ4p4x.png",
    logoUrl: "https://i.imgur.com/C3uUjIX.png",
    // Cores da marca
    colors: {
      primary: "#A1A491",
      secondary: "#CEBABF"
    }
  };

  return (
    <>
      <Navbar 
        name={psychologistData.name}
        logoUrl={psychologistData.logoUrl}
      />
      
      <main>
        <Hero 
          name={psychologistData.name}
          title={psychologistData.title}
          crp={psychologistData.crp}
          phone={psychologistData.phone}
          photoUrl={psychologistData.heroPhoto}
          colors={psychologistData.colors}
        />
        
        <Welcome 
          name={psychologistData.name}
          photoUrl={psychologistData.welcomePhoto}
          colors={psychologistData.colors}
        />
        
        <Services colors={psychologistData.colors} />
        
        <About 
          name={psychologistData.name}
          photoUrl={psychologistData.aboutPhoto}
          colors={psychologistData.colors}
        />
        
        <TherapyImportance colors={psychologistData.colors} />
      </main>
      
      <Footer 
        name={psychologistData.name}
        crp={psychologistData.crp}
        logoUrl={psychologistData.logoUrl}
        phone={psychologistData.phone}
        email={psychologistData.email}
        instagram={psychologistData.instagram}
        colors={psychologistData.colors}
      />
    </>
  )
}

export default App