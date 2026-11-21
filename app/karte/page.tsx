import { redirect } from "next/navigation"

// Die Karte ist Teil der Seite „Regionen & Karte“
export default async function KartePage({ searchParams }: { searchParams: Promise<{ r?: string }> }) {
  const { r } = await searchParams
  redirect(r && /^[A-Z]{1,3}$/.test(r) ? `/regionen?r=${r}` : "/regionen")
}
