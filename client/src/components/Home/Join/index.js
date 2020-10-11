import React from "react";
import "./styles.css";

function Join() {
  return (
    <div>
      <div class="uk-width-1-1">
        <h1 class="uk-heading-bullet">Join</h1>
        <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light join-form">
          <form>
            <input
              class="uk-input uk-width-1-1 uk-margin"
              type="text"
              placeholder="Full Name"
            />
            <br />
            <input
              class="uk-input uk-width-1-1"
              type="text"
              placeholder="Email"
            />
            <br />
            <input
              class="uk-input uk-width-1-1 uk-margin"
              type="text"
              placeholder="Phone Number"
            />
            <br />
            <textarea
              class="uk-textarea"
              rows="10"
              placeholder="Why Wrestling Officiating?"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;
