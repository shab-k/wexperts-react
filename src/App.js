import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Footer } from './components';
import GlobalStyle from './globalStyles';

function App() {
  return (
    // <div className="App">
    <Router>
      <GlobalStyle />
      <Navbar />
      <Footer />
    </Router>
    // </div>
  );
}

export default App;
