import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import { Navbar, Create, Edit, BlogDetails, Footer } from './components';

function App() {
  return (
    // <div className="App">
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/edit/:id">
          <Edit />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
    // </div>
  );
}

export default App;
