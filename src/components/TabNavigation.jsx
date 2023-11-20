import React from "react";

const TabNavigation = ({ tabs, activeTabId, onTabClick }) => {
  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={tab.id === activeTabId ? "active" : ""}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
