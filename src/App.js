import React from 'react';
import './App.css';
import Post from './Components/Post'
import posts from './Data/posts'
import users from './Data/users'
import comments from './Data/comments'




class App extends React.Component {
  constructor(){
    super()
    this.state={
      posts: this.getPosts(posts, users, comments),
    }
  }
 


  getPosts(posts, users, comments) {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id)
    }));
  } 

  render(){
    return (
      <div className="App">
        {this.state.posts.map( (post) => <Post 
                title={post.title} 
                body={post.body} 
                key={post.id} 
                user={post.user}
                comments={post.comments}
              />
          )
        }
      </div>
    )
  }
}

export default App;
