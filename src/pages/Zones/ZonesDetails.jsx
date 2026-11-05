import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../helpers/axios-instance";
import projectdev from "../../assets/image/projectdev.svg"
import Title from "../../components/Title"
import Cardspro from "../../components/cardspro"

export default function UnitDetails() {
  const { id } = useParams();
  const [zone, setZone] = useState(null);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const getZoneDetails = async () => {
      try {
        const response = await api.get(`/zone/${id}`);
        setZone(response.data);
        setProject(response.data.projects || []);
      } catch (error) {
        console.log("zone error:", error.response?.status, error.config?.url);
      } finally {
        setLoading(false);
      }
    };
    getZoneDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12 font-bold text-gray-500">Loading...</div>;
  }
  if (!zone) {
    return <div className="text-center py-12 font-bold text-gray-500">project not found</div>;
  }

  return (
    <div>
      <Title Title={"Zone Projects"} />
      <div className="flex justify-center px-4">
        <img src={projectdev} alt="" className="max-w-full h-auto" />
      </div>
      <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto justify-items-center">
          {project.map((p) => (
            <Cardspro
              key={p.id}
              size={p.size}
              units={p.units}
              gym={p.gym}
              image={p.images?.[0]}
              title={p.name_en}
              description={p.description_en}
              onViewDetails={() => navigate(`/project/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
