export default async function getSkills() {
  const Url = `/api/techstack`;
  const result = await fetch(Url, { cache: "no-store" });
  return result.json();
}
