import styled from "styled-components"
import Sidebar from "../components/Sidebar"

import { Outlet } from "react-router-dom"
import Widgets from "../components/Widgets"

const Container = styled.div`
    width:1300px;
    margin:0 auto;
    display: flex;
    
    min-height:100vh;
    .Outlet{
    flex:0.5;
    border-right:1px solid rgba(255,255,255,0.234);
    border-left:1px solid rgba(255,255,255,0.234);
}

    

`

const Home = () => {
  return (
    <>
    <Container>
    <Sidebar/>

    <div className="Outlet">
    <Outlet/>

    </div>

    
    <Widgets/>

    </Container>
      
    </>

  )
}

export default Home