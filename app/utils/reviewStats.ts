import { Review, ReviewStats, ReviewMetrics, BusinessReviewStats } from '@/types/review'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export async function getBusinessReviewStats(
  businessId: string
): Promise<BusinessReviewStats> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/businesses/${businessId}/review-stats`
    )
    if (!response.ok) throw new Error('Failed to fetch review stats')
    return await response.json()
  } catch (error) {
    console.error('Error fetching review stats:', error)
    return {
      totalReviews: 0,
      averageRating: 0,
      ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      categories: {},
      recentTrend: [],
      responseRate: 0,
      averageResponseTime: '',
      topCategories: [],
      qualityScore: 0,
      verifiedReviews: 0,
      photoCount: 0,
      checkIns: 0
    }
  }
}

export function calculateAverageRating(reviews: Review[]): number {
  if (!reviews.length) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Number((sum / reviews.length).toFixed(1))
}

export function generateRatingDistribution(reviews: Review[]) {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach(review => {
    distribution[review.rating as keyof typeof distribution]++
  })
  return distribution
}
