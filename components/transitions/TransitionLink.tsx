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
// Use this instead of Next.js <Link> when moving between pages.
//
// It does not animate:
// - External links
// - Same-page anchor links
// - New-tab clicks
// - Cmd/Ctrl/Shift/Alt clicks
// ============================================================

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  "aria-label"?: string;
  target?: string;
  rel?: string;
};

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    active,
    startTransition,
    endTransition,
  } = useTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Run any click handler supplied by the parent component.
    onClick?.(event);

    // Stop if the parent handler already cancelled navigation.
    if (event.defaultPrevented) {
      return;
    }

    const isModifiedClick =
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    const opensNewTab = target === "_blank";

    const isExternalLink =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    const isSamePageAnchor = href.startsWith("#");

    const isCurrentRoute =
      href === pathname ||
      href === `${pathname}/`;

    // Keep normal browser behaviour for these links.
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

    // Prevent repeated clicks while the overlay is active.
    if (active) {
      return;
    }

    startTransition();

    // Wait for the overlay to cover the page.
    window.setTimeout(() => {
      router.push(href);

      // Remove the overlay after the new route mounts.
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
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}