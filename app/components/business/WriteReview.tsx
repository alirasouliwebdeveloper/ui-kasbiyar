'use client'

import { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { 
  Star,
  ImagePlus,
  Loader2,
  X
} from 'lucide-react'
import Image from 'next/image'

interface WriteReviewProps {
  business: {
    id: string
    name: string
    image: string
    categories: string[]
    address: string
  }
  onSubmit: (data: any) => Promise<void>
  isSubmitting: boolean
}

export function WriteReview({ business, onSubmit, isSubmitting }: WriteReviewProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [review, setReview] = useState('')
  const [photos, setPhotos] = useState<File[]>([])
  const [photosPreviews, setPhotosPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    const newPhotos = Array.from(files)
    const newPreviews = newPhotos.map(file => URL.createObjectURL(file))
    
    setPhotos(prev => [...prev, ...newPhotos])
    setPhotosPreviews(prev => [...prev, ...newPreviews])
  }

  const removePhoto = (index: number) => {
    URL.revokeObjectURL(photosPreviews[index])
    setPhotos(prev => prev.filter((_, i) => i !== index))
    setPhotosPreviews(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (rating === 0) return

    const formData = new FormData()
    formData.append('businessId', business.id)
    formData.append('rating', rating.toString())
    formData.append('review', review)
    photos.forEach(photo => formData.append('photos', photo))

    await onSubmit(formData)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative h-20 w-20 flex-shrink-0">
            <Image
              src={business.image}
              alt={business.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="font-semibold mb-1">{business.name}</h2>
            <div className="text-sm text-muted-foreground">
              {business.categories.join('، ')}
            </div>
            <div className="text-sm text-muted-foreground">
              {business.address}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHoveredRating(index + 1)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-1"
            >
              <Star 
                className={`h-8 w-8 ${
                  index < (hoveredRating || rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
          ))}
        </div>

        <Textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="نظر خود را بنویسید..."
          className="min-h-[200px] mb-4"
        />

        <div className="mb-6">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            accept="image/*"
            multiple
            className="hidden"
          />

          <div className="flex flex-wrap gap-4 mb-4">
            {photosPreviews.map((preview, index) => (
              <div 
                key={index}
                className="relative h-24 w-24"
              >
                <Image
                  src={preview}
                  alt={`تصویر ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6"
                  onClick={() => removePhoto(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}

            {photosPreviews.length < 5 && (
              <Button
                variant="outline"
                className="h-24 w-24"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImagePlus className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>

        <Button 
          className="w-full"
          disabled={rating === 0 || isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              در حال ارسال...
            </>
          ) : (
            'ثبت نظر'
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
