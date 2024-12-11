import { UseCases } from "@/components/sections/use-cases";
import { Comparisons } from "@/components/sections/comparisons";
import { Testimonials } from "@/components/sections/testimonials";
import { Industries } from "@/components/sections/industries";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <UseCases />
      <Comparisons />
      <Testimonials />
      <Industries />
      <CTA />
    </main>
  );
}