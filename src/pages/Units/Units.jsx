import Cards from '../../components/cards';
import Hero from "../../components/Hero"
import unitshero from "../../assets/image/unitshero.svg"
import { useState, useEffect } from 'react'
import api from "../../helpers/axios-instance";
import { useNavigate } from 'react-router-dom';



export default function Units() {
  const [Units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [developer, setDeveloper] = useState("");
  const [zone, setZone] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const getUnits = async () => {
      try {
        const response = await api.get("/unit")
        setUnits(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getUnits()
  }, [])

  const filteredUnits = Units.filter((unit) => {
    return (
      (search === "" || unit.title_en?.toLowerCase().includes(search.toLowerCase())) &&
      (bedrooms === "" || unit.bedrooms == bedrooms) &&
      (developer === "" || unit.developerName_en === developer) &&
      (zone === "" || unit.zoneName_en === zone) &&
      (project === "" || unit.projectName_en === project) &&
      (status === "" || unit.status === status) &&
      (priceRange === "" || unit.price <= Number(priceRange))
    );
  });

  if (loading) {
    return <div className="text-center py-12 font-bold text-gray-500">Loading properties...</div>;
  }

  return (
    <>
      <Hero
        bg={unitshero}
        title={"Where Visionary Design Meets Daily Life"}
        btnContant={"Explore"}
        desc={`Experience a collection of residences designed as personal sanctuaries.
         Each unit balances expansive city views with artisanal textures and quiet, 
         light-filled interiors to create the ultimate retreat from the world`}
        icon={true}
        btn={false}
      />

      {/* Filter bar: 1 col mobile, 2 tablet, 4 laptop, 7 desktop. gap-px on a colored
          background draws the dividers at every size. */}
      <div className="px-4 sm:px-6 pt-5">
        <div className="max-w-341.5 mx-auto border border-[#8e1616] rounded-lg shadow-sm overflow-hidden bg-[#8e1616] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-px">
          <div className='sm:col-span-2 xl:col-span-1 bg-white px-3 flex items-center'>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-h-12 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className='bg-white px-3 flex items-center'>
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className='w-full h-full min-h-12 outline-none text-sm text-gray-600 bg-transparent'>
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="12">10+ Bedrooms</option>
            </select>
          </div>

          <div className='bg-white px-3 flex items-center'>
            <select value={developer} onChange={(e) => setDeveloper(e.target.value)} className='w-full h-full min-h-12 outline-none text-sm text-gray-600 bg-transparent'>
              <option value="">Developer</option>
              <option value="elmorshedy">elmorshedy</option>
            </select>
          </div>

          <div className='bg-white px-3 flex items-center'>
            <select value={zone} onChange={(e) => setZone(e.target.value)} className='w-full h-full min-h-12 outline-none text-sm text-gray-600 bg-transparent'>
              <option value="">Zone</option>
              <option value="Alexandria">alexandria</option>
              <option value="Cairo">cairo</option>
            </select>
          </div>

          <div className='bg-white px-3 flex items-center'>
            <select value={project} onChange={(e) => setProject(e.target.value)} className='w-full h-full min-h-12 outline-none text-sm text-gray-600 bg-transparent'>
              <option value="">Projects</option>
              <option value="Hayah">hayah</option>
              <option value="Hayah resident">hayah resident</option>
              <option value="hills">hills</option>
            </select>
          </div>

          <div className='bg-white px-3 flex items-center'>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className='w-full h-full min-h-12 outline-none text-sm text-gray-600 bg-transparent'>
              <option value="">Status</option>
              <option value="AVAILABLE">Available</option>
              <option value="SOLD">Sold</option>
            </select>
          </div>

          <div className='bg-white px-3 flex items-center'>
            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className='w-full h-full min-h-12 outline-none text-sm text-gray-600 bg-transparent'>
              <option value="">Price Range</option>
              <option value="1000000">Up to $1,000,000</option>
              <option value="5000000">Up to $5,000,000</option>
              <option value="20000000">Up to $20,000,000</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4">
        <button
          onClick={() => {}}
          className="w-full max-w-md h-12 sm:h-14.25 text-white text-base font-bold text-center rounded-sm bg-linear-to-r from-[#8E1616] to-[#C34B4B]"
        >
          Search
        </button>
      </div>

      <div className="p-4 sm:p-8 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto justify-items-center">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <Cards
                key={unit.id}
                image={unit.images?.[0]}
                status={unit.status}
                size={unit.size}
                bedrooms={unit.bedrooms}
                bathrooms={unit.bathrooms}
                title={unit.title_en}
                price={unit.price}
                description={unit.description_en}
                onViewDetails={() => navigate(`/unit/${unit.id}`)}
              />
            ))
          ) : (
            <p className="col-span-full text-center py-12 text-gray-500 font-medium">
              No units found
            </p>
          )}
        </div>
      </div>
    </>
  );
}
