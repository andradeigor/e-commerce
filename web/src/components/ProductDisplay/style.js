import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 1000px;
  }
`;

export const Product = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImageArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 500px;
  }
`;
export const ProductContainerDivider = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
    height: 0px;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0px;
    margin-top: 10%;
    width: 400px;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

export const ProductDescriptionTextContainer = styled.div`
  justify-content: center;
  width: 80%;
  margin-top: 10%;
  height: 50px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 0px;
  }
`;
export const ProductDescriptionTitle = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.colors.card.title};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 28px;
    text-align: center;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    text-align: center;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 30px;
  }
`;
export const ProductButtonText = styled.span`
  width: 100%;
  height: 100;
  font-size: 24px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 18px;
  }
`;
