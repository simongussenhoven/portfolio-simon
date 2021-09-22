import React from 'react'
import {Button} from 'react-bootstrap'
import FadeIn from 'react-fade-in'
import {Link} from 'react-router-dom'

function About() {
    return (
        <FadeIn>
            <div id="about">
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">About</h1>
            </div>
            <section className="container text-left p-4 mt-5 border-bottom d-flex flex-column container">
                <div className="row my-5">
                    <div className="row d-flex">
                        <div className="col col-12 col-md-6">
                            <h3 className="font-50 text-right pt-0">About me</h3>
                        </div>
                        <div className="col col-12 col-md-6 text-left p-3">
                        <p>Hi, I'm Simon, an aspiring front-end developer. Last year I took the front-end development course at Winc Academy (Amsterdam) and I'm looking for project to practise my skills! Please checkout my page with experiment to see wether I'm up to any good. I my spare time I love to code, game, sail and cycle. Do you have any question? Contact me!</p>
                        <Link to="/contact/"><Button variant="success" className="d-inline-block mt-3" style={{"width": "100px"}}>Contact</Button></Link>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="row d-flex">
                        <div className="col col-12 col-md-6 text-right p-3">
                        <p>This page was created in <strong>React.js</strong> and <strong>Netlify Continous Development</strong>. You can check it out on Github here. Other tools used are React-bootstrap and Sass.</p>
                        <p></p>
                        <a href="https://github.com/simongussenhoven/portfolio-simon" noreferrer><Button variant="success" className="d-inline-block mt-3" style={{"width": "100px"}}>Github</Button></a>
                        </div>
                        <div className="col col-12 col-md-6">
                            <h3 className="font-50 text-left pt-0">About this page</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </FadeIn>
    );
}
export default About;
