import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <LandingPage/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
