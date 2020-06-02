import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value,
    };
  }

  render() {
    const updateHex = () => {
      this.setState({ color: "#333" });
    };

    return (
      <div
        className="cell"
        onClick={updateHex}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
