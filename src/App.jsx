import React from "react";
import axios from "axios";

import token from "./config.js";
import Review from "./components/displayReview.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // let a = new Date().getMilliseconds();
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11003", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          Authorization: token,
        },
      })
      .then(({ data }) => {
        this.setState({ data: data }, () => {
          // console.log("data in app component", this.state.data);
        });
      })
      .catch((error) => {
        console.warn("Not good man :(");
      });
  }
  render() {
    return (
      <div>
        <Review data={this.state.data} />
      </div>
    );
  }
}
