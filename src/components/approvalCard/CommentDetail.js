import React from 'react'
import faker from 'faker'

const CommentDetail = props => {
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="Avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at {props.time}</span>
                </div>
                <div className="text">{faker.lorem.text()}</div>
            </div>
        </div>
    )
}

export default CommentDetail