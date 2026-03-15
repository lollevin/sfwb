"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface FoodItem {
  name: string;
  emoji: string;
  expiresIn: number;
  category: string;
}

const foodItems: FoodItem[] = [
  { name: "Milk", emoji: "🥛", expiresIn: 1, category: "Dairy" },
  { name: "Chicken Breast", emoji: "🍗", expiresIn: 2, category: "Meat" },
  { name: "Spinach", emoji: "🥬", expiresIn: 3, category: "Vegetable" },
  { name: "Yogurt", emoji: "🫙", expiresIn: 5, category: "Dairy" },
  { name: "Bananas", emoji: "🍌", expiresIn: 4, category: "Fruit" },
  { name: "Rice", emoji: "🍚", expiresIn: 30, category: "Grain" },
  { name: "Eggs", emoji: "🥚", expiresIn: 7, category: "Dairy" },
  { name: "Tomatoes", emoji: "🍅", expiresIn: 6, category: "Vegetable" },
];

function getUrgencyColor(days: number) {
  if (days <= 2) return "bg-red-950/40 border-red-900/50";
  if (days <= 5) return "bg-amber-950/40 border-amber-900/50";
  return "bg-green-950/40 border-green-900/50";
}

function getUrgencyBadge(days: number) {
  if (days <= 2)
    return (
      <Badge className="bg-red-600/20 text-red-400 border-red-800 text-[10px] animate-pulse">
        Urgent
      </Badge>
    );
  if (days <= 5)
    return <Badge className="bg-amber-600/20 text-amber-400 border-amber-800 text-[10px]">Soon</Badge>;
  return <Badge className="bg-green-600/20 text-green-400 border-green-800 text-[10px]">OK</Badge>;
}

export default function FoodPage() {
  const sorted = [...foodItems].sort((a, b) => a.expiresIn - b.expiresIn);
  const expiringSoon = sorted.filter((f) => f.expiresIn <= 3);

  return (
    <div className="px-4 pt-6 space-y-6">
      <BlurFade delay={0.1}>
        <div>
          <TextAnimate animation="blurInUp" by="word" className="text-xl font-bold tracking-tight">
            Food Manager
          </TextAnimate>
          <p className="text-xs text-muted-foreground mt-1">Track expiry dates and reduce waste</p>
        </div>
      </BlurFade>

      {expiringSoon.length > 0 && (
        <BlurFade delay={0.2}>
          <Card className="relative overflow-hidden bg-red-950/20 border-red-900/40">
            <BorderBeam size={80} duration={3} colorFrom="#ef4444" colorTo="#dc2626" />
            <CardContent className="pt-4 pb-3 px-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                </div>
                <TextAnimate animation="slideUp" by="word" className="text-sm font-medium text-red-400">
                  {`${expiringSoon.length} items expiring within 3 days!`}
                </TextAnimate>
              </div>
              <p className="text-xs text-muted-foreground">
                {expiringSoon.map((f) => f.name).join(", ")} — use them before they go bad.
              </p>
            </CardContent>
          </Card>
        </BlurFade>
      )}

      <div className="space-y-2">
        {sorted.map((item, i) => (
          <BlurFade key={item.name} delay={0.25 + i * 0.07}>
            <Card className={`${getUrgencyColor(item.expiresIn)} transition-all hover:scale-[1.02] cursor-pointer`}>
              <CardContent className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl animate-in zoom-in duration-500" style={{ animationDelay: `${i * 70 + 300}ms`, animationFillMode: "backwards" }}>
                    {item.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      {getUrgencyBadge(item.expiresIn)}
                    </div>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold">
                      {item.expiresIn === 1 ? "Tomorrow" : `${item.expiresIn} days`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.9}>
        <ShimmerButton className="w-full" shimmerColor="#22c55e" background="rgba(34, 197, 94, 0.15)">
          <span className="text-sm font-medium text-green-400">+ Add Food Item</span>
        </ShimmerButton>
      </BlurFade>
    </div>
  );
}
