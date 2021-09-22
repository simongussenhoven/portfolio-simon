import Menu from "./Menu";
import Main from "./Main";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Products from "./experiments/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import blog from "../data/blog.js";
import "bootstrap/dist/css/bootstrap.min.css";

import products from "../data/products.js"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            blog,
            products,
            basket: null,
            view: "normal",
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
                        <Route path="/about/" component={About} />
                        <Route path="/contact/" component={Contact} />
                        <Route path="/projects/" component={Projects}/>
                        <Route path="/products/" render={() => <Products data={this.state} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
