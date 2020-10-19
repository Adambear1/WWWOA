import React from "react";
import Announcements from "../../components/Main/Announcements";
import ChatRoom from "../../components/Main/ChatRoom";
import LandingPage from "../../components/Main/LandingPage";
import Schedule from "../../components/Main/Schedule";

function Main() {
  return (
    <>
      <LandingPage />
      <div className="uk-container">
        <ChatRoom />
        <Announcements />
        <Schedule />
      </div>
    </>
  );
}

export default Main;
