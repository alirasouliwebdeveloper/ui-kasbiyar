'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'
import Link from 'next/link'

interface CityRestaurantsProps {
  city: string
}

const restaurants = [
  {
    id: '1',
    name: 'رستوران سنتی شهرزاد',
    image: '/images/restaurants/1.jpg',
    rating: 4.5,
    reviewCount: 328,
    priceRange: '$$',
    categories: ['ایرانی', 'سنتی'],
    address: 'خیابان ولیعصر، تهران',
    isOpen: true,
    deliveryTime: '30-45',
    distance: 2.1
  },
  // Add more restaurants...
]

export function CityRestaurants({ city }: CityRestaurantsProps) {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">رستوران‌های برتر {city}</h2>
        <Link href="/c/restaurants" className="text-primary hover:underline">
          مشاهده همه
        </Link>
      </div>

      <div className="grid gap-4">
        {restaurants.map((restaurant) => (
          <Link 
            key={restaurant.id} 
            href={`/biz/${restaurant.id}`}
            className="no-underline"
          >
            <Card>
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{restaurant.name}</h3>
                    
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{restaurant.rating}</span>
                      <span className="text-muted-foreground">
                        ({restaurant.reviewCount})
                      </span>
                      <span className="text-muted-foreground mx-1">•</span>
                      <span className="text-muted-foreground">
                        {restaurant.priceRange}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {restaurant.categories.map((category) => (
                        <Badge key={category} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <span>{restaurant.address}</span>
                      <span className="mx-1">•</span>
                      <span>{restaurant.distance} کیلومتر</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
