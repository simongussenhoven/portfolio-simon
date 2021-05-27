function Blogpost(props) {
    return (
        <div className="post border rounded p-2 p-md-5 m-1 col-12 d-flex flex-column flex-md-row-reverse text-left">
            <div id="blog-image" className="col-12 col-md-5 my-3">
                <img class="img-fluid border rounded" src={props.postdata.image} alt={props.postdata.image}/>
            </div>
            <div id="blog-text" className="col-12 col-md-7">
                <h2 className="pb-3">{props.postdata.title}</h2>
                {props.postdata.paragraphs.map((par) => {
                    return <p>{par}</p>
                })}
            </div>
            
        </div>
    );
}
export default Blogpost;
