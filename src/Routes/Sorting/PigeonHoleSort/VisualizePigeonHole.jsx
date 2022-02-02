import React, { Component } from "react";
import PigeonHoleSorting from "./PigeonHoleSort.js";
import { Button, Slider } from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../visualizer.css";

const marks = [
  {
    value: 2,
    label: "Slow",
  },
  {
    value: 5,
    label: "Medium",
  },
  {
    value: 8,
    label: "Fast",
  },
];

export default class VisualizePigeonHole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      abar: "15",
      time: "1200",
      speed: "5",
      disabled: false,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  checkAll() {
    const arrayBar = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBar.length; ++i) {
      const barStyle = arrayBar[i].style;
      setTimeout(() => {
        barStyle.backgroundColor = "#24C921";
        barStyle.color = "rgba(0,0,0,1)";
      }, (i * this.state.time) / this.state.speed);
    }
    setTimeout(() => {
      this.state.array.sort(function (a, b) {
        return a - b;
      });
      this.setState({ disabled: false });
    }, (this.state.time / this.state.speed) * arrayBar.length);
  }

  resetArray() {
    const array2 = [];
    const array = [];
    for (let i = 0; i < this.state.abar; i++) {
      array.push(randomIntFromInterval(40, 400));
    }
    this.setState({ array2 });
    this.setState({ array });
    const arrayBar = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length; i++) {
      if (!arrayBar[i]) {
        continue;
      } else {
        const boStyle = arrayBar[i].style;
        boStyle.backgroundColor = "#ffbf00";
        arrayBar[i].innerHTML = array[i];
      }
    }
    var vl = document.getElementById("x");
    vl.style.width = this.state.abar * 36 + 80 + "px";
    console.log(array);
  }

  pigeonholeSort() {
    const ax = this.state.array.slice(0);
    const anim = PigeonHoleSorting(ax);
    let arr = this.state.array;
    for (let i = 0; i < 2 * arr.length; i++) {
      const arrayBar1 = document.getElementsByClassName("array-bar");
      const [bfidx] = anim[i];
      const boStyle = arrayBar1[bfidx].style;
      const color = i % 2 === 0 ? "#19D9FD" : "#ffbf00";
      setTimeout(() => {
        boStyle.backgroundColor = color;
      }, (i * this.state.time) / this.state.speed);
    }
    for (let i = arr.length * 2; i <= anim.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      if (i == anim.length) {
        setTimeout(() => {
          this.checkAll();
        }, (i * this.state.time) / this.state.speed);
      } else if ((i - arr.length * 2) % 3 !== 2) {
        const [bfidx] = anim[i];
        const boStyle = arrayBar[bfidx].style;
        const color = (i - arr.length * 2) % 3 === 0 ? "#19D9FD" : "#ffbf00";
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, (i * this.state.time) / this.state.speed);
      } else {
        const [boidx, newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML = newHeight;
          boStyle.height = `${newHeight}px`;
        }, (i * this.state.time) / this.state.speed);
      }
    }
  }

  startSorting() {
    this.setState({ disabled: !this.state.disabled });
    this.pigeonholeSort();
  }

  render() {
    const { array } = this.state;

    const handleChange = (event, newValue) => {
      console.log(event);
      this.state.abar = newValue;
      this.setState();
      this.resetArray();
    };

    const speedChange = (e, newValue) => {
      console.log(e);
      let obj = {};
      obj[e.target.name] = e.target.value;
      this.state.speed = newValue;
      this.setState(e);
    };

    return (
      <div>
        <div>
          <Button
            onClick={() => this.resetArray()}
            disabled={this.state.disabled}
            id="btn1"
          >
            New array
          </Button>
          <a>Array Bar:</a>
          <Slider
            value={this.state.abar}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="on"
            min={4}
            max={20}
            id="slid1"
            valueLabelDisplay="auto"
            disabled={this.state.disabled}
          />
          <a>Speed:</a>
          <Slider
            value={this.state.speed}
            onChange={speedChange}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="off"
            min={1}
            max={10}
            id="slid2"
            marks={marks}
            disabled={this.state.disabled}
          />
          <Button
            disabled={this.state.disabled}
            onClick={() => this.startSorting()}
            id="btn2"
          >
            Run Sorting
          </Button>
          <hr></hr>
        </div>
        <div className="array-container" id="x">
          <div className="tb"></div>
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
        <div className="arrangement">
          <hr></hr>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
