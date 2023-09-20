import React from 'react'
import shik from './shik.webp'
import { Avatar} from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import './Post.css'

function Post({displayName,username,verified,text,image,avatar}) {

  return (
    <div className='post'>

        <div className='post_avatar'>
            <Avatar src={shik} />
        </div>

        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>
                        Fathima Ansar{" "}
                        <span className='post_headerSpecial'>
                            <VerifiedIcon className='post_badge'/> @fathimansar
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>I'm building a twitter clone with react.</p>
                </div>
            </div>
            <img src='https://media.tenor.com/C0korfsH_CUAAAAC/mind-blown-mind-blowing.gif' alt=''/>
            <div className='post_footer'>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <ShareIcon fontSize='small'/>

            </div>
            

        </div>
      
    </div>
  )
}

export default Post
