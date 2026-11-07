export default function CardsDev({
  image,
  status = 'new cairo',
  title,
  onViewDetails,
}) {
  return (
    <div className="bg-white rounded-2xl w-full max-w-sm h-full shadow-md overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative w-full aspect-4/3">
        <img src={image} alt={title} className="w-full h-75 object-cover" />
        <span className="absolute top-3 right-3 bg-[#8E1616] text-white text-xs font-semibold px-3 py-1 rounded shadow">
          {status}
        </span>
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-[#8E1616] wrap-break-words">
          {title}
        </h3>
        <button
          onClick={onViewDetails}
          className="mt-auto w-full border border-[#8E1616] text-[#8E1616] font-medium py-2 rounded-lg text-sm hover:bg-[#8E1616] hover:text-white transition-colors"
        >
          View projects
        </button>
      </div>
    </div>
  )
}
