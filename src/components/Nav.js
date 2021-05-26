function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">
                    Home
                </a>
                <a className="nav-item nav-link" href="#">
                    About me
                </a>
                <a className="nav-item nav-link" href="#">
                    Blog
                </a>
                <a className="nav-item nav-link disabled" href="#">
                    Courses
                </a>
            </div>
        </nav>
    );
}
export default Nav;
