import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  try {
    // Call a geocoding service (e.g., Google Maps, Mapbox)
    // For now, returning mock data
    return NextResponse.json({ city: 'تهران' })
  } catch (error) {
    return NextResponse.error()
  }
}