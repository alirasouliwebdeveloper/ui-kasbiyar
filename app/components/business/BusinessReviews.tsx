'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Star, ThumbsUp, MessageCircle, Flag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BusinessReviewsProps {
  id: string
}

const mockReviews = [
  {
    id: '1',
    user: {
      name: 'علی تهرانی',
      avatar: '/images/avatars/1.jpg',
      reviewCount: 42,
      location: 'تهران'
    },
    rating: 4,
    date: '۱۴۰۲/۱۲/۱۵',
    content: 'فضای دنج و آرامی داره. قهوه‌هاشون عالیه و کیک‌های خونگی تازه دارن. پرسنل مودب و حرفه‌ای هستن. قیمت‌ها نسبت به کیفیت مناسبه.',
    photos: ['/images/reviews/1.jpg', '/images/reviews/2.jpg'],
    likes: 12,
    comments: 3,
    isUseful: false
  },
  // Add more reviews...
]

export function BusinessReviews({ id }: BusinessReviewsProps) {
  const [sortBy, setSortBy] = useState('newest')
  const [filterBy, setFilterBy] = useState('all')

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">نظرات کاربران</h2>
        
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">جدیدترین</SelectItem>
              <SelectItem value="highest">بیشترین امتیاز</SelectItem>
              <SelectItem value="lowest">کمترین امتیاز</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="فیلتر" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">همه نظرات</SelectItem>
              <SelectItem value="5">۵ ستاره</SelectItem>
              <SelectItem value="4">۴ ستاره</SelectItem>
              <SelectItem value="3">۳ ستاره</SelectItem>
              <SelectItem value="2">۲ ستاره</SelectItem>
              <SelectItem value="1">۱ ستاره</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex gap-4">
              <Link href={`/user/${review.user.name}`}>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.user.avatar} />
                  <AvatarFallback>
                    {review.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Link>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <Link 
                      href={`/user/${review.user.name}`}
                      className="font-semibold hover:underline"
                    >
                      {review.user.name}
                    </Link>
                    <div className="text-sm text-muted-foreground">
                      {review.user.reviewCount} نظر • {review.user.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{review.rating}</span>
                  </div>
                </div>

                <div className="mt-2">
                  <p>{review.content}</p>

                  {review.photos.length > 0 && (
                    <div className="mt-2">
                      {review.photos.map((photo) => (
                        <Image 
                          key={photo}
                          src={photo}
                          alt={`${review.user.name} review photo`}
                          className="w-20 h-20 rounded-md"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                    <span>{review.likes}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <span>{review.comments}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Button variant="ghost" size="icon">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
