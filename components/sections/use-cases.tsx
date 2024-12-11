"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const logos = {
  row1: ["vimeo", "soundcloud", "convertkit", "highlights"],
  row2: ["openai", "pacman", "threads", "microsoft"],
  row3: ["hunt", "shards", "deutschebank", "quickbooks"],
  row4: ["ebay", "citrix", "trip.com", "trendyol"]
};

export function UseCases() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-24 pb-16">
      <h2 className="text-2xl font-semibold mb-3">Use cases</h2>
      <p className="text-gray-400 mb-8 text-sm">
        Various teams queries are the ability to handle greater concurrency.<br />
        No matter how much data you're working with.
      </p>
      
      <Button variant="outline" className="mb-12 bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-300/10">
        Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <div className="space-y-4">
        <Card className="bg-[#141414] border-none p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium mb-2">Get more analytics</h3>
              <p className="text-xs text-gray-400 max-w-[80%]">
                Track user behavior and gain insights to improve your product.
              </p>
            </div>
            <div className="flex gap-3">
              {logos.row1.map((logo, i) => (
                <div key={i} className="w-5 h-5 opacity-60">
                  <Image src={`/logos/${logo}.svg`} alt={logo} width={20} height={20} />
                </div>
              ))}
            </div>
          </div>
        </Card>
        
        {/* Repeat similar cards for other use cases with their respective logos */}
      </div>
    </section>
  );
}