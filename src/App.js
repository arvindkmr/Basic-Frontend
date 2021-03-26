
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Jobs from './Pages/Jobs';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/jobs" exact>
          <Jobs />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
