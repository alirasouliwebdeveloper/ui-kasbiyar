export interface BusinessProduct {
  id: string
  businessId: string
  name: string
  description: string
  price: number
  discountedPrice?: number
  images: string[]
  category: string
  tags: string[]
  inStock: boolean
  variants?: ProductVariant[]
  reviews?: ProductReview[]
  stats: {
    rating: number
    reviewCount: number
    orderCount: number
    viewCount: number
  }
}

export interface ProductVariant {
  id: string
  name: string
  options: {
    value: string
    price?: number
    inStock: boolean
  }[]
}

export interface ProductReview {
  id: string
  userId: string
  rating: number
  content: string
  photos?: string[]
  createdAt: string
  likes: number
  verified: boolean
}
