import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 300px;
  background-color: ${(props) => props.theme.colors.banner};
`;
export const BannerLeftTop = styled.img`
  width: 100%;
  height: 100%;
`;
export const TextAreaContainer = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const TextImage = styled.img``;
