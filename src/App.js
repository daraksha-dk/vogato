import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import TabOptions from "./components/TabOptions/TabOptions";
import HomePage from "./pages/HomePage/HomePage";
import Delivery from "./components/Delivery/delivery";
import DiningOut from "./components/DiningOut/DiningOut";
import Nightlife from "./components/Nightlife/Nightlife";

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
