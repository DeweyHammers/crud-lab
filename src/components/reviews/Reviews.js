import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const renderReviews = () =>
      this.props.reviews.map((review) => {
        if (review.restaurantId === this.props.restaurantId) {
          return (
            <Review
              key={review.id}
              review={review}
              removeReview={this.props.removeReview}
            />
          );
        }
      });

    return <ul>{renderReviews()}</ul>;
  }
}

export default Reviews;
