import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      <a href="https://instagram.com/kasbiyar" target="_blank" rel="noopener noreferrer" 
         className="text-muted-foreground hover:text-primary">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="https://twitter.com/kasbiyar" target="_blank" rel="noopener noreferrer"
         className="text-muted-foreground hover:text-primary">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com/company/kasbiyar" target="_blank" rel="noopener noreferrer"
         className="text-muted-foreground hover:text-primary">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="https://youtube.com/kasbiyar" target="_blank" rel="noopener noreferrer"
         className="text-muted-foreground hover:text-primary">
        <Youtube className="w-6 h-6" />
      </a>
    </div>
  )
}