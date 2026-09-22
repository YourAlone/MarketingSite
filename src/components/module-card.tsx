import Link from "next/link";

export type Module = {
  slug: "leave" | "land" | "live";
  code: string;
  name: string;
  status: string;
  statusColor: string;
  description: string;
  in: string;
  out: string;
};

export const MODULES: Module[] = [
  {
    slug: "leave",
    code: "YA-L1",
    name: "LEAVE",
    status: "BUILDING",
    statusColor: "bg-accent",
    description:
      "Gets your data out with its history intact — albums, playlists, threads, timestamps. The parts every official export quietly drops.",
    in: "GOOGLE · APPLE · SPOTIFY",
    out: "OPEN FORMATS",
  },
  {
    slug: "land",
    code: "YA-L2",
    name: "LAND",
    status: "BUILDING",
    statusColor: "bg-accent",
    description:
      "One command puts the service on your machine, already configured for what you're about to move into it. No app store.",
    in: "ONE COMMAND",
    out: "A RUNNING SERVICE",
  },
  {
    slug: "live",
    code: "YA-L3",
    name: "LIVE",
    status: "EARLY",
    statusColor: "bg-muted",
    description:
      "Muse reads across your photos, music, films and reading at once, and finds what no single company can see.",
    in: "EVERYTHING YOU OWN",
    out: "TASTE, LOCALLY",
  },
];

export function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/${module.slug}`}
      className="group flex flex-col justify-between border border-dark-line bg-dark-card p-5 text-paper transition-colors hover:border-accent"
    >
      <div className="dot-grid -m-5 mb-4 border-b border-dark-line p-5">
        <div className="mb-6 flex items-center justify-between text-[10px] text-muted">
          <span>{module.code}</span>
          <span className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${module.statusColor}`} />
            {module.status}
          </span>
        </div>
        <span className="font-display text-3xl tracking-wide">{module.name}</span>
      </div>
      <p className="mb-6 text-[13px] leading-relaxed text-paper/80">{module.description}</p>
      <div className="space-y-1 border-t border-dark-line pt-3 text-[10px] text-muted">
        <div className="flex justify-between gap-3">
          <span>IN</span>
          <span className="text-right text-paper/70">{module.in}</span>
        </div>
        <div className="flex justify-between gap-3">
          <span>OUT</span>
          <span className="text-right text-paper/70">{module.out}</span>
        </div>
      </div>
    </Link>
  );
}
