import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from 'lucide-react'

interface CitySearchProps {
  onCitySelect: (city: string) => void;
  onLocationRequest: () => void;
}

export function CitySearch({ onCitySelect, onLocationRequest }: CitySearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="w-full max-w-md flex gap-2">
      <Input
        placeholder="نام شهر خود را وارد کنید..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="text-right"
      />
      <Button onClick={() => onCitySelect(searchQuery)}>
        <Search className="w-4 h-4 ml-2" />
        جستجو
      </Button>
      <Button variant="outline" onClick={onLocationRequest}>
        <MapPin className="w-4 h-4" />
      </Button>
    </div>
  )
}