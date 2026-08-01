export function compareVersions(a, b) {
  const partsA = a.replace(/^v/i, '').split('.').map(Number)
  const partsB = b.replace(/^v/i, '').split('.').map(Number)
  const length = Math.max(partsA.length, partsB.length)

  for (let i = 0; i < length; i++) {
    const numA = partsA[i] || 0
    const numB = partsB[i] || 0
    if (numA !== numB) return numA - numB
  }
  return 0
}