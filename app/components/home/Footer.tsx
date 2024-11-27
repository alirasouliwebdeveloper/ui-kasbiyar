import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted mt-8">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">درباره کسبیار</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  فرصت‌های شغلی
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-muted-foreground hover:text-foreground">
                  اخبار
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">کسب و کارها</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/biz" className="text-sm text-muted-foreground hover:text-foreground">
                  ثبت کسب و کار
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-sm text-muted-foreground hover:text-foreground">
                  تبلیغات
                </Link>
              </li>
              <li>
                <Link href="/biz/support" className="text-sm text-muted-foreground hover:text-foreground">
                  پشتیبانی کسب و کارها
                </Link>
              </li>
            </ul>
          </div>

          {/* Add more sections */}
        </div>

        <div className="border-t mt-8 pt-8">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} کسبیار. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  )
}
