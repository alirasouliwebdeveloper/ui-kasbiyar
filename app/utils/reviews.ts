import { Review } from '@/types/review'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export async function getUserReviews(
  userId: string,
  sortBy: string = 'recent'
): Promise<Review[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/users/${userId}/reviews?sort=${sortBy}`
    )
    if (!response.ok) throw new Error('Failed to fetch reviews')
    return await response.json()
  } catch (error) {
    console.error('Error fetching user reviews:', error)
    return []
  }
}
