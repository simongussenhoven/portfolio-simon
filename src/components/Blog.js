import Blogpost from "./Blogpost";
function Blog(props) {
    console.log(props);
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1">Blog</h1>
            </div>
            <div className="container posts my-5 d-flex">
                {props.data.map((post) => {
                    return <Blogpost postdata={post} />;
                })}
            </div>
        </div>
    );
}
export default Blog;
