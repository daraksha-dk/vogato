import React from "react";
import Filters from "../Filters/filters";
import "./delivery.scss";
import { restaurants } from "../../data/restaurants";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "../topBrands/topBrands";
import ExploreSection from "../exploreSection/exploreSection";
const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fas fa-sliders-h"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;
const delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />

      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Delivery Restaurants in Delhi"
      />
    </div>
  );
};

export default delivery;
