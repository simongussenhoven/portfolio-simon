import Nav from "./Nav";
import Main from "./Main";
import Blog from "./Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
            <Nav />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/blog" component={Blog} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
