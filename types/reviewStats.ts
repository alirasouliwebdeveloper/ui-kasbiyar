export interface ReviewStats {
    totalReviews: number
    averageRating: number
    ratingDistribution: {
      5: number
      4: number
      3: number
      2: number
      1: number
    }
    categories: {
      [key: string]: {
        rating: number
        count: number
      }
    }
    recentTrend: {
      period: string
      rating: number
      count: number
    }[]
  }
  
  export interface ReviewMetrics {
    useful: number
    funny: number
    cool: number
  }
  
  export interface ReviewTrends {
    daily: ReviewTrendPoint[]
    weekly: ReviewTrendPoint[]
    monthly: ReviewTrendPoint[]
  }
  
  interface ReviewTrendPoint {
    date: string
    rating: number
    count: number
  }
  
  export interface CategoryRating {
    name: string
    rating: number
    reviewCount: number
    description?: string
  }
  
  export interface BusinessReviewStats extends ReviewStats {
    responseRate: number
    averageResponseTime: string
    topCategories: CategoryRating[]
    qualityScore: number
    verifiedReviews: number
    photoCount: number
    checkIns: number
  }
  
  export type ReviewPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly'
  export type ReviewSortOption = 'newest' | 'oldest' | 'highest' | 'lowest' | 'relevant'