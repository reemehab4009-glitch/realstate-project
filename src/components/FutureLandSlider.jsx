import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../helpers/axios-instance";

const Slider = SlickSlider.default || SlickSlider;

const getSlides = () => {
  const w = window.innerWidth;
  return w < 640 ? 1 : w < 1024 ? 2 : 3;
};

export default function FutureLandSlider() {
  const [developers, setDevelopers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDevelopers = async () => {
      try {
        const response = await api.get("/developer");
        setDevelopers(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("developers error:", error.response?.status, error.config?.url);
      }
    };
    getDevelopers();
  }, []);

  const [slides, setSlides] = useState(getSlides);

  useEffect(() => {
    const onResize = () => setSlides(getSlides());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const count = developers.length;

  const settings = {
    dots: true,
    arrows: false,
    infinite: count > slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };





  const pick = (v) => (Array.isArray(v) ? v[0] : v);

  return (
    <div className="pb-10 px-1 sm:px-0">
      <Slider key={slides} {...settings}>
        {developers.map((developer) => (
          <div key={developer.id} className="px-2 sm:px-3">
            <div className="bg-white rounded-2xl shadow p-3">
              <div className="relative">
                <img
                  src={pick(developer.images)}
                  alt={developer.name_en}
                  className="w-full aspect-4/3 sm:aspect-auto sm:h-56 object-cover rounded-2xl"
                />
                  <span className="absolute top-3 right-3 bg-[#8E1616] text-white text-xs font-semibold px-3 py-1 rounded shadow">
                  new cairo
                  </span>
              </div>

              <div className="flex items-center gap-3 mt-4 min-h-12">
                {developer.logo && (
                  <img src={developer.logo} alt="" className="h-10 w-10 shrink-0 object-contain" />
                )}
                <p className="font-bold min-w-0 wrap-break-words">{developer.name_en}</p>
              </div>

              <button
                onClick={() => navigate(`/developer/${developer.id}`)}
                className="w-full mt-4 border border-[#8E1616] text-[#8E1616]  rounded-lg py-2 hover:bg-[#8E1616] font-medium text-sm hover:text-white transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
