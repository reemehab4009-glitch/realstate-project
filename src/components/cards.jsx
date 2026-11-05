import bathroom from '../assets/icon/bathroom.svg'
import bedroom from '../assets/icon/bedroom.svg'
import hs from '../assets/icon/hs.svg'

export default function Cards({
  image,
  status = 'Available',
  size,
  bedrooms,
  bathrooms,
  title,
  price,
  description,
  onViewDetails,
}) {
  return (
    <div className="bg-white rounded-2xl w-full max-w-sm h-full shadow-md overflow-hidden border border-gray-100 flex flex-col">
    
      <div className="relative w-full aspect-4/3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 right-3 bg-[#21E008] text-white text-xs font-semibold px-3 py-1 rounded shadow">
          {status}
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-[#A18E77]/40 py-3 border-b border-gray-100 text-[#A18E77] text-[11px] sm:text-xs">
        <div className="flex items-center justify-center gap-1 px-1 flex-wrap text-center">
          <img src={bedroom} alt="" className="w-4 h-4 shrink-0" />
          <span>{bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center justify-center gap-1 px-1 flex-wrap text-center">
          <img src={bathroom} alt="" className="w-4 h-4 shrink-0" />
          <span>{bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center justify-center gap-1 px-1 flex-wrap text-center">
          <img src={hs} alt="" className="w-4 h-4 shrink-0" />
          <span>{size}</span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-serif text-base sm:text-lg font-semibold text-[#8E1616] min-w-0 wrap-break-words">
            {title}
          </h3>
          <span className="font-bold text-[#A18E77] text-sm sm:text-base whitespace-nowrap">
            {price}
          </span>
        </div>

        <p className="text-[#847D7D] text-xs leading-relaxed line-clamp-3">
          {description}
        </p>

        <button
          onClick={onViewDetails}
          className="mt-auto w-full border border-[#8E1616] text-[#8E1616] font-medium py-2 rounded-lg text-sm hover:bg-[#8E1616] hover:text-white transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
