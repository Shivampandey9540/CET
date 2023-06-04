import './App.css';
import Curriculum from './Curriculum'

import Card from './Card';
import Interactive from './Interactive';
import Batch from './Batch';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Hero from './Hero';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card data={[{}, {}, {}]} />
      <Interactive />
      <Curriculum />
      <Batch data={[{}, {}, {}, {}, {}, {}]} />
      <Newsletter />
      <Footer />
    </div>
  );
}




export default App;
