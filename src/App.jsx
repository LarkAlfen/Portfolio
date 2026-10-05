import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import Loader from './components/Loader/Loader'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { Main } from './pages/Main/Main'
import { Projects } from './pages/Projects/Projects'
import './style/App.scss'

function App() {
  const [introFinished, setIntroFinished] = useState(false);
useEffect(() => {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
}, []);

useEffect(() => {
  document.body.classList.toggle("no-scroll", !introFinished);

  return () => {
    document.body.classList.remove("no-scroll");
  };
}, [introFinished]);

  return (
    <>
    <Loader onFinished={() => setIntroFinished(true)} />
    <Header introFinished={introFinished} />
    <Main introFinished={introFinished} />
    <Projects/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
