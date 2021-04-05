import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
`;
