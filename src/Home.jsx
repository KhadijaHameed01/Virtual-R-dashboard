
import HeroSection from './components/HeroSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testmonials from './components/Testmonials';
import { Features } from './components/Features';
  
const Home = () => {
  return (
    <>
     <HeroSection />
    <Features />
    <Workflow />
    <Pricing />
    <Testmonials />
    </>
  )
}

export default Home