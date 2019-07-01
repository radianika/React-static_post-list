import React from 'react'


function User(props){
    return (
        <aside className="post-aside">
                <p className="post-aside__author">{props.user.name}</p>
                <p className="post-aside__info">{props.user.email}</p>
                <p className="post-aside__info">{props.user.address.city}</p>
        </aside>
    )
}

export default User