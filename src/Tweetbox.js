import React, { useState }  from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import shik from './shik.webp';
import db from './firebase';


function Tweetbox() {
  const[tweetMsg, setTweetMsg]= useState(''); //hook for tweet
  const[tweetImage, setTweetImage]= useState(''); //hook for image


  const sendTweet = e =>{
    e.preventDefault();  //stops the refresh

    db.collection('posts').add({
      displayName: 'Fathima Ansar',
      username: 'fathimansar',
      verified: true,
      text: tweetMsg,
      image: tweetImage,
      avatar: shik
    });

    setTweetMsg("");
    setTweetImage("");

  };

  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar src={shik} />
                {/* setting typed value as tweetmsg */}
                <input onChange={e => setTweetMsg(e.target.value)} value={tweetMsg} placeholder="What's Happening" type='text' /> 
            </div>

            <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className='tweetbox_imageinput' placeholder='Enter image URL' type='text'/>

            <Button onClick={sendTweet} type='submit' className='tweetbox_tweetbutton'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default Tweetbox
