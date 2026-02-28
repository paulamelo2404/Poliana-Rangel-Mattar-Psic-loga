import Hero from './components/sections/Hero';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  const psychologistData = {
    name: "Poliana Mattar",
    title: "Psicóloga Clínica",
    crp: "CRP 16ª / 6821",
    phone: "(27) 99579-7867",
    photoUrl: "https://i.imgur.com/A3QMDFX.png",
    colors: {
      primary: "#A1A491",
      secondary: "#CEBABF",
      accent: "#583E5C"
    }
  };

  return (
    <>
      <Navbar name={psychologistData.name} />
      <main>
        <Hero {...psychologistData} />
        {/* Aqui vão as outras seções: Sobre, Serviços, FAQ, etc */}
      </main>
      <Footer 
        name={psychologistData.name}
        crp={psychologistData.crp}
      />
    </>
  );
}

export default App;