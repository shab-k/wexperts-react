import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';

function App() {
  return (
    // <div className="App">
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
    // </div>
  );
}

export default App;
