'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const discounts = [
  {
    title: 'رستوران ایرانی سنتی گلستان',
    image: '/images/discounts/restaurant1.jpg',
    discount: '30%',
    originalPrice: '۴۵۰,۰۰۰',
    discountedPrice: '۳۱۵,۰۰۰',
    category: 'رستوران',
    timeLeft: '۲ روز'
  },
  // Add more discounts...
]

import { Button } from "@/components/ui/button"

export function Discounts() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">تخفیف‌های هفته</h2>
        <Button variant="link">مشاهده همه</Button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {discounts.map((discount, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={discount.image}
                      alt={discount.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <Badge 
                      className="absolute top-2 right-2 bg-red-500"
                    >
                      {discount.discount} تخفیف
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{discount.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-muted-foreground line-through">
                        {discount.originalPrice}
                      </span>
                      <span className="text-red-500 font-semibold">
                        {discount.discountedPrice} تومان
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {discount.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {discount.timeLeft} باقی‌مانده
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
