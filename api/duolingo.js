// Vercel serverless function: GET /api/duolingo -> { streak: number }
// Reads the public Duolingo profile for berryblueberry07 using Duolingo's
// unofficial endpoint. Cached at the edge for an hour so Duolingo is called rarely.
const USERNAME = "berryblueberry07";

export default async function handler(req, res) {
  try {
    const url = `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(USERNAME)}&fields=users{streak,streakData}`;
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (personal site streak widget)" } });
    if (!r.ok) throw new Error(`Duolingo responded ${r.status}`);
    const data = await r.json();
    const user = data.users && data.users[0];
    const streak = user?.streakData?.currentStreak?.length ?? user?.streak;
    if (!Number.isFinite(streak)) throw new Error("No streak in response");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ streak });
  } catch (err) {
    res.setHeader("Cache-Control", "s-maxage=300");
    res.status(502).json({ error: String(err.message || err) });
  }
}
