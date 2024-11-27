interface PopularCitiesProps {
    onCitySelect: (city: string) => void;
  }
  
  export function PopularCities({ onCitySelect }: PopularCitiesProps) {
    const cities = [
      'تهران', 'مشهد', 'کرج', 'شیراز', 'اصفهان',
      'اهواز', 'تبریز', 'کرمانشاه', 'قم', 'رشت'
    ]
  
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {cities.map(city => (
          <button
            key={city}
            onClick={() => onCitySelect(city)}
            className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            {city}
          </button>
        ))}
      </div>
    )
  }