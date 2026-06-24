"use client";

interface StepIndicatorProps {
  currentStep: number;
  steps: { label: string; description: string }[];
}

export default function StepIndicator({
  currentStep,
  steps,
}: StepIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  index < currentStep
                    ? "bg-secondary text-white"
                    : index === currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index < currentStep ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <p
                className={`mt-2 text-xs font-medium text-center ${
                  index <= currentStep ? "text-foreground" : "text-muted"
                }`}
              >
                {step.label}
              </p>
              <p className="text-xs text-muted text-center hidden sm:block">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 mt-[-24px] ${
                  index < currentStep ? "bg-secondary" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
