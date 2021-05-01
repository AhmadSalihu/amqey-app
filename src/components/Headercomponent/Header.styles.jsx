import styled from 'styled-components';
import{ Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: goldenrod;

  
  @media screen and (min-width: 800px) {
    height: 40px;
  }
 
`;

export const SignInAndRegisterContainer = styled(Link)`
  display: flex;

   @media screen and (min-width: 800px) {
    width: 50%;
    padding: 0;
  }
`

export const LogoContainer = styled(Link)`
    height: 30px;
    width: 100%;
    padding: 25px;

   @media screen and(max-width: 800px) {
     
   }

`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

   @media screen and(max-width: 800px) {
    width: 100%;
    display: inline-block;
  } 
`;
    
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-Decoration: none;
`;

export const LogoImage = styled.img`
   width: 100px;
   height: 50px;

    @media screen and(max-width: 800px) {
    width: 80%
  }
`

export const SubHeaderComponentStyle = styled.div`
 width: auto;
 margin: 0px 0px 0px 0px;
`