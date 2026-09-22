export type Step = {
  title: string;
  body: string;
  code?: string;
};

export type Tutorial = {
  slug: string;
  module: "leave" | "land" | "live";
  title: string;
  summary: string;
  time: string;
  difficulty: "EASY" | "MODERATE" | "ADVANCED";
  steps: Step[];
};

export const TUTORIALS: Tutorial[] = [
  {
    slug: "export-google-photos",
    module: "leave",
    title: "Export Google Photos with Leave",
    summary:
      "Pull your full photo library out of Google Photos with albums, faces and original capture times intact.",
    time: "30–90 MIN",
    difficulty: "EASY",
    steps: [
      {
        title: "Install Leave",
        body: "Leave runs as a small CLI. Install it on any machine with disk space for your library.",
        code: "curl -fsSL youralone.org/leave.sh | sh",
      },
      {
        title: "Authorize the source",
        body: "Leave opens a browser window and asks Google for read-only access to Photos. It never asks for your password.",
        code: "leave connect google-photos",
      },
      {
        title: "Pull the library",
        body: "This walks your full library, not just the last 90 days most official exports give you. Large libraries take longer — it resumes if interrupted.",
        code: "leave pull google-photos --out ./photos",
      },
      {
        title: "Verify the manifest",
        body: "Leave writes a manifest of every item it found versus every item it moved. Check it before you trust the export as complete.",
        code: "leave verify ./photos",
      },
    ],
  },
  {
    slug: "export-spotify-playlists",
    module: "leave",
    title: "Export Spotify playlists and saves",
    summary:
      "Move your playlists, saved albums and liked songs out where Navidrome or any other player can read them.",
    time: "20–40 MIN",
    difficulty: "EASY",
    steps: [
      {
        title: "Install Leave",
        body: "Same CLI as any other Leave export — install once, connect many sources.",
        code: "curl -fsSL youralone.org/leave.sh | sh",
      },
      {
        title: "Authorize Spotify",
        body: "Leave requests read-only access to your library scope. Your subscription and streaming rights never move — only the metadata.",
        code: "leave connect spotify",
      },
      {
        title: "Pull playlists",
        body: "Exports playlists and liked songs as a structured JSON manifest, matched against MusicBrainz IDs where possible.",
        code: "leave pull spotify --out ./music-manifest",
      },
      {
        title: "Match to files",
        body: "If you already own the audio files, Leave can match manifest entries to local files so Land's Navidrome picks up the same playlists.",
        code: "leave match ./music-manifest --library ~/Music",
      },
    ],
  },
  {
    slug: "land-on-raspberry-pi",
    module: "land",
    title: "Set up Land on a Raspberry Pi",
    summary:
      "Turn a spare Raspberry Pi 4 or 5 into a small home server running the services Leave will fill.",
    time: "1–2 HRS",
    difficulty: "MODERATE",
    steps: [
      {
        title: "Flash the base image",
        body: "Land ships a Raspberry Pi OS Lite image pre-configured for the install script. Flash it with Raspberry Pi Imager or balenaEtcher.",
        code: "# Raspberry Pi Imager → Choose OS → Land (Raspberry Pi OS Lite, 64-bit)",
      },
      {
        title: "Boot and connect",
        body: "Boot the Pi on the same network as your other devices, then SSH in using the hostname Land sets during flashing.",
        code: "ssh youralone@land.local",
      },
      {
        title: "Run the installer",
        body: "One command installs Docker, pulls the module images you choose, and wires them behind a local reverse proxy.",
        code: "curl -fsSL youralone.org/land.sh | sh",
      },
      {
        title: "Pick your modules",
        body: "The installer prompts for which services to run — Immich for photos, Navidrome for music, Vaultwarden for passwords, and so on.",
        code: "land add immich navidrome vaultwarden",
      },
      {
        title: "Point Leave exports at it",
        body: "Once services are up, Leave pulls can target Land directly instead of a local folder.",
        code: "leave pull google-photos --target land.local",
      },
    ],
  },
  {
    slug: "first-live-index",
    module: "live",
    title: "Build your first Live index",
    summary:
      "Get Live indexing photos, music and reading on your Land node so you can search across all of it at once.",
    time: "15–30 MIN",
    difficulty: "MODERATE",
    steps: [
      {
        title: "Confirm Land is running",
        body: "Live reads from services Land already runs — it needs at least one populated module to index.",
        code: "land status",
      },
      {
        title: "Enable Live",
        body: "Live is an early module — enable it explicitly. It runs entirely on-box; nothing it indexes leaves your network.",
        code: "land add live --early",
      },
      {
        title: "Run the first index",
        body: "The first pass reads everything currently on the node. Later passes are incremental and run in the background.",
        code: "live index --all",
      },
      {
        title: "Search across silos",
        body: "Query across photos, music and reading in one place — no single company gets to see this combination.",
        code: "live search \"beach trip 2019\"",
      },
    ],
  },
];

export function getTutorial(slug: string) {
  return TUTORIALS.find((t) => t.slug === slug);
}
