import React, { Component } from "react";
import DatePicker from "react-date-picker";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCity: "Bangalore",
      lat: "",
      lon: "",
      date: new Date(),
      condition: "",
      minimumTemperature: "",
      maximumTemperature: "",
      calendar: "",
      darkskySummary: "",
      darkskyTemperatureHigh: "",
      darkskyTemperatureLow: "",
      darkskyHumidity: "",
      darkskyPressure: ""
    };
  }

  componentDidMount() {
    let API_KEY_DARKSKY = "0df8da9663f4fa50aa8074af1a714c4c";
    let bangalore = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY_DARKSKY}/12.97,77.59,${Math.round(
      new Date().getTime() / 1000
    )}?exclude=currently,flags,minutely,hourly`;
    fetch(bangalore)
      .then(results2 => {
        return results2.json();
      })
      .then(data2 => {
        this.setState({
          darkskySummary: data2.daily.data[0].summary,
          darkskyTemperatureHigh: data2.daily.data[0].temperatureHigh,
          darkskyTemperatureLow: data2.daily.data[0].temperatureLow,
          darkskyHumidity: data2.daily.data[0].humidity,
          darkskyPressure: data2.daily.data[0].pressure
        });
      });
  }

  apicall() {
    let API_KEY_OPEN_WEATHER = "bc8b1777bd124a4bb25eb8c1196c019c";

    let city = this.state.inputCity;

    let corsCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY_OPEN_WEATHER}&units=metric`;

    fetch(corsCurrent)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let latt = data.coord.lat;
        let lonn = data.coord.lon;
        let condition = data.weather[0].main;
        let minimumTemperature = data.main.temp_min;
        let maximumTemperature = data.main.temp_max;
        this.setState({
          lat: latt,
          lon: lonn,
          condition: condition,
          minimumTemperature: minimumTemperature,
          maximumTemperature: maximumTemperature
        });

        let API_KEY_DARKSKY = "0df8da9663f4fa50aa8074af1a714c4c";
        let corsHistorical = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${
          this.state.lat
        },${this.state.lon},${Math.round(
          new Date(this.state.calendar).getTime() / 1000
        )}?exclude=currently,flags,minutely,hourly`;
        fetch(corsHistorical)
          .then(results1 => {
            return results1.json();
          })
          .then(data1 => {
            this.setState({
              darkskySummary: data1.daily.data[0].summary,
              darkskyTemperatureHigh: data1.daily.data[0].temperatureHigh,
              darkskyTemperatureLow: data1.daily.data[0].temperatureLow,
              darkskyHumidity: data1.daily.data[0].humidity,
              darkskyPressure: data1.daily.data[0].pressure
            });
          });
      });
  }

  onChange = date => {
    this.setState({ date });
    console.log("changed");
  };

  handleSubmit = e => {
    console.log("submit");
    e.preventDefault();

    // this.apicall();

    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth() + 1;
    let date = this.state.date.getDate();

    let calendarr = year + "," + " " + month + "," + " " + date;

    this.setState({
      calendar: calendarr
    });

    this.apicall();
  };

  render() {
    return (
      <div className="form_container">
        <div className="form_container-calendar-input">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={e => this.setState({ inputCity: e.target.value })}
              type="text"
              placeholder="Bangalore"
              required
            />

            <button className="a" type="submit">
              Submit
            </button>
          </form>
          <div className="date-picker">
            <DatePicker
              onChange={this.onChange}
              value={this.state.date}
              required
            />
          </div>
        </div>

        <div className="detail_container">
          <div className="summary">{this.state.darkskySummary}</div>

          <div className="temperature_container">
            <div className="temperature_high_container">
              <div className="name_container-high">
                <div className="head_name-high">Temperature</div>
                <div className="head_subname-high">high</div>
              </div>
              <div className="value_container-high">
                {this.state.darkskyTemperatureHigh} F
              </div>
              <div className="img_icon_container-high">
                <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-up.png" />
              </div>
            </div>

            <div className="temperature_low_container">
              <div className="name_container-low">
                <div className="head_name-low">Temperature</div>
                <div className="head_subname-low">low</div>
              </div>
              <div className="value_container-low">
                {" "}
                {this.state.darkskyTemperatureLow} F
              </div>
              <div className="img_icon_container-low">
                <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-down.png" />
              </div>
            </div>
          </div>

          <div className="card_container">
            <div className="pressure-container">
              <div className="pressure-name">Pressure</div>
              <div className="pressure-value">
                {this.state.darkskyPressure} mb
              </div>
            </div>
            <div className="humidity-container">
              <div className="humidity-name">Humidity</div>
              <div className="humidity-value">
                {this.state.darkskyHumidity} %
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
