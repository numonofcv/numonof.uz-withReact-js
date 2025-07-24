
import './App.css';
import About from './Components/About/About';
import FAQ from './Components/FAQ/FAQ';
import FAQSection from './Components/FAQSection/FAQSections';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ProjectList from './Components/ProjectList/ProjectList';
import Project from './Components/Projects/Project';

function App() {
  return (
  <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <FAQ/>
    <ProjectList/>
  <FAQSection/>
  </div>
  );
}

export default App;
