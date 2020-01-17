import React, { Component } from "react";
import DatePicker from "react-date-picker";

class DatePick extends Component {
  state = {
    date: new Date()
  };

  onChange = date => {
    this.setState({ date });
    console.log("changed");
  };

  render() {
    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth() + 1;
    let date = this.state.date.getDate();

    let calendar = year + "," + " " + month + "," + " " + date;

    return (
      <div>
        <DatePicker onChange={this.onChange} value={this.state.date} />

        {console.log(new Date(calendar).getTime() / 1000)}
      </div>
    );
  }
}

export default DatePick;
