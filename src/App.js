// import logo from './logo.svg';
import './App.css';
 import { Navbar } from './Components/Navbar/Navbar'; 
import { Banner } from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import { originals,action } from './Urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' size/>
      <Rowpost url={action} title='Action' size/>
     </div>
  );
}

export default App;
