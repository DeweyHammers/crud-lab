import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
import { addRestaurant, removeRestaurant, addReview } from "../actions/index";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          removeRestaurant={this.props.removeRestaurant}
          restaurants={this.props.restaurants}
        />
      </div>
    );
  }
}

export default connect((state) => ({ restaurants: state.restaurants }), {
  addRestaurant,
  removeRestaurant,
})(RestaurantsContainer);
