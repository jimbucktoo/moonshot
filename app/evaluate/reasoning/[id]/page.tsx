"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const criteriaData = [
  {
    id: 1,
    title: "Product Innovation and Market Fit",
    score: 54,
    reasoning: [
      "The product shows potential in addressing user needs but lacks significant differentiation from existing solutions.",
      "Market validation is limited, with insufficient evidence of user testing and feedback incorporation.",
      "The unique value proposition needs stronger articulation and demonstration of competitive advantages.",
      "Innovation aspects are present but require further development to create a truly compelling offering.",
      "Customer pain points are well-identified, but the solution's effectiveness needs more validation.",
    ],
  },
  {
    id: 2,
    title: "Technical Feasibility",
    score: 57,
    reasoning: [
      "Technical architecture is fundamentally sound but needs more detailed implementation planning.",
      "Scalability considerations require more thorough analysis and testing strategies.",
      "Resource requirements are identified but lack comprehensive cost and timeline estimates.",
      "Technical risks have been acknowledged but mitigation strategies need strengthening.",
      "Development roadmap shows good progression but needs more specific milestones.",
    ],
  },
  {
    id: 3,
    title: "Business Model Viability",
    score: 61,
    reasoning: [
      "Revenue streams are clearly identified with realistic pricing strategies.",
      "Customer acquisition costs need more detailed analysis and optimization plans.",
      "Long-term sustainability metrics show promise but require further validation.",
      "Market penetration strategy is solid but needs more specific action items.",
      "Financial projections are reasonable but could benefit from more conservative estimates.",
    ],
  },
  {
    id: 4,
    title: "Team Capability",
    score: 59,
    reasoning: [
      "Core team shows relevant industry experience and complementary skills.",
      "Some critical expertise gaps identified in technical and market-specific areas.",
      "Leadership roles are well-defined but succession planning needs attention.",
      "Team dynamics and communication structures are established but need refinement.",
      "Advisory network could be strengthened to provide additional industry expertise.",
    ],
  },
  {
    id: 5,
    title: "Market Opportunity",
    score: 63,
    reasoning: [
      "Market size and growth potential show strong promise for scaling.",
      "Competitive landscape analysis is thorough but needs ongoing monitoring.",
      "Market entry strategy is logical but requires more detailed execution plans.",
      "Target market segmentation is well-defined with clear customer profiles.",
      "Growth opportunities are identified but need more specific expansion plans.",
    ],
  },
];

export default function CriteriaReasoning() {
  const router = useRouter();
  const params = useParams();
  const criterionId = Number(params.id);

  const criterion = criteriaData.find((c) => c.id === criterionId);

  if (!criterion) {
    return <div>Criterion not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#f6f3f3]">
      <NavHeader />
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          className="mb-6 border-[#17b7ba] text-[#17b7ba] hover:bg-[#17b7ba]/10"
          onClick={() => router.back()}
        >
          Back to Report
        </Button>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
          <div className="p-8">
            <div className="flex items-center gap-6 mb-8">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Criterion illustration"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-[#17b7ba] mb-2">
                  {criterion.title}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-xl">Score:</span>
                  <span className="text-3xl font-bold text-[#17b7ba]">
                    {criterion.score}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#e0eded]/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Detailed Analysis</h2>
              <ul className="space-y-4">
                {criterion.reasoning.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#17b7ba] mt-1">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
