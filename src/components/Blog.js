import Blogpost from "./Blogpost";
function Blog(props) {
    const categories = [];
    props.data.forEach((post) => {
        post.categories.forEach((cat) => {
            if (!categories.includes(cat)) {
                categories.push(cat);
            }
        });
    });
    return (
        <div>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1">Blog</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="posts my-5 d-flex flex-column col-12 col-md-9">
                        {props.data.map((post) => {
                            return <Blogpost postdata={post} />;
                        })}
                    </div>
                    <div className="col-12 col-md-3 my-5 d-flex flex-column">
                        <div className="card p-4">
                            <h3>Categories</h3>
                            <div className="card-text">
                                {categories.map((cat) => {
                                    return <button className="btn btn-secondary bg-blue m-1 p-1">{cat}</button>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blog;
