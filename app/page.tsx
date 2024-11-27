'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/app/components/landing/Header'
import { CitySearch } from '@/app/components/landing/CitySearch'
import { PopularCities } from '@/app/components/landing/PopularCities'
import { Partners } from '@/app/components/landing/Partners'
import { SocialLinks } from '@/app/components/landing/SocialLinks'

export default function LandingPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check stored location after component is mounted
    const storedLocation = window.localStorage.getItem('userCity')
    if (storedLocation) {
      router.push(`/${storedLocation}`)
    }
  }, [router])

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null
  }

  const handleCitySelect = (city: string) => {
    window.localStorage.setItem('userCity', city)
    router.push(`/${city}`)
  }

  const handleLocationRequest = () => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `/api/geocode?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
            )
            const { city } = await response.json()
            handleCitySelect(city)
          } catch (error) {
            console.error('Error getting location:', error)
          }
        },
        (error) => {
          console.error('Geolocation error:', error)
        }
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
        <Header />
        
        <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-4xl font-bold text-foreground">
            کسبیار، سکوی کسب و کار های محلی
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته بندی ها دنبالش بگرد. 
            اگه هم می‌خوای چیزی بفروشی، با ثبت کسب و کارت می‌تونی بسپاریش به کسبیار.
          </p>
          
          <CitySearch 
            onCitySelect={handleCitySelect}
            onLocationRequest={handleLocationRequest}
          />
          
          <PopularCities onCitySelect={handleCitySelect} />
        </div>

        <div className="mt-auto">
          <Partners />
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}