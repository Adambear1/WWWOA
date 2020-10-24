import React, { useEffect, useState } from "react";
// styles
import "./styles.css";
import "react-calendar/dist/Calendar.css";
// utils
import Calendar from "react-calendar";
import { ProtectedRoute } from "../../PrivateRoute";

function Schedule() {
  const [date, setDate] = useState(new Date());
  const [meetings, setMeetings] = useState([
    new Date("2020", "10", "10"),
    new Date("2020", "10", "22"),
    // new Date("2020", "10", "29"),
  ]);

  return (
    <>
      <h1 class="uk-text-center calendar-header" id="schedule">
        Schedule
      </h1>
      <div class="calendar-container uk-child-width-1-2@s" uk-grid="true">
        <div class="calendar">
          <Calendar
            onChange={(date) => {
              setDate(date);
            }}
            showNeighboringMonth={true}
            showDoubleView={true}
            defaultValue={meetings}
            defaultActiveStartDate={new Date()}
          />
        </div>
        <div class="calendar-text">
          <b>
            {" "}
            <p>10/13/2020</p>
          </b>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <b>
            {" "}
            <p>10/29/2020</p>
          </b>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Schedule;
