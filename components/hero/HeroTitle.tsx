"use client";

import AnimatedText from "@/components/ui/AnimatedText";

// TypeScript contract for the title props
type HeroTitleProps = {
  line1: string;
  line2: string;
  line3: string;
};

export default function HeroTitle({
  line1,
  line2,
  line3,
}: HeroTitleProps) {
  return (
    <h1 className="display-xl max-w-[1450px]">
      {/* Each line uses the same reusable animation */}
      <AnimatedText delay={0.1}>{line1}</AnimatedText>

      <AnimatedText delay={0.2}>{line2}</AnimatedText>

      <AnimatedText delay={0.3}>{line3}</AnimatedText>
    </h1>
  );
}