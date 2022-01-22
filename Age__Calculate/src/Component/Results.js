import React from 'react';


function Results({ date }) {
  let today = new Date().getTime();
  let birthdate = new Date(date).getTime();
  let d = Math.abs(today -birthdate);
  let days = Math.floor(d / (1000 * 60 * 60 * 24));
  let AllDays = Math.floor(d / (1000 * 60 * 60 * 24));
  let AllMonths = Math.floor(days / 31);
 // let AllWeeks = Math.floor(days / 7);
 // let hours = Math.abs(days * 24);
 // let minutes = Math.floor(days * 24 * 60);
 // let seconds = Math.floor(days * 60 * 60 * 24);
  let years = Math.floor(days / 365);
  days -= years * 365;

  let months = Math.floor(days / 31);
  days -= months * 31;
  if (today < birthdate) {
    alert("You selected future Date as your birthday");
  }
  return (
    <div className="Stats   border">
      <div className="card">
        <div className="card-body">
          <div align="center">
            Age in Years:
            <br />
            {years} Years, {months} Months, {days} Days
          </div>
          <hr />
          <div align="center">
            Age in Months:
            <br />
            {AllMonths} Months, {days} Days
          </div>
          <hr />
        {/* <div align="center">
            Age in Weeks: {AllWeeks} Weeks, {days} Days
          </div>*
          <hr /> /}
         {/* <div align="center">Age in Days: {AllDays} Days</div>
          <div align="center">Age in Hours: {hours} </div>
          <div align="center">Age in Minutes: {minutes} </div>
          <div align="center">Age in Seconds: {seconds} </div>*/}
        </div>
      </div>
    </div>
  );
}
export default Results;