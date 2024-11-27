import { Categories } from '@/app/components/home/Categories'
import { RecentActivity } from '@/app/components/home/RecentActivity'
import { Header } from '@/app/components/home/Header'
import { Stories } from '@/app/components/home/Stories'
import { Services } from '@/app/components/home/Services'
import { Discounts } from '@/app/components/home/Discounts'
import { CityRestaurants } from '@/app/components/home/CityRestaurants'
import { Footer } from '@/app/components/home/Footer'
import { AppPromotion } from '@/app/components/home/AppPromotion'
import { Banner } from '../components/home/Banner'
import { Button } from '@/components/ui/button'

interface HomePageProps {
  params: {
    city: string
  }
}

export default function HomePage({ params }: HomePageProps) {
  return (
    <>
      <Header />
      
      {/* Mobile View */}
      <div className="md:hidden">
        <Stories />
        <Categories />
        <Services />
        <AppPromotion />
        <Discounts />
        <CityRestaurants city={params.city} />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <Banner />
        <Stories />
        <Discounts />
        <RecentActivity />
        <Categories />
      </div>

      <Footer />
      
      {/* Mobile App Sticky Promotion */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 md:hidden">
        <p className="text-sm text-center">
          استفاده از اپلیکیشن کسبیار راحت‌تر است
        </p>
        <Button className="w-full mt-2">
          دریافت اپلیکیشن
        </Button>
      </div>
    </>
  )
}
