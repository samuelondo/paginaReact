import './App.css';
import Menu from './Components/Menu';
import First from './Components/First'
import LongTextSnackbar from './Components/LongTextSnackbar'
import Cards from './Components/Cards'
import Footer from './Components/Footer';
import Elevation from './Components/Elevation';


function App() {
  return (
    <div className="App">
      <Menu/>
      <First></First>
      <LongTextSnackbar></LongTextSnackbar>
      <Cards></Cards>
      <Elevation></Elevation>
      <Footer></Footer>
    </div>
  );
}

export default App;
// 
