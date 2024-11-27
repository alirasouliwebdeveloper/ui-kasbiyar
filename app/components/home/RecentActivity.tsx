'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MessageCircle, ThumbsUp, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { ar } from 'date-fns/locale'

const activities = [
  {
    id: '1',
    type: 'review',
    user: {
      name: 'علی تهرانی',
      avatar: '/images/avatars/1.jpg'
    },
    business: {
      name: 'کافه لیبرا',
      image: '/images/businesses/1.jpg'
    },
    content: 'فضای دنج و آرامی داره. قهوه‌هاشون عالیه...',
    rating: 4,
    likes: 12,
    comments: 3,
    createdAt: new Date('2024-03-10T14:30:00')
  },
  // Add more activities...
]

export function RecentActivity() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">فعالیت‌های اخیر</h2>
      
      <div className="grid gap-4">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={activity.user.avatar} />
                  <AvatarFallback>
                    {activity.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Link 
                      href={`/user/${activity.user.name}`}
                      className="font-semibold hover:underline"
                    >
                      {activity.user.name}
                    </Link>
                    <span className="text-muted-foreground">
                      نظر داد به
                    </span>
                    <Link 
                      href={`/biz/${activity.business.name}`}
                      className="font-semibold hover:underline"
                    >
                      {activity.business.name}
                    </Link>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < activity.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground mr-2">
                      {formatDistanceToNow(activity.createdAt, {
                        locale: ar,
                        addSuffix: true
                      })}
                    </span>
                  </div>

                  <p className="text-sm mb-4">{activity.content}</p>

                  {activity.business.image && (
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={activity.business.image}
                        alt={activity.business.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      <span>مفید ({activity.likes})</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>نظر ({activity.comments})</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-foreground">
                      <ImageIcon className="h-4 w-4" />
                      <span>عکس</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
