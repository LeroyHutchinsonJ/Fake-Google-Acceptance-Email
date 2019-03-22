import React from "react";
import ReactDOM from "react-dom";
import Moment from "react-moment";
import "moment-timezone";
import "./styles.css";

var Email = ({ mail }) => {
  var { sender, subject, date, message } = mail;

  return (
    <div className="mailBorder">
      <div className="sender">{sender}</div>
      <div className="subject">{subject}</div>
      <Moment parse="MM-DD-YYYY" fromNow date={date} className="date" />
      <div className="message">{message}</div>
      <button className="button" />
    </div>
  );
};

var Google = {
  sender: "Google",
  subject: "Job Application",
  date: "3-20-2019",
  message:
    "Congratulations Leroy Hutchnson, You have been accepted as a Summer 2019 Google SWE Intern"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Email mail={Google} />, rootElement);
