import React from "react";
import Filters from "../filters/Filters";
import { restaurants } from "../../data/Restaurants";
import DeliveryCollections from "../deliveryCollections/DeliveryCollections";
import TopBrands from "../topBrands/TopBrands";
import ExploreSection from "../exploreSection/ExploreSection";
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
