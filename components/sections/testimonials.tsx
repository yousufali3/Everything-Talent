import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  content: string;
  company: string;
  author?: string;
  role?: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "When we moved into the LLM observability and analytics space, we decided to back LangSmith with ClickHouse instead of Postgres. Ankush, CTO of LangChain",
    company: "LangChain",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "ClickHouse is a fast and highly performant analytical database, widely used across Instacart to power other use-cases such as critical retailer and ads dashboards, calculating results for A/B testing, and machine learning signals.",
    company: "Instacart",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "ClickHouse has proved to be a game-changer, propelling us towards greater efficiency and effectiveness in managing our data infrastructure. Ved Surtani, VP, Engineering, Platform & Architecture at Tekion",
    company: "Tekion",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "ClickHouse helps us efficiently and reliably analyze logs across trillions of internet requests to identify malicious traffic and provide customers with rich analytics.",
    company: "Cloudflare",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "We evaluated more than a dozen different big data systems before settling on ClickHouse.",
    company: "GraphQL",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content: "We had a billion rows to store...",
    company: "Common Room",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "Now, our customers can search through months of browser and server-side log data in under a second thanks to the tech behind ClickHouse.",
    company: "Highlight.io",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "ClickHouse's performance exceeds all other column-oriented database management systems.",
    company: "Block",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "Adopting ClickHouse has enhanced our data analytics capabilities, supporting the growing demands of our internal teams efficiently and cost-effectively. Frank Chen, Expert OLAP Engineer at Shopee",
    company: "Shopee",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content: "ClickHouse was perfect as Big Data Storage for our ML models",
    company: "Admixer",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "We collect tens of thousands of data points from customers' phones and other more traditional sources. ClickHouse is used as a way to process all of these SMS messages and extract valuable information used for the scoring and fraud models.",
    company: "QuickCheck",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
  {
    content:
      "Switching to a Kafka and ClickHouse-based architecture simplified our operations and reduced costs by enhancing performance and enabling real-time, large-scale data processing",
    company: "OpenMeter",
    logo: "https://dwglogo.com/wp-content/uploads/2016/06/1800px_Sony_logo.png",
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-black">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="p-6 bg-zinc-900 border-zinc-800 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <Quote className="w-8 h-8 text-yellow-400" />
            <p className="text-gray-200 text-sm leading-relaxed">
              {testimonial.content}
            </p>
          </div>
          <div className="mt-6">
            <Image
              src={testimonial.logo}
              alt={`${testimonial.company} logo`}
              width={120}
              height={40}
              className="h-8 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
