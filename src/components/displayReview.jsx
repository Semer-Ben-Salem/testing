import React from "react";

import "../style/displayReview.css";
import { Rating } from "semantic-ui-react";
import { TiTick } from "react-icons/ti";

export default class DisplayReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // number of review and the sort
  numberReview() {
    if (this.props.data.results) {
      return (
        <div className="container">
          {this.props.data.results.length} reviews, sorted by <a href="www.fb.com/semer1994">relevance</a>
        </div>
      );
    } else {
      return <div>fetching data ...</div>;
    }
  }

  // maping and rendering reviews
  renderReview() {
    if (this.props.data.results) {
      this.props.data.results.map((review, index) => {
        return (
          <div key={index}>
            <div className="stars">{this.ratingStars(this.props.data.count)}</div>
            <div>{this.provedUser(review.reviewer_name)}</div>
            <div>{this.renderSummary(review.summary)}</div>
            <div>{this.renderBody(review.body)}</div>
            <div>{this.renderRecommend(review.recommend, review.helpfulness)}</div>
          </div>
        );
      });
    } else {
      return <div className="numRev">fetching data ...</div>;
    }
  }

  // star rating blocked
  ratingStars(stars) {
    if (this.props.data.count) {
      return (
        <div>
          <Rating defaultRating={stars} maxRating={5} disabled />
        </div>
      );
    }
  }

  //   if user proved show a tick
  provedUser(check) {
    check ? (
      <div>
        <TiTick /> {check}
      </div>
    ) : (
      <div>not checked</div>
    );
  }

  // check if ther is summary and render it
  renderSummary(summary) {
    if (summary) {
      return <div className="numRev">{summary}</div>;
    }
  }

  // render body of review
  renderBody(text) {
    if (text) {
      return <div>{text}</div>;
    } else {
      return <div className="numRev">fetching review ...</div>;
    }
  }

  // check if the user recommender show tick else show button to recommend
  renderRecommend(bool, help) {
    if (bool) {
      return (
        <div>
          <TiTick /> I recommend this product
        </div>
      );
    } else {
      return (
        <div>
          was this review helpfull? <span>yes</span> {help} | <span>Report</span>
        </div>
      );
    }
  }

  ///////////////////////////////////////////// RENDER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  render() {
    return (
      <div>
        {console.log(this.props.data)}
        <div className="numRev">{this.numberReview()}</div>
        <div className="review">{this.renderReview()}</div>
      </div>
    );
  }
}
