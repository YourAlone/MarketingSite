"use client";

import { useState } from "react";

type Channel = {
  id: string;
  name: string;
  source: string;
  moves: string;
  time: string;
  untouched: string;
};

const CHANNELS: Channel[] = [
  {
    id: "photos",
    name: "Photos",
    source: "GOOGLE PHOTOS · ICLOUD",
    moves: "Every item with its albums, faces, favourites and original capture times.",
    time: "A weekend for a large library. An evening for a small one.",
    untouched: "Nothing is deleted. The originals stay in your account until you decide.",
  },
  {
    id: "calendar",
    name: "Calendar",
    source: "GOOGLE · ICLOUD",
    moves: "Every event, invite and recurrence rule, with attendees intact.",
    time: "Under an hour, most of it waiting on exports.",
    untouched: "Shared calendars stay shared until you re-point them.",
  },
  {
    id: "music",
    name: "Music",
    source: "SPOTIFY",
    moves: "Playlists, saved albums, and listening history where the API allows it.",
    time: "An evening, mostly matching tracks to files you already own.",
    untouched: "Your subscription. Streaming licenses don't move — files do.",
  },
  {
    id: "notes",
    name: "Notes",
    source: "NOTION · EVERNOTE · APPLE",
    moves: "Pages, nested structure, and attachments as plain files and markdown.",
    time: "An evening for a personal wiki.",
    untouched: "Real-time collaboration — that part you'll rebuild differently.",
  },
  {
    id: "files",
    name: "Files",
    source: "DROPBOX · DRIVE",
    moves: "Folder structure, share links noted for later, version history where exposed.",
    time: "A weekend for a large drive, driven by transfer speed.",
    untouched: "Nothing. Files are the easy case.",
  },
  {
    id: "mail",
    name: "Mail",
    source: "GMAIL",
    moves: "Every message and thread, as standard mbox — searchable, not a screenshot.",
    time: "A weekend for a decade of mail.",
    untouched: "Your address. You keep sending mail while you migrate.",
  },
];

export default function MissPicker() {
  const [active, setActive] = useState(CHANNELS[0].id);
  const channel = CHANNELS.find((c) => c.id === active) ?? CHANNELS[0];

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
      <div className="grid grid-cols-2 gap-3">
        {CHANNELS.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex flex-col items-start gap-3 border p-4 text-left transition-colors ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-card text-ink hover:border-ink/40"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isActive ? "bg-accent" : "border border-muted"
                }`}
              />
              <span>
                <span className="block font-display text-lg">{c.name}</span>
                <span className={`text-[10px] ${isActive ? "text-paper/60" : "text-muted"}`}>
                  {c.source}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="on-dark border border-dark-line bg-dark p-5 text-paper">
        <div className="dot-grid -m-5 mb-5 border-b border-dark-line p-5">
          <div className="mb-4 flex items-center justify-between text-[10px] text-muted">
            <span>READOUT / CH.0{CHANNELS.indexOf(channel) + 1} — IMMICH</span>
            <span className="flex items-center gap-1.5 text-live">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-live" />
              READY
            </span>
          </div>
          <span className="font-display text-4xl tracking-wide">{channel.name.toUpperCase()}</span>
        </div>

        <dl className="space-y-4 text-[12px]">
          <div>
            <dt className="mb-1 text-[10px] text-muted">MOVES</dt>
            <dd className="leading-relaxed text-paper/85">{channel.moves}</dd>
          </div>
          <div>
            <dt className="mb-1 text-[10px] text-muted">TIME</dt>
            <dd className="leading-relaxed text-paper/85">{channel.time}</dd>
          </div>
          <div>
            <dt className="mb-1 text-[10px] text-muted">UNTOUCHED</dt>
            <dd className="leading-relaxed text-paper/85">{channel.untouched}</dd>
          </div>
        </dl>

        <button className="mt-6 flex w-full items-center justify-center gap-2 bg-accent py-3 text-[12px] font-bold text-accent-ink transition-opacity hover:opacity-90">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-ink" />
          Bring {channel.name.toLowerCase()} home &rarr;
        </button>
      </div>
    </div>
  );
}
