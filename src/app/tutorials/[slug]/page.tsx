import { notFound } from "next/navigation";
import Link from "next/link";
import Kicker from "@/components/kicker";
import { TUTORIALS, getTutorial } from "@/lib/tutorials";
import { MODULES } from "@/components/module-card";

export function generateStaticParams() {
  return TUTORIALS.map((t) => ({ slug: t.slug }));
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  if (!tutorial) notFound();
  const mod = MODULES.find((m) => m.slug === tutorial.module)!;

  return (
    <>
      <section className="dot-grid border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <div className="mb-6 flex items-center gap-2 text-[11px] text-muted">
            <Link href="/tutorials" className="hover:text-ink">
              TUTORIALS
            </Link>
            <span>/</span>
            <Link href={`/${mod.slug}`} className="hover:text-ink">
              {mod.name}
            </Link>
          </div>

          <h1 className="font-display text-3xl leading-tight tracking-wide sm:text-4xl">
            {tutorial.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{tutorial.summary}</p>

          <div className="mt-6 flex flex-wrap gap-4 text-[10px] text-muted">
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${mod.statusColor}`} />
              {mod.code}
            </span>
            <span>{tutorial.difficulty}</span>
            <span>{tutorial.time}</span>
            <span>{tutorial.steps.length} STEPS</span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16">
          <ol className="space-y-8">
            {tutorial.steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line bg-card font-display text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < tutorial.steps.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-line" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="mb-2 font-display text-lg">{step.title}</div>
                  <p className="text-[13px] leading-relaxed text-ink">{step.body}</p>
                  {step.code && (
                    <pre className="on-dark mt-3 overflow-x-auto border border-dark-line bg-dark px-4 py-3 text-[12px] text-live">
                      <code>{step.code}</code>
                    </pre>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex items-center justify-between border-t border-line pt-6 text-[11px]">
            <Link href="/tutorials" className="text-muted hover:text-ink">
              &larr; All tutorials
            </Link>
            <Link href={`/${mod.slug}`} className="text-muted hover:text-ink">
              About {mod.name} &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
