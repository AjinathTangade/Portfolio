
import './App.css';
import AboutUs from './component/AboutUs';
import { CtaSection } from './component/CtaSection';
import GetToch from './component/GetToch';
import { Header } from './component/Header';
import Project from './component/Project';
import WorkExp from './component/WorkExp';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
    <AnimatedCursor
      outerSize={20}
      color='110, 231, 183'
      outerAlpha={0.6}
      innerScale={0.7}
      outerScale={2}
    />

      
     <Header />
     <CtaSection />
     <AboutUs />
     <WorkExp />
     <Project />
     <GetToch />
    </>
  )
}

export default App;
