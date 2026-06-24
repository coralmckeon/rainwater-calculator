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
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white transition-colors ${
                  index < currentStep
                    ? "bg-secondary"
                    : index === currentStep
                    ? "bg-primary ring-4 ring-primary/20"
                    : "bg-[#9bb0b8]"
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
                className={`mt-2 text-sm font-semibold text-center ${
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

      <div className="mt-6 text-center">
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          How it works
        </a>
      </div>
    </div>
  );
}
