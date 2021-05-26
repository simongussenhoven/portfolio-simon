import Blogpost from "./Blogpost";
function Blog(props) {
    console.log(props);
    return (
        <div>
            <div className="banner my-5">
                <h1>Blog</h1>
            </div>
            <div className="container">
                {props.data.map((post) => {
                    return <Blogpost postdata={post} />;
                })}
            </div>
        </div>
    );
}
export default Blog;
