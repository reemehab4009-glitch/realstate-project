import grandatles from "../assets/image/grandatles.svg"
import fbred from "../assets/icon/fbred.svg"
import lin from "../assets/icon/lin.svg"
import twit from "../assets/icon/twit.svg"
import { Link } from "react-router-dom"

const linkClass = "mb-1.5 text-[#0A142F]"

export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB] px-6 pt-10 pb-6">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        <div>
          <img src={grandatles} alt="grandatles" className="size-24 sm:size-37.75" />
          <p className="text-[#0A142F] mb-3">+1 (7635) 547-12-97</p>
          <p className="text-[#0A142F] break-all">support@lift.agency</p>
        </div>

        <div>
          <h2 className="font-bold mb-3.75 text-[#0A142F]">Quick Links</h2>
          <ul>
            <li className={linkClass}><Link to="/">Home</Link></li>
            <li className={linkClass}><Link to="/">Inventories</Link></li>
            <li className={linkClass}><Link to="/Zones">Zones</Link></li>
            <li className={linkClass}><Link to="/Developers">Developers</Link></li>
            <li className={linkClass}><Link to="/Contactus">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3.75 text-[#0A142F]">About</h2>
          <ul>
            <li className={linkClass}><a href="#">Help center</a></li>
            <li className={linkClass}><a href="#">Terms of service</a></li>
            <li className={linkClass}><a href="#">Legal</a></li>
            <li className={linkClass}><a href="#">Privacy policy</a></li>
            <li className={linkClass}><a href="#">Status</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 sm:mb-8.5 text-[#0A142F]">Get in touch</h2>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Get product updates"
              className="min-w-0 flex-1 border-solid border-2 border-[#8E1616] rounded-s-md h-11.5 px-3"
            />
            <button className="bg-[#8E1616] rounded-e-md w-12.5 shrink-0 text-white">→</button>
          </form>
          <div className="flex gap-5 mt-5">
            <img src={fbred} alt="Facebook" className="size-8.75 border-2 border-[#8E1616] p-2 rounded-full" />
            <img src={twit} alt="Twitter" className="size-8.75 border-2 border-[#8E1616] p-2 rounded-full" />
            <img src={lin} alt="LinkedIn" className="size-8.75 border-2 border-[#8E1616] p-2 rounded-full" />
          </div>
        </div>
      </div>

      <hr className="max-w-268.25 mx-auto border-0 h-px bg-[#0A142F] mt-10 mb-6" />
      <p className="text-center text-sm">© 2020 Lift Media. All rights reserved</p>
    </footer>
  )
}
