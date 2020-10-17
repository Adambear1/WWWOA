import React from "react";
import Announcements from "../../components/Main/Announcements";
import LandingPage from "../../components/Main/LandingPage";
import Schedule from "../../components/Main/Schedule";

function Main() {
  return (
    <>
      <LandingPage />
      <div className="uk-container">
        <Announcements />
        <Schedule />
      </div>
    </>
  );
}

export default Main;
