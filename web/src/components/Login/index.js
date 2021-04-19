import {
  LoginContainer,
  LoginArea,
  LoginFormArea,
  LoginContainerDivider,
  LoginDivider,
} from "./style";

const Login = () => {
  return (
    <LoginContainer>
      <LoginArea>
        <LoginFormArea></LoginFormArea>
        <LoginContainerDivider>
          <LoginDivider />
        </LoginContainerDivider>
      </LoginArea>
    </LoginContainer>
  );
};

export default Login;
