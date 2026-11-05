import Hero from "../../components/Hero"
import homehero from "../../assets/image/homehero.svg"
import about from "../../assets/image/about.svg"
import map from "../../assets/image/map.png"
import money from "../../assets/icon/money.svg"
import bulding from "../../assets/icon/bulding.svg"
import smile from "../../assets/icon/smile.svg"
import bouns from "../../assets/icon/bouns.svg"
import MasterpiecesSlider from "../../components/MasterpiecesSlider"
import FutureLandSlider from "../../components/FutureLandSlider"
import Title from "../../components/Title"

const stats = [
  { icon: bulding, alt: "Properties", value: "48", label: "Properties Managed" },
  { icon: money, alt: "Investments", value: "90M", label: "Total Managed Investments" },
  { icon: smile, alt: "Clients", value: "500", label: "Happy Clients" },
  { icon: bouns, alt: "Satisfaction", value: "99%", label: "Client Satisfaction" },
]

export default function Home() {
  return (
    <>
      <Hero
        bg={homehero}
        title={"Redefining the Horizon of Modern Luxury Living"}
        btnContant={"Explore"}
        desc={`We believe a home should be a sanctuary of innovation and an extension of your personal brand.
         By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the 
      complexities of the luxury market to find a space that inspires your best work and your deepest rest`}
        icon={true}
        btn={true}
      />

      <Title Title={"Benchmarks of Success"} />

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 sm:gap-6 px-4 sm:px-6 mt-8 sm:mt-14 mb-10 sm:mb-14">
        {stats.map((s) => (
          <div
            key={s.label}
            className="w-full min-h-33.75 border border-gray-300 rounded-lg bg-white flex flex-col items-center justify-around gap-2 p-4 shadow-sm"
          >
            <img src={s.icon} alt={s.alt} />
            <h3 className="text-xl font-bold">{s.value}</h3>
            <p className="text-gray-500 text-xs text-center">{s.label}</p>
          </div>
        ))}
      </div>

      <Title Title={"About Grand Atlas"} />

      <div className=" mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-evenly gap-8 lg:gap-10  sm:px-9">
        <img
          src={about}
          alt="about"
          className="w-full max-w-168.25 mx-auto lg:mx-0 h-auto border-[5px] border-[#8E1616] rounded-t-[100px] mt-4 lg:mt-16.25"
        />
        <div className="w-full lg:max-w-156 lg:mt-22.25">
          <p className=" w-full mb-23 text-base sm:text-lg lg:text-[23px] text-[#554E4E]">
            We began with a singular, uncompromising vision: to bridge the gap between 
            world-class architecture and the individuals who define our global culture. We recognized that for 
            the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, 
            and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in
             the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke,
              'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus
               of our firm, We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
          </p>
          <button className="w-full sm:w-64.5 h-12 mt-6 text-white text-lg sm:text-[20px] font-bold text-center rounded-lg bg-linear-to-r from-[#8E1616] to-[#C34B4B]">
            Know More →
          </button>
        </div>
      </div>

      <Title Title={"Hand-Selected Masterpieces"} />
      <MasterpiecesSlider />

      <Title Title={"Strategic Locations"} />
      <div className="mb-10 sm:mb-14">
        <img src={map} alt="" className="w-full h-64 sm:h-96 lg:h-128 object-cover" />
      </div>

      <Title Title={"Future Landmarks"} />
      <div className="mb-16 sm:mb-36.25 px-4 sm:px-6">
        <FutureLandSlider />
      </div>
    </>
  )
}
