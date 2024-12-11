"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    quote: "We've been using ClickHouse as our main analytics platform...",
    author: "LangChain",
    logo: "/logos/langchain.svg"
  },
  // Add all testimonials from the design
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-[#141414] border-none p-6">
            <blockquote className="text-sm text-gray-400 mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.logo}
                alt={testimonial.author}
                width={24}
                height={24}
                className="opacity-60"
              />
              <span className="text-sm">{testimonial.author}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}