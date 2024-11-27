'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ReviewCard } from '@/app/components/reviews/ReviewCard'
import { getUserReviews } from '@/app/utils/reviews'
import { Review } from '@/types/review'
import { LoadingState } from '@/app/components/shared/LoadingState'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface UserReviewsProps {
  id: string
}

export function UserReviews({ id }: UserReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState('recent')

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const userReviews = await getUserReviews(id, sortBy)
        setReviews(userReviews)
      } catch (error) {
        console.error('Error loading reviews:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadReviews()
  }, [id, sortBy])

  if (isLoading) {
    return <LoadingState text="در حال بارگذاری نظرات..." />
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">جدیدترین</SelectItem>
            <SelectItem value="rating">امتیاز</SelectItem>
            <SelectItem value="helpful">مفیدترین</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {reviews.length === 0 ? (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">هنوز نظری ثبت نشده است</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}
