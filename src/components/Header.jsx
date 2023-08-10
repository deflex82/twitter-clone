
import { useState } from "react"
import { useDispatch } from "react-redux"
import {updateState} from "./../redux/postSlice"
import styled from "styled-components"
const Container = styled.div`
width:100%;
color:white;
padding-top: 1em;

border-bottom:1px solid rgba(255,255,255,0.123);


h2{
    padding-left: 1rem;
}
.state-container{
    display: flex;
    align-items: center;
    margin-top: 10px;
    
   
    

    .foryou{
        flex:1;
        padding:1em;
        &:hover{
            background-color: rgba(255, 255, 255, 0.062);
        }
    }

    .following{
        padding:1em;
        flex:1;
        &:hover{
            background-color: rgba(255, 255, 255, 0.062);
        }
    }

    

}


.foryou,.following{
    font-size: 1.3rem;
    font-weight: 500;
    color:gray;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
}

.hrr{
    height:3px;
    border-radius: 30px;
    width:90px;
    background-color: rgba(7, 160, 255, 0.995);
    position: absolute;
    bottom:0;
    border:none;
}


    
`
const Header = () => {

    const dispatch = useDispatch();


    const [following,setfollowing] = useState(false);
  return (
   <Container>
    <h2>Home</h2>

    <div className="state-container">

        <div  onClick={()=>{

            dispatch(updateState({following}))
            setfollowing(false)

            }}   className={`foryou ${following?"":"extra"}`}>
            
            For You
            {following?"":<hr className="hrr"/>}
        </div>
        <div onClick={()=>{
               dispatch(updateState({following}))
            setfollowing(true)}
            } className={`following ${following?"extra":""}`} >
            Following
            {following?<hr className="hrr"/>:""}
            </div>

    </div>
   </Container>

  )
}

export default Header