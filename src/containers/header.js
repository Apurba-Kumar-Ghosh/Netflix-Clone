import React from "react";
import { Header } from "../components";
import * as Routes from "../constants/Routes";
export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          src="/images/misc/logo.svg"
          alt="Netflix"
          to={Routes.HOME}
        />
        <Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
