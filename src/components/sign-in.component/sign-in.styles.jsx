import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;

  @media screen and(max-width: '800px'){
    width: auto;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  & hover{
    border: none;
  }
`;

export const CustomLink = styled(Link)`

`; 