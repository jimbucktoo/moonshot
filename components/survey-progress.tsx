export function SurveyProgress({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, name: "Product Overview" },
    { id: 2, name: "Product Goal & Plan" },
    { id: 3, name: "Innovation & Feasibility" },
    { id: 4, name: "Team & Organization" },
    { id: 5, name: "Business Model" },
    { id: 6, name: "Partnerships & Support" },
  ]

  return (
    <div className="w-64 bg-[#e0eded] p-6">
      <h2 className="text-xl font-semibold mb-8">Analyze Your Startup Potential</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.id <= currentStep ? "bg-[#17b7ba] text-white" : "bg-gray-200"
              }`}
            >
              {step.id < currentStep ? "✓" : step.id}
            </div>
            <span className={step.id <= currentStep ? "text-gray-900" : "text-gray-500"}>{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

