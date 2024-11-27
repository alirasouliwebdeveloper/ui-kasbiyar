'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface BusinessSimilarProps {
  id: string
}

const mockSimilar = [
  {
    id: '2',
    name: 'رستوران دیزی',
    image: '/images/businesses/2.jpg',
    rating: 4.2,
    reviewCount: 156,
    priceRange: '$$',
    categories: ['ایرانی', 'سنتی'],
    distance: 0.8
  },
  {
    id: '3',
    name: 'کافه رستوران ایوان',
    image: '/images/businesses/3.jpg',
    rating: 4.4,
    reviewCount: 223,
    priceRange: '$$$',
    categories: ['ایرانی', 'کافه'],
    distance: 1.2
  },
  {
    id: '4',
    name: 'رستوران نایب',
    image: '/images/businesses/4.jpg',
    rating: 4.3,
    reviewCount: 189,
    priceRange: '$$',
    categories: ['ایرانی', 'کباب'],
    distance: 1.5
  }
]

export function BusinessSimilar({ id }: BusinessSimilarProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4">کسب و کارهای مشابه</h3>
        
        <div className="space-y-4">
          {mockSimilar.map((business) => (
            <Link 
              key={business.id}
              href={`/biz/${business.id}`}
              className="block hover:bg-muted rounded-lg transition-colors"
            >
              <div className="flex gap-3 p-2">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">
                    {business.name}
                  </h4>

                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{business.rating}</span>
                    <span className="text-muted-foreground">
                      ({business.reviewCount})
                    </span>
                    <span className="text-muted-foreground mx-1">•</span>
                    <span className="text-muted-foreground">
                      {business.priceRange}
                    </span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <span>{business.categories.join('، ')}</span>
                    <span className="mx-1">•</span>
                    <span>{business.distance} کیلومتر</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
