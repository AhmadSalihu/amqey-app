import styled from "styled-components";


export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and(max-width: '800px'){
    width: auto;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
