"use client";

import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";

// =====================================================
// GLOBAL APPLICATION EFFECTS
//
// These effects appear across the entire website:
//
// - Page loader
// - Custom cursor
// - Scroll progress bar
// =====================================================

export default function AppEffects() {
  return (
    <>
      <PageLoader />

      <CustomCursor />

      <ScrollProgress />
    </>
  );
}