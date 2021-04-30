import styled from 'styled-components';
import{ Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-shrink: inherit;
  margin-bottom: 15px;
  background-color: #f8c408;
  color: black;
  font-family: Open Sans Condensed;
`;

export const SignInAndRegisterContainer = styled(Link)`
  justify-content: space-around
`
  
export const LogoContainer = styled(Link)`
    height: 30%;
    width: 30px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
`;
    
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-Decoration: none;
`;

export const LogoImage = styled.img`
   width: 100px;
   height: 50px;
`

export const SubHeaderComponentStyle = styled.div`
 width: auto;
 margin: 0px 0px 0px 0px;
`