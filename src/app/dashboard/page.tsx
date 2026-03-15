"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const weeklyData = [
  { day: "Mon", kg: 0.8 },
  { day: "Tue", kg: 1.2 },
  { day: "Wed", kg: 0.5 },
  { day: "Thu", kg: 0.9 },
  { day: "Fri", kg: 1.5 },
  { day: "Sat", kg: 2.1 },
  { day: "Sun", kg: 0.7 },
];

const maxKg = Math.max(...weeklyData.map((d) => d.kg));

export default function DashboardPage() {
  return (
    <div className="px-4 pt-6 space-y-6">
      <BlurFade delay={0.1}>
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="SFWB" width={48} height={48} className="rounded-lg" />
          <div>
            <SparklesText className="text-2xl font-bold tracking-tight" sparklesCount={3} colors={{ first: "#22c55e", second: "#4ade80" }}>
              SFWB
            </SparklesText>
            <AnimatedShinyText className="text-xs">
              Small Bin, Big Impact.
            </AnimatedShinyText>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="grid grid-cols-2 gap-3">
          <Card className="relative overflow-hidden bg-green-950/30 border-green-900/50">
            <BorderBeam size={80} duration={4} colorFrom="#22c55e" colorTo="#16a34a" />
            <CardContent className="pt-4 pb-3 px-4">
              <p className="text-xs text-muted-foreground mb-1">This Month</p>
              <div className="flex items-baseline gap-1">
                <NumberTicker value={12.4} decimalPlaces={1} className="text-2xl font-bold text-green-400" />
                <span className="text-sm text-muted-foreground">kg</span>
              </div>
              <p className="text-xs text-green-500 mt-1">↓ 18% vs last month</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-amber-950/30 border-amber-900/50">
            <BorderBeam size={80} duration={4} colorFrom="#f59e0b" colorTo="#d97706" />
            <CardContent className="pt-4 pb-3 px-4">
              <p className="text-xs text-muted-foreground mb-1">Items Expiring</p>
              <div className="flex items-baseline gap-1">
                <NumberTicker value={3} className="text-2xl font-bold text-amber-400" />
                <span className="text-sm text-muted-foreground">items</span>
              </div>
              <p className="text-xs text-amber-500 mt-1">within 3 days</p>
            </CardContent>
          </Card>
        </div>
      </BlurFade>

      <BlurFade delay={0.35}>
        <Card className="relative overflow-hidden">
          <BorderBeam size={120} duration={6} colorFrom="#22c55e" colorTo="#059669" />
          <CardContent className="pt-5 pb-4 px-4">
            <div className="flex items-center justify-between mb-4">
              <TextAnimate animation="blurInUp" by="word" className="text-sm font-semibold">
                Bin Status
              </TextAnimate>
              <span className="relative flex items-center gap-1.5 text-xs text-green-500 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Connected
              </span>
            </div>
            <div className="flex items-center justify-center">
              <AnimatedCircularProgressBar
                value={62}
                max={100}
                min={0}
                gaugePrimaryColor="#22c55e"
                gaugeSecondaryColor="#1a3a1a"
                className="size-36"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Bin is <span className="text-foreground font-medium">62%</span> full — consider emptying soon
            </p>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.5}>
        <Card>
          <CardContent className="pt-5 pb-4 px-4">
            <TextAnimate animation="blurInUp" by="word" className="text-sm font-semibold mb-4">
              This Week
            </TextAnimate>
            <div className="flex items-end justify-between gap-2 h-28">
              {weeklyData.map((d, i) => (
                <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-[10px] text-muted-foreground">{d.kg}</span>
                  <div
                    className="w-full rounded-t-sm bg-green-500/80 animate-in slide-in-from-bottom fade-in duration-700"
                    style={{
                      height: `${(d.kg / maxKg) * 80}px`,
                      animationDelay: `${i * 100 + 600}ms`,
                      animationFillMode: "backwards",
                    }}
                  />
                  <span className="text-[10px] text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">Weekly Total</span>
              <span className="text-sm font-semibold">
                <NumberTicker value={7.7} decimalPlaces={1} className="text-sm font-semibold" /> kg
              </span>
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.65}>
        <Card className="relative overflow-hidden bg-green-950/20 border-green-900/40">
          <CardContent className="pt-4 pb-3 px-4">
            <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400"><path d="M2 2a26.174 26.174 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"/><path d="M16 8c4 0 6-2 6-6-4 0-6 2-6 6"/></svg>
              </div>
              <div>
                <p className="text-sm font-medium">Eco Tip</p>
                <TextAnimate animation="fadeIn" by="line" className="text-xs text-muted-foreground mt-0.5">
                  Composting fruit peels can reduce your waste by up to 30% and create nutrient-rich soil for your garden.
                </TextAnimate>
              </div>
            </div>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  );
}
