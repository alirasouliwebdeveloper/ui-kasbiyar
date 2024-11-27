'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
      >
        {/* Story items */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={`/images/stories/${i + 1}.jpg`}
                  alt={`Story ${i + 1}`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-center mt-1 line-clamp-2">
              نام کسب و کار {i + 1}
            </p>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
