import React, { useEffect, useState } from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'
import FlipMove from 'react-flip-move'
import db from './firebase'

function Feed() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
      //run this code when feed loads, dont run after. only run again if variables in [] changes
      db.collection('posts').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => doc.data()))))
    },[])
  return (
    <div className='feed'>
        {/* header */}
        <div className='feed_header'>
            <h2>Home </h2>
        </div>
       
        <Tweetbox/>

      <FlipMove>
        {posts.map(post =>(
        <Post
        key={post.text}
         displayName={post.displayName} 
         username={post.username}
        verified={post.verified}
        text={post.text} 
        image={post.image} 
        avatar={post.avatar} 
        />))}
      </FlipMove>
      
    </div>
  )
}

export default Feed
