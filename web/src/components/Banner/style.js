import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 300px;
  background-color: ${(props) => props.theme.colors.banner};
`;
export const BannerLeftTop = styled.img`
  width: 100%;
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
export const TextArea = styled.div`
  width: 50%;
  height: 100%;
`;
export const TextAreaMainOne = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 65%;
  font-size: 64px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  color: ${(props) => props.theme.colors.secondary};
`;
export const TextAreaSub = styled.div`
  width: 100%;
  height: 20%;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
`;
export const TextAreaMainTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  font-size: 64px;
  text-transform: uppercase;
  font-weight: thin;
  text-align: center;
  line-height: 1.1;
  color: ${(props) => props.theme.colors.secondary};
`;
