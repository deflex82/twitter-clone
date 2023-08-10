import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
const Container = styled.div`
display: flex;
align-items: center;
padding:0.7rem 0;
transition: 0.3ms ease-in-out;
&:hover{
    .text{
        font-weight: bold;
    }
    background-color: rgba(255, 255, 255, 0.048);
    border-radius: 20px;
}


gap:1rem;

p{
    color:white;
    font-weight: 500;
    font-size: 1.5rem;
}
    
`

const SidebarOption = ({Icon,Text}) => {
  return (
    <Container>
        <Icon sx={{color:"white",fontSize:"2rem"}}/>
        <p className="text"><NavLink style={{textDecoration:"none",color:"inherit"}} to="*" >{Text}</NavLink></p>
        

    </Container>
  )
}

export default SidebarOption