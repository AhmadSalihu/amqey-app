import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons  from 'react-icons/ai'
import styled from 'styled-components'
import {sidebarData} from './VendorSidebar.data'
import SubMenu from './subMenu'


const Nav = styled.div`
background: #12177c;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center; 
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between; 
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
justify-content: flex-start;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;


const VendorPage = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar)
	return (
		<>  
			<Nav>
				<NavIcon>
					<FaIcons.FaBars  onClick={showSidebar} />
                </NavIcon>
                <ImageIcon src='/images/device.jpg' alt="user" />
			</Nav>
			<SidebarNav sidebar={sidebar}>
				<SidebarWrap>
					<NavIcon>
				<AiIcons.AiOutlineClose onClick={showSidebar}/>
					</NavIcon>
					{sidebarData.map((item, index) => {
						return <SubMenu item={item} key={index} />
					})}
				</SidebarWrap>
			</SidebarNav>
		</>
	)
}


export default VendorPage





// import React, { useState } from 'react'
// import './main'

// import './vendor.styles.scss'


// const VendorPage = () => {
// 	const [sidebar, setSidebar] = useState(false);

// 	const showMenu = () => setSidebar(!sidebar)

// 	return (
// 	<>
// 	  <section className="header">
//             <div className="header__container">
//                 <img src="/amqey-images/computers.jpg" alt="" className="header__img" />

//                 <a href="/" className="header__logo">Amqey-Clients</a>
    
//                 <div className="header__search">
//                     <input type="search" placeholder="Search" className="header__input" />
//                     <i className='bx bx-search header__icon'></i>
//                 </div>
    
//                 <div className="header__toggle" onClick={showMenu}>
//                     <i className='bx bx-menu' id="header-toggle" sidebar={sidebar}></i>
//                 </div>
//           </div>
//         </section>
//         <div className="nav" id="navbar">
//             <nav as="div" className="nav__container">
//                 <div>
//                     <a href="/" className="nav__link nav__logo">
//                         <i className='bx bxs-disc nav__icon' ></i>
//                         <span className="nav__logo-name">Bedimcode</span>
//                     </a>

//                     <div className="nav__list">
//                         <div className="nav__items">
//                             <h3 className="nav__subtitle">Profile</h3>
    
//                             <a href="/" className="nav__link active">
//                                 <i className='bx bx-home nav__icon' ></i>
//                                 <span className="nav__name">Home</span>
//                             </a>
                            
//                             <div className="nav__dropdown">
//                                 <a href="/" className="nav__link">
//                                     <i className='bx bx-user nav__icon' ></i>
//                                     <span className="nav__name">Profile</span>
//                                     <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
//                                 </a>

//                                 <div className="nav__dropdown-collapse">
//                                     <div className="nav__dropdown-content">
//                                         <a href="/" className="nav__dropdown-item">Passwords</a>
//                                         <a href="/" className="nav__dropdown-item">Mail</a>
//                                         <a href="/" className="nav__dropdown-item">Accounts</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <a href="/" className="nav__link">
//                                 <i className='bx bx-message-rounded nav__icon' ></i>
//                                 <span className="nav__name">Messages</span>
//                             </a>
//                         </div>
    
//                         <div className="nav__items">
//                             <h3 className="nav__subtitle">Menu</h3>
    
//                             <div className="nav__dropdown">
//                                 <a href="/" className="nav__link">
//                                     <i className='bx bx-bell nav__icon' ></i>
//                                     <span className="nav__name">Notifications</span>
//                                     <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
//                                 </a>

//                                 <div className="nav__dropdown-collapse">
//                                     <div className="nav__dropdown-content">
//                                         <a href="/" className="nav__dropdown-item">Blocked</a>
//                                         <a href="/" className="nav__dropdown-item">Silenced</a>
//                                         <a href="/" className="nav__dropdown-item">Publish</a>
//                                         <a href="/" className="nav__dropdown-item">Program</a>
//                                     </div>
//                                 </div>

//                             </div>

//                             <a href="/" className="nav__link">
//                                 <i className='bx bx-compass nav__icon' ></i>
//                                 <span className="nav__name">Explore</span>
//                             </a>
//                             <a href="/" className="nav__link">
//                                 <i className='bx bx-bookmark nav__icon' ></i>
//                                 <span className="nav__name">Saved</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <a href="/" className="nav__link nav__logout">
//                     <i className='bx bx-log-out nav__icon' ></i>
//                     <span className="nav__name">Log Out</span>
//                 </a>
//             </nav>
//         </div>
// 		</>
// 	)
// };

// export default VendorPage
