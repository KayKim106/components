import React from "react"

const Message = (props) => {
    
    return(
        <div className="ui message">
            <div className="header">{props.header}</div>
            {props.text}
        </div>
    )
}
export default Message;