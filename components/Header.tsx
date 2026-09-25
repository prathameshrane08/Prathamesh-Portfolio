"use client";

import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/transitions/TransitionLink";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";

type HeaderProps = {
  onMenuOpen: () => void;
};

const navigation = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Header({
  onMenuOpen,
}: HeaderProps) {
  return (
    <header className="relative z-40 mx-auto flex w-[calc(100%-32px)] max-w-[1600px] items-center justify-between py-6 md:w-[calc(100%-64px)]">
      {/* =====================================================
          BRAND LOGO

          TransitionLink is used because clicking the logo
          can move us to another route.
      ====================================================== */}
      <TransitionLink
        href="/"
        className="text-[1.75rem] md:text-[2rem]"
        aria-label="Prathamesh Rane homepage"
      >
        <Logo />
      </TransitionLink>

      {/* =====================================================
          DESKTOP NAVIGATION

          These are same-page anchor links,
          so we intentionally use normal <a> elements.
      ====================================================== */}
      <nav
        className="hidden items-center gap-8 md:flex"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative overflow-hidden text-sm"
          >
            {/* Original label */}
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {item.label}
            </span>

            {/* Duplicate label slides in from below */}
            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* =====================================================
          MAGNETIC MENU BUTTON

          MagneticButton only handles the subtle mouse movement.

          The actual button still controls the menu.
      ====================================================== */}
      <MagneticButton>
        <button
          type="button"
          onClick={onMenuOpen}
          className="group flex items-center gap-3 rounded-full border border-black/30 px-5 py-2.5 text-sm transition-colors duration-300 hover:bg-black hover:text-white"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
        >
          <span>Menu</span>

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </button>
      </MagneticButton>
    </header>
  );
}