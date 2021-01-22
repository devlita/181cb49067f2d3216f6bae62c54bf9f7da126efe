import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LDbar from './components/LDbar';
import Lunch from './contents/Lunch';
import Dinner from './contents/Dinner';
import Calendar from './components/Calendar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Calendar />
      <Router>
        <LDbar />
        <Switch>
            <Route exact path="/lunch" component={Lunch} />
            <Route path="/dinner" component={Dinner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
