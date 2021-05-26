import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to={"/"}>Home</Link>
                    <Link className="nav-item nav-link active" to={"/blog"}>Blog</Link>
                </div>
            </nav>
    );
}
export default Nav;
