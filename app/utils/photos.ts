import { Photo } from '@/types/photo'

// Mock data for development
const mockPhotos: Photo[] = [
  {
    id: '1',
    url: '/images/photos/restaurant-1.jpg',
    caption: 'فضای داخلی رستوران با دکوراسیون سنتی',
    date: '۱۴۰۲/۱۲/۱۵',
    user: {
      id: '1',
      name: 'علی تهرانی',
      avatar: '/images/avatars/1.jpg',
      reviewCount: 42,
      level: 'نخبه محلی'
    },
    business: {
      id: '101',
      name: 'رستوران سنتی شهرزاد'
    },
    metadata: {
      width: 1920,
      height: 1080,
      likes: 24,
      helpful: 12,
      isVerified: true,
      tags: ['دکوراسیون', 'فضای داخلی', 'سنتی']
    }
  },
  {
    id: '2',
    url: '/images/photos/food-1.jpg',
    caption: 'چلو کباب کوبیده مخصوص',
    date: '۱۴۰۲/۱۲/۱۴',
    user: {
      id: '2',
      name: 'مریم احمدی',
      avatar: '/images/avatars/2.jpg',
      reviewCount: 156,
      level: 'عکاس برتر'
    },
    business: {
      id: '101',
      name: 'رستوران سنتی شهرزاد'
    },
    metadata: {
      width: 1080,
      height: 1080,
      likes: 45,
      helpful: 18,
      isVerified: true,
      tags: ['غذا', 'کباب', 'ایرانی']
    }
  }
]

export async function getUserPhotos(userId: string): Promise<Photo[]> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filter photos by user ID in production
      resolve(mockPhotos)
    }, 800)
  })
}

export async function getBusinessPhotos(businessId: string): Promise<Photo[]> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filter photos by business ID in production
      resolve(mockPhotos)
    }, 800)
  })
}

export async function uploadPhoto(data: {
  file: File
  caption: string
  businessId: string
  tags?: string[]
}): Promise<Photo> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(),
        url: URL.createObjectURL(data.file),
        caption: data.caption,
        date: new Date().toLocaleDateString('fa-IR'),
        user: {
          id: '1', // Current user ID
          name: 'کاربر فعلی',
          avatar: '/images/avatars/default.jpg',
          reviewCount: 1,
          level: 'تازه وارد'
        },
        business: {
          id: data.businessId,
          name: 'نام کسب و کار'
        },
        metadata: {
          width: 1080,
          height: 1080,
          likes: 0,
          helpful: 0,
          isVerified: false,
          tags: data.tags || []
        }
      })
    }, 1000)
  })
}

export async function likePhoto(photoId: string): Promise<void> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

export async function markPhotoHelpful(photoId: string): Promise<void> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

export async function reportPhoto(photoId: string, reason: string): Promise<void> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

export async function deletePhoto(photoId: string): Promise<void> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(resolve, 800)
  })
}

export async function updatePhotoMetadata(
  photoId: string,
  data: {
    caption?: string
    tags?: string[]
  }
): Promise<Photo> {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const photo = mockPhotos[0]
      resolve({
        ...photo,
        caption: data.caption || photo.caption,
        metadata: {
          ...photo.metadata,
          tags: data.tags || photo.metadata.tags
        }
      })
    }, 800)
  })
}