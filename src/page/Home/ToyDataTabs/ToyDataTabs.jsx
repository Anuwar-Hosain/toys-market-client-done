import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "../TabCard/TabCard";

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
          <div className="grid grid-cols-3 gap-6">
            {allData?.map((data) => (
              <TabCard key={data._id} data={data}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6">
            {allData?.map((data) => (
              <TabCard key={data._id} data={data}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6">
            {allData?.map((data) => (
              <TabCard key={data._id} data={data}></TabCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ToyDataTabs;
