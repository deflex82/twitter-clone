import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import styled from "styled-components"
import SidebarOption from '../utils/SidebarOption';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar, Button } from '@mui/material';
const Container = styled.div`
flex:0.22;
position: relative;

.Profile{
    width:100%;
    display: flex;
    
    gap:0.5rem;
    color:white;
    position: fixed;
    bottom: 10px;
    
    
    .profile-section{
        display: flex;
        flex-direction: column;
        gap:0.4rem;

        

    }

    .more{
    outline:none;
    border:none;
    background: transparent;
    color:gray;
    margin-left:60px;
    
}
.name{
    font-size: 1.3rem;
    color:rgba(255, 255, 255, 0.87);
    font-family: 'Times New Roman', Times, serif;
}
.username{
    color:gray;
    font-size: 1.2rem;
}

}



    
`

const Sidebar = () => {
  return (
    <Container>
        <TwitterIcon sx={{color:"white",fontSize:"2rem",marginBottom:"2rem",marginTop:"1rem"}}/>
        <SidebarOption Icon={HomeOutlinedIcon} Text="Home"/>
        <SidebarOption Icon={SearchOutlinedIcon} Text="Search"/>
        <SidebarOption Icon={NotificationsNoneOutlinedIcon} Text="Notifications"/>
        <SidebarOption Icon={MailOutlineOutlinedIcon} Text="Messages"/>
        <SidebarOption Icon={PersonIcon} Text="Profile"/>
        <SidebarOption Icon={VerifiedOutlinedIcon} Text="Verified"/>


        <Button sx={{width:"70%",borderRadius:"30px",fontSize:"1rem",marginTop:"2rem",fontWeight:"600",padding:"0.6rem"}} variant='contained'>Tweet</Button>

        <div className="Profile">
            <Avatar src='https://image.cnbcfm.com/api/v1/image/107260606-1687408024023-gettyimages-1258742027-AFP_33K29V6.jpeg?v=1691413056&w=929&h=523&vtcrop=y' sx={{
                width:"50px",
                height:"50px"
            }}/>

            <div className="profile-section">
                <p className="name">Elon Musk</p>
                <p className="username">@realelonmusk</p>
            </div>

            <button className='more'><MoreHorizOutlinedIcon sx={{color:"white",fontSize:"1.5rem"}}/></button>


        </div>


    </Container>
  )
}

export default Sidebar