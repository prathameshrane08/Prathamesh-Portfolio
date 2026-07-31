"use client";

import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

export default function AppEffects() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
    </>
  );
}