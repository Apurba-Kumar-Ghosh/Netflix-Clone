import React, { useState, useContext, createContext } from "react";
import {
  Item,
  Title,
  Header,
  Body,
  Container,
  Inner,
  Frame,
} from "./styles/accordion";

const accordionContext = createContext();
export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordion.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <accordionContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </accordionContext.Provider>
  );
};
Accordion.Frame = function AccordianFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Header = function AccordianHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(accordionContext);

  return (
    <Header
      {...restProps}
      onClick={() => {
        setToggleShow(!toggleShow);
      }}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close tab" />
      ) : (
        <img src="/images/icons/add.png" alt="open tab" />
      )}
    </Header>
  );
};
Accordion.Body = function AccordianBody({ children, ...restProps }) {
  const { toggleShow } = useContext(accordionContext);
  return toggleShow && <Body {...restProps}>{children}</Body>;
};
