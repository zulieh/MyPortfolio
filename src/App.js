import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Narbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Narbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" exact component={About} />
          <Route path="/" exact component={Work} />
          <Route path="/" exact component={Contact} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
