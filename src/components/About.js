function About() {
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">About me</h1>
            </div>
            <section class="container text-left p-4 mt-5">
                <h2>General</h2>
                <p>Hi, I'm Simon, an aspiring front-end developer. Last year I took the front-end development course at Winc Academy (Amsterdam) and I'm looking for project to practise my skills:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.JS</li>
                    <li>Vue.JS</li>
                    <li>Angular.JS</li>
                    <li>And more...</li>
                </ul>
                <hr />
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
