import './App.css';
import Menu from './Components/Menu';
import First from './Components/First'
import LongTextSnackbar from './Components/LongTextSnackbar'
import Cards from './Components/Cards'
import Footer from './Components/Footer';
import Elevation from './Components/Elevation';
import Fotos from './Components/Fotos'


function App() {
  return (
    <div className="App">
      <Menu/>
      <First></First>
      <LongTextSnackbar></LongTextSnackbar>
      <Cards></Cards>
      <Fotos></Fotos>
      <Elevation></Elevation>
      <Footer></Footer>
    </div>
  );
}

export default App;
// 
