import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import Capture from "./Capture";
import Record from "./Record";

const Popup = () => {
  const [activeTabId, setActiveTabId] = useState("capture");

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  const tabs = [
    { id: "capture", label: "Capture", content: <Capture /> },
    { id: "record", label: "Record", content: <Record /> },
  ];

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="popup">
      <TabNavigation
        tabs={tabs}
        activeTabId={activeTabId}
        onTabClick={handleTabClick}
      />
      <TabContent>{activeTab.content}</TabContent>
    </div>
  );
};

export default Popup;
