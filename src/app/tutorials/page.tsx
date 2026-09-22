import Link from "next/link";
import Kicker from "@/components/kicker";
import { TUTORIALS } from "@/lib/tutorials";
import { MODULES } from "@/components/module-card";

export const metadata = {
  title: "Tutorials — YOURALONE",
};

export default function TutorialsIndex() {
  return (
    <section className="dot-grid">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <Kicker>TUTORIALS</Kicker>
        <h1 className="font-display text-4xl leading-tight tracking-wide sm:text-5xl">
          Step by step.
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
          Each guide moves one thing home, start to finish. Pick your module, or pick what you&apos;d
          miss most and work backward.
        </p>

        <div className="mt-12 space-y-3">
          {TUTORIALS.map((t) => {
            const mod = MODULES.find((m) => m.slug === t.module)!;
            return (
              <Link
                key={t.slug}
                href={`/tutorials/${t.slug}`}
                className="flex flex-col gap-3 border border-line bg-card p-5 transition-colors hover:border-ink sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[10px] text-muted">
                    <span className={`h-1.5 w-1.5 rounded-full ${mod.statusColor}`} />
                    <span>{mod.code}</span>
                    <span>·</span>
                    <span>{t.difficulty}</span>
                    <span>·</span>
                    <span>{t.time}</span>
                  </div>
                  <div className="font-display text-lg">{t.title}</div>
                  <p className="mt-1 max-w-lg text-[12px] leading-relaxed text-muted">
                    {t.summary}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] text-muted">
                  {t.steps.length} STEPS &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
