"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

// Locks page scrolling while an overlay is open.
//
// Lenis drives scrolling programmatically, so `overflow: hidden`
// on <body> alone doesn't stop it — Lenis must be stopped too.
// Scrollable overlays need `data-lenis-prevent` so their own
// content can still scroll while Lenis is stopped.
export function useScrollLock(isLocked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [isLocked, lenis]);
}
