import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/home';
import Navigation from './components/nav';

function App() {
  return (

<Router>
<Navigation/>
  <Routes>
  <Route path='/' element={<Home />}/>
  </Routes>

</Router>
  );
}
jasd

export default App;
