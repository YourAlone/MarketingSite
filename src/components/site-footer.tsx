import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="on-dark border-t border-dark-line bg-dark text-paper">
      <div className="dot-grid">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h2 className="font-display text-4xl leading-tight tracking-wide sm:text-6xl">
              BRING IT
              <br />
              HOME
            </h2>
            <Link
              href="/start"
              className="flex items-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-accent-ink transition-opacity hover:opacity-90"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-ink" />
              Start &rarr;
            </Link>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-dark-line pt-6 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>YA.01 / YOU&apos;RE ALONE — A NON-PROFIT / OPEN SOURCE</span>
            <span>DESIGNED IN BELGIUM / ASSEMBLED BY YOU</span>
            <span>YOURALONE.ORG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
