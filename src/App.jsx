import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResearchIndex from './components/ResearchIndex'
import SelectedWork from './components/SelectedWork'
import Expertise from './components/Expertise'
import ProjectLumiere from './components/ProjectLumiere'
import AboutProcess from './components/AboutProcess'
import { Contact, Footer } from './components/ContactFooter'

export default function App() {
  return <><Navbar/><main><Hero/><ResearchIndex/><SelectedWork/><Expertise/><ProjectLumiere/><AboutProcess/><Contact/></main><Footer/></>
}
