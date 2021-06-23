import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app">
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
    </div>

    </Router>
    
  );
}

export default App;
