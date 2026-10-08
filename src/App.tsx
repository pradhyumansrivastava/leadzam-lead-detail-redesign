import React from 'react';
import { LeadDetailPanel } from './components/LeadDetailPanel';
import './styles.css';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <LeadDetailPanel />
    </div>
  );
};

export default App;
