 import "./index.css"


export default function App() {

  return (
    <>
    <div className="Title">
      <h1>Chris Leavitt GIS Showcase</h1>
    </div>
      <div className="card">
        <a href="https://byui.maps.arcgis.com/apps/mapviewer/index.html?webmap=d34bc28ab9df48e5bd04a3c872345693" >
          <img src={"./images/byuibuildings.png"} />
          <h2>Byui Buildings</h2>
          </a>
        </div>
      <div className="card" >
        <a href="https://storymaps.arcgis.com/stories/066b6dc5e9964d14aac45158ffd79a2b" >
          <img src="./images/califire.png"  />
          <h2>California Wildfire Zones</h2>
          </a>
      </div>
      <div className="card" >
        <a href="https://storymaps.arcgis.com/stories/007a84d2a3334761b68efd3de2dda106" >
          <img src={"./images/school+zone.jpeg"} />
        <h2>How Many High School Aged People Can’t Attend?</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://byui.maps.arcgis.com/apps/dashboards/3ad3dd1747af4dc9a805317f5d26a1b4" >
          <img src={"./images/favvaca.png"} />
        <h2>Favorite Vacations Dashboard</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://byui.maps.arcgis.com/apps/dashboards/4f9f7a6f3f73476aa90c086044cfe698" >
          <img src={'./images/sporiquad.png'} />
        <h2>Spori Quad</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://byui.maps.arcgis.com/apps/mapviewer/index.html?webmap=e2ac83e9d43f4049828453692e7619f8" >
          <img src={'./images/templesheat.png'} />
        <h2>Temples</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://byui.maps.arcgis.com/apps/instant/3dviewer/index.html?appid=b280bf7c539746ad9ef110a40b9e9215" >
          <img src={"./images/floodings.png"} />
        <h2>Floodings throughout America</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://byui.maps.arcgis.com/apps/dashboards/49be84cac52d4436b6e53c9de7bf6882" >
          <img src={"./images/oceantemp.png"} />
        <h2>Ocean water temperatures</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://byui.maps.arcgis.com/apps/mapviewer/index.html?webmap=f7305df881cc453e962bbb25a0b988d9" >
          <img src={"./images/hail.png"} />
        <h2>Hail Damage in corn fields</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://storymaps.arcgis.com/stories/74c8bacb3515424e803d6fb5320f0966" >
          <img src={"./images/las-vegas-nevada-temple-35604-main.jpg"} />
        <h2>My mission experience</h2>
        </a>
      </div>
      <div className="card" >
        <a href="https://storymaps.arcgis.com/stories/5354f489ac2e429aaf7f3595a9ca5919" >
          <img src={"./images/poptemp.png"} />
        <h2>Does temperature impact the population?</h2>
        </a>
      </div>
      {/* 


Does temperature impact the population?
https://storymaps.arcgis.com/stories/5354f489ac2e429aaf7f3595a9ca5919 */}

    </>
  )
}
