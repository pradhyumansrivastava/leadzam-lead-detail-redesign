import React from 'react';

interface ActivityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ActivityTabs: React.FC<ActivityTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = ['Activity', 'Calls', 'Follow-ups', 'Tasks', 'Revenue'];

  return (
    <div className="activity-tabs-nav" role="tablist" aria-label="Lead Activity Tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
