import './App.css';
import AskedQuestions from './components/AskedQuestions';
import Footer from './components/Footer';
import FourthSlider from './components/FourthSlider';
import Header from './components/Header';
import Hero from './components/Hero';
import MeetTheHost from './components/MeetTheHost';
import SecondLastFooter from './components/SecondLastFooter';
import Section from './components/Section';
import ShopGiftCards from './components/ShopGiftCards';
import Travelogues from './components/Travelogues';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Header />
        < Hero />
        {/* In Section First Second Third slider */}
        < Section /> 
        < Travelogues />
        < FourthSlider />
        < ShopGiftCards />
        < MeetTheHost />
        < AskedQuestions />
        < SecondLastFooter />
        < Footer />
      </header>
    </div>
  );
}

export default App;
