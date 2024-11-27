'use client'

import { Business } from '@/types/business'
import { Card, CardContent } from '@/components/ui/card'
import { Star, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BusinessCardProps {
  business: Business
}

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link href={`/biz/${business.id}`} className="block">
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={business.coverImage || '/images/placeholder-business.jpg'}
            alt={business.name}
            fill
            className="object-cover rounded-t-lg"
          />
          {business.isVerified && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
              تایید شده
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold hover:text-primary">
                {business.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {business.categories.join('، ')} • {business.priceRange}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">
                {business.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({business.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>{business.neighborhood}, {business.city}</span>
          </div>

          <p className="text-sm line-clamp-2">
            {business.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}