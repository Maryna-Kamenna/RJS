import './App.css';
import Header from './Header';
import About from './About';
import Category from './Category';
import Home from './Home';
import Footer from './Footer';
import Error from './Error';
import CategoryDescription from './CategoryDescription';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cat/:cateName" component={CategoryDescription} />
          <Route path="/cat" component={Category} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
