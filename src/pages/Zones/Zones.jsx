import Hero from "../../components/Hero"
import zoneshero from "../../assets/image/zoneshero.svg"
import { useState, useEffect } from 'react'
import api from "../../helpers/axios-instance";
import { useNavigate } from "react-router-dom";

export default function Zones() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const getZones = async () => {
      try {
        const response = await api.get("/zone")
        setZones(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getZones()
  }, [])

  if (loading) {
    return <div className="text-center py-12 font-bold text-gray-500">Loading properties...</div>;
  }

  return (
    <>
      <Hero
        bg={zoneshero}
        title={"Destinations Defined by Distinction"}
        btnContant={"Explore"}
        desc={`From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center,
             explore our guide to the neighborhoods that mirror your ambition and your aesthetic.`}
        icon={true}
        btn={false}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
        {zones.map((z) => (
          <button
            key={z.id}
            type="button"
            onClick={() => navigate(`/zone/${z.id}`)}
            className="block w-full rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={z.images?.[0]}
              alt={z.name_en || "zone"}
              className="w-full aspect-3/2 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </>
  )
}
