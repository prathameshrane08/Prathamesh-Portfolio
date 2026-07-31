import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[#f1efe9] px-4 text-[#111111] md:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-sm uppercase tracking-[0.2em] text-black/45">
          Error 404
        </p>

        <h1 className="mt-8 text-[clamp(5rem,16vw,15rem)] font-medium leading-[0.8] tracking-[-0.09em]">
          Page not
          <br />
          found.
        </h1>

        <p className="mt-12 max-w-xl text-lg leading-relaxed text-black/55 md:text-xl">
          The page may have been moved, renamed or removed.
        </p>

        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 text-white"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Return home
        </Link>
      </div>
    </main>
  );
}