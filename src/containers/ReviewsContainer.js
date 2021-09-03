import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import { addReview, removeReview } from "../actions/index";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurantId}
          addReview={this.props.addReview}
        />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          removeReview={this.props.removeReview}
        />
      </div>
    );
  }
}

export default connect((state) => ({ reviews: state.reviews }), {
  addReview,
  removeReview,
})(ReviewsContainer);
