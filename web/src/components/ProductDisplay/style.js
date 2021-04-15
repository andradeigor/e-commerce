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
export const ProductContainerDivider = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProductDivider = styled.div`
  height: 80%;
  background-color: ${(props) => props.theme.colors.background};
  width: 2px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const ProductDescriptionTextContainer = styled.div`
  justify-content: center;
  width: 80%;
  margin-top: 10%;
  height: 50px;
`;
export const ProductDescriptionTitle = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.colors.card.title};
`;

export const ProductSizeArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductSizeContainer = styled.div`
  width: 80%;
  height: 80px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const ProductSizeItem = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  border: solid 2px ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : "none"};
  color: ${(props) =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;
export const ProductPriceArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;
export const ProductPriceItem = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ProductButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductButton = styled.button`
  margin-top: 15%;
  width: 80%;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  :hover {
    position: relative;
    transform: translateY(-0.5px);
  }
  :active {
    position: relative;
    transform: translateY(-1px);
  }
`;
