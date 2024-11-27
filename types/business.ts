import { BusinessProduct } from '@/types/product'

export interface Business {
  id: string
  name: string
  description: string
  rating: number
  reviewCount: number
  priceRange: string
  categories: string[]
  address: string
  neighborhood: string
  city: string
  coordinates: [number, number]
  phone: string
  website: string
  hours: BusinessHours[]
  amenities: BusinessAmenity[]
  photos: BusinessPhoto[]
  isVerified: boolean
  isClaimed: boolean
  coverImage?: string
  features?: string[]
  tags?: string[]
  products?: BusinessProduct[]
  healthScore?: number
  virtualTour?: {
    modelUrl: string
    previewImage: string
  }
  stats?: {
    viewCount: number
    bookmarkCount: number
    orderCount?: number
  }
}

export interface BusinessHours {
  day: string
  open: string
  close: string
  isOpen?: boolean
}

export interface BusinessAmenity {
  icon: any // Replace with proper Lucide icon type
  label: string
}

export interface BusinessPhoto {
  id: string
  url: string
  caption: string
  user: string
  date: string
}

export interface BusinessReview {
  id: string
  user: {
    name: string
    avatar: string
    reviewCount: number
    location: string
  }
  rating: number
  date: string
  content: string
  photos: string[]
  likes: number
  comments: number
  isUseful: boolean
}
