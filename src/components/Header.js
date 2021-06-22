import { Button } from "react-bootstrap";
function Header() {
    return (
        <header className="bg-dark vh-100 d-flex align-items-center justify-content-center masthead">
            <div className="masthead__heading d-flex flex-column">
                <div className="row d-flex flex-column mx-2">
                    <h1 className="display-1 text-light text-center">Hi! I'm Simon</h1>
                    <h2 className="display-3 text-light text-center">Aspiring front end developer</h2>
                </div>
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-4 col-md-2">
                        <Button className="btn w-100">Contact</Button>
                    </div>
                    <div className="col-4 col-md-2">
                        <Button className="btn w-100 text-nowrap">About me</Button>
                    </div>  
                </div>
            </div>
        </header>
    );
}
export default Header;
