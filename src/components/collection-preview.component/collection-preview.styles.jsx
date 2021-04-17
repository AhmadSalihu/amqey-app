import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin: 25px;
  padding: 15px auto;
`;

export const CollectionViewAllDivContainer = styled.div`
 display: flex;
 justify-content: space-between;
 font-size: 14px;
 text-transformed: lowercase;
  Background-color: orange;
  margin-bottom: 10px;
  margin: 3px;
  padding: 10px 10px;
  shadow: 10px;
`;
export const TitleContainer = styled.span`
font-size: 20px;
`;

export const ViewAllContainer = styled.span`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;
export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;  
