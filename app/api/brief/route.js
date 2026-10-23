/* GET /api/brief — the latest "Daily brief" posts from the public GitHub repo
   ImtiazNayeemShawon/social-posts (posts/*.json + matching .png). Cached and refreshed every hour.
   Optional: set GITHUB_TOKEN in the environment to raise GitHub's rate limit. */

export const revalidate = 3600;

const OWNER = "ImtiazNayeemShawon";
const REPO = "social-posts";
const BRANCH = "main";
const MAX_POSTS = 12;
const raw = (name) => `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/posts/${encodeURIComponent(name)}`;

export async function GET() {
  try {
    const headers = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/posts?ref=${BRANCH}`, { headers, next: { revalidate } });
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const files = await res.json();
    const names = new Set(files.map((f) => f.name));
    const jsonFiles = files
      .filter((f) => f.name.endsWith(".json"))
      .sort((a, b) => b.name.replace(/\.json$/, "").localeCompare(a.name.replace(/\.json$/, ""), undefined, { numeric: true })) // newest first
      .slice(0, MAX_POSTS);

    const posts = await Promise.all(jsonFiles.map(async (f) => {
      try {
        const r = await fetch(raw(f.name), { next: { revalidate } });
        if (!r.ok) return null;
        const d = await r.json();
        const slug = f.name.replace(/\.json$/, "");
        const m = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
        return {
          slug,
          date: d.date || (m ? `${m[3]}.${m[2]}.${m[1]}` : ""),
          kicker: d.kicker || "Daily brief",
          headline: d.headline || "",
          old: d.old || "",
          highlight: d.highlight || "",
          subline: d.subline || "",
          topic: d.topic || "",
          source: d.source || "",
          tags: Array.isArray(d.tags) ? d.tags : [],
          image: names.has(`${slug}.png`) ? raw(`${slug}.png`) : null,
        };
      } catch { return null; }
    }));

    return Response.json({ posts: posts.filter(Boolean) });
  } catch (e) {
    return Response.json({ posts: [], error: String(e.message || e) });
  }
}
