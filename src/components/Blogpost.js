function Blogpost(props) {
    return (
        <div className="post border rounded p-1 m-0 p-md-3 col-12 d-flex flex-column flex-md-row-reverse text-left mb-2">
            <div id="blog-image" className="col-12 col-md-5 my-2">
                <img class="img-fluid border rounded w-100 mt-2" src={props.postdata.image} alt={props.postdata.image} />
            </div>
            <div id="blog-text" className="col-12 col-md-7">
                <h2 className="py-2">{props.postdata.title}</h2>
                <p>
                    {props.postdata.categories.map((cat) => {
                        return (
                            <button
                                onClick={() => {
                                    props.filterPosts(cat);
                                }}
                                className="btn border btn-sm m-1 cat-button">
                                {cat}
                            </button>
                        );
                    })}
                </p>
                <p>Create date: {props.postdata.create_date}</p>
                {props.postdata.paragraphs.map((par) => {
                    return <p>{par}</p>;
                })}
            </div>
        </div>
    );
}
export default Blogpost;
