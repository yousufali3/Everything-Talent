"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    title: "ClickHouse vs SnowFlake",
    logo: "/logos/clickhouse.svg",
    metrics: [
      { value: "2x", label: "Faster queries" },
      { value: "30%", label: "Lower costs" },
      { value: "3-5x", label: "Better compression" }
    ]
  },
  {
    title: "ClickHouse vs PostgreSQL",
    logo: "/logos/postgresql.svg",
    metrics: [
      { value: "100x", label: "Faster analytics" },
      { value: "45%", label: "Cost savings" },
      { value: "5x", label: "Better scaling" }
    ]
  },
  // Add other comparisons exactly as shown in the design
];

export function Comparisons() {
  return (
    <section className="bg-[#141414] py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-12">Comparisons</h2>
        <div className="space-y-4">
          {comparisons.map((comparison, index) => (
            <Card 
              key={index}
              className="bg-[#1A1A1A] border-none p-6 hover:bg-[#1F1F1F] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-medium">{comparison.title}</h3>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex gap-12">
                  {comparison.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-yellow-300">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}