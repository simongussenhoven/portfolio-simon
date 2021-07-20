import Menu from "./Menu";
import Main from "./Main";
import Blog from "./Blog";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import blog from "../data/blog.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            blog,
        };
    }
    filterPosts = (cat) => {
        if (cat === "All"){
            this.setState({
                blog
            });
        }
        else {
            this.setState({
                blog: blog.filter((post) => {
                    return post.categories.includes(cat);
                }),
            });
        }
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/blog/" render={() => <Blog posts={blog} data={[...this.state.blog]} filterPosts={this.filterPosts} />} />
                        <Route path="/courses/" component={Courses} />
                        <Route path="/about/" component={About} />
                        <Route path="/contact/" component={Contact} />
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
