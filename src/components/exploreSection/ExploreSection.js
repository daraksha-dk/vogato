import React from "react";
import "./ExploreSection.scss";
import ExploreCard from "../exploreCard/ExploreCard";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
