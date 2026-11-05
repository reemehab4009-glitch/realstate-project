import { useNavigate } from "react-router-dom";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../helpers/axios-instance";
import { useEffect, useState } from "react";

const Slider = SlickSlider.default || SlickSlider;

const getSlides = () => {
  const w = window.innerWidth;
  return w < 640 ? 1 : w < 1024 ? 2 : 3;
};

export default function MasterpiecesSlider() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await api.get("/projects/all-projects");
        setProjects(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("projects error:", error.response?.status, error.config?.url);
      }
    };
    getProjects();
  }, []);

  const [slides, setSlides] = useState(getSlides);

  useEffect(() => {
    const onResize = () => setSlides(getSlides());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const count = projects.length;

  const settings = {
    dots: true,
    arrows: false,
    infinite: count > slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="pb-10 px-1 sm:px-0">
      <Slider key={slides} {...settings}>
        {projects.map((project, index) => (
          <div key={project.id} className="px-2 sm:px-3">
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <img
                src={Array.isArray(project.images) ? project.images[0] : project.images}
                alt={project.name_en}
                className="w-full aspect-4/3 sm:aspect-auto sm:h-56 object-cover rounded-2xl shadow"
              />
              <p className="mt-3 font-serif font-bold text-sm wrap-break-words">
                {String(index + 1).padStart(2, "0")}. {project.name_en}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
