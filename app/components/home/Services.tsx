'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const services = [
  {
    title: 'نظافت منزل',
    image: '/images/services/cleaning.jpg',
    price: 'از ساعتی ۸۰,۰۰۰ تومان',
    rating: 4.8,
    reviews: 1250
  },
  {
    title: 'تعمیر لوازم خانگی',
    image: '/images/services/repair.jpg',
    price: 'از ۲۰۰,۰۰۰ تومان',
    rating: 4.6,
    reviews: 890
  },
  // Add more services...
]

export function Services() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">خدمات و متخصصین</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {service.price}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">★</span>
                      <span>{service.rating}</span>
                      <span className="text-muted-foreground">
                        ({service.reviews} نظر)
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
