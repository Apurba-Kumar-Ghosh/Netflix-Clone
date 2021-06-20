import React, { useContext, useState } from "react";
import { Header } from "../components";
import { FooterContainer } from "../containers/footer";
import { SelectProfileContainer } from "../containers/selectProfileContainer";
import * as Routes from "../constants/Routes";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

export function BrowseContainer() {
  const firebase = useContext(FirebaseContext);
  const [profile, setProfile] = useState("");
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const user = {
    Name: "appu",
    photoUrl: "/images/users/1.png",
  };
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [user]);

  return profile.Name ? (
    <>
      {isLoading ? <Loading src={user.photoUrl} /> : <Loading.ReleaseBody />}
      <Header src="joker1.jpg" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              src="/images/misc/logo.svg"
              alt="Netflix"
              to={Routes.HOME}
            />

            <Header.Link
              active={category === "series" ? true : false}
              onClick={() => {
                setCategory("series");
              }}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? true : false}
              onClick={() => {
                setCategory("films");
              }}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={profile.photoUrl} />
              <Header.DropDown>
                <Header.Group>
                  <Header.Picture src={profile.photoUrl} />
                  <Header.Link>{profile.Name}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.Link>
                </Header.Group>
              </Header.DropDown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setUser={setProfile} />
  );
}
