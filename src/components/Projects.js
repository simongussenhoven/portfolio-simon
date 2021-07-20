import { Card, CardGroup, Button } from "react-bootstrap";
function Projects () {
    return (
        <div>
            <section>
             <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">Projects</h1>
            </div>
            </section>
            <section className="my-3">
            <CardGroup className="container mt-5 text-center">
                <Card className="m-2 shadow">
                    <Card.Img variant="top" src="../images/projects/sailing/marie.jpg" className="p-0 top-fit" />
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title>Unnamed ship</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Big boat</Card.Subtitle>
                        <Card.Text>We're about to buy this ship from a friend of my dad. Looking forward to many days of sailing, and probably quite some maintenance.</Card.Text>
                        <Button className="btn btn-secondary mt-auto">To be created</Button>
                    </Card.Body>
                </Card>
                <Card className="m-2 shadow">
                    <Card.Img variant="top" src="../images/projects/sailing/koh-i-noor.jpg" className="p-0 top-fit" />
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title>Koh-I-Noor</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Little boat</Card.Subtitle>
                        <Card.Text>This little sailing sloop has been in the family for longer than I have. Check out the progress here.</Card.Text>
                        <Button className="btn btn-secondary mt-auto">To be created</Button>
                    </Card.Body>
                </Card>
                <Card className="m-2 shadow">
                    <Card.Img variant="top" src="../images/projects/bicycles/orbea.jpg" className="p-0 top-fit" />
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title>Bicycles</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">I like to tinker</Card.Subtitle>
                        <Card.Text>I seem to spend more time fixing the bike, rather than cycling. However, here's some pictures.</Card.Text>
                        <Button className="btn btn-secondary mt-auto">To be created</Button>
                    </Card.Body>
                </Card>
                <Card className="m-2 shadow">
                    <Card.Img variant="top" src="../images/projects/pc/pc.png" className="p-0 top-fit" />
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title>PC</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">My little (gaming) pc</Card.Subtitle>
                        <Card.Text>It's a pc. It hasn't the most amazing components but it does the job.</Card.Text>
                        <Button className="btn btn-secondary mt-auto">To be created</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup className="container mt-5 text-center">
                <Card className="m-2 shadow">
                    <Card.Img variant="top" src="../images/projects/sailing/volendam.png" className="p-0 top-fit" />
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title>Travelings</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Remember traveling?</Card.Subtitle>
                        <Card.Text>When we were allowed to travel, I periodically travelled. See some descriptions and photograps by clicking the button.</Card.Text>
                        <Button className="btn btn-secondary">To be created</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            </section>
        </div>
    )
}
export default Projects