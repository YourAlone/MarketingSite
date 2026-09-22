import { notFound } from "next/navigation";
import Link from "next/link";
import Kicker from "@/components/kicker";
import { MODULES } from "@/components/module-card";

const COPY: Record<string, { subhead: string; steps: { title: string; body: string }[] }> = {
  leave: {
    subhead:
      "Leave is the export layer: it talks to the platforms so you don't have to trust their download button.",
    steps: [
      { title: "Connect", body: "Point it at an account. Read-only where the platform allows it." },
      { title: "Pull", body: "Full history, not the last-90-days sample most exports give you." },
      { title: "Verify", body: "A manifest of what moved and what didn't, so nothing goes missing quietly." },
    ],
  },
  land: {
    subhead:
      "Land turns a machine you already own into a small, boring server — configured, not assembled by hand.",
    steps: [
      { title: "Pick hardware", body: "An old laptop, a mini PC, a Raspberry Pi. Land is built for spare, not new." },
      { title: "Run one command", body: "It installs, configures, and wires the services Leave will fill." },
      { title: "Keep it updated", body: "Signed updates, applied on your schedule, never silently." },
    ],
  },
  live: {
    subhead:
      "Live is the layer that makes owning your data feel like less work than renting someone else's opinion of it.",
    steps: [
      { title: "Index locally", body: "Photos, music, films and reading, indexed on your own hardware." },
      { title: "Ask across silos", body: "One search across everything you own — nothing leaves the box." },
      { title: "Stay early, on purpose", body: "Live ships slowly. It touches the most private layer of what you own." },
    ],
  },
};

export function generateStaticParams() {
  return MODULES.map((m) => ({ module: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module: slug } = await params;
  const mod = MODULES.find((m) => m.slug === slug);
  if (!mod) notFound();
  const copy = COPY[slug];

  const otherModules = MODULES.filter((m) => m.slug !== slug);

  return (
    <>
      <section className="dot-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="mb-6 flex items-center gap-2 text-[11px] text-muted">
            <Link href="/" className="hover:text-ink">
              YOURALONE
            </Link>
            <span>/</span>
            <span>{mod.code}</span>
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${mod.statusColor}`} />
              {mod.status}
            </span>
          </div>

          <h1 className="font-display text-6xl leading-[0.95] tracking-wide sm:text-7xl">
            {mod.name}
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">{copy.subhead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="flex items-center gap-2 bg-accent px-5 py-3 text-[12px] font-bold text-accent-ink transition-opacity hover:opacity-90"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-ink" />
              Bring it home
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Kicker>HOW {mod.name} WORKS</Kicker>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {copy.steps.map((step, i) => (
              <div key={step.title} className="border border-line bg-card p-5">
                <div className="mb-4 text-[10px] text-muted">0{i + 1}</div>
                <div className="mb-2 font-display text-lg">{step.title}</div>
                <p className="text-[13px] leading-relaxed text-ink">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            <div className="border border-line bg-card p-5">
              <div className="mb-2 text-[10px] text-muted">IN</div>
              <div className="text-[13px]">{mod.in}</div>
            </div>
            <div className="border border-line bg-card p-5">
              <div className="mb-2 text-[10px] text-muted">OUT</div>
              <div className="text-[13px]">{mod.out}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="on-dark bg-dark text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Kicker>OTHER MODULES</Kicker>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {otherModules.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="flex items-center justify-between border border-dark-line p-5 transition-colors hover:border-accent"
              >
                <span className="font-display text-2xl">{m.name}</span>
                <span className="text-[11px] text-muted">{m.code} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
