'use client'

import { BusinessProduct } from '@/types/product'
import { ProductCard } from './ProductCard'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductsGridProps {
  products: BusinessProduct[]
  onSort?: (value: string) => void
}

export function ProductsGrid({ products, onSort }: ProductsGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Select onValueChange={onSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="مرتب‌سازی" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">جدیدترین</SelectItem>
            <SelectItem value="price-asc">ارزان‌ترین</SelectItem>
            <SelectItem value="price-desc">گران‌ترین</SelectItem>
            <SelectItem value="rating">محبوب‌ترین</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
