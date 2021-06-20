import React from "react";
import { Profile } from "../components";

export function SelectProfileContainer({ user, setUser }) {
  return (
    <Profile>
      <Profile.Title>Who's Watching?</Profile.Title>
      <Profile.List>
        <Profile.User
          onClick={() => {
            setUser(user);
          }}
        >
          <Profile.Image src={user.photoUrl} />
          <Profile.Name>{user.Name}</Profile.Name>
        </Profile.User>
      </Profile.List>
    </Profile>
  );
}
