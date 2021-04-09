import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Product = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
`;

export const ProductImageArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProducImageContainer = styled.div`
  width: 80%;
  margin: 10%;
  overflow: hidden;
`;
export const ProductImage = styled.img`
  width: inherit;
  transition: ease 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;
export const ProductDescriptionArea = styled.div`
  width: 50%;
  height: 100%;
`;

export const ProductDescriptionTextContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 10%;
  height: 50px;
`;
export const ProductDescriptionTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.colors.card.title};
`;
