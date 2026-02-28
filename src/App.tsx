import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  // Dados temporários - depois você substitui pelos reais
  const psychologistData = {
    name: "Dra. Ana Silva",
    crp: "CRP 06/123456"
  }

  return (
    <>
      <Navbar name={psychologistData.name} />
      
      <main>
        {/* Por enquanto vazio, vamos preenchendo aos poucos */}
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <p className="text-xl text-gray-600">
            Site em construção - Em breve todos os componentes
          </p>
        </div>
      </main>
      
      <Footer 
        name={psychologistData.name}
        crp={psychologistData.crp}
      />
    </>
  )
}

export default App