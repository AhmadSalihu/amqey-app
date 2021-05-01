import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  height: 200px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 5.5px 10px;
  overflow: hidden;
  box-sizing: content-box;
  border: 10px solid goldenrod;
  border-radius: 15px;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
	 height: 70px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    opacity: 0.7;
    position: absolute;
    overflow: hidden;
`;

export const ContentTitle = styled.span`
			font-weight: bolder;
      margin-bottom: 6px;
      font-size: 15px;
      color: #4a4a4a;
      position: relative;
      overflow: hidden;
`;

export const ContentSubtitle = styled.span`
   		font-weight: bold;
      font-size: 12px;
      color: black;
      position:-ms-page;
      overflow: hidden;
`;