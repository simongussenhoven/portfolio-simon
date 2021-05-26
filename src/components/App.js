import Nav from "./Nav";
import Main from "./Main";
import Blog from "./Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import blog from "../data/blog.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
        };
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route
                            path="/blog"
                            render={() => (
                                <Blog data={blog} />
                            )}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
