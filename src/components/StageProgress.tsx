import React from 'react';

interface StageProgressProps {
  stageName: string;
  currentStep: number;
  totalSteps: number;
}

export const StageProgress: React.FC<StageProgressProps> = ({
  stageName,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="stage-progress-container">
      <div className="stage-labels">
        <span className="stage-title">Stage: {stageName} Lead</span>
        <span className="stage-step">Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="progress-bars" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div
            key={idx}
            className={`bar-segment ${idx < currentStep ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
