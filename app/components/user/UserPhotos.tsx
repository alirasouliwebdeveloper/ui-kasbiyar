'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ThumbsUp, Flag } from 'lucide-react'
import Image from 'next/image'
import { getUserPhotos, likePhoto, markPhotoHelpful } from '@/app/utils/photos'
import { Photo } from '@/types/photo'

interface UserPhotosProps {
  id: string
}

export function UserPhotos({ id }: UserPhotosProps) {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  useEffect(() => {
    const loadPhotos = async () => {
      const userPhotos = await getUserPhotos(id)
      setPhotos(userPhotos)
      setIsLoading(false)
    }
    loadPhotos()
  }, [id])

  const handleLikePhoto = async (photoId: string) => {
    await likePhoto(photoId)
    // Optimistically update UI or refetch photos
  }

  const handleMarkHelpful = async (photoId: string) => {
    await markPhotoHelpful(photoId)
    // Optimistically update UI or refetch photos
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return
    
    if (direction === 'prev') {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1)
    } else {
      setSelectedPhoto(selectedPhoto === photos.length - 1 ? 0 : selectedPhoto + 1)
    }
  }

  if (isLoading) {
    return <div>در حال بارگذاری تصاویر...</div>
  }

  return (
    <Card>
      <CardContent className="p-6">
        {photos.length === 0 ? (
          <p className="text-center text-muted-foreground">هنوز تصویری آپلود نشده است</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="relative aspect-square cursor-pointer group"
                onClick={() => setSelectedPhoto(index)}
              >
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-sm line-clamp-2">{photo.caption}</p>
                    <p className="text-xs mt-1">{photo.business.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Dialog 
          open={selectedPhoto !== null} 
          onOpenChange={() => setSelectedPhoto(null)}
        >
          <DialogContent className="max-w-4xl">
            {selectedPhoto !== null && (
              <div className="relative h-[600px]">
                <Image
                  src={photos[selectedPhoto].url}
                  alt={photos[selectedPhoto].caption}
                  fill
                  className="object-contain"
                />
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white"
                  onClick={() => navigatePhoto('prev')}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                  onClick={() => navigatePhoto('next')}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <p className="mb-1">{photos[selectedPhoto].caption}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">
                      عکس از {photos[selectedPhoto].user.name} • {photos[selectedPhoto].date}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-white"
                        onClick={() => handleLikePhoto(photos[selectedPhoto].id)}
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {photos[selectedPhoto].metadata.likes}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-white"
                        onClick={() => handleMarkHelpful(photos[selectedPhoto].id)}
                      >
                        مفید • {photos[selectedPhoto].metadata.helpful}
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
