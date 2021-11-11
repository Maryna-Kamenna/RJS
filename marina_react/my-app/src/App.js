/* eslint-disable no-unused-vars */
import "./App.css";
// import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import CategoryDescription from "./CategoryDescription";
import Error404 from "./Error404";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const headerNav = {
//   site_name: "react test",
//   site_title: "my first site with react",
//   nav: [
//     { link: "nav1", text: "my link" },
//     { link: "nav2", text: "my link 2" },
//     { link: "nav3", text: "my link 3" },
//   ],
// };

// const catNav = {
//   site_name: "react test",
//   site_title: "my first site with react",
//   nav: [
//     { link: "nav1", text: "my link" },
//     { link: "nav2", text: "my link 2" },
//     { link: "nav3", text: "my link 3" },
//   ],
// };

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/category" component={Category} />
          <Route path="/category/:catName" component={CategoryDescription} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
