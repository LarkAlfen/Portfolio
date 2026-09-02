import { Header } from './components/Header/Header'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Main } from './pages/Main/Main'
import { Projects } from './pages/Projects/Projects'
import './style/App.scss'

function App() {

  return (
    <>
    <Header/>
    <Main/>
    <Projects/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
