'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { PlayCircle, PauseCircle } from 'lucide-react'

const banners = [
  {
    id: 1,
    image: '/images/banners/1.jpg',
    title: 'بهترین رستوران‌های ایرانی',
    link: '/c/restaurants/iranian',
    business: 'رستوران سنتی شهرزاد',
    photographer: 'علی محمدی'
  },
  // Add more banners...
]

export function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentBanner((prev) => 
              prev === banners.length - 1 ? 0 : prev + 1
            )
            return 0
          }
          return prev + 1
        })
      }, 50) // 5 seconds total duration
    }

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div className="relative h-[500px] w-full">
      <Image
        src={banners[currentBanner].image}
        alt={banners[currentBanner].title}
        fill
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          {banners[currentBanner].title}
        </h2>
        
        <Button variant="default" size="lg">
          مشاهده
        </Button>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1 bg-white/30 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-50"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseCircle className="h-6 w-6" />
            ) : (
              <PlayCircle className="h-6 w-6" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-2 text-white/80 text-sm">
          <span>{banners[currentBanner].business}</span>
          <span>عکاس: {banners[currentBanner].photographer}</span>
        </div>
      </div>
    </div>
  )
}
