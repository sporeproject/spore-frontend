import './App.css';

import Header from './Header';
import Information from './Information';
import Footer from './Footer';
import MyParticles from './Particles';

function App() {
  return (
    <div className='main'>
      <MyParticles />
      <div>
        <Header />
        <Information />
        <Footer />
      </div>
    </div>
  );
}

export default App;
