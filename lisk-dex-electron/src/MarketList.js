import React from "react";
import "./PlaceOrder.css";

export default class MarketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div style={{ padding: "5px" }}>
          <div className="action-name">MARKETS</div>
          <p>Current market: <b>CLSK/LSK</b></p>
          <p>More markets coming soon!</p>
        </div>
        <small>
          <br></br>Data refreshed every 15 seconds.
        </small>
      </>
    );
  }
}
