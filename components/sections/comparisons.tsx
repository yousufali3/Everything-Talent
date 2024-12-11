"use client";

import {
  ChevronRight,
  Zap,
  HardDrive,
  DollarSign,
  Gauge,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Comparisons() {
  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Comparisons</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                ClickHouse excels at powering workloads that operate on both
                real-time and historical data.
              </p>
              <p>
                In contrast, traditional warehouses and transactional databases
                lack the performance and cost efficiency that makes them viable
                for analytic workloads at scale.
              </p>
              <p>
                With ClickHouse, you&apos;ll have unrivaled performance and
                visibility into your data at a fraction of the cost.
              </p>
            </div>
          </div>

          {/* Right column - Comparison boxes */}
          <div className="lg:w-1/2 space-y-4">
            <Card className="bg-[#252525] border-0 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">ClickHouse</span>
                    <span className="text-gray-400">vs</span>
                    <span className="font-semibold">Snowflake</span>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <Zap className="w-8 h-8 mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold">2x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Faster queries
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <HardDrive className="w-8 h-8 mb-2 text-green-400" />
                    <div className="text-2xl font-bold">38%</div>
                    <div className="text-sm text-gray-400 text-center">
                      Better compression
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <DollarSign className="w-8 h-8 mb-2 text-blue-400" />
                    <div className="text-2xl font-bold">3-5x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Reduction in cost
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  &quot;With Snowflake, we were using the standard plan, small
                  compute, which cost nearly six times more than ClickHouse
                  Cloud.&quot;
                </div>
                <div className="mt-2 font-semibold">ADGREETZ</div>
              </CardContent>
            </Card>

            <Card className="bg-[#252525] border-0 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">ClickHouse</span>
                    <span className="text-gray-400">vs</span>
                    <span className="font-semibold">PostgreSQL</span>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <Zap className="w-8 h-8 mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold">1000x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Faster queries
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <HardDrive className="w-8 h-8 mb-2 text-green-400" />
                    <div className="text-2xl font-bold">-50%</div>
                    <div className="text-sm text-gray-400 text-center">
                      Disk space
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <DollarSign className="w-8 h-8 mb-2 text-blue-400" />
                    <div className="text-2xl font-bold">5x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Cost savings
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  &quot;It is instant in ClickHouse vs forever in
                  Postgres.&quot;
                </div>
                <div className="mt-2">
                  <Badge
                    variant="secondary"
                    className="bg-[#2a2a2a] text-white hover:bg-[#303030]"
                  >
                    QuickCheck
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#252525] border-0 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">ClickHouse</span>
                    <span className="text-gray-400">vs</span>
                    <span className="font-semibold">BigQuery</span>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <Gauge className="w-8 h-8 mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold">10x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Better performance
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <HardDrive className="w-8 h-8 mb-2 text-green-400" />
                    <div className="text-2xl font-bold">30x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Compression ratios
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <DollarSign className="w-8 h-8 mb-2 text-blue-400" />
                    <div className="text-2xl font-bold">10x</div>
                    <div className="text-sm text-gray-400 text-center">
                      OpEx reduction
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  &quot;We simply don&apos;t want the hassle of trying to figure
                  out in advance how many BQ slots to purchase – what a
                  headache!&quot;
                </div>
                <div className="mt-2">
                  <span className="font-bold text-white">BLOCK</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#252525] border-0 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">ClickHouse</span>
                    <span className="text-gray-400">vs</span>
                    <span className="font-semibold">Redshift</span>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <Zap className="w-8 h-8 mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold">5x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Query performance
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <DollarSign className="w-8 h-8 mb-2 text-green-400" />
                    <div className="text-2xl font-bold">75%</div>
                    <div className="text-sm text-gray-400 text-center">
                      Reduction in cost
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#2a2a2a]">
                    <Users className="w-8 h-8 mb-2 text-blue-400" />
                    <div className="text-2xl font-bold">20x</div>
                    <div className="text-sm text-gray-400 text-center">
                      Concurrency
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  &quot;Moving over to ClickHouse we were basically able to cut
                  that (Redshift) bill in half.&quot;
                </div>
                <div className="mt-2">
                  <span className="font-bold text-white">Vantage</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
