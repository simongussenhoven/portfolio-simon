import Blogpost from "./Blogpost";
function Blog(props) {
    const categories = [];
    props.posts.forEach((post) => {
        post.categories.forEach((cat) => {
            if (!categories.includes(cat)) {
                categories.push(cat);
            }
        });
    });
    console.log(props);
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">Blog</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="posts my-5 d-flex flex-column col-12 col-md-8">
                        {props.data.map((post) => {
                            return <Blogpost postdata={post} filterPosts={props.filterPosts} />;
                        })}
                    </div>
                    <div className="col-12 col-md-4 my-5 d-flex flex-column">
                        <div className="card p-3 shadow">
                            <h3>Categories</h3>
                            <div className="card-text d-flex flex-row flex-wrap">
                                {categories.map((cat) => {
                                    return (
                                        <div>
                                            <button
                                                onClick={() => {
                                                    props.filterPosts(cat);
                                                }}
                                                className="btn border btn-sm m-1 cat-button">
                                                {cat}
                                            </button>
                                        </div>
                                    );
                                })}
                                <button className="btn border btn-sm m-1 cat-button">Clear filter</button>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blog;
