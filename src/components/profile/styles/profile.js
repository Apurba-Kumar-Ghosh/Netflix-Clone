import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
`;

export const Image = styled.img`
width: 100%;
max-width :150px;
height ; auto;
border: 3px solid black;
cursor : pointer;
`;
export const Name = styled.h3`
  color: #808080;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
export const Title = styled.h1`
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
`;
export const Item = styled.li`
  list-style: none;
  max-height: 200px;
  max-width: 200px;
  margin-right: 30px;
  text-align: center;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover > ${Image} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
`;
