'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Navigation2 } from 'lucide-react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface BusinessMapProps {
  id: string
}

const mockBusiness = {
  name: 'رستوران سنتی شهرزاد',
  address: 'خیابان ولیعصر، تهران',
  coordinates: [51.4115, 35.7119] as [number, number],
  neighborhood: 'ولیعصر'
}

// Replace with your Mapbox token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

export function BusinessMap({ id }: BusinessMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: mockBusiness.coordinates,
      zoom: 15,
      language: 'fa'
    })

    // Add marker
    new mapboxgl.Marker()
      .setLngLat(mockBusiness.coordinates)
      .addTo(map.current)

    // Cleanup
    return () => {
      map.current?.remove()
    }
  }, [])

  const handleDirections = () => {
    const [lng, lat] = mockBusiness.coordinates
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      '_blank'
    )
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">موقعیت در نقشه</h3>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDirections}
            className="gap-2"
          >
            <Navigation2 className="h-4 w-4" />
            مسیریابی
          </Button>
        </div>

        <div 
          ref={mapContainer} 
          className="h-[300px] rounded-lg mb-4"
        />

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="font-medium">{mockBusiness.address}</div>
              <div className="text-sm text-muted-foreground">
                محله {mockBusiness.neighborhood}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
