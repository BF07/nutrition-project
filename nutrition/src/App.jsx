import './App.css'
import Card from './components/Card/Card'
import Aboutme from './components/Aboutme/Aboutme'
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
      <Aboutme />
      <Card />
    </main>
    </>
  )
}

export default App
