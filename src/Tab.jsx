// src/App.js
import React, { useState } from "react";
import "./App.css";

function Tab() {
  const initialTab = () => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? parseInt(savedTab) : 0;
  };

  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { title: "صفحه اصلی", content: "آموزش برنامه نویسی با بوتواستارت" },
    {
      title: "بوت کمپ فرانت اند",
      content:
        "  بوت کمپ فرانت اندراهی به سوی آینده ای بهتر از مبتدی تا حرفه‌ای، کد بزن، یاد بگیر و آینده‌ات را بساز!",
    },
    { title: "خدمات", content: "خدمات ارائه شده توسط بوت کمپ فرانت اند" },
    { title: "تماس با ما", content: "راه‌های ارتباطی با بوت کمپ فرانت اند" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index.toString());
  };

  return (
    <div className="app">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h3>{tabs[activeTab].title}</h3>
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

export default Tab;
