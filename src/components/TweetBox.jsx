import { Avatar, Button } from '@mui/material'

import styled from "styled-components"
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Container = styled.div`

color:white;
width:100%;
padding:1rem;
display: flex;
gap:1rem;
border-bottom:1px solid rgba(255, 255, 255, 0.155);
border-top:1px solid rgba(255, 255, 255, 0.128); ;

.tweetbody{
    flex:1;
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    
    

    .ta{
        width:100%;
        resize: none;
        border:none;
        outline:none;
        background: transparent;
        color:white;
        font-size: 1.2rem;
        overflow: auto;
        border-bottom: 1px solid rgba(255, 255, 255, 0.11);
        margin-bottom:10px;
    }
    .ta::placeholder{
        font-size: 1.3rem;
    }
    .ta::-webkit-scrollbar {
  display: none;
}

}
.tweet-f{
    display: flex;
    align-items: center;
    gap:0.5rem;
    width:100%;
    position: relative;
}

`

const TweetBox = () => {
  return (
    <Container>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPM2ak9INAl5TYsdWOsuetOYro3CZyiMjPaGHHgdyDgNbixSBkwvaq4l-yAmPkiuTJfZCtA&s=10" sx={{width:"55px",height:"55px"}}/>

        <div className="tweetbody">
            <textarea placeholder="what's happening now ?" className='ta'/>

          

            <div className="tweet-f">

                <InsertPhotoOutlinedIcon  sx={{color:"rgba(0, 156, 223, 0.991)"}}/>
                <GifBoxOutlinedIcon  sx={{color:"rgba(0, 156, 223, 0.991)"}} />
                <PollOutlinedIcon  sx={{color:"rgba(0, 156, 223, 0.991)"}}  />
                <EmojiEmotionsOutlinedIcon sx={{color:"rgba(0, 156, 223, 0.991)"}} />
                <ScheduleOutlinedIcon  sx={{color:"rgba(0, 156, 223, 0.991)"}} />
                <LocationOnOutlinedIcon sx={{color:"rgba(0, 156, 223, 0.991)"}}/>

                <Button variant='contained' sx={{padding:"0.6rem",position:"absolute",right:"5px",borderRadius:"20px"}}>Tweet</Button>
                
                </div>
        </div>

    </Container>
  )
}

export default TweetBox;