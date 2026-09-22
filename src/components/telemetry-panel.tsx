const ROWS = [
  { name: "IMMICH", value: "1.1", unit: "TB" },
  { name: "RADICALE", value: "431", unit: "CONTACTS" },
  { name: "NAVIDROME", value: "6,904", unit: "TRACKS" },
  { name: "VAULTWARDEN", value: "186", unit: "ITEMS" },
  { name: "PAPERLESS", value: "0", unit: "STOPPED" },
];

export default function TelemetryPanel() {
  return (
    <div className="border border-dark-line bg-dark text-paper">
      <div className="flex items-center justify-between border-b border-dark-line px-4 py-3 text-[10px] text-muted">
        <span>YA-D1 · YOUR LAB / NODE 01</span>
        <span className="flex items-center gap-1.5 text-live">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-live" />
          LIVE
        </span>
      </div>

      <div className="px-4 pt-4 text-[10px] text-muted">DATA AT HOME</div>
      <div className="flex items-end gap-1 px-4 pb-4">
        <span className="font-display text-5xl">62</span>
        <span className="font-display text-2xl text-muted">%</span>
      </div>
      <div className="mb-5 flex gap-[3px] px-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className={`h-4 w-1.5 ${i < 15 ? "bg-accent" : "bg-dark-line"}`}
          />
        ))}
      </div>

      <div className="divide-y divide-dark-line border-t border-dark-line">
        {ROWS.map((row) => (
          <div key={row.name} className="flex items-center justify-between px-4 py-2 text-[11px]">
            <span className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  row.unit === "STOPPED" ? "bg-dark-line" : "bg-accent"
                }`}
              />
              {row.name}
            </span>
            <span className="text-muted">
              {row.value} {row.unit}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-dark-line px-4 py-3">
        <div className="flex items-center justify-between text-[10px] text-muted">
          <span>STILL THEIRS</span>
          <span>SPOTIFY / GMAIL / DROPBOX</span>
        </div>
        <div className="font-display mt-1 text-2xl">03</div>
      </div>
    </div>
  );
}
