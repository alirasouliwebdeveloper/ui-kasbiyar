'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageGridProps {
  images: {
    id: string
    url: string
    caption?: string
  }[]
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <Dialog key={image.id}>
          <DialogTrigger asChild>
            <div 
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.caption || ''}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-video">
              <Image
                src={images[selectedImage || 0].url}
                alt={images[selectedImage || 0].caption || ''}
                fill
                className="object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            {images[selectedImage || 0].caption && (
              <p className="text-center mt-2">
                {images[selectedImage || 0].caption}
              </p>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
