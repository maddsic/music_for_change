import React from "react";
import { Advocacy } from "~/components/aboutPage/advocacy/advocacy";
import { Awards } from "~/components/aboutPage/awards/awards";
import { MusicForChange } from "~/components/aboutPage/musicForChange/music";
import { AboutProfile } from "~/components/aboutPage/profile/profile";
import { ProfileHeroSlider } from "~/components/profileHero/profileHeroSlider";

const Profile = () => {
  return (
    <>
      <ProfileHeroSlider />
      <AboutProfile />
      <Advocacy />
      <MusicForChange />
      <Awards />
    </>
  )
};

export default Profile;
