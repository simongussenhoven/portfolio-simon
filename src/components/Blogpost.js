import React from 'react'
import FadeIn from 'react-fade-in'
import { v4 as uuidv4 } from 'uuid';

function Blogpost(props) {
    return (
        <FadeIn>
            <div className="post border rounded p-1 m-0 p-md-3 col-12 d-flex flex-column flex-md-row-reverse text-left mb-2 shadow bg-white">
            <div id="blog-image" className="col-12 col-md-5 my-2">
                <img className="img-fluid border rounded w-100 mt-2" src={props.postdata.image} alt={props.postdata.image} />
                <p className="text-muted img-attr text-center">{props.postdata.image_attr}</p>
            </div>
            <div id="blog-text" className="col-12 col-md-7">
                <h2 className="py-2">{props.postdata.title}</h2>
                <p>
                    {props.postdata.categories.map((cat) => {
                        return (
                            <button key={uuidv4()}
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
                    return <p key={uuidv4()}>{par}</p>;
                })}
            </div>
        </div>
        </FadeIn>
    );
}
export default Blogpost;
