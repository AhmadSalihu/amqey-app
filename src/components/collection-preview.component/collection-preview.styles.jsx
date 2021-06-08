import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const CollectionViewAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97.6vw;
  background: gold;
  margin-bottom: 0px;
  margin: 0.5px;

  @media screen and(max-width: 800px) {
  display: flex;
  justify-self: space-between;
  align-items: center;
  background: gold;
  margin-bottom: -10px;
  margin: 3px;
}
`;

export const TitleContainer = styled.h1`
  font-size: 16px;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const ViewAllContainer = styled.h2`
  font-size: 16px;
  align-items: unset;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
`;