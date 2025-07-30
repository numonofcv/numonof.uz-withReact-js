import "./App.css";
import About from "./Components/About/About";
import PageIcon from "./Components/assets/images/PageIcon/PageIcon";
import FAQ from "./Components/FAQ/FAQ";
import FAQSection from "./Components/FAQSection/FAQSections";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ProjectList from "./Components/ProjectList/ProjectList";
import Project from "./Components/Projects/Project";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PageIcon/>
      <About />
      <Project />
      <ProjectList />
      <FAQ />
      <FAQSection />
    </div>
  );
}

export default App;
