import React from "react"

const Card = (props) => {
return(
    <>
       <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.price}</p>
       </div>
    </>
)
}

export default Card