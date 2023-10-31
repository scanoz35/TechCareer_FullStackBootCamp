import './App.css';
import Header from './template1/Header';
import Navbar from './template1/Navbar';
import PageContent from './template1/PageContent';
import ProjectSection from './template1/ProjectSection';
import About from './template1/About';
import Contact from './template1/Contact';
import ImageofLocation from './template1/ImageofLocation';
import EndPageContent from './template1/EndPageContent';
import Footer from './template1/Footer';

function App() {
  return ( <>
  <Navbar></Navbar>
  <Header/>
  <PageContent/>
<ProjectSection></ProjectSection>
<About></About>
<Contact></Contact>
<ImageofLocation/>
<EndPageContent></EndPageContent>
<Footer></Footer>
  
</>
  

  );
}

export default App;
