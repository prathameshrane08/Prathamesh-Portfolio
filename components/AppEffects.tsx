"use client";

import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";

// ============================================================
// GLOBAL APPLICATION EFFECTS
//
// ✓ Page loader
// ✓ Smart cursor
// ✓ Scroll progress
// ============================================================

export default function AppEffects() {
  return (
    <>
      <PageLoader />

      <CustomCursor />

      <ScrollProgress />
    </>
  );
}