function Blogpost (props) {
    return (
        <div className="post border rounded p-5 m-1">
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