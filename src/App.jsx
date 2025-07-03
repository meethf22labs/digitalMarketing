import './App.css'
import CaseStudies from './components/CaseStudies'
import CompaniesLogo from './components/CompaniesLogo'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Services from './components/Services'
import WorkingProcess from './components/WorkingProcess'
import Team from './components/Team'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <Navbar />
      <Herosection/>
      <CompaniesLogo />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      {/* <ContactUs/> */}
    </>
  )
}

export default App
