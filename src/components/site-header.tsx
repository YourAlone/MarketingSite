import Link from "next/link";

const NAV = [
  { href: "/#tools", label: "TOOLS" },
  { href: "/tutorials", label: "TUTORIALS" },
  { href: "/mission", label: "MISSION" },
  { href: "/#cost", label: "COST" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center bg-ink text-paper text-[11px] font-bold">
            YA
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-wide">YOURALONE</span>
            <span className="text-[10px] text-muted">NON-PROFIT / REV 0.1</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[11px] text-muted md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/start"
          className="flex items-center gap-2 bg-accent px-4 py-2 text-[11px] font-bold text-accent-ink transition-opacity hover:opacity-90"
        >
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-ink" />
          START
        </Link>
      </div>
    </header>
  );
}
