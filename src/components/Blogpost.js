function Blogpost (props) {
    return (
        <div className="post">
            <h2>{props.postdata.title}</h2>
            {props.postdata.paragraphs.map(par => {
                return(
                    <p>{par}</p>
                )
            })}
        </div>
    )
}
export default Blogpost