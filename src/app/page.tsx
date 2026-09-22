import Link from "next/link";
import Kicker from "@/components/kicker";
import TelemetryPanel from "@/components/telemetry-panel";
import MissPicker from "@/components/miss-picker";
import { MODULES, ModuleCard } from "@/components/module-card";

const STATS = [
  { label: "PRICE", value: "0" },
  { label: "ACCOUNTS REQUIRED", value: "0" },
  { label: "TELEMETRY", value: "NONE" },
  { label: "SOURCE", value: "OPEN" },
  { label: "OWNER", value: "YOU", accent: true },
];

const CASE = [
  {
    id: "A1",
    title: "PHOTOGRAPHS",
    body: "Your photographs live in a room you cannot enter.",
  },
  {
    id: "A2",
    title: "DOCUMENTS",
    body: "Your documents obey a contract you did not write and cannot edit.",
  },
  {
    id: "A3",
    title: "ACCOUNT",
    body: "Your account can end on a Tuesday, by email, with no appeal and no export.",
  },
];

const TURN_ITEMS = [
  { part: "01", item: "A machine", note: "Probably one you already own", qty: "+1" },
  { part: "02", item: "A room", note: "Any shelf with a socket", qty: "+1" },
  { part: "03", item: "A cable", note: "To your router", qty: "+1" },
  { part: "04", item: "A weekend", note: "For the first one. An evening after", qty: "+1" },
];

const COSTS = [
  { label: "TIME", body: "A weekend for the first. An evening for each after that.", accent: false },
  { label: "HARDWARE", body: "One you probably own. Otherwise about two years of cloud storage.", accent: false },
  { label: "POWER", body: "Roughly a lightbulb.", accent: false },
  { label: "MAINTENANCE", body: "You. This is the real price, and we will not pretend otherwise.", accent: true },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="dot-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <div className="mb-6 flex items-center gap-2 text-[11px] text-muted">
                <span>YA-01</span>
                <span>·</span>
                <span>A NON-PROFIT FOR BRINGING IT HOME</span>
              </div>

              <h1 className="font-display text-6xl leading-[0.95] tracking-wide sm:text-7xl">
                YOU&apos;RE
                <br />
                ALONE
              </h1>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                They said it to you as a warning. We are keeping it as a title.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/start"
                  className="flex items-center gap-2 bg-accent px-5 py-3 text-[12px] font-bold text-accent-ink transition-opacity hover:opacity-90"
                >
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-ink" />
                  Bring one thing home
                </Link>
                <Link
                  href="#case"
                  className="border border-line px-5 py-3 text-[12px] font-bold text-ink transition-colors hover:border-ink"
                >
                  Read the case
                </Link>
              </div>
            </div>

            <TelemetryPanel />
          </div>
        </div>
      </section>

      {/* STAT ROW */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-line px-5 py-6 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
            >
              <div className="mb-2 text-[10px] text-muted">{stat.label}</div>
              <div
                className={`font-display text-2xl ${stat.accent ? "text-accent" : "text-ink"}`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE CASE */}
      <section id="case" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Kicker>01 / THE CASE</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-wide sm:text-4xl">
            Everything you own is on someone else&apos;s shelf.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {CASE.map((c) => (
              <div key={c.id} className="border border-line bg-card p-5">
                <div className="mb-4 flex items-center justify-between text-[10px] text-muted">
                  <span>{c.id} / {c.title}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <p className="text-[13px] leading-relaxed text-ink">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TURN (dark) */}
      <section className="on-dark border-b border-dark-line bg-dark text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <Kicker>02 / THE TURN</Kicker>
            <h2 className="max-w-md font-display text-3xl leading-tight tracking-wide sm:text-4xl">
              It is smaller than they told you.
            </h2>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-paper/70">
              Nobody switches. Everybody moves one thing, finds nothing broke, and does the next
              one a month later.
            </p>
          </div>

          <div className="border border-dark-line">
            <div className="grid grid-cols-[2rem_1fr_1fr_2.5rem] gap-3 border-b border-dark-line px-4 py-2 text-[10px] text-muted">
              <span>PART</span>
              <span>ITEM</span>
              <span>NOTE</span>
              <span className="text-right">QTY</span>
            </div>
            {TURN_ITEMS.map((row) => (
              <div
                key={row.part}
                className="grid grid-cols-[2rem_1fr_1fr_2.5rem] items-center gap-3 border-b border-dark-line px-4 py-3 text-[12px] last:border-b-0"
              >
                <span className="text-muted">{row.part}</span>
                <span>{row.item}</span>
                <span className="text-[11px] text-paper/60">{row.note}</span>
                <span className="text-right text-accent">{row.qty}</span>
              </div>
            ))}
            <div className="px-4 py-3 text-[10px] text-muted">
              NOT INCLUDED: HEROICS, A DATACENTRE, PERMISSION
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Kicker>03 / THE TOOLS</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-wide sm:text-4xl">
            Three modules, in this order.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {MODULES.map((m) => (
              <ModuleCard key={m.slug} module={m} />
            ))}
          </div>
        </div>
      </section>

      {/* START HERE / MISS PICKER */}
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <Kicker>04 / START HERE</Kicker>
              <h2 className="max-w-xl font-display text-3xl leading-tight tracking-wide sm:text-4xl">
                What would you miss most?
              </h2>
            </div>
            <p className="max-w-xs text-[12px] leading-relaxed text-muted">
              Pick one channel. Not all of it, not a plan. One thing you&apos;d hate to lose,
              moved back where you can see it.
            </p>
          </div>

          <MissPicker />
        </div>
      </section>

      {/* COST */}
      <section id="cost" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Kicker>05 / COST</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-wide sm:text-4xl">
            What this costs you.
          </h2>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {COSTS.map((c) => (
              <div key={c.label} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:items-center">
                <div className="flex items-center gap-2 text-[11px] text-muted">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${c.accent ? "bg-accent" : "border border-muted"}`}
                  />
                  {c.label}
                </div>
                <div className={`text-[13px] leading-relaxed ${c.accent ? "text-accent" : "text-ink"}`}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-[12px] leading-relaxed text-muted">
            Which is why nothing here asks to be your only copy. Start with what you would miss,
            not what you depend on hourly. Mail last, if ever.
          </p>
        </div>
      </section>
    </>
  );
}
