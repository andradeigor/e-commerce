import {
  BannerContainer,
  BannerLeftTop,
  TextAreaContainer,
  TextArea,
  TextAreaMainOne,
  TextAreaMainTwo,
  TextAreaSub,
} from "./style";
import BannerLeftTopPath from "../../assets/bannerLeftTop.svg";
import TruckPath from "../../assets/bannerTruck.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerLeftTop src={BannerLeftTopPath} />
      <TextAreaContainer>
        <TextArea>
          <TextAreaMainOne>
            Frete <br />
            Grátris
          </TextAreaMainOne>
          <TextAreaSub>Para Compras acima de R$:150,00</TextAreaSub>
        </TextArea>
        <TextArea>
          <TextAreaMainTwo>
            Para Todo <br />o Brasil
          </TextAreaMainTwo>
        </TextArea>
      </TextAreaContainer>
    </BannerContainer>
  );
};

export default Banner;
