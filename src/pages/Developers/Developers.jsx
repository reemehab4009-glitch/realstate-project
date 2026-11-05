import Hero from "../../components/Hero"
import devhero from "../../assets/image/devhero.svg"
import { useState, useEffect } from 'react'
import api from "../../helpers/axios-instance";
import Carddev from "../../components/Carddev";
import { useNavigate } from "react-router-dom";

export default function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const getDevelopers = async () => {
      try {
        const response = await api.get("/developer")
        setDevelopers(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getDevelopers()
  }, [])

  if (loading) {
    return <div className="text-center py-12 font-bold text-gray-500">Loading properties...</div>;
  }

  return (
    <>
      <Hero
        bg={devhero}
        title={"Defining the Future Skyline."}
        btnContant={"Explore"}
        desc={`Great developments require more than just capital; they require a 
          narrative. We provide the elite marketing and specialized brokerage
           services needed to position your landmark projects in front of the world’s most
            discerning buyers.`}
        icon={true}
        btn={false}
      />

      <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto justify-items-center">
          {developers.map((developer) => (
            <Carddev
              key={developer.id}
              image={developer.images?.[0]}
              title={developer.name_en}
              onViewDetails={() => navigate(`/developer/${developer.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
