import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EvaluationReport() {
  const criteria = [
    {
      id: 1,
      title: "Product Innovation and Market Fit",
      score: 54,
      description:
        "The solution demonstrates potential but lacks clear differentiation in the market. While the core concept addresses a real need, the innovative aspects need stronger development and validation with target users.",
    },
    {
      id: 2,
      title: "Technical Feasibility",
      score: 57,
      description:
        "The technical implementation plan is generally sound but requires more detailed consideration of scalability and resource requirements. Key technical challenges have been identified but need more comprehensive solutions.",
    },
    {
      id: 3,
      title: "Business Model Viability",
      score: 61,
      description:
        "The business model shows promise with clear revenue streams identified. However, customer acquisition costs and long-term sustainability metrics need further refinement to ensure profitable growth.",
    },
    {
      id: 4,
      title: "Team Capability",
      score: 59,
      description:
        "The team demonstrates relevant experience but may benefit from additional expertise in key areas. Leadership roles and responsibilities are well-defined, though some critical skill gaps exist.",
    },
    {
      id: 5,
      title: "Market Opportunity",
      score: 63,
      description:
        "Strong market potential identified with clear growth opportunities. Market size and competitive analysis show promising indicators, though market entry strategy needs further development.",
    },
  ]

  const calculateOverallScore = () => {
    const total = criteria.reduce((acc, curr) => acc + curr.score, 0)
    return Math.round(total / criteria.length)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Evaluation Report</h1>
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xl">Overall Score:</span>
          <span className="text-4xl font-bold text-[#17b7ba]">{calculateOverallScore()}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${calculateOverallScore()}%`,
              background: "linear-gradient(to right, #ff6b00, #17b7ba)",
            }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {criteria.map((criterion) => (
          <div key={criterion.id} className="bg-[#e0eded]/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#17b7ba]">{criterion.title}</h3>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span>Score:</span>
                <span className="text-2xl font-bold text-[#17b7ba]">{criterion.score}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${criterion.score}%`,
                    background: "linear-gradient(to right, #ff6b00, #17b7ba)",
                  }}
                />
              </div>
            </div>
            <p className="text-gray-600 mb-4">{criterion.description}</p>
            <Link href={`/evaluate/reasoning/${criterion.id}`}>
              <Button variant="outline" className="border-[#17b7ba] text-[#17b7ba] hover:bg-[#17b7ba]/10">
                Reasoning for the analysis
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

