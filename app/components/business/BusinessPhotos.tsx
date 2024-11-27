'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BusinessPhotosProps {
  id: string
}

const mockPhotos = [
  {
    id: '1',
    url: '/images/businesses/1/1.jpg',
    caption: 'نمای داخلی رستوران',
    user: 'علی تهرانی',
    date: '۱۴۰۲/۱۲/۱۵'
  },
  // Add more photos...
]

export function BusinessPhotos({ id }: BusinessPhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const openPhotoViewer = (index: number) => {
    setSelectedPhoto(index)
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return
    
    if (direction === 'prev') {
      setSelectedPhoto(selectedPhoto === 0 ? mockPhotos.length - 1 : selectedPhoto - 1)
    } else {
      setSelectedPhoto(selectedPhoto === mockPhotos.length - 1 ? 0 : selectedPhoto + 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-1 h-[400px]">
        {mockPhotos.slice(0, 4).map((photo, index) => (
          <div 
            key={photo.id}
            className={`relative cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => openPhotoViewer(index)}
          >
            <Image
              src={photo.url}
              alt={photo.caption}
              fill
              className="object-cover"
            />
            {index === 3 && mockPhotos.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  +{mockPhotos.length - 4}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog 
        open={selectedPhoto !== null} 
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-4xl">
          {selectedPhoto !== null && (
            <div className="relative h-[600px]">
              <Image
                src={mockPhotos[selectedPhoto].url}
                alt={mockPhotos[selectedPhoto].caption}
                fill
                className="object-contain"
              />
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={() => navigatePhoto('prev')}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => navigatePhoto('next')}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="mb-1">{mockPhotos[selectedPhoto].caption}</p>
                <p className="text-sm text-gray-300">
                  عکس از {mockPhotos[selectedPhoto].user} • {mockPhotos[selectedPhoto].date}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
