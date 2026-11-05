export default function Title({ Title }) {
  return (
    <div className="px-4 text-center">
      <h1 className="font-semibold mb-1 mt-6 sm:mt-10 text-2xl sm:text-[32px] wrap-break-words">
        {Title}
      </h1>
      <hr className="mx-auto w-24 sm:w-41 h-1.5 rounded-xs bg-[#C34B4B] border-0 mb-5 sm:mb-7.25" />
    </div>
  )
}
