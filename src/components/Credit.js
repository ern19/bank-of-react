import React from "react"


const Credit = ({description, amount, date}) => {
    return (
        <div>
            <h3>{description}</h3>
            <h4>{amount}</h4>
            <p>{date}</p>
        </div>
    )
}

export default Credit