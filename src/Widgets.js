import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input' >
        <SearchIcon className='widgets_searchIcon'/>
        <input placeholder='Search Twitter' type='text'/>
      </div>

      <div className='widgets_widgetContainer'>
        <h2>
            What's happening
        </h2>
        <TwitterTweetEmbed tweetId='1703824193861964236'/>
        <TwitterTimelineEmbed sourceType='profile' screenName='dallitsky' options={{height:400}}/>
        <TwitterShareButton options={{text:"#reactjs is awesome", via:'fathimansar'}}/>

      </div>

    </div>
  )
}

export default Widgets
