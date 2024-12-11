"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industries = [
  {
    name: "Technology and SaaS",
    description: "Industry-specific solutions for technology companies"
  },
  // Add all industries from the design
];

export function Industries() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#141414] to-[#1A1A1A]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8">Industries</h2>
        <Accordion type="single" collapsible className="w-full">
          {industries.map((industry, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-800"
            >
              <AccordionTrigger className="text-sm hover:no-underline">
                {industry.name}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                {industry.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}