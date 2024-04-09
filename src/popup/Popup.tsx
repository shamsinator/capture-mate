import React, { useState } from "react";
import Capture from "./Capture";
import Record from "./Record";

/**
 * Generates a tab component with the given properties.
 *
 * @param {boolean} isActive - Indicates if the tab is active
 * @param {() => void} onClick - The function to be called on tab click
 * @param {React.ReactNode} children - The content to be displayed inside the tab
 * @return {JSX.Element} The tab component
 */
const Tab = ({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`tab flex-1 text-center py-2 m-1 cursor-pointer ${
        isActive ? "bg-blue-300 text-black" : "bg-blue-500 text-white"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

/**
 * Create a popup component with tabs to switch between capture and record content.
 *
 * @return {JSX.Element} The JSX element representing the popup component.
 */
const Popup = () => {
  const [activeTab, setActiveTab] = useState<"capture" | "record">("capture");

  // Define a type for the content mapping
  type ContentMap = {
    [key in typeof activeTab]: React.ElementType;
  };

  // Map of components, explicitly typed
  const contentMap: ContentMap = {
    capture: Capture,
    record: Record,
  };

  // Extract the component using the activeTab key and assert the type
  const ContentComponent = contentMap[activeTab];

  return (
    <div className="p-4 bg-gray-100" style={{ width: 300 }}>
      <div className="flex mb-4">
        <Tab
          isActive={activeTab === "capture"}
          onClick={() => setActiveTab("capture")}
        >
          Capture
        </Tab>
        <Tab
          isActive={activeTab === "record"}
          onClick={() => setActiveTab("record")}
        >
          Record
        </Tab>
      </div>
      <div className="p-4 border rounded-lg bg-white">
        <ContentComponent />
      </div>
    </div>
  );
};

export default Popup;
