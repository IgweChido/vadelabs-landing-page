import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Section2/>
     <Footer/>
    </div>
  );
}

export default App;
