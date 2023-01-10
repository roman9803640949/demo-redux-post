import React from 'react'
import {useSelector} from "react-redux"
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
const posts = useSelector(selectAllPosts)
  return (
    <div>
        <h2>Posts</h2>
        {posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3> 
            <p>{post.content.substring(0,100)}</p>
        </article>
        ))}
    </div>
  )
}

export default PostsList
