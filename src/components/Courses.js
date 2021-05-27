function Courses() {
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1">Courses</h1>
            </div>
            <section className="container">
                <div className="card-group">
                    <div className="card m-2 rounded">
                        <img className="card-img-top" src="..." alt="card" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="card m-2 rounded">
                        <img
                            className="card-img-top m-1 m-1"
                            src="..."
                            alt="card"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural
                                lead-in to additional content.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="card m-2 rounded">
                        <img
                            className="card-img-top m-1 m-1"
                            src="..."
                            alt="card"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Courses;
