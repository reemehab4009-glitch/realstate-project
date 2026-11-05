import fb from "../assets/icon/fb.svg"
import x from "../assets/icon/x.svg"
import insta from "../assets/icon/insta.svg"
import ticktock from "../assets/icon/ticktock.svg"

export default function Hero({ btn, title, desc, btnContant, icon, bg }) {
  return (
    <div className="relative">
      <div
        className="min-h-screen px-5 py-24 flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl max-w-140 w-full mb-6 md:mb-8 leading-tight md:leading-16">
          {title}
        </h1>
        <p className="max-w-247 w-full font-bold mb-8 md:mb-12 text-base md:text-xl text-[#CEC7C7]">
          {desc}
        </p>
        {btn && (
          <button className="w-full max-w-64.5 h-12 text-lg md:text-xl text-white font-bold text-center rounded-lg bg-linear-to-r from-[#8E1616] to-[#C34B4B]">
            {btnContant}
          </button>
        )}
      </div>

      {icon && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-row gap-4
                        md:bottom-25 md:left-0 md:translate-x-0 md:flex-col md:gap-5 md:px-9">
          {[[fb, "fb"], [x, "x"], [insta, "insta"], [ticktock, "ticktock"]].map(([src, alt]) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="size-9 md:size-11 border-[3px] border-white p-2 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  )
}
