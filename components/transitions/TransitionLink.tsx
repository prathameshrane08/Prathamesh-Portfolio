"use client";

import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useTransition } from "@/components/transitions/TransitionContext";

// ============================================================
// TRANSITION LINK
//
// PURPOSE
// -------
// Behaves like Next.js <Link>, but plays our transition
// animation before changing routes.
//
// IMPORTANT
// ---------
// We extend normal anchor attributes.
//
// That means this component now supports:
//
// data-cursor="VIEW"
// aria-label="..."
// target="_blank"
// rel="..."
// etc.
// ============================================================

type TransitionLinkProps =
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
  };

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  target,
  rel,

  // ==========================================================
  // IMPORTANT
  //
  // Everything we don't explicitly destructure goes here.
  //
  // Example:
  //
  // data-cursor="VIEW"
  //
  // becomes part of ...restProps
  //
  // and is forwarded to the actual <Link>.
  // ==========================================================
  ...restProps
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    active,
    startTransition,
    endTransition,
  } = useTransition();

  function handleClick(
    event: MouseEvent<HTMLAnchorElement>,
  ) {
    // Run an existing parent click handler first.
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const isModifiedClick =
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    const opensNewTab =
      target === "_blank";

    const isExternalLink =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    const isSamePageAnchor =
      href.startsWith("#");

    const isCurrentRoute =
      href === pathname ||
      href === `${pathname}/`;

    // Keep normal browser behaviour for these.
    if (
      isModifiedClick ||
      opensNewTab ||
      isExternalLink ||
      isSamePageAnchor ||
      isCurrentRoute
    ) {
      return;
    }

    event.preventDefault();

    // Prevent repeated clicks while transition is active.
    if (active) {
      return;
    }

    startTransition();

    // Wait for overlay to cover current page.
    window.setTimeout(() => {
      router.push(href);

      // Remove overlay once new route has appeared.
      window.setTimeout(() => {
        endTransition();
      }, 550);
    }, 700);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}

      // ======================================================
      // THIS IS THE IMPORTANT FIX.
      //
      // data-cursor now reaches the real <a> element.
      // ======================================================
      {...restProps}
    >
      {children}
    </Link>
  );
}