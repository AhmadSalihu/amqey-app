import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
export const CollectionViewAllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background: gold;
  margin-bottom: 0px;
  margin: 3px;

  @media screen and(max-width: 800px) {
	text-align: justify(center);
  display: flex;
  align-items: unset;

  }
`;

export const TitleContainer = styled.h1`
  font-size: 20px;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const ViewAllContainer = styled.h2`
  font-size: 20px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;