import { Business } from '@/types/business'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export async function getUserBookmarks(
  userId: string,
  sortBy: string = 'recent'
): Promise<Business[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/${userId}/bookmarks?sort=${sortBy}`
    )
    if (!response.ok) throw new Error('Failed to fetch bookmarks')
    return await response.json()
  } catch (error) {
    console.error('Error fetching user bookmarks:', error)
    return []
  }
}
