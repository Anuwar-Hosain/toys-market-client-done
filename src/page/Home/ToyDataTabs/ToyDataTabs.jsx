import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyDataTabs = () => {
  const [allData, setAllData] = useState();
  const [category, setCategory] = useState("sports");
  const handleData = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/all-toys/${category}`)
      .then((res) => res.json())
      .then((result) => setAllData(result));
  }, [category]);
  console.log(allData);
  return (
    <section className="size">
      <h1>ToyDataTabs</h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleData("sports")}>Sports</Tab>
          <Tab onClick={() => handleData("truck")}>Truck</Tab>
          <Tab onClick={() => handleData("police")}>police </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ToyDataTabs;
