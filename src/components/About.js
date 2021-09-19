function About() {
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">About me</h1>
            </div>
            <section class="container text-left p-4 mt-5 border-bottom text-center">
                <div class="row text-center">
                    <h2>General</h2>
                    <p>Hi, I'm Simon, an aspiring front-end developer. Last year I took the front-end development course at Winc Academy (Amsterdam) and I'm looking for project to practise my skills!</p>
                </div>
                <div class="container my-5">
                    <div class="row d-flex flex-row justify-content-space-between">
                        <div class="col col-md-2 d-block">
                            <img class="img-fluid mb-3" src="../images/code-icons/html.png"/>
                            <span class="mb-auto mt-auto">HTML</span>
                        </div> 
                        <div class="col col-md-2 d-block">
                            <img class="img-fluid mb-3"src="../images/code-icons/css.png"/>
                            <span class="mb-auto">CSS3</span>
                        </div> 
                        <div class="col col-md-2 d-block">
                            <img class="img-fluid mb-3" alt="bootstrap"src="../images/bootstrap.png"/>
                            <span class="mb-auto">Bootstrap</span>
                        </div>
                        <div class="col col-md-2 d-block">
                            <img class="img-fluid mb-3" alt="bootstrap" src="../images/react.png"/>
                            <span class="mt-auto">Bootstrap</span>
                        </div> 
                        <div class="col col-md-2 d-block">
                            <img class="img-fluid mb-3" alt="javascript" src="../images/code-icons/js.png"/>
                            <span class="mb-auto">JavaScript</span>
                        </div> 
                    </div>
                </div>
            </section>
            <section class="container text-left p-4">
                <h2>Off-time</h2>
                <p>In my spare time I enjoy many leisure activities:</p>
                <ul>
                    <li>Gaming</li>
                    <li>Sailing</li>
                    <li>Repairing the damn boat</li>
                    <li>Cycling</li>
                    <li>Poultry farming</li>
                </ul>
            </section>
        </div>
    );
}
export default About;
