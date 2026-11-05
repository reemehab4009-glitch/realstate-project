import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/axios-instance";

export default function UnitDetails() {
  const { id } = useParams();
  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const getUnitDetails = async () => {
      try {
        const response = await api.get(`/unit/${id}`);
        setUnit(response.data);
        setActiveImage(0);
      } catch (error) {
        console.log("Error fetching unit:", error);
      } finally {
        setLoading(false);
      }
    };
    getUnitDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12 font-bold text-gray-500">Loading...</div>;
  }
  if (!unit) {
    return <div className="text-center py-12 font-bold text-gray-500">Unit not found</div>;
  }

  const images = Array.isArray(unit.images) ? unit.images : [];

  const glance = [
    ["Plot size ca.", unit.plot_size && `${unit.plot_size} m²`],
    ["Living area ca.", unit.living_area && `${unit.living_area} m²`],
    ["Bedrooms", unit.bedrooms],
    ["Bathrooms", unit.bathrooms],
    ["Living rooms", unit.living_rooms],
    ["WC", unit.wc],
    ["External parking", unit.parking],
  ].filter(([, v]) => v !== undefined && v !== null && v !== "");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4">
      {/* Main image */}
      {images.length > 0 && (
        <img
          src={images[activeImage]}
          alt={unit.title_en}
          className="w-full aspect-4/3 sm:aspect-video lg:aspect-auto lg:h-105 object-cover rounded-xl"
        />
      )}

      {images.length > 1 && (
        <div className="flex gap-2 sm:grid sm:grid-cols-5 sm:gap-3 overflow-x-auto sm:overflow-visible pb-1">
          {images.slice(0, 5).map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(i)}
              className={`shrink-0 w-24 sm:w-auto rounded-lg overflow-hidden border-2 transition ${
                i === activeImage ? "border-[#8e1616]" : "border-transparent"
              }`}
            >
              <img
                src={src}
                alt={`${unit.title_en} ${i + 1}`}
                className="w-full h-16 sm:h-20 lg:h-24 object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 pt-2 sm:pt-4">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#8e1616] wrap-break-words">
            {unit.title_en}
          </h1>
          <p className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm mt-1">
           
            <span className="wrap-break-words">
              {unit.location}
            </span>
          </p>
        </div>
        <div className="text-xl sm:text-2xl font-bold text-[#A18E77] sm:whitespace-nowrap">
          {Number(unit.price).toLocaleString("en-US")} EGP
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-2 sm:pt-4">
        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-3">At a glance</h2>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 text-sm text-gray-600 list-disc pl-5">
            {glance.map(([label, value]) => (
              <li key={label}>
                {label}: {value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold mb-3">Overview</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            {unit.description_en}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
            <a
              href={`https://wa.me/${unit.whatsapp || ""}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-3 rounded-md transition"
            >
              Contact via WhatsApp
            </a>
            <a
              href={`tel:${unit.phone || ""}`}
              className="flex-1 text-center border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium py-3 rounded-md transition"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}