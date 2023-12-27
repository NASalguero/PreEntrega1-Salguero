import "./Front.css"

import bannerBB from "../../assets/bad-boy-banner.webp"
import bannerEV from "../../assets/eros-versace-banner.jpg"
import bannerTI from "../../assets/the-icon-hero-img.jpg"

const Front = () => {
  return (
    <div className="front">
        <h2 className="fronth2">Bienvenido al mundo Bad Boy de Carolina Herrera</h2>
        <img className="frontImg" src={bannerBB} alt="bad boy" />
        <h2 className="fronth2">Te presentamos The Icon, la nueva fragancia de Antonio Banderas</h2>
        <img className="frontImg" src={bannerTI} alt="the icon" />
        <h2 className="fronth2">Conviértete en un Dios del Olimpo con Eros de Versace</h2>
        <img className="frontImg" src={bannerEV} alt="eros versace" />
    </div>
  )
}

export default Front