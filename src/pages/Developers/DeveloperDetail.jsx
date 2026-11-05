import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../helpers/axios-instance";
import projectdev from "../../assets/image/projectdev.svg"
import Title from "../../components/Title"
import Card from "../../components/cards"

export default function UnitDetails() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const getUnitDetails = async () => {
      try {
        const response = await api.get(`/developer/${id}`);
        const proj = await api.get(`/developer/${id}/projects`);
        setDeveloper(response.data);
        setProject(Array.isArray(proj.data) ? proj.data : []);
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
  if (!developer) {
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
            <Card
              key={p.id}
              image={Array.isArray(p.images) ? p.images[0] : p.images}
              size={p.size}
              bedrooms={p.bedrooms}
              bathrooms={p.bathrooms}
              title={p.name_en}
              price={p.price}
              description={p.description_en}
              onViewDetails={() => navigate(`/project/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
