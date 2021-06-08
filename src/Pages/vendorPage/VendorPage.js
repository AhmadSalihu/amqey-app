import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons  from 'react-icons/ai'
import * as RiIcons  from 'react-icons/ri'
import styled from 'styled-components'
import {sidebarData} from './VendorSidebar.data'
import SubMenu from './subMenu'


const DashBoardContainer = styled.div`
margin: 0;
padding: 0;
background: lightgrey;
width: 100vw;
height: 100vh;
margin-bottom: 20px;
`;

const Nav = styled.div`
background: #ffffff;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center; 
 box-shadow: 2px 2px 12px rgb(47, 47, 47,0.40);
`;

const NavIcon = styled(Link)`
box-shadow: 10px solid #fff;
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px 
`;

const ImageIcon = styled.img`
  margin-right: 2rem;
  display: flex;
  justify-content: flex-end;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`

const SidebarNav = styled.div`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const LogOutIcon = styled.div`
display: flex;
align-items: flex-end

`;

const CardContainer = styled.div`
  margin: 0;
  padding: 0;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: 2rem;
  margin-top: 20px; 

   @media screen and (max-width: 800px) {
    display: block;
    justify-content: space-between;
  }
`;
const PaperContainer = styled.div`
 background: #ffffff;
 box-shadow: 2px 2px 12px rgb(47, 47, 47,0.40);
 border-radius: 5px;
`;

const PaperCard = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 padding: 10px;
 width: 200px;
 height: 100px;
`;

const PaperDiv = styled.div`

`;

const VendorPage = () => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar)

	return (
		<DashBoardContainer>  
            <Nav>
				<NavIcon to="#">
               <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <ImageIcon src='/images/device.jpg' alt="user" />
			</Nav>
			<SidebarNav sidebar={sidebar}>
				<SidebarWrap>
					<NavIcon to="#">
				<AiIcons.AiOutlineClose onClick={showSidebar} />
					</NavIcon>
					{sidebarData.map((item, index) => {
						return <SubMenu item={item} key={index} />
					})}
                </SidebarWrap>
                <LogOutIcon>
                   <RiIcons.RiLogoutCircleLine />
                </LogOutIcon>
            </SidebarNav>
            <CardContainer>
            <PaperContainer>
            <PaperCard>  
                <PaperDiv>
                  Fulfilled Order  
               </PaperDiv> 
            </PaperCard>
            </PaperContainer>
            <PaperContainer>
            <PaperCard>  
                <PaperDiv>
                  Fulfilled Order  
               </PaperDiv> 
            </PaperCard>
            </PaperContainer>
            <PaperContainer>
            <PaperCard>  
                <PaperDiv>
                  Fulfilled Order  
               </PaperDiv> 
            </PaperCard>
            </PaperContainer>
            <PaperContainer>
            <PaperCard>  
                <PaperDiv>
                  Fulfilled Order  
               </PaperDiv> 
            </PaperCard>
            </PaperContainer>
            </CardContainer>
		</DashBoardContainer>
	)
}

export default VendorPage


