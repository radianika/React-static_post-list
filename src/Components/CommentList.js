import React from 'react'
import Comment from './Comment'

function CommentList(props){
    return(
        <ul className="comment-list">{
            props.comments.map((comment)=> <Comment name={comment.name} email={comment.email} text={comment.body} key={comment.id}/>)
        }</ul>

    )

}



export default CommentList