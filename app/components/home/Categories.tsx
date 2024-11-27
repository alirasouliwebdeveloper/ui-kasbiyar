'use client'

import { Button } from "@/components/ui/button"
import { 
  Utensils, Home, Car, Scissors, 
  Dumbbell, ShoppingBag, Coffee, Book 
} from 'lucide-react'
import Link from 'next/link'

const categories = [
  { 
    name: 'رستوران‌ها', 
    icon: Utensils, 
    color: 'text-red-500',
    href: '/c/restaurants',
    count: '۱۲,۳۴۵' 
  },
  { 
    name: 'خدمات منزل', 
    icon: Home,
    color: 'text-blue-500',
    href: '/c/home-services' 
  },
  { 
    name: 'خودرو', 
    icon: Car,
    color: 'text-green-500',
    href: '/c/auto' 
  },
  { 
    name: 'آرایشگاه‌ها', 
    icon: Scissors,
    color: 'text-purple-500',
    href: '/c/beauty' 
  },
  { 
    name: 'باشگاه‌ها', 
    icon: Dumbbell,
    color: 'text-orange-500',
    href: '/c/fitness' 
  },
  { 
    name: 'فروشگاه‌ها', 
    icon: ShoppingBag,
    color: 'text-pink-500',
    href: '/c/shopping' 
  },
  { 
    name: 'کافه‌ها', 
    icon: Coffee,
    color: 'text-yellow-500',
    href: '/c/cafes' 
  },
  { 
    name: 'آموزشگاه‌ها', 
    icon: Book,
    color: 'text-indigo-500',
    href: '/c/education' 
  },
]

export function Categories() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">دسته‌بندی‌های محبوب</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={category.href}
            className="no-underline"
          >
            <Button
              variant="outline"
              className="w-full h-auto py-6 flex flex-col gap-2"
            >
              <category.icon className={`w-8 h-8 ${category.color}`} />
              <span>{category.name}</span>
              {category.count && (
                <span className="text-sm text-muted-foreground">
                  {category.count} کسب و کار
                </span>
              )}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  )
}
