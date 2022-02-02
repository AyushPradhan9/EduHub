import React, { Component } from "react";
import RadixSorting from "./RadixSort.js";
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

export default class VisualizeRadix extends React.Component {
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

  radixSort() {
    const ax = this.state.array.slice(0);
    const anim = RadixSorting(ax);
    let fx = 0,
      sx = 0;
    let o = 0;
    for (let i = 0; i <= anim.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      if (i == anim.length) {
        setTimeout(() => {
          this.checkAll();
        }, (i * this.state.time) / this.state.speed);
      } else if (fx < this.state.array.length * 2) {
        const [boidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const color = i % 2 === o % 2 ? "#19D9FD" : "#ffbf00";
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, (i * this.state.time) / this.state.speed);
        fx++;
      } else if (sx < this.state.array.length) {
        const [boidx, newHeight] = anim[i];
        const boStyle = arrayBar[boidx].style;
        setTimeout(() => {
          arrayBar[boidx].innerHTML = newHeight;
          boStyle.height = `${newHeight}px`;
        }, (i * this.state.time) / this.state.speed);
        sx++;
        o++;
      } else {
        fx = 1;
        sx = 0;
        const [boidx] = anim[i];
        const boStyle = arrayBar[boidx].style;
        const color = i % 2 === o % 2 ? "#19D9FD" : "#ffbf00";
        setTimeout(() => {
          boStyle.backgroundColor = color;
        }, (i * this.state.time) / this.state.speed);
      }
    }
  }

  startSorting() {
    this.setState({ disabled: !this.state.disabled });
    this.radixSort();
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
