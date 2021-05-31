import { Card, CardGroup, Button } from "react-bootstrap";
function Courses() {
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">Courses</h1>
            </div>
            <CardGroup className="container mt-5 text-center">
                <Card className="m-2 shadow">
                    <div className="p-3">
                        <Card.Img variant="top" src="../images/winc.png" className="p-5" />
                    </div>
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title>Front End Development</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Winc Academy</Card.Subtitle>
                        <Card.Text>In March 2021 I completed the front-end development course at Winc Academy, covering HTML, CSS, Javascript and React.js</Card.Text>
                        <small className="text-muted text-center mb-3">Completed March 2021</small>
                        <Button className="d-inline-block align-bottom">View certificate</Button>
                    </Card.Body>
                </Card>
                <Card className="m-2 shadow">
                    <div className="p-3">
                        <Card.Img variant="top" src="../images/vue.png" className="p-5" />
                    </div>
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title className="text-center">Vue.js Course</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Codecademy</Card.Subtitle>
                        <Card.Text>During the start of 2021 I took the Vue.js course on codecademy, looking forward to experimenting with it.</Card.Text>
                        <small className="text-muted text-center mb-3">Completed March 2021</small>
                        <Button className="d-inline-block align-bottom">View certificate</Button>
                    </Card.Body>
                </Card>
                <Card className="m-2 shadow">
                    <div className="p-3">
                        <Card.Img variant="top" src="../images/bootstrap.png" className="p-5" />
                    </div>
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title className="text-center">Bootstrap Course</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Codecademy</Card.Subtitle>
                        <Card.Text>The Bootstrap course of Codecademy comes in handy, althoug react-bootstrap (used in this page) is slightly different.</Card.Text>
                        <small className="text-muted text-center mb-3">Completed March 2021</small>
                        <Button className="d-inline align-bottom">View certificate</Button>
                    </Card.Body>
                </Card>
                <Card className="m-2 shadow">
                    <div className="p-3">
                        <Card.Img variant="top" src="../images/jquery.png" className="p-5" />
                    </div>
                    <Card.Body className="justify-content-center d-flex flex-column">
                        <Card.Title className="text-center">jQuery Course</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Codecademy</Card.Subtitle>
                        <Card.Text>I've done the jQuery course earlier, but took a little refresh in march 2021.</Card.Text>
                        <small className="text-muted text-center mb-3">Completed March 2021</small>
                        <Button>View certificate</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}
export default Courses;
