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
import { Link } from "react-router-dom";
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
          <Link to={`/item/${product.id}`}>
            <SeemoreButton>Ver Opções</SeemoreButton>
          </Link>
        </SeemoreButtonContainer>
      </CardTextContainer>
    </CardContainer>
  );
};

export default Card;
