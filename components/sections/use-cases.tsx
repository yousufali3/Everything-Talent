import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function UseCases() {
  return (
    <div className="w-full bg-[#1C1C1C] text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Use cases</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Unlock faster queries and the ability to handle greater concurrency.
          </p>
          <p className="text-lg text-gray-300">
            No matter how much data you're working with.
          </p>
          <Button
            className="mt-8 bg-[#E8FF53] text-black hover:bg-[#d4eb4d] font-medium px-6"
            size="lg"
          >
            Start your free Cloud trial
          </Button>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-8">
          {/* Real-time Analytics Section */}
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 bg-[#222222] rounded-xl p-8">
            <div className="space-y-4">
              <div className="h-8 w-8 bg-[#E8FF53] rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-black"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Real-time analytics</h3>
              <p className="text-gray-400">
                Power interactive applications and dashboards that analyze and
                aggregate large amounts of data on the fly. Run complex internal
                analytics in milliseconds, not minutes or hours.
              </p>
              <p className="text-gray-400">
                Relied on by companies all over the world to process tens of
                billions of new events per day.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#E8FF53] hover:text-[#d4eb4d]"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Vimeo"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Cloudflare"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Cloudflar"
                  // alt="Contentsquare"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Block"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Machine Learning Section */}
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 bg-[#222222] rounded-xl p-8">
            <div className="space-y-4">
              <div className="h-8 w-8 bg-[#E8FF53] rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-black"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">
                Machine learning and GenAI
              </h3>
              <p className="text-gray-400">
                Execute fast and efficient vector search. Plug-and-play
                Generative AI models from any provider. Use lightning-fast
                aggregations to power model training at petabyte scale.
              </p>
              <p className="text-gray-400">
                A central data store for your machine learning workloads.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#E8FF53] hover:text-[#d4eb4d]"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Corsearch"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Admixer"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="DeepL"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Denic"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Business Intelligence Section */}
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 bg-[#222222] rounded-xl p-8">
            <div className="space-y-4">
              <div className="h-8 w-8 bg-[#E8FF53] rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-black"
                >
                  <path d="M21 21H4.6c-.6 0-1.1-.5-1.1-1.1V3" />
                  <path d="M19 15l-3-3-4 4-3-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Business intelligence</h3>
              <p className="text-gray-400">
                Interactively slice and dice your data for analysis, reporting,
                and building internal applications. Leveraged to better
                understand business usage, user behavior, ad performance, market
                dynamics, and more.
              </p>
              <p className="text-gray-400">
                Offload your workloads from traditional warehouses and lakes for
                speed and efficiency at scale.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#E8FF53] hover:text-[#d4eb4d]"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Lyft"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Microsoft"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Deutsche Bank"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="QuickCheck"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Logs, Events, and Traces Section */}
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 bg-[#222222] rounded-xl p-8">
            <div className="space-y-4">
              <div className="h-8 w-8 bg-[#E8FF53] rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-black"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">
                Logs, events, and traces
              </h3>
              <p className="text-gray-400">
                Monitor with confidence your logs, events, traces, and other
                time series data. Detect anomalies, fraud, network or
                infrastructure issues, and more.
              </p>
              <p className="text-gray-400">
                Used at scale to ingest millions of records per second as the
                trusted SQL- based observability store.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#E8FF53] hover:text-[#d4eb4d]"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Sony"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="eBay"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Trip.com"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-[#2A2A2A] rounded-lg p-6 flex items-center justify-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkr2mUC4_epJVCdbee61mRsyh7RCAhdRKcqQ&s"
                  alt="Tekion"
                  width={120}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
