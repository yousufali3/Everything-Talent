"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-yellow-300 py-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Get started for free
        </h2>
        <p className="text-gray-700 text-sm mb-8">
          Start with your own data or try our test DB to create or modify your own use cases
        </p>
        <Button className="bg-black text-white hover:bg-gray-900">
          Start free trial <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}