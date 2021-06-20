import styled, { createGlobalStyle } from "styled-components";

export const LockBody = createGlobalStyle`
body{
    overflow : hidden;
}
`;
export const ReleaseBody = createGlobalStyle`
body{
    overflow : visible;
}`;
export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 999;

  &: after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    margin-top: -150px;
    margin-left: -75px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -22px;
`;
