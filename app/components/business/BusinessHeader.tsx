'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Star, 
  Camera, 
  Share2, 
  Bookmark, 
  MapPin, 
  Phone,
  Globe,
  Clock,
  MessageSquare
} from 'lucide-react'
import Link from 'next/link'

interface BusinessHeaderProps {
  id: string
}

const mockBusiness = {
  name: 'رستوران سنتی شهرزاد',
  rating: 4.5,
  reviewCount: 328,
  priceRange: '$$',
  categories: ['ایرانی', 'سنتی'],
  address: 'خیابان ولیعصر، تهران',
  phone: '021-12345678',
  website: 'www.shahrzad.com',
  hours: 'باز • تا ۲۳:۰۰',
  isVerified: true,
  isClaimed: true
}

export function BusinessHeader({ id }: BusinessHeaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="border-b">
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">
              {mockBusiness.name}
            </h1>

            <div className="flex items-center flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{mockBusiness.rating}</span>
                <Link 
                  href={`/biz/${id}/reviews`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ({mockBusiness.reviewCount} نظر)
                </Link>
              </div>
              
              <span className="text-muted-foreground">•</span>
              
              <span className="text-muted-foreground">
                {mockBusiness.priceRange}
              </span>
              
              <span className="text-muted-foreground">•</span>
              
              <div className="flex flex-wrap gap-1">
                {mockBusiness.categories.map((category, index) => (
                  <Link
                    key={category}
                    href={`/c/${category}`}
                    className="text-primary hover:underline"
                  >
                    {category}
                    {index < mockBusiness.categories.length - 1 && '، '}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{mockBusiness.hours}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="gap-2">
              <MessageSquare className="h-4 w-4" />
              نوشتن نظر
            </Button>

            <Button variant="outline" className="gap-2">
              <Camera className="h-4 w-4" />
              افزودن عکس
            </Button>

            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark 
                className={`h-4 w-4 ${isBookmarked ? 'fill-primary' : ''}`} 
              />
            </Button>

            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{mockBusiness.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>{mockBusiness.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-muted-foreground" />
            <Link 
              href={`https://${mockBusiness.website}`}
              target="_blank"
              className="text-primary hover:underline"
            >
              {mockBusiness.website}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
