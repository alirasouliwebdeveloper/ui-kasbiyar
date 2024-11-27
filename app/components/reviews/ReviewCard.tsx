'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, MessageCircle, Flag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Review } from '@/types/review'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="border rounded-lg p-4">
      <div className="flex gap-4">
        <Link href={`/profile/${review.user.username}`}>
          <Avatar className="h-12 w-12">
            <AvatarImage src={review.user.avatar} />
            <AvatarFallback>{review.user.fullName[0]}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <Link 
                href={`/profile/${review.user.username}`}
                className="font-semibold hover:underline"
              >
                {review.user.fullName}
              </Link>
              <div className="text-sm text-muted-foreground">
                {review.user.reviewCount} نظر • {review.user.location}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {new Date(review.createdAt).toLocaleDateString('fa-IR')}
              </span>
            </div>
          </div>

          <p className="mt-2">{review.content}</p>

          {review.photos && review.photos.length > 0 && (
            <div className="mt-4 flex gap-2">
              {review.photos.map((photo, index) => (
                <div key={index} className="relative h-20 w-20">
                  <Image
                    src={photo}
                    alt={`تصویر ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className={`gap-2 ${isLiked ? 'text-primary' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{review.likes + (isLiked ? 1 : 0)}</span>
            </Button>

            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>{review.comments}</span>
            </Button>

            <Button variant="ghost" size="sm" className="gap-2">
              <Flag className="h-4 w-4" />
              <span>گزارش</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
