import './App.scss';
import Posts from './components/JobList/JobList';
import Details from './components/JobDetailed/JobDetailed';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() { 
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path ="/" element = {<Posts />} />
          <Route  path ="/details" element = {<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
