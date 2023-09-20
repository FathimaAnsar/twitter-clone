import React from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import shik from './shik.webp';

function Tweetbox() {
  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox_input'>
                <Avatar src={shik} />
                <input placeholder="What's Happening" type='text' />
            </div>

            {/* <input className='tweetbox_imageinput' placeholder='Enter image URL' type='text'/> */}

            <Button className='tweetbox_tweetbutton'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default Tweetbox
