'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    id: '1',
    title: 'بهترین کافه‌های تهران',
    description: 'مجموعه‌ای از دنج‌ترین و محبوب‌ترین کافه‌های شهر',
    image: '/images/collections/cafes.jpg',
    businessCount: 24,
    curator: 'علی محمدی',
    saves: 156
  },
  // Add more collections...
]

export function PopularCollections() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">مجموعه‌های محبوب</h2>
        <Link 
          href="/collections"
          className="text-sm text-primary hover:underline"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link 
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="no-underline"
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="relative h-40">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-3 text-white font-semibold">
                  {collection.title}
                </h3>
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {collection.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span>
                    {collection.businessCount} کسب‌وکار
                  </span>
                  <span className="text-muted-foreground">
                    {collection.saves} ذخیره
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
