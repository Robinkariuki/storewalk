import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/home';
import Navigation from './components/nav';
import Sections from './components/pages/sections';
// import Questions from './components/questions';
import MainEntrance from './components/mainEntrance';

function App() {
  return (

<Router>
<Navigation/>
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/sections' element={<Sections/>}/>
  <Route path ='/mainEntrance' element={<MainEntrance/>}/>
  </Routes>

</Router>
  );
}

export default App;
