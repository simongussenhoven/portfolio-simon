import Nav from './Nav'
import Header from './Header'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
    </div>
  );
}

export default App;
