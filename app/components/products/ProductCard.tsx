'use client'

import { BusinessProduct } from '@/types/product'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface ProductCardProps {
  product: BusinessProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountedPrice && product.discountedPrice < product.price
  
  return (
    <Link href={`/biz/${product.businessId}/products/${product.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="relative h-48">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
            />
            {hasDiscount && (
              <Badge className="absolute top-2 right-2 bg-red-500">
                {Math.round(((product.price - (product.discountedPrice || 0)) / product.price) * 100)}% تخفیف
              </Badge>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              {hasDiscount ? (
                <>
                  <span className="text-muted-foreground line-through">
                    {product.price.toLocaleString('fa-IR')}
                  </span>
                  <span className="text-red-500 font-semibold">
                    {product.discountedPrice?.toLocaleString('fa-IR')} تومان
                  </span>
                </>
              ) : (
                <span className="font-semibold">
                  {product.price.toLocaleString('fa-IR')} تومان
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">
                {product.category}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{product.stats.rating}</span>
                <span className="text-muted-foreground">
                  ({product.stats.reviewCount})
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
