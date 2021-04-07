import styled from 'styled-components';
import{ Link} from 'react-router-dom';


export const HeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: inherit;
  margin-bottom: 15px;
  background-color: #f8c408;
  color: rgb(44, 56, 220);
  font-family: Open Sans Condensed;
  box-shadow: 10rem rgba(0,0,0,.075) !important;
`;
  
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
`;

