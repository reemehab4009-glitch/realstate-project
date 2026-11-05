import Hero from "../../components/Hero"
import ushero from "../../assets/image/ushero.svg"
import loc from "../../assets/icon/loc.svg"
import phone from "../../assets/icon/phone.svg"
import mobile from "../../assets/icon/mobile.svg"
import mail from "../../assets/icon/mail.svg"
import fbred from "../../assets/icon/fbred.svg"
import xred from "../../assets/icon/xred.svg"
import instared from "../../assets/icon/instared.svg"
import ticktockred from "../../assets/icon/ticktockred.svg"

const contacts = [
  { icon: loc, alt: "Location", text: "Minusio, Lake Maggiore, Switzerland — ref. LOC1771" },
  { icon: mail, alt: "Email", text: "Grand .Atlas.Support@gmail.com" },
  { icon: mobile, alt: "Mobile", text: "01247859622" },
  { icon: phone, alt: "Phone", text: "035987124" },
]

const socials = [
  { icon: fbred, alt: "Facebook" },
  { icon: xred, alt: "X" },
  { icon: instared, alt: "Instagram" },
  { icon: ticktockred, alt: "TikTok" },
]

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]

const fieldClass =
  "w-full bg-[#F7F7F7] rounded-lg border border-[#CEC7C7] mt-2 px-4 text-base sm:text-lg"
const labelClass = "mt-4 font-medium text-black text-lg sm:text-[20px]"

export default function Contactus() {
  return (
    <>
      <Hero
        bg={ushero}
        title={"Connected Globally. Available Locally."}
        btnContant={"Explore"}
        desc={`With experts positioned in the world’s most influential markets, 
                we are never more than a conversation away.
                 Reach out to our team to experience a new standard of real estate advisory.`}
        icon={false}
        btn={false}
      />

      <div className=" mx-auto flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12 px-4 sm:px-9.25 py-10 lg:py-20">
       
        <div className="lg:flex-1 min-w-0">
          <h1 className="font-semibold text-2xl sm:text-[32px] mb-5">Contact Information</h1>
          <p className="text-base sm:text-[20px] max-w-168.25">
            Our team is available for private consultations and off-market inquiries. We operate
            with absolute discretion to ensure your real estate objectives are met with precision.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {contacts.map((c) => (
              <div key={c.alt} className="flex items-start gap-2">
                <img src={c.icon} alt={c.alt} className="shrink-0 mt-1" />
                <p className="text-base sm:text-[20px] text-[#8E1616] wrap-break-words min-w-0">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <h2 className="font-semibold text-xl sm:text-[22px] mb-5 text-[#847D7D]">
              Follow us on social media
            </h2>
            <div className="flex flex-wrap gap-3.25">
              {socials.map((s) => (
                <img
                  key={s.alt}
                  src={s.icon}
                  alt={s.alt}
                  className="size-9 border-[3px] border-[#8E1616] p-1 rounded-full"
                />
              ))}
            </div>
          </div>

          <div className="mt-9">
            <h2 className="font-semibold text-xl sm:text-[22px] mb-4 text-[#847D7D]">
              Working Hours
            </h2>
            <div className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10 gap-y-2 max-w-md">
              {days.map((d) => (
                <div key={d} className="contents">
                  <p className="text-base sm:text-[20px] text-[#8E1616]">{d} :</p>
                  <p className="text-base sm:text-[20px] text-[#847D7D]">9:00AM - 5:00 PM</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-168.25 lg:shrink-0 self-start border border-[#E2E2E2] shadow-xl/10 rounded-3xl px-5 sm:px-7.5 py-6">
          <h2 className="font-semibold mt-2 text-2xl sm:text-[26px]">Send us a message</h2>
          <form className="flex flex-col mt-4" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input id="name" type="text" className={`${fieldClass} h-12 sm:h-14.5`} />

            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" type="email" className={`${fieldClass} h-12 sm:h-14.5`} />

            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input id="phone" type="tel" className={`${fieldClass} h-12 sm:h-14.5`} />

            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea id="message" rows={5} className={`${fieldClass} py-3 min-h-35 resize-y`} />

            <button
              type="submit"
              className="w-full h-12.25 mt-8 text-white text-base font-normal text-center rounded-lg bg-linear-to-r from-[#8E1616] to-[#C34B4B]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
