"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  Tags,
  ShoppingCart,
  Network,
  Film,
  Gamepad,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Banknote className="h-5 w-5" />,
      title: "Financial services",
      content: "Financial services content goes here",
    },
    {
      icon: <Tags className="h-5 w-5" />,
      title: "Marketing and sales",
      content: "Marketing and sales content goes here",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "E-commerce and retail",
      content: "E-commerce and retail content goes here",
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "Technology",
      content: "Technology content goes here",
    },
    {
      icon: <Film className="h-5 w-5" />,
      title: "Media and entertainment",
      content: "Media and entertainment content goes here",
    },
    {
      icon: <Gamepad className="h-5 w-5" />,
      title: "Gaming",
      content: "Gaming content goes here",
    },
  ];

  return (
    <div className="min-h-screen bg-black/90 p-6 text-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-400">
            <Network className="h-6 w-6 text-yellow-400" />
          </div>
          <h1 className="text-3xl font-bold">Industries</h1>
          <p className="text-gray-400">
            Wherever you need us, we're there. We love to engage in thoughtful
            conversation with the ClickHouse community and are always on-hand to
            answer your questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {industries.map((industry, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-800 rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400">{industry.icon}</span>
                  <span>{industry.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>{industry.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-lg bg-yellow-300 p-8 text-center text-black">
          <h2 className="text-2xl font-bold">Get started for free</h2>
          <p className="mt-2 text-gray-700">
            We'll get you started on a 30 day trial and $300 credits to spend at
            your own pace.
          </p>
          <Button className="mt-6 bg-black text-white hover:bg-black/90">
            Create a free account →
          </Button>
        </div>
      </div>
    </div>
  );
}
