import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full flex flex-col items-center gap-6">
      <div className="h-[50px] w-[150px] relative">
        {/* Temporarily comment out Image until you have a logo */}
        {/* <Image
          src="/images/logo.png"
          alt="کسبیار"
          width={150}
          height={50}
          priority
        /> */}
        <div className="w-full h-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
          Logo
        </div>
      </div>
      
      <nav className="flex gap-6">
        <Link href="/business/register" className="text-muted-foreground hover:text-primary">
          ثبت کسب و کار
        </Link>
        <Link href="/about" className="text-muted-foreground hover:text-primary">
          درباره کسبیار
        </Link>
        <Link href="/app" className="text-muted-foreground hover:text-primary">
          دریافت اپلیکیشن
        </Link>
        <Link href="/blog" className="text-muted-foreground hover:text-primary">
          اتاق خبر
        </Link>
        <Link href="/support" className="text-muted-foreground hover:text-primary">
          پشتیبانی
        </Link>
      </nav>
    </header>
  )
}