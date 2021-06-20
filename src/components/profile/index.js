import React from "react";
import { Container, Title, Image, Name, List, Item } from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Profile.Image = function ProfileImage({ src, ...restProps }) {
  return <Image {...restProps} src={src ? src : "/images/misc/loading.gif"} />;
};
Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Profile.User = function ProfileUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
