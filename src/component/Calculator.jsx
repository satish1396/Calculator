import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: 0
    };
  }
  calculate = () => {
    try {
      this.state.result = eval(this.state.input);
      this.setState({ input: this.state.result });
    } catch (e) {
      this.setState({ input: "Invalid" });
    }
  };

  ChangeButton = (e) => {
    let value = e.target.getAttribute("data");
    if (value == "Invalid" || this.state.input == "Infinity") {
      this.setState({ input: "" });
    }
    switch (value) {
      case "clr":
        this.setState({ input: "" });
        break;
      case "=":
        this.calculate();
        break;
      default:
        if (this.state.input == "Infinity" || this.state.input == "Invalid") {
          this.state.input = "";
        }
        this.setState({ input: this.state.input + value });
    }
  };

  render() {
    const { input } = this.state;
    return (
      <>
        <h1>Calculator</h1>
        <div className="cal">
          <input className="display" value={input == "" ? 0 : input} />
          <div id="inner" className="key">
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="C"
              data="clr"
            >
              clr
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="+"
              data="+"
            >
              +
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="-"
              data="-"
            >
              -
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="/"
              data="/"
            >
              /
            </button>

            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="1"
              data="1"
            >
              1
            </button>
            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="2"
              data="2"
            >
              2
            </button>
            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="3"
              data="3"
            >
              3
            </button>
            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="%"
              data="%"
            >
              %
            </button>

            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="4"
              data="4"
            >
              4
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="5"
              data="5"
            >
              5
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="6"
              data="6"
            >
              6
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="*"
              data="*"
            >
              *
            </button>

            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="7"
              data="7"
            >
              7
            </button>
            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="8"
              data="8"
            >
              8
            </button>
            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="9"
              data="9"
            >
              9
            </button>
            <button
              className="button even"
              onClick={this.ChangeButton}
              lable="."
              data="."
            >
              .
            </button>

            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="("
              data="("
            >
              (
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="0"
              data="0"
            >
              0
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable=")"
              data=")"
            >
              )
            </button>
            <button
              className="button odd"
              onClick={this.ChangeButton}
              lable="="
              data="="
            >
              =
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
