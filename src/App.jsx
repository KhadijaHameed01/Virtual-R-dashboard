import { Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';
import Testmonials from './components/Testmonials';
import Workflow from './components/Workflow';
import './index.css';
import Home from './Home';
import { Features } from './components/Features';
import ContactSection from './components/ContactSection';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/testimonials" element={<Testmonials />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
