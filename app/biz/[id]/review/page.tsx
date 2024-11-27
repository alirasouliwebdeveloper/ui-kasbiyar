'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { WriteReview } from '@/app/components/business/WriteReview'
import { ReviewGuidelines } from '@/app/components/business/ReviewGuidelines'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface WriteReviewPageProps {
  params: {
    id: string
  }
}

const mockBusiness = {
  id: '1',
  name: 'رستوران سنتی شهرزاد',
  image: '/images/businesses/1.jpg',
  categories: ['ایرانی', 'سنتی'],
  address: 'خیابان ولیعصر، تهران'
}

export default function WriteReviewPage({ params }: WriteReviewPageProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitReview = async (reviewData: any) => {
    try {
      setIsSubmitting(true)
      // TODO: Submit review to API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      router.push(`/biz/${params.id}`)
    } catch (error) {
      console.error('Error submitting review:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container px-4 h-16 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <Link href={`/biz/${params.id}`}>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-semibold mr-4">
            نوشتن نظر برای {mockBusiness.name}
          </h1>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <WriteReview 
              business={mockBusiness}
              onSubmit={handleSubmitReview}
              isSubmitting={isSubmitting}
            />
          </div>
          
          <div>
            <ReviewGuidelines />
          </div>
        </div>
      </main>
    </div>
  )
}
