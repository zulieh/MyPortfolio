import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Narbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Narbar />
      
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
    </div>

    </Router>
    
  );
}

export default App;
