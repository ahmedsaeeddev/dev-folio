import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import EducationSection from "./Components/Education/Education";

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <EducationSection />
      <About />
      <Projects />
      </>
      )
}

      export default App;