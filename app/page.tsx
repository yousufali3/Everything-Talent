import UseCases from "@/components/sections/use-cases";
import Comparisons from "@/components/sections/comparisons";
import Testimonials from "@/components/sections/testimonials";
import Industries from "@/components/sections/industries";
import { SiteHeader } from "@/components/sections/site-header";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <SiteHeader />
      <UseCases />
      <Comparisons />
      <Testimonials />
      <Industries />
      <Footer />
    </main>
  );
}
