'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const featuredBusinesses = [
  {
    id: '1',
    name: 'رستوران سنتی گلستان',
    category: 'رستوران',
    rating: 4.5,
    reviewCount: 128,
    image: '/images/businesses/restaurant1.jpg',
    location: 'تهران، ونک',
    description: 'غذاهای سنتی ایرانی با فضای دنج و سنتی',
    isVerified: true,
    isPremium: true,
    priceRange: '$$'
  },
  // Add more businesses...
]

export function FeaturedBusinesses() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">کسب‌وکارهای برتر</h2>
        <Link 
          href="/featured"
          className="text-sm text-primary hover:underline"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredBusinesses.map((business) => (
          <Link 
            key={business.id} 
            href={`/biz/${business.id}`}
            className="no-underline"
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
                {business.isPremium && (
                  <Badge 
                    className="absolute top-2 right-2"
                    variant="secondary"
                  >
                    ویژه
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold hover:text-primary">
                      {business.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {business.category} • {business.priceRange}
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
                  <span>{business.location}</span>
                </div>

                <p className="text-sm line-clamp-2">
                  {business.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
