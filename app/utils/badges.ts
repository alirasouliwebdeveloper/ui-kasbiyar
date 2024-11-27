import { Badge, UserBadge, BadgeCategory } from "@/types/badge"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export async function getUserBadges(userId: string): Promise<UserBadge[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/badges`)
    if (!response.ok) throw new Error('Failed to fetch badges')
    return await response.json()
  } catch (error) {
    console.error('Error fetching badges:', error)
    return []
  }
}

export async function checkBadgeProgress(
  userId: string, 
  category: BadgeCategory
): Promise<number> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/${userId}/badges/progress/${category}`
    )
    if (!response.ok) throw new Error('Failed to fetch badge progress')
    return await response.json()
  } catch (error) {
    console.error('Error checking badge progress:', error)
    return 0
  }
}
