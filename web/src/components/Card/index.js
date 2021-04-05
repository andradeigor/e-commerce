import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardDivider,
  CardTextContainer,
  CardTitleText,
  CardPriceText,
  CardSubtitleText,
  SeemoreButtonContainer,
  SeemoreButton,
} from "./style";
import ProductPath from "../../assets/Products/generic1.png";
const Card = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={ProductPath} />
      </ImageContainer>
      <CardDivider />
      <CardTextContainer>
        <CardTitleText>Gray T-Shirt</CardTitleText>
        <CardPriceText>R$:80,00</CardPriceText>
        <CardSubtitleText>Ou em até 12x sem juros</CardSubtitleText>
        <SeemoreButtonContainer>
          <SeemoreButton>Ver Opções</SeemoreButton>
        </SeemoreButtonContainer>
      </CardTextContainer>
    </CardContainer>
  );
};

export default Card;
