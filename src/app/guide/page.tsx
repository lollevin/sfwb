"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BorderBeam } from "@/components/ui/border-beam";

interface GuideItem {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

const guides: GuideItem[] = [
  {
    title: "Getting Started with Composting",
    description: "Learn the basics of turning food scraps into nutrient-rich soil for your garden.",
    icon: "🌱",
    tag: "Beginner",
  },
  {
    title: "What Can You Compost?",
    description: "Fruit peels, vegetable scraps, coffee grounds, eggshells — and what to avoid.",
    icon: "♻️",
    tag: "Guide",
  },
  {
    title: "Reduce Food Waste at Home",
    description: "Plan meals, store food properly, and use leftovers creatively to cut waste in half.",
    icon: "🏡",
    tag: "Tips",
  },
  {
    title: "Understanding Your Waste Data",
    description: "How to read your monthly reports and use insights to change habits.",
    icon: "📊",
    tag: "Analytics",
  },
  {
    title: "Composting in Small Spaces",
    description: "Even apartments can compost! Indoor bins, bokashi, and worm composting explained.",
    icon: "🪴",
    tag: "Advanced",
  },
  {
    title: "Share Your Impact",
    description: "Connect with your community, share achievements, and inspire sustainable living.",
    icon: "🤝",
    tag: "Community",
  },
];

const compostable = [
  { name: "Fruit peels & cores", emoji: "🍎", ok: true },
  { name: "Vegetable scraps", emoji: "🥕", ok: true },
  { name: "Coffee grounds", emoji: "☕", ok: true },
  { name: "Eggshells", emoji: "🥚", ok: true },
  { name: "Rice & pasta", emoji: "🍚", ok: true },
  { name: "Meat & fish", emoji: "🍖", ok: false },
  { name: "Dairy products", emoji: "🧀", ok: false },
  { name: "Oily food", emoji: "🍟", ok: false },
];

export default function GuidePage() {
  return (
    <div className="px-4 pt-6 space-y-6">
      <BlurFade delay={0.1}>
        <div>
          <SparklesText className="text-xl font-bold tracking-tight" sparklesCount={4} colors={{ first: "#22c55e", second: "#4ade80" }}>Learn &amp; Guide</SparklesText>
          <p className="text-xs text-muted-foreground mt-1">Composting tips and sustainable living</p>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <Card className="relative overflow-hidden bg-green-950/20 border-green-900/40">
          <BorderBeam size={100} duration={5} colorFrom="#22c55e" colorTo="#16a34a" />
          <CardContent className="pt-5 pb-4 px-4">
            <TextAnimate animation="blurInUp" by="word" className="text-sm font-semibold mb-3">
              Compostable Quick Check
            </TextAnimate>
            <div className="grid grid-cols-2 gap-2">
              {compostable.map((item, i) => (
                <BlurFade key={item.name} delay={0.3 + i * 0.06}>
                  <div
                    className={`flex items-center gap-2 p-2.5 rounded-lg text-xs transition-all hover:scale-105 cursor-pointer ${
                      item.ok
                        ? "bg-green-900/30 text-green-300 hover:bg-green-900/50"
                        : "bg-red-900/30 text-red-300 hover:bg-red-900/50"
                    }`}
                  >
                    <span className="text-base">{item.emoji}</span>
                    <span className="truncate flex-1">{item.name}</span>
                    <span className="text-base">{item.ok ? "✓" : "✗"}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      <BlurFade delay={0.6}>
        <TextAnimate animation="slideUp" by="word" className="text-sm font-semibold">
          Guides & Articles
        </TextAnimate>
      </BlurFade>

      <div className="space-y-3">
        {guides.map((guide, i) => (
          <BlurFade key={guide.title} delay={0.65 + i * 0.1}>
            <Card className="transition-all hover:scale-[1.02] hover:bg-accent/50 cursor-pointer">
              <CardContent className="py-4 px-4">
                <div className="flex items-start gap-3">
                  <span
                    className="text-2xl animate-in zoom-in duration-500"
                    style={{ animationDelay: `${i * 100 + 700}ms`, animationFillMode: "backwards" }}
                  >
                    {guide.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{guide.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{guide.description}</p>
                    <Badge variant="outline" className="mt-2 text-[10px]">{guide.tag}</Badge>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground shrink-0 mt-1"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
