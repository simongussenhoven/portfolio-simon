function Courses() {
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1">Courses</h1>
            </div>
            <section className="container">
                <div className="card-group pt-5">
                    <div className="card m-2 rounded">
                        <img className="card-img-top p-5" src="/images/winc.png" alt="card" />
                        <div className="card-body">
                            <h5 className="card-title">Winc Academy Front End Development</h5>
                            <p className="card-text">I followed the Winc Academy front end development course online, covering HTML/CSS, JS and React.JS</p>

                            <p className="card-text">
                                <small className="text-muted">Completed march 2021</small>
                            </p>
                            <a className="button">View certificate</a>
                        </div>
                    </div>
                    <div className="card m-2 rounded">
                        <img className="card-img-top p-5 w-100" src="/images/bootstrap.png" alt="card" />
                        <div className="card-body">
                            <h5 className="card-title">Codecademy Bootstrap Course</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text">
                                <small className="text-muted"></small>
                            </p>
                        </div>
                    </div>
                    <div className="card m-2 rounded">
                        <img className="card-img-top m-1 m-1" src="..." alt="card" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height
                                action.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Courses;
