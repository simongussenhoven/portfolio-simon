function Courses() {
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">Courses</h1>
            </div>
            <section className="container">
                <div className="row d-flex justify-content-center text-dark mt-3">
                    <div className="card col-md-6 col-lg-3 p-3">
                        <img className="card-img-top p-5" src="../images/winc.png" alt="React logo" />
                        <div className="card-block text-center">
                            <h4 className="card-title">Winc academy</h4>
                            <p className="card-text my-3">In March 2021 I completed the front-end development course at Winc Academy, covering HTML, CSS, Javascript and React.js</p>
                        </div>
                        <button className="btn btn-primary">View certificate</button>
                    </div>
                    <div className="card col-md-6 col-lg-3">
                        <img className="card-img-top p-5" src="../images/vue.png" alt="React logo" />
                        <div className="card-block text-center">
                            <h4 className="card-title">Vue.js</h4>
                            <p className="card-text my-4">Still experimenting</p>
                        </div>
                    </div>
                    <div className="card col-md-6 col-lg-3">
                        <img className="card-img-top mx-auto my-3 p-4" src="../images/bootstrap.png" alt="bootstrap logo" />
                        <div className="card-block text-center">
                            <h4 className="card-title">Bootstrap</h4>
                            <p className="card-text my-4">For ease of use (and this page!)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Courses;
