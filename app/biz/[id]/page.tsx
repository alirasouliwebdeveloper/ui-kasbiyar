import { BusinessHeader } from '@/app/components/business/BusinessHeader'
import { BusinessPhotos } from '@/app/components/business/BusinessPhotos'
import { BusinessInfo } from '@/app/components/business/BusinessInfo'
import { BusinessReviews } from '@/app/components/business/BusinessReviews'
import { BusinessMap } from '@/app/components/business/BusinessMap'
import { BusinessSimilar } from '@/app/components/business/BusinessSimilar'

interface BusinessPageProps {
  params: {
    id: string
  }
}

export default function BusinessPage({ params }: BusinessPageProps) {
  return (
    <div>
      <BusinessHeader id={params.id} />
      <BusinessPhotos id={params.id} />
      
      <div className="container px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <BusinessInfo id={params.id} />
            <BusinessReviews id={params.id} />
          </div>
          
          <div className="space-y-8">
            <BusinessMap id={params.id} />
            <BusinessSimilar id={params.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
