import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import IntegrativePractices from "./components/sections/IntegrativePractices";
import Resources from "./components/sections/Resources";
import Services from "./components/sections/Services";
import TherapyImportance from "./components/sections/TherapyImportance";
import Welcome from "./components/sections/Welcome";

function App() {
  // Dados da Psicóloga
  const psychologistData = {
    name: "Poliana Rangel Mattar",
    title:
      "Psicóloga, Neuropsicóloga, Neuropsicopedagoga e Práticas Integrativas",
    crp: "CRP 16ª/6821",
    phone: "(27) 99579-7867",
    email: "psipolianamattar@gmail.com",
    instagram: "@psipolimatt",
    // Links das fotos
    heroPhoto: "https://i.imgur.com/EAFpnZg.png",
    welcomePhoto: "https://i.imgur.com/lyva6EF.jpeg",
    aboutPhoto: "https://i.imgur.com/JuT40eC.png",
    logoUrl: "https://i.imgur.com/ivYEb1V.png",
    // Cores da marca
    colors: {
      primary: "#A1A491",
      secondary: "#CEBABF",
      accent: "#A1A491",
    },
  };

  return (
    <>
      <Navbar name={psychologistData.name} logoUrl={psychologistData.logoUrl} />

      <main>
        {/* 1. Hero - Apresentação inicial */}
        <Hero
          name={psychologistData.name}
          title={psychologistData.title}
          crp={psychologistData.crp}
          phone={psychologistData.phone}
          photoUrl={psychologistData.heroPhoto}
          colors={psychologistData.colors}
        />

        {/* 2. Welcome - Boas-vindas */}
        <Welcome
          name={psychologistData.name}
          photoUrl={psychologistData.welcomePhoto}
          colors={psychologistData.colors}
        />

        {/* 3. Services - Serviços */}
        <Services colors={psychologistData.colors} />

        {/* 4. About - Sobre mim */}
        <About
          photoUrl={psychologistData.aboutPhoto}
          colors={psychologistData.colors}
        />

        {/* 5. IntegrativePractices - Práticas Integrativas */}
        <IntegrativePractices colors={psychologistData.colors} />

        {/* 6. TherapyImportance - Importância da Terapia */}
        <TherapyImportance colors={psychologistData.colors} />

        {/* 7. Resources - Materiais e Cartilhas */}
        <Resources colors={psychologistData.colors} />
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
  );
}

export default App;
