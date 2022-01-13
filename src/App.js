import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import TabOptions from "./components/tabOptions/TabOptions";
import HomePage from "./pages/homePage/HomePage";
import Delivery from "./components/delivery/Delivery";
import DiningOut from "./components/diningOut/DiningOut";
import Nightlife from "./components/nightlife/Nightlife";

function App() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div className="App">
      <HomePage />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}
const getCorrectScreen = (activeTab) => {
  switch (activeTab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default App;
