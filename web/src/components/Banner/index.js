import {
  BannerContainer,
  BannerLeftTop,
  TextAreaContainer,
  TextImage,
} from "./style";
import BannerLeftTopPath from "../../assets/bannerLeftTop.svg";
import BannerTextPath from "../../assets/bannerText.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerLeftTop src={BannerLeftTopPath} />
      <TextAreaContainer>
        <TextImage src={BannerTextPath} />
      </TextAreaContainer>
    </BannerContainer>
  );
};

export default Banner;
