import './App.css';

import Header from './Header'
import Information from './Information'
import Footer from './Footer'
import MyParticles from './Particles'

function App() {
  return (
    <div className="App">
    <MyParticles />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
      <Header />
      <Information />
      <Footer />
      </div>
    </div>
  );
}

export default App;
