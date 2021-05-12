import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Create, Footer } from './components';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

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
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      <Footer />
    </Router>
    // </div>
  );
}

export default App;
