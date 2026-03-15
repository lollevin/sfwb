"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { BorderBeam } from "@/components/ui/border-beam";
import { PulsatingButton } from "@/components/ui/pulsating-button";

const monthlyData = [
  { month: "Oct", kg: 18.2 },
  { month: "Nov", kg: 15.6 },
  { month: "Dec", kg: 14.1 },
  { month: "Jan", kg: 16.8 },
  { month: "Feb", kg: 13.5 },
  { month: "Mar", kg: 12.4 },
];

const maxMonthly = Math.max(...monthlyData.map((d) => d.kg));

export default function MonitorPage() {
  return (
    <div className="px-4 pt-6 space-y-6">
      <BlurFade delay={0.1}>
        <div>
          <TextAnimate animation="blurInUp" by="word" className="text-xl font-bold tracking-tight">
            Bin Monitor
          </TextAnimate>
          <p className="text-xs text-muted-foreground mt-1">Real-time bin status and waste analytics</p>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <Card className="relative overflow-hidden">
          <BorderBeam size={150} duration={5} colorFrom="#22c55e" colorTo="#059669" />
          <CardContent className="pt-5 pb-4 px-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold">Current Fill Level</h2>
              <Badge variant="outline" className="text-green-400 border-green-800">
                <span className="relative flex h-1.5 w-1.5 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Online
              </Badge>
            </div>
            <div className="flex items-center justify-center py-4">
              <AnimatedCircularProgressBar
                value={62}
                max={100}
                min={0}
                gaugePrimaryColor="#22c55e"
                gaugeSecondaryColor="#1a3a1a"
                className="size-44"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { val: 2.1, dec: 1, unit: "kg today", suffix: "" },
                { val: 26, dec: 0, unit: "temp", suffix: "°C" },
                { val: 45, dec: 0, unit: "humidity", suffix: "%" },
              ].map((item, i) => (
                <BlurFade key={item.unit} delay={0.3 + i * 0.1}>
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <p className="text-lg font-bold">
                      <NumberTicker value={item.val} decimalPlaces={item.dec} className="text-lg font-bold" />
                      {item.suffix}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{item.unit}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.4}>
        <Card className="relative overflow-hidden">
          <BorderBeam size={100} duration={5} colorFrom="#f59e0b" colorTo="#d97706" />
          <CardContent className="pt-5 pb-4 px-4">
            <h2 className="text-sm font-semibold mb-1">Next Emptying</h2>
            <p className="text-xs text-muted-foreground mb-4">Based on fill rate prediction</p>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-amber-950/30 border border-amber-900/40">
              <div className="size-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <TextAnimate animation="slideUp" by="word" className="text-sm font-medium">
                  Tomorrow, ~6:00 PM
                </TextAnimate>
                <p className="text-xs text-muted-foreground">Estimated to be 85% full</p>
              </div>
            </div>
            <PulsatingButton className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white" pulseColor="#22c55e">
              Set Emptying Reminder
            </PulsatingButton>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.55}>
        <Card>
          <CardContent className="pt-5 pb-4 px-4">
            <TextAnimate animation="blurInUp" by="word" className="text-sm font-semibold mb-4">
              Monthly Trend
            </TextAnimate>
            <div className="flex items-end justify-between gap-2 h-32">
              {monthlyData.map((d, i) => (
                <div key={d.month} className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-[10px] text-muted-foreground">{d.kg}</span>
                  <div
                    className={`w-full rounded-t-sm transition-all animate-in slide-in-from-bottom fade-in duration-700 ${
                      i === monthlyData.length - 1 ? "bg-green-500" : "bg-green-500/40"
                    }`}
                    style={{
                      height: `${(d.kg / maxMonthly) * 100}px`,
                      animationDelay: `${i * 120 + 700}ms`,
                      animationFillMode: "backwards",
                    }}
                  />
                  <span className="text-[10px] text-muted-foreground">{d.month}</span>
                </div>
              ))}
            </div>
            <BlurFade delay={1.2}>
              <p className="text-xs text-green-500 text-center mt-3 font-medium">
                Great job! You reduced waste by 32% over 6 months 🎉
              </p>
            </BlurFade>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  );
}
