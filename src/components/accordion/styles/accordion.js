import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;
export const Frame = styled.div`
  margin-bottom: 10px;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  max-width: 815px;
  margin: auto;
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  color: white;
  text-align: center;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  box-sizing: border-box;
  font-weight: normal;
  margin-bottom: 1px;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  cursor: pointer;
  user-select: none;
  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  box-sizing: border-box;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  align-items: center;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
