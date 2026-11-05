
import Home from './pages/Home/Home'
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Developers from './pages/Developers/Developers'
import DeveloperDetail from './pages/Developers/DeveloperDetail'
import Zones from './pages/Zones/Zones'
import ProjectDetail from './pages/Zones/ProjectDetail'
import ZonesDetail from './pages/Zones/ZonesDetails'
import Units from './pages/Units/Units'
import Contactus from './pages/Contactus/Contactus'
import Layout from './components/layout/layout'
import UnitDetails from './pages/Units/UnitDetails'


function App() {
  

  return (
   <>
   <Routes>

<Route element={<Layout/>}>
<Route path ="/" element={<Home/>} />
<Route path ="/home" element={<Home/>} />
<Route path ="/developers" element={<Developers/>} />
<Route path ="/developer/:id" element={<DeveloperDetail/>} />
<Route path ="/project/:id" element={<ProjectDetail/>} />
<Route path ="/zones" element={<Zones/>} />
<Route path ="/zone/:id" element={<ZonesDetail/>} />
<Route path ="/units" element={<Units/>} />
<Route path ="/unit/:id" element={<UnitDetails/>} />
<Route path ="/contactus" element={<Contactus/>} />
</Route>

   </Routes>

   </>
  )
}

export default App
