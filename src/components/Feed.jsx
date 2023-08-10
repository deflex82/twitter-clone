
import styled from "styled-components"
import Header from './Header'
import TweetBox from './TweetBox'
import FollowingPost from "./FollowingPost"
import ForYou from "./ForYou"
import { useSelector } from "react-redux"
const Container = styled.div`
flex:0.5;
width:100%;

`
const Feed = () => {
    
    const choice = useSelector(state=>state.postchooser.following);
    console.log(choice);
  return (
    <Container>
        <Header/>
        <TweetBox/>


        {
            choice?  <FollowingPost/>:
            <ForYou/>
        }

      
    </Container>
  )
}

export default Feed