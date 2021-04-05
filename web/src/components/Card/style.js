import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 200px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin-bottom: 50px;
  transition: all 0.3s ease-out;
  :hover {
    height: 350px;
    margin-bottom: 0px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;
export const CardImage = styled.img`
  width: 100%;
  transition: all 0.3s ease-out;
  :hover {
    transform: scale(1.2);
  }
`;
export const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e9eae9;
`;
export const CardTextContainer = styled.div`
  margin-top: 5px;
  height: 99px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
`;
export const CardTitleText = styled.h1`
  font-size: 16px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.card.title};
`;
export const CardPriceText = styled.h2`
  font-size: 16px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.card.price};
`;
export const CardSubtitleText = styled.h3`
  font-size: 12px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.card.subtitle};
`;
export const SeemoreButtonContainer = styled.div`
  margin-top: 32px;
  width: 100%;
`;
export const SeemoreButton = styled.button`
  width: 120px;
  margin-left: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
`;
