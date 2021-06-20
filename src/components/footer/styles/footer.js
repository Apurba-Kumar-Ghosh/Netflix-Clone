import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: auto;
  padding: 70px 56px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns : repeat(auto-fill,minmax(230px,1fr));
  grid-gap ; 15px;
  margin-bottom : 15px;


  @media(max-width : 1000px){
      grid-template-columns : repeat(auto-fill,minmax(150px,1fr0));
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  color: #757575;
`;
export const Link = styled.a`
  color: #757575;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 13px;
`;
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  hieght: 0;
`;
