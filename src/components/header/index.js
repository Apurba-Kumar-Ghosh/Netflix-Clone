import React, { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Logo,
  ButtonLink,
  Background,
  Container,
  Group,
  Link,
  Text,
  Feature,
  FeatureCallOut,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  DropDown,
  ProfileText,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children}</Group>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}> {children}</PlayButton>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}> {children}</Profile>;
};
Header.ProfileText = function HeaderProfileText({ children, ...restProps }) {
  return <ProfileText {...restProps}> {children}</ProfileText>;
};
Header.Picture = function HeaderPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};
Header.DropDown = function HeaderDropDown({ children, ...restProps }) {
  return <DropDown {...restProps}> {children}</DropDown>;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setIsSearchActive(!isSearchActive)}>
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search Movies and Series"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        active={isSearchActive}
      />
    </Search>
  );
};
