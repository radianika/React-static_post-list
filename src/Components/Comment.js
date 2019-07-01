import React from 'react'

function Comment(props){
    return (
        <li className="comment">
            <div className="comment__info">
                <p className="comment__author">{props.name}</p>
                <p>{props.email}</p>
            </div>
            <div className="comment__text">
                {props.text}
            </div>
        </li>
    )
}
export default Comment