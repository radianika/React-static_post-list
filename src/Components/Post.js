import React from 'react'
import User from './User'
import CommentList from './CommentList'


class Post extends React.Component{
    constructor(props){
        
        super(props)
        this.state ={
            isCommentsShowed: false
        }
        this.showComments = this.showComments.bind(this)
    }
    showComments(){
        this.setState(prev=>{
            return{isCommentsShowed: !prev.isCommentsShowed}
        })
    }


    render(){
    return(
        <section className="post">
            <User user={this.props.user}/>
            
            <main className="post-body">
                <h2 className="post-body__title">{this.props.title}</h2>
                <div>{this.props.body}</div>
                <button type="button" 
                        className="post-body__btn" 
                        onClick={this.showComments}>
                    {this.state.isCommentsShowed 
                    ? "Скрыть комментарии" 
                    : "Показать комментарии"}
                </button>

                {this.state.isCommentsShowed 
                ? <CommentList comments={this.props.comments}/> 
                : null
                }
                
            </main>
        </section>
    )
    }
}

export default Post

