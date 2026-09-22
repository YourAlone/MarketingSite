import Link from "next/link";
import Kicker from "@/components/kicker";
import { MODULES } from "@/components/module-card";

export const metadata = {
  title: "Start — YOURALONE",
};

export default function StartPage() {
  return (
    <section className="dot-grid">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <Kicker>START HERE</Kicker>
        <h1 className="font-display text-4xl leading-tight tracking-wide sm:text-5xl">
          Bring one thing home.
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
          Pick the module that matches where you are. Leave gets your data out. Land gives it
          somewhere to live. Live makes it worth staying.
        </p>

        <div className="mt-10 space-y-3">
          {MODULES.map((m, i) => (
            <Link
              key={m.slug}
              href={`/${m.slug}`}
              className="flex items-center justify-between border border-line bg-card p-5 transition-colors hover:border-ink"
            >
              <span className="flex items-center gap-4">
                <span className="text-[10px] text-muted">0{i + 1}</span>
                <span className="font-display text-xl">{m.name}</span>
              </span>
              <span className="text-[11px] text-muted">{m.code} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
