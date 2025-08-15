const API_URL = import.meta.env.VITE_API_URL || "/api";

export async function getHello() {
  const res = await fetch(`${API_URL}/hello`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
