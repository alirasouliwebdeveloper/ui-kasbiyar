export interface Photo {
    id: string
    url: string
    caption: string
    date: string
    user: {
      id: string
      name: string
      avatar: string
      reviewCount: number
      level: string
    }
    business: {
      id: string
      name: string
    }
    metadata: {
      width: number
      height: number
      likes: number
      helpful: number
      isVerified: boolean
      tags: string[]
    }
  }

// Optional: Add related types if needed
export interface PhotoUploadData {
  file: File
  caption: string
  businessId: string
  tags?: string[]
}

export interface PhotoUpdateData {
  caption?: string
  tags?: string[]
}

export type PhotoSortOption = 'newest' | 'popular' | 'helpful'