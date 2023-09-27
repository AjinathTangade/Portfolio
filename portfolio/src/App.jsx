
import './App.css'
import AboutUs from './component/AboutUs';
import { CtaSection } from './component/CtaSection';
import { Header } from './component/Header';
import Project from './component/Project';
import WorkExp from './component/WorkExp';
function App() {
  return (
    <>
     <Header />
     <CtaSection />
     <AboutUs />
     <WorkExp />
     <Project />
    </>
  )
}

export default App;
