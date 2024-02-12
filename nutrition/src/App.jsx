import './App.css'
import RdvButton from './components/Buttons/rdvButton/RdvButton'
import Carroussel from './components/Carroussel/Carroussel'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <main>
      <RdvButton />
      <Carroussel />
    </main>
    </>
  )
}

export default App
