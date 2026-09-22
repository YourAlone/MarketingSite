import Kicker from "@/components/kicker";

export const metadata = {
  title: "Mission — YOURALONE",
};

const PRINCIPLES = [
  {
    id: "P1",
    title: "Your copy is the real one",
    body: "Not a backup, not a cache. The account version is the copy — yours is the original once it lands.",
  },
  {
    id: "P2",
    title: "No accounts, no telemetry",
    body: "Nothing here phones home. What runs on your machine answers to you and nothing else.",
  },
  {
    id: "P3",
    title: "Open, always",
    body: "Every module is open source. If we stop maintaining it, you still own a working thing, not a subscription.",
  },
  {
    id: "P4",
    title: "One thing at a time",
    body: "We don't ask for a migration. We ask for one export you'd miss, moved somewhere you can see it.",
  },
];

type RoadmapStatus = "SHIPPED" | "BUILDING" | "PLANNED";

const STATUS_STYLE: Record<RoadmapStatus, string> = {
  SHIPPED: "bg-live",
  BUILDING: "bg-accent",
  PLANNED: "bg-muted",
};

const ROADMAP: { module: string; item: string; status: RoadmapStatus }[] = [
  { module: "LEAVE", item: "Google Photos export", status: "SHIPPED" },
  { module: "LEAVE", item: "Spotify playlists & saves", status: "SHIPPED" },
  { module: "LEAVE", item: "Gmail (mbox)", status: "BUILDING" },
  { module: "LEAVE", item: "Notion / Evernote notes", status: "BUILDING" },
  { module: "LEAVE", item: "iCloud photos & calendar", status: "PLANNED" },
  { module: "LAND", item: "One-command install (x86 + ARM)", status: "SHIPPED" },
  { module: "LAND", item: "Immich, Navidrome, Vaultwarden bundles", status: "SHIPPED" },
  { module: "LAND", item: "Signed auto-updates", status: "BUILDING" },
  { module: "LAND", item: "Guided hardware picker", status: "PLANNED" },
  { module: "LIVE", item: "Cross-library search (photos + music)", status: "BUILDING" },
  { module: "LIVE", item: "Reading + film indexing", status: "PLANNED" },
  { module: "LIVE", item: "Local taste recommendations", status: "PLANNED" },
];

export default function MissionPage() {
  return (
    <>
      <section className="dot-grid border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <Kicker>WHY WE EXIST</Kicker>
          <h1 className="font-display text-4xl leading-tight tracking-wide sm:text-5xl">
            Nothing here should need us to keep existing.
          </h1>
          <div className="mt-8 space-y-5 max-w-2xl text-sm leading-relaxed text-ink">
            <p>
              Every platform you rely on can be sold, shut down, or quietly changed against you.
              Not because the people running it are bad, but because you were never the customer
              of the part that mattered — you were the inventory.
            </p>
            <p>
              YOURALONE is a non-profit, not a product. We build small tools that move your data
              out of accounts you don&apos;t control and onto hardware you do, and then we try to
              make owning it feel like less work than renting someone else&apos;s opinion of it.
            </p>
            <p>
              We don&apos;t want a market. We want the number of people who depend on us to keep
              running to be as close to zero as we can get it — every export is a working thing
              you keep, whether or not we&apos;re still here to maintain it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Kicker>PRINCIPLES</Kicker>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.id} className="border border-line bg-card p-5">
                <div className="mb-3 text-[10px] text-muted">{p.id}</div>
                <div className="mb-2 font-display text-lg">{p.title}</div>
                <p className="text-[13px] leading-relaxed text-ink">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-dark text-paper">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Kicker>ROADMAP</Kicker>
          <h2 className="font-display text-3xl leading-tight tracking-wide sm:text-4xl">
            What&apos;s built, what&apos;s next.
          </h2>

          <div className="mt-10 border border-dark-line">
            <div className="grid grid-cols-[5rem_1fr_7rem] gap-3 border-b border-dark-line px-4 py-2 text-[10px] text-muted">
              <span>MODULE</span>
              <span>ITEM</span>
              <span className="text-right">STATUS</span>
            </div>
            {ROADMAP.map((row, i) => (
              <div
                key={`${row.module}-${row.item}`}
                className={`grid grid-cols-[5rem_1fr_7rem] items-center gap-3 px-4 py-3 text-[12px] ${
                  i < ROADMAP.length - 1 ? "border-b border-dark-line" : ""
                }`}
              >
                <span className="text-muted">{row.module}</span>
                <span>{row.item}</span>
                <span className="flex items-center justify-end gap-1.5 text-[10px] text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${STATUS_STYLE[row.status]}`} />
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
