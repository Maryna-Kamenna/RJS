import './App.css';
import Header from './Header';
import About from './About';
import Category from './Category';
import Home from './Home';
import Footer from './Footer';
import Error from './Error';
import CategoryDescription from './CategoryDescription';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



const HeadNav = [
  { link: '/', text: 'Главная' },
  { link: '/about', text: 'O сайте' },
  { link: '/cat', text: 'Категории' }
];

const CatNav = [
  { link: '/cat/notebook', text: 'Ноутбуки' },
  { link: '/cat/monitor', text: 'Мониторы' },
  { link: '/cat/cellphone', text: 'Мобильные телефоны' }
];

function App() {
  return (
    <>
      <Header data={HeadNav} />

      <Router>
        {/* <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/cat'>Category</Link></li>
          <li><Link to='/cat/:cateName'>CategoryDescription </Link></li>
        </nav> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/cat'> <Category data={CatNav} />  </Route>
          <Route path='/cat/:cateName' component={CategoryDescription} />
          <Route component={Error} />

        </Switch>
      </Router>
    </>
  );
}

export default App;

