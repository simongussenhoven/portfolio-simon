import Nav from "./Nav";
import Main from "./Main";
import Blog from "./Blog";
import Courses from "./Courses";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import blog from "../data/blog.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            blog,
        };
    }
    filterPosts = (cat) => {
        this.setState({
            blog: blog.filter((post) => {
                return post.categories.includes(cat);
            }),
        });
    };
    render() {
        return (
            <div className="App">
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/blog" render={() => <Blog posts={blog} data={[...this.state.blog]} filterPosts={this.filterPosts} />} />
                        <Route path="/courses" component={Courses} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
