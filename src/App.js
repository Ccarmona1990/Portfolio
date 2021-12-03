
import Footer from "./utils/Footer";
import Main from "./utils/Main";
import Masthead from "./utils/Masthead";
import Nav from "./utils/Nav";

function App() {
  return (
    <>
      <header id="page-top" className='fixed-top'>
        <Nav/>
      </header>
      
      <section className="masthead">
        <Masthead/>
      </section>
      
      <main>
        <Main/>
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
