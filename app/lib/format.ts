const MINUTES_PER_HOUR = 60

export function formatMinutes(minutes: number): string {
  if (minutes < MINUTES_PER_HOUR) {
    return `${minutes} min`
  }

  const hours = Math.floor(minutes / MINUTES_PER_HOUR)
  const remainder = minutes % MINUTES_PER_HOUR

  return remainder === 0 ? `${hours} hr` : `${hours} hr ${remainder} min`
}

export function formatCalories(calories: number, perServing = false): string {
  return perServing ? `${calories} cal/serving` : `${calories} cal`
}
