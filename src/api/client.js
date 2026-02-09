export async function fetchOverview() {
  const response = await fetch('/api/overview')
  if (!response.ok) {
    throw new Error('Failed to load overview')
  }
  return response.json()
}
