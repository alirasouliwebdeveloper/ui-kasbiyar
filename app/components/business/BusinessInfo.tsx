'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Clock, 
  Phone, 
  Globe, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  DollarSign,
  Wifi,
  CreditCard,
  Car,
  Utensils
} from 'lucide-react'
import Link from 'next/link'

interface BusinessInfoProps {
  id: string
}

const mockBusiness = {
  hours: [
    { day: 'شنبه', open: '11:00', close: '23:00' },
    { day: 'یکشنبه', open: '11:00', close: '23:00' },
    { day: 'دوشنبه', open: '11:00', close: '23:00' },
    { day: 'سه‌شنبه', open: '11:00', close: '23:00' },
    { day: 'چهارشنبه', open: '11:00', close: '23:00' },
    { day: 'پنج‌شنبه', open: '11:00', close: '00:00' },
    { day: 'جمعه', open: '12:00', close: '00:00' },
  ],
  amenities: [
    { icon: Wifi, label: 'اینترنت رایگان' },
    { icon: CreditCard, label: 'پرداخت کارتی' },
    { icon: Car, label: 'پارکینگ' },
    { icon: Utensils, label: 'سرو صبحانه' },
  ],
  description: 'رستوران سنتی شهرزاد با بیش از ۲۰ سال سابقه در ارائه غذاهای اصیل ایرانی، محیطی دنج و آرام را برای مهمانان خود فراهم کرده است. منوی متنوع ما شامل انواع کباب‌ها، خورشت‌ها و دسرهای سنتی می‌باشد...',
  priceRange: '۱۵۰,۰۰۰ تا ۴۵۰,۰۰۰ تومان',
  website: 'www.shahrzad.com',
  phone: '021-12345678',
  address: 'خیابان ولیعصر، تهران'
}

export function BusinessInfo({ id }: BusinessInfoProps) {
  const [showAllHours, setShowAllHours] = useState(false)

  return (
    <section className="mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">درباره کسب و کار</h2>
          <p className="text-muted-foreground mb-4">
            {mockBusiness.description}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <span>محدوده قیمت: {mockBusiness.priceRange}</span>
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

            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>{mockBusiness.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>{mockBusiness.address}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">ساعات کاری</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowAllHours(!showAllHours)}
            >
              {showAllHours ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="space-y-2">
            {mockBusiness.hours
              .slice(0, showAllHours ? undefined : 3)
              .map((schedule) => (
                <div key={schedule.day} className="flex items-center justify-between">
                  <span>{schedule.day}</span>
                  <span>{schedule.open} - {schedule.close}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
