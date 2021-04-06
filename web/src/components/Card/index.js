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
const Card = ({ product }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={product.imagePath} />
      </ImageContainer>
      <CardDivider />
      <CardTextContainer>
        <CardTitleText>{product.title}</CardTitleText>
        <CardPriceText>R$:{product.price}</CardPriceText>
        <CardSubtitleText>{product.subtitle}</CardSubtitleText>
        <SeemoreButtonContainer>
          <SeemoreButton>Ver Opções</SeemoreButton>
        </SeemoreButtonContainer>
      </CardTextContainer>
    </CardContainer>
  );
};

export default Card;
