import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import TabOptions from "./components/tabOptions/TabOptions";
import Delivery from "./components/delivery/Delivery";
import DiningOut from "./components/diningOut/DiningOut";
import Nightlife from "./components/nightlife/Nightlife";
import Header from "./components/header/Header";

function App() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div className="App">
      <Header />
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
