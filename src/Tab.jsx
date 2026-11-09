import { useState } from "react";
function Tab() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, title: "TAB 1", content: "Content 1" },
    { id: 2, title: "TAB 2", content: "Content 2" },
    { id: 3, title: "TAB 3", content: "Content 3" },
    { id: 4, title: "TAB 4", content: "Content 4" },
  ];

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <h2>{tab.content}</h2>
            </div>
          ) : null,
        )}
      </div>
      <div className="project-info">
        <h3>React Tabs – Week 13 Bootcamp</h3>
        <p>
          این پروژه به‌عنوان تمرین هفته سیزدهم بوت‌کمپ، با راهنمایی استاد{" "}
          <strong>میلاد عظمی</strong>
          طراحی و پیاده‌سازی شده است.
        </p>
        <p>
          هدف این تمرین، یادگیری مفاهیم React، مدیریت State، کار با Eventها و
          پیاده‌سازی کامپوننت‌های تعاملی است.
        </p>
        <div className="info-details">
          <span>Instructor: Milad Azami</span>
          <span>Bootcamp: Week 13</span>
          <span>Technology: React</span>
        </div>
      </div>
    </div>
  );
}

export default Tab;
