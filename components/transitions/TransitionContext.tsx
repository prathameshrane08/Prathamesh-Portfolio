"use client";

// ============================================================
// TransitionContext.tsx
//
// PURPOSE
// -------
// This file creates a global state that controls
// whether the page transition animation is playing.
//
// Think of it like a shared "switch".
//
// Any component can ask:
//
// "Is the transition active?"
//
// or
//
// "Start the transition."
//
// ============================================================

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

// ============================================================
// Define what our Context stores.
//
// active
// --------
// true  -> animation is running
// false -> animation is stopped
//
// startTransition()
// -----------------
// Starts the animation.
//
// endTransition()
// ----------------
// Stops the animation.
//
// ============================================================

type TransitionContextType = {
  active: boolean;

  startTransition: () => void;

  endTransition: () => void;
};

// ============================================================
// Create the Context.
//
// Initially it is undefined.
//
// Later our Provider will give it real values.
// ============================================================

const TransitionContext =
  createContext<TransitionContextType | undefined>(
    undefined,
  );

// ============================================================
// Provider Component
//
// Wraps the whole application.
//
// Every child component now has access
// to the transition state.
// ============================================================

export function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Stores whether the animation is active.
  const [active, setActive] =
    useState(false);

  return (
    <TransitionContext.Provider
      value={{
        active,

        startTransition: () =>
          setActive(true),

        endTransition: () =>
          setActive(false),
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

// ============================================================
// Custom Hook
//
// Instead of:
//
// useContext(TransitionContext)
//
// we'll simply write:
//
// useTransition()
//
// Much cleaner.
// ============================================================

export function useTransition() {
  const context =
    useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "useTransition must be used inside TransitionProvider",
    );
  }

  return context;
}