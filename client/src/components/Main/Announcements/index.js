import React from "react";
import "./styles.css";

function Announcements() {
  return (
    <>
      <h1 class="uk-text-center announcements-header" id="announcements">
        Announcements
      </h1>
      <div class="uk-card uk-card-secondary uk-card-body uk-width-1-1@m">
        <h3 class="uk-card-title">October 30th, 2020</h3>
        <p>
          <b>1) </b>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          <b>2) </b>It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
          <b>3) </b>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <p>
          <b>4) </b> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
}

export default Announcements;
