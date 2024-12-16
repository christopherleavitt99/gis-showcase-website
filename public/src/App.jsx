import Buildings from "./cards/Buildings"
import Califire from "./cards/Califire"
import SchoolZone from "./cards/SchoolZone"
import FavVaca from "./cards/favVaca"
import Spori from "./cards/Spori"
import Temples from "./cards/Temples"
import Floodings from "./cards/Floodings"
import OceanTemp from "./cards/OceanTemp"
import Hail from "./cards/Hail"
import Mission from "./cards/Mission"
import PopTemp from "./cards/PopTemp"
import "./index.css"

export default function App() {

  return (
    <>
    <div className="Title">
      <h1>Chris Leavitt GIS Showcase</h1>
    </div>
    <div id="body">
      <Buildings />
      <Califire />
      <SchoolZone />
      <FavVaca />
      <Spori />
      <Temples />
      <Floodings />
      <OceanTemp />
      <Hail />
      <Mission />
      <PopTemp />
      </div>
    </>
  )
}
